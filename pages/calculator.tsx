import { NextPage } from "next";
import Page from "layout/Page";
import { wrapper } from "stores";
import PageHead from "components/PageHead";
import { Container, Grid, Tab, Typography } from "@mui/material";
import { CalculatorS, TabsS } from "styles/calculator";
import { SyntheticEvent, useState } from "react";
import Range from "components/Range";
import BlockValue from "components/BlockValue";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    return {
      props: {},
    };
  }
);

const Calculator: NextPage = () => {
  const [who, setWho] = useState("human");
  const [state, setState] = useState("looking");
  const [lavel, setLavel] = useState<number | number[]>(10);
  const [kg, setKg] = useState<number | number[]>(80);

  const handleLavel = (e: Event, newValue: number | number[]) => {
    setLavel(newValue);
  };

  const handleKg = (e: Event, newValue: number | number[]) => {
    setKg(newValue);
  };

  const handleWho = (e: SyntheticEvent, newValue: string) => {
    setWho(newValue);
  };
  
  const handleState = (e: SyntheticEvent, newValue: string) => {
    setState(newValue);
  };

  return (
    <Page>
      <PageHead title="Kalkulačka CBD" />
      <Container maxWidth="md">
        <CalculatorS>
          <TabsS value={who} onChange={handleWho}>
            <Tab value="human" label="Člověk" disableRipple />
            <Tab value="dog" label="Pes" disableRipple />
            <Tab value="cat" label="Kočka" disableRipple />
          </TabsS>
          <Range
            label="Úroveň problému"
            min={20}
            defaultValue={20}
            max={100}
            step={20}
            value={lavel}
            handle={handleLavel}
          />
          <Range label="Vaše hmotnost" defaultValue={80} min={5} max={150} step={5} value={kg} kg handle={handleKg} />
          <TabsS value={state} onChange={handleState}>
            <Tab value="looking" label="Hledám CBD" disableRipple />
            <Tab value="has" label="Už mám CBD" disableRipple />
          </TabsS>
          <Grid container marginBottom={15} sx={{textAlign: "center"}}>
            <Grid item xs={1}  md={4}>
              <Typography variant="h4" marginBottom={5}>Roztok</Typography>
              <BlockValue value={`10 %`}/>
            </Grid>
            <Grid item xs={1} md={4}>
              <Typography variant="h4" marginBottom={5}>Obsah CBD</Typography>
              <BlockValue value={`10 mg`}/>
            </Grid>
            <Grid item xs={1} md={4}>
              <Typography variant="h4" marginBottom={5}>Objem láhvičky</Typography>
              <BlockValue value={`100 ml`}/>
            </Grid>
          </Grid>
          <Typography variant="h2">Vaše doporučené denní dávkování</Typography>
          {/* <Grid container marginBottom={15} sx={{textAlign: "center"}}>
            <Grid item xs={1}  md={4}>
              <ResultCalculate>

              </ResultCalculate>
            </Grid>
          </Grid> */}
        </CalculatorS>
      </Container>
    </Page>
  );
};

export default Calculator;
