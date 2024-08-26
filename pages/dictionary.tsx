import { NextPage } from "next";
import DictionaryHits from "../components/DictionaryHits";
import DictionaryHead from "../components/DictionaryHead";
import { client } from "../lib/api";
import { getDictionaryPage, getAllDictionaries } from "../queries/dictionary";
import alphabets from "data/alphabets";
import numbers from "data/numbers";
import Page from "layout/Page";
import { changeDescription, changeTitle } from "stores/slices/dataSlices";
import { wrapper } from "stores";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({locale}) => {
    const { data: dataPage } = await client.query({ query: getDictionaryPage, variables: {locale: locale}});
    const { data: allDictionaries } = await client.query({
      query: getAllDictionaries,
      variables: {
        locale: locale
      }
    });

    const transfromDictionaries = allDictionaries.dictionaries.data.map(
      (item: any) => item.attributes
    );

    const page = dataPage.dictionaryPage.data.attributes;

    store.dispatch(changeTitle(page.meta?.title || page.title));
    store.dispatch(changeDescription(page.meta?.description || ""));

    const result: string[] = [];
    alphabets.map((symbol) => {
      const filtered = transfromDictionaries.filter((f: any) =>
        f.title.toUpperCase().startsWith(symbol)
      );
      if (filtered.length) {
        result.push(symbol);
      }
    });
    for (var i = 0; i < numbers.length; i++) {
      const filtered = transfromDictionaries.filter((f: any) =>
        f.title.startsWith(numbers[i])
      );
      if (filtered.length) {
        result.push("0-9");
        break;
      }
    }

    const resultData: any = {};
    alphabets.map((symbol) => {
      const filtered = transfromDictionaries.filter((f: any) =>
        f.title.toUpperCase().startsWith(symbol)
      );
      if (filtered.length) {
        filtered.sort((a: any, b: any) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : b.title.toLowerCase() > a.title.toLowerCase() ? -1 : 0
        );
        resultData[symbol] = filtered;
      }
    });
    numbers.map((number) => {
      const filtered = transfromDictionaries.filter((f: any) =>
        f.title.startsWith(number)
      );
      if (filtered.length) {
        filtered.sort((a: any, b: any) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : b.title.toLowerCase() > a.title.toLowerCase() ? -1 : 0
        );
        resultData["0-9"] = filtered;
      }
    });

    return {
      props: {
        dictionaryPage: page,
        dictionaries: resultData,
        nav: result,
      },
    };
  }
);

interface IDictionaryPage {
  title: string;
}

// interface IDictionaries {
//   title: string;
// }

interface IDictionary {
  dictionaryPage: IDictionaryPage;
  dictionaries: any;
  nav: any;
}

const Dictionary: NextPage<IDictionary> = ({
  dictionaryPage,
  dictionaries,
  nav,
}) => {

  return (
    <Page>
      <DictionaryHead title={dictionaryPage.title} data={nav} />
      <DictionaryHits data={dictionaries} />
    </Page>
  );
};

export default Dictionary;
