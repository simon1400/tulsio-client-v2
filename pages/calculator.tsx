import { NextPage } from "next";
import Page from "layout/Page";
import { Container, Grid } from "@mui/material";
import CategoryShort from "components/CategoryShort";
import ShortContent from "components/ShortContent";
import InfoBlock from "components/InfoBlock";
import Related from "components/Related";
import { wrapper } from "stores";
import { client } from "lib/api";
import calculatorQuery from "queries/calculator";
import { changeTitle } from "stores/slices/dataSlices";
import Calculator from "components/Calculator";


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {

    const { data } = await client.query({
      query: calculatorQuery,
      variables: {
        locale: ctx.locale,
      },
    });

    const calculator = data.calculator.data?.attributes;

    const embed = ctx.query?.embed === 'calculator'


    store.dispatch(changeTitle("Calculator"));
    // store.dispatch(changeDescription(""));

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
  embed: boolean
}



const CalculatorPage: NextPage<ICalculator> = ({calculator, embed}) => {

  if(embed) {
    return (
      <Calculator />
    )
  }

  return (
    <Page>
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <CategoryShort staticBlock data={{title: calculator.title, description: calculator.description}} />
          </Grid>
          <Grid item xs={6}>
            <Calculator />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <ShortContent title={calculator.tutorial.title} description={calculator.tutorial.description} />
      </Container>
      <Container>
        <Grid container spacing={5}>
          {!!calculator.tutorialItem.length && calculator.tutorialItem.map((item: any, idx: number) => <Grid key={idx} item xs={4}>
            <InfoBlock title={item.title} description={item.description} />
          </Grid>)}
        </Grid>
      </Container>
      <Container>
        <ShortContent title={"Na co se CBD nejčestěji používá"} />
        {!!calculator.commonlyUsed.length && calculator.commonlyUsed.map((item: any, idx: number) => <Related key={idx} reverse={!!(idx % 2)} title={item.title} description={item.description} />)}
      </Container>
    </Page>
  );
};

export default CalculatorPage;
