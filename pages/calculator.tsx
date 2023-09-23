import { NextPage } from "next";
import Page from "layout/Page";
import PageHead from "components/PageHead";
import { Container, Grid, Tab, Typography } from "@mui/material";
import { CalculatorS, ResultCalculate, TabsS } from "styles/calculator";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import Range from "components/Range";
import BlockValue from "components/BlockValue";
import ObjemIcon from "public/assets/objem.svg";
import KapkaIcon from "public/assets/kapka.svg";
import PipetaIcon from "public/assets/pipeta.svg";

const Calculator: NextPage = () => {
  const [who, setWho] = useState("human");
  const [state, setState] = useState("looking");

  const [lavel, setLavel] = useState<number | number[]>(3);
  const [kg, setKg] = useState<number | number[]>(80);
  const [solution, setSolution] = useState<number | number[]>(20);
  const [objemCbd, setObjemCbd] = useState<number | number[]>(2000);
  const [objem, setObjem] = useState<number | number[]>(10);
  const [cbdDay, setCbdDay] = useState(0);

  const [kapky, setKapky] = useState(0)

  const [animation, setAnimation] = useState<boolean>(false)

  const handleCbdDay = (lavel: number, kg: number) => {
    const problem = !lavel ? 1 : lavel;
    const mgCbdDay = +problem * +kg * 0.2157;
    const resultObj = +objem / +objemCbd
    setKapky((resultObj * mgCbdDay) / resultObj);
    setCbdDay(mgCbdDay);
  };

  useEffect(() => {
    handleCbdDay(lavel as number, kg as number);
  }, []);

  useEffect(() => {
    handleCbdDay(lavel as number, kg as number);
  }, [objem, objemCbd])

  const handleWho = (e: SyntheticEvent, newValue: string) => {
    setWho(newValue);
  };

  const handleState = (e: SyntheticEvent, newValue: string) => {
    setState(newValue);
  };

  const handleLavel = async (
    e: Event | ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ) => {
    setLavel(newValue);
    handleCbdDay(newValue as number, kg as number);
    setObjemCbd(!newValue ? 1000 : newValue === 3 ? 2000 : 3000);
    setSolution(!newValue ? 10 : newValue === 3 ? 20 : 30);
    setAnimation(true)
  };

  const handleKg = async (
    e: Event | ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ) => {
    if (!Number.isNaN(newValue)) {
      setKg(newValue);
      handleCbdDay(lavel as number, newValue as number);
    }
  };

  const handleSolution = (
    e: Event | ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ) => {
    if (!Number.isNaN(newValue) && +newValue <= 100 && +newValue >= 1) {
      setSolution(newValue);
      // setObjemCbd(+newValue * 100);
    }
  };

  const handleObjemCbd = (
    e: Event | ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ) => {
    if (!Number.isNaN(newValue) && +newValue <= 10000 && +newValue >= 100) {
      setObjemCbd(newValue);
      setSolution(+newValue / 100);
    }
  };

  const handleObjem = (
    e: Event | ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ) => {
    if (!Number.isNaN(newValue) && +newValue <= 1000 && +newValue >= 1) {
      setObjem(newValue);
      setSolution(+objemCbd / +newValue);
    }
  };

  // useEffect(() => {
  //   setAnimation(true)
  //   // setTimeout(() => {
  //   //   setAnimation(false)
  //   // }, );
  // }, [objem, objemCbd, cbdDay, kapky])

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
          <Grid container marginBottom={15} sx={{ textAlign: "center" }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" marginBottom={5}>
                Roztok
              </Typography>
              <BlockValue
                value={`${solution}`}
                type="%"
                handle={handleSolution}
                center
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" marginBottom={5}>
                Obsah CBD
              </Typography>
              <BlockValue
                value={`${objemCbd}`}
                type="mg"
                handle={handleObjemCbd}
                center
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" marginBottom={5}>
                Objem láhvičky
              </Typography>
              <BlockValue value={`${objem}`} type="ml" handle={handleObjem} center />
            </Grid>
          </Grid>
          <Typography variant="h2">Vaše doporučené denní dávkování</Typography>
          <Grid container>
            <Grid item xs={12} md={4}>
              <ResultCalculate animation={animation} delay={0}>
                <div>
                  <ObjemIcon />
                </div>
                <span>{((+objem / +objemCbd) * cbdDay).toFixed(2)} ml</span>
              </ResultCalculate>
            </Grid>
            <Grid item xs={12} md={4}>
              <ResultCalculate animation={animation} delay={0.2}>
                <div>
                  <KapkaIcon />
                </div>
                <span>{kapky.toFixed(0)} kapek</span>
              </ResultCalculate>
            </Grid>
            <Grid item xs={12} md={4}>
              <ResultCalculate animation={animation} delay={0.5}>
                <div>
                  <PipetaIcon />
                </div>
                <span>
                  {((+objem / +objemCbd) * cbdDay).toFixed(1)} × pipeta
                </span>
              </ResultCalculate>
            </Grid>
          </Grid>
        </CalculatorS>
      </Container>
    </Page>
  );
};

export default Calculator;
