import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { CalculatorS, ResultCalculate, TabsS } from "./styles";
import { Grid, Tab, Typography } from "@mui/material";
import Range from "components/Range";
import BlockValue from "components/BlockValue";

import ObjemIcon from "public/assets/objem.svg";
import KapkaIcon from "public/assets/kapka.svg";
import PipetaIcon from "public/assets/pipeta.svg";
import MgCbd from "public/assets/mlCbd.svg";

const objemKapatka = 0.04
const baseKg = 75
const tinktura = 10

const Calculator = () => {

  const [who, setWho] = useState("human");

  const [rangeKg, setRangeKg] = useState([40, 150])

  useEffect(() => {
    switch (who) {
      case 'human':
        setRangeKg([40, 150])
        setKg(75)
        break;
      case 'dog':
        setRangeKg([1, 90])
        setKg(25)
        break;
      case 'cat':
        setRangeKg([0.3, 10])
        setKg(5)
        break;
    }
  }, [who])

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

  const [kg, setKg] = useState<number | number[]>(75);

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
      const newRoztok = newValue / objem / 10
      setRoztok(newRoztok)
      setKapek((lavelState / (newValue / pocetKapek)) * koef)
    }
  }
  
  const handleObjem = (e: Event | ChangeEvent<HTMLInputElement>, newValue: number) => {
    e.preventDefault()
    if(Number.isInteger(newValue)) {
      const newRoztok = cbd / newValue / 10
      setRoztok(newRoztok)
      setKapek((lavelState / (cbd / pocetKapek)) * koef)
      setObjem(newValue)
    }
  }

  return (
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
        min={rangeKg[0]}
        max={rangeKg[1]}
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
          <Typography className="calcul-input-head" variant="h4" marginBottom={5}>Roztok</Typography>
          <BlockValue
            value={`${roztok}`}
            type="%"
            handle={state === "has" ? handleRoztok : () => {}}
            center
          />
        </Grid>
        <Grid item xs={4}>
          <Typography className="calcul-input-head" variant="h4" marginBottom={5}>Obsah CBD</Typography>
          <BlockValue
            value={`${cbd}`}
            type="mg"
            handle={state === "has" ? handleCbd : () => {}}
            center
          />
        </Grid>
        <Grid item xs={4}>
          <Typography className="calcul-input-head" variant="h4" marginBottom={5}>Objem láhvičky</Typography>
          <BlockValue value={`${objem}`} type="ml" handle={state === "has" ? handleObjem : () => {}} center />
        </Grid>
      </Grid>
      <Typography variant="h3">Vaše doporučené denní dávkování</Typography>
      <Grid container>
        <Grid item xs={3}>
          <ResultCalculate animation={animation} delay={0}>
            <div><MgCbd /></div>
            <span>{(cbd / pocetKapek * kapek).toFixed(0)} mg CBD</span>
          </ResultCalculate>
        </Grid>
        <Grid item xs={3}>
          <ResultCalculate animation={animation} delay={0}>
            <div><ObjemIcon /></div>
            <span>{(kapek * objemKapatka).toFixed(2)} ml</span>
          </ResultCalculate>
        </Grid>
        <Grid item xs={3}>
          <ResultCalculate animation={animation} delay={0.2}>
            <div><KapkaIcon /></div>
            <span>{kapek.toFixed(0)} kapek</span>
          </ResultCalculate>
        </Grid>
        <Grid item xs={3}>
          <ResultCalculate animation={animation} delay={0.5}>
            <div><PipetaIcon /></div>
            <span>{(kapek * objemKapatka).toFixed(2)} × pipeta</span>
          </ResultCalculate>
        </Grid>
      </Grid>
    </CalculatorS>
  )
}

export default Calculator