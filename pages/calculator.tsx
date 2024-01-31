import { NextPage } from "next";
import Page from "layout/Page";
// import PageHead from "components/PageHead";
import { Container, Grid, Tab, Typography, debounce } from "@mui/material";
import { CalculatorS, ResultCalculate, TabsS } from "styles/calculator";
import { ChangeEvent, SyntheticEvent, useCallback, useEffect, useMemo, useState } from "react";
import Range from "components/Range";
import BlockValue from "components/BlockValue";
import ObjemIcon from "public/assets/objem.svg";
import KapkaIcon from "public/assets/kapka.svg";
import PipetaIcon from "public/assets/pipeta.svg";
// import ArticleShort from "components/ArticleShort";
import CategoryShort from "components/CategoryShort";
import ShortContent from "components/ShortContent";
import InfoBlock from "components/InfoBlock";
import Related from "components/Related";
import { wrapper } from "stores";
import { client } from "lib/api";
import calculatorQuery from "queries/calculator";
import { changeDescription, changeTitle } from "stores/slices/dataSlices";


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {

    const { data } = await client.query({
      query: calculatorQuery,
      variables: {
        locale: ctx.locale,
      },
    });

    const calculator = data.calculator.data?.attributes;


    store.dispatch(changeTitle("Calculator"));
    // store.dispatch(changeDescription(""));

    return {
      props: {
        calculator
      },
    };
  }
);

interface ICalculator {
  calculator: any
}

const objemKapatka = 0.04
const baseKg = 75
const tinktura = 10

const Calculator: NextPage<ICalculator> = ({calculator}) => {
  const [who, setWho] = useState("human");
  const [state, setState] = useState("looking");

  const handleWho = (e: SyntheticEvent, newValue: string) => {
    setWho(newValue);
  };

  const handleState = (e: SyntheticEvent, newValue: string) => {
    setState(newValue);
  };

  const [lavel, setLavel] = useState<number | number[]>(3);
  const [lavelState, setLavelState] = useState<number>(20);

  const handleLavel = async (
    e: Event | ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ) => {
    setLavel(newValue);
  };

  const [kg, setKg] = useState<number | number[]>(65);

  const handleKg = async (
    e: Event | ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ) => {
    if (!Number.isNaN(newValue)) {
      setKg(newValue);
    }
  };

  const [koef, setKoef] = useState<number>(kg as number / baseKg)

  const [objem, setObjem] = useState<number>(10);
  const [roztok, setRoztok] = useState<number>(!lavel ? 5 : lavel === 3 ? 10 : 20)
  const [cbd, setCbd] = useState<number>((10 / tinktura) * tinktura * (roztok / 100) * 1000)
  const [pocetKapek, setPocetKapek] = useState<number>(10 / objemKapatka)

  const [kapek, setKapek] = useState<number>((lavelState / (cbd / pocetKapek)) * (kg as number / baseKg)) 

  useEffect(() => {
    setKoef(kg as number / baseKg)
  }, [kg])

  useEffect(() => {
    setRoztok(!lavel ? 5 : lavel === 3 ? 10 : 20)
    setCbd((objem / tinktura) * tinktura * ((!lavel ? 5 : lavel === 3 ? 10 : 20) / 100) * 1000)
    setLavelState(!lavel ? 10 : lavel === 3 ? 20 : 40)
  }, [lavel])

  useEffect(() => {
    const cbdNew = (objem / tinktura) * tinktura * (roztok / 100) * 1000
    setKapek((lavelState / (cbdNew / pocetKapek)) * koef)
  }, [koef, lavelState])

  // useEffect(() => {
  //   setRoztok(objem / 20 * tinktura)
  // }, [cbd])

  // useEffect(() => {
  //   setCbd((objem / tinktura) * tinktura * (roztok / 100) * 1000)
  // }, [roztok])

  const [animation, setAnimation] = useState<boolean>(false)

  const handleRoztok = (e: Event | ChangeEvent<HTMLInputElement>, newValue: number) => {
    e.preventDefault()
    if(Number.isInteger(newValue)) {
      const newCbd = (objem / tinktura) * tinktura * (newValue / 100) * 1000
      setCbd(newCbd)
      setKapek((lavelState / (newCbd / pocetKapek)) * koef)
      setRoztok(newValue)
    }
  }

  const handleCbd = (e: Event | ChangeEvent<HTMLInputElement>, newValue: number) => {
    e.preventDefault()
    if(Number.isInteger(newValue)) {
      setCbd(newValue)
      const newRoztok = newValue / objem
      setRoztok(newRoztok)
      setKapek((lavelState / (newValue / pocetKapek)) * koef)
    }
  }
  
  const handleObjem = (e: Event | ChangeEvent<HTMLInputElement>, newValue: number) => {
    e.preventDefault()
    if(Number.isInteger(newValue)) {
      const newRoztok = cbd / newValue / 10
      console.log("newValue", newValue)
      console.log("newRoztok", newRoztok)
      setRoztok(newRoztok)
      setKapek((lavelState / (cbd / pocetKapek)) * koef)
      setObjem(newValue)
    }
  }

  return (
    <Page>
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <CategoryShort staticBlock data={{title: calculator.title, description: calculator.description}} />
          </Grid>
          <Grid item xs={6}>
            <CalculatorS>
              <TabsS value={who} onChange={handleWho}>
                <Tab value="human" label="Člověk" disableRipple />
                <Tab value="dog" label="Pes" disableRipple />
                <Tab value="cat" label="Kočka" disableRipple />
              </TabsS>
              <Range
                label="Úroveň problému"
                min={0}
                defaultValue={3}
                max={6}
                step={3}
                value={lavel}
                handle={handleLavel}
              />
              <Range
                label="Vaše hmotnost"
                defaultValue={80}
                min={40}
                max={150}
                step={1}
                value={kg}
                kg
                handle={handleKg}
              />
              <TabsS value={state} onChange={handleState}>
                <Tab value="looking" label="Hledám CBD" disableRipple />
                <Tab value="has" label="Už mám CBD" disableRipple />
              </TabsS>
              <Grid container marginBottom={8} sx={{ textAlign: "center" }}>
                <Grid item xs={4}>
                  <Typography className="calcul-input-head" variant="h4" marginBottom={5}>
                    Roztok
                  </Typography>
                  <BlockValue
                    value={`${roztok}`}
                    type="%"
                    handle={state === "has" ? handleRoztok : () => {}}
                    center
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography className="calcul-input-head" variant="h4" marginBottom={5}>
                    Obsah CBD
                  </Typography>
                  <BlockValue
                    value={`${cbd}`}
                    type="mg"
                    handle={state === "has" ? handleCbd : () => {}}
                    center
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography className="calcul-input-head" variant="h4" marginBottom={5}>
                    Objem láhvičky
                  </Typography>
                  <BlockValue value={`${objem}`} type="ml" handle={state === "has" ? handleObjem : () => {}} center />
                </Grid>
              </Grid>
              <Typography variant="h3">Vaše doporučené denní dávkování</Typography>
              <Grid container>
                <Grid item xs={3}>
                  <ResultCalculate animation={animation} delay={0}>
                    <div>
                      <ObjemIcon />
                    </div>
                    <span>{(cbd / pocetKapek * kapek).toFixed(0)} mg CBD</span>
                  </ResultCalculate>
                </Grid>
                <Grid item xs={3}>
                  <ResultCalculate animation={animation} delay={0}>
                    <div>
                      <ObjemIcon />
                    </div>
                    <span>{(kapek * objemKapatka).toFixed(2)} ml</span>
                  </ResultCalculate>
                </Grid>
                <Grid item xs={3}>
                  <ResultCalculate animation={animation} delay={0.2}>
                    <div>
                      <KapkaIcon />
                    </div>
                    <span>{kapek.toFixed(0)} kapek</span>
                  </ResultCalculate>
                </Grid>
                <Grid item xs={3}>
                  <ResultCalculate animation={animation} delay={0.5}>
                    <div>
                      <PipetaIcon />
                    </div>
                    <span>
                      {(kapek * objemKapatka).toFixed(2)} × pipeta
                    </span>
                  </ResultCalculate>
                </Grid>
              </Grid>
            </CalculatorS>
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

export default Calculator;
