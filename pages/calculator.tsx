import { NextPage } from "next";
import Page from "layout/Page";
import { Container, Grid } from "@mui/material";
import CategoryShort from "components/CategoryShort";
import ShortContent from "components/ShortContent";
import InfoBlock from "components/InfoBlock";
import Related from "components/Related";
import { wrapper } from "stores";
import { client, getStrapiURL } from "lib/api";
import calculatorQuery from "queries/calculator";
import { changeDescription, changeTitle } from "stores/slices/dataSlices";
import Calculator from "components/Calculator";
import { changeImage } from "stores/slices/metaSlices";


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {

    const { data } = await client.query({
      query: calculatorQuery,
      variables: {
        locale: ctx.locale,
      },
    });

    const calculator = data.calculator.data?.attributes;

    const embed = ctx.query?.embed || ''

    store.dispatch(changeTitle(calculator.meta?.title || calculator.title));
    store.dispatch(changeDescription(calculator.meta?.description || ""));
    store.dispatch(changeImage(calculator.meta?.image.data ? getStrapiURL(calculator.meta.image.data.attributes.url) : ""));

    return {
      props: {
        calculator,
        embed
      },
    };
  }
);

interface ICalculator {
  calculator: any
  embed: string
}

const CalculatorPage: NextPage<ICalculator> = ({calculator, embed}) => {

  if(embed.length) {
    return (
      <Calculator embed={embed} />
    )
  }

  console.log(calculator.commonlyUsed)

  return (
    <Page>
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <CategoryShort removeHover staticBlock data={{title: calculator.title, description: calculator.description}} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Calculator />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <ShortContent title={calculator.tutorial.title} description={calculator.tutorial.description} />
      </Container>
      <Container>
        <Grid container spacing={5}>
          {!!calculator.tutorialItem.length && calculator.tutorialItem.map((item: any, idx: number) => <Grid key={idx} item xs={12} md={4}>
            <InfoBlock icon={item.image.data.attributes.url} title={item.title} description={item.description} />
          </Grid>)}
        </Grid>
      </Container>
      <Container>
        <div style={{marginBottom: 70}}>
          <ShortContent title={"Na co se CBD nejčestěji používá"} />
          {!!calculator.commonlyUsed.length && calculator.commonlyUsed.map((item: any, idx: number) => <Related key={idx} image={item.image} reverse={!!(idx % 2)} title={item.title} description={item.description} background={item.background} />)}
        </div>
      </Container>
      <Container id="content">
        <InfoBlock alert title={calculator.alert.title} description={calculator.alert.description} />
      </Container>
    </Page>
  );
};

export default CalculatorPage;
