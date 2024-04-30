import { ChangeEvent, FC, SyntheticEvent, useEffect, useState } from "react";
import { BottomButtons, CalculatorS, EmbedHeader, InputsBlockWrap, ResultCalculate, TabsS } from "./styles";
import { Grid, Tab, Typography } from "@mui/material";
import Range from "components/Range";
import BlockValue from "components/BlockValue";

import ObjemIcon from "public/assets/objem.svg";
import KapkaIcon from "public/assets/kapka.svg";
import PipetaIcon from "public/assets/pipeta.svg";
import MgCbd from "public/assets/mlCbd.svg";
import CopyLight from "public/assets/copy-light.svg";
import TriangleAlert from "public/assets/triangle-alert.svg";
import Link from "next/link";
import Image from "next/image";

const objemKapatka = 0.04
const baseKg = 75
const tinktura = 10

const Calculator: FC<{embed?: string}> = ({embed = ''}) => {

  const [who, setWho] = useState("human");
  const [kapekText, setKapekText] = useState<string>('kapka')

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

  const [state, setState] = useState<string>("looking");

  const handleWho = (e: SyntheticEvent, newValue: string) => {
    setWho(newValue);
  };

  const [lavel, setLavel] = useState<number | number[]>(3);
  const [lavelState, setLavelState] = useState<number>(20);

  const handleState = (e: SyntheticEvent, newValue: string) => {
    setState(newValue);
    setLavel(3)
    setLavelState(20)
    setKg(75)
    setObjem(10)
    setRoztok(10)
    setCbd((10 / tinktura) * tinktura * (10 / 100) * 1000)
  };

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

  useEffect(() => {
    const kapekFixed = +kapek.toFixed(0)
    if(kapekFixed === 1){
      setKapekText('kapka')
    }else if(kapekFixed <= 4 && kapekFixed >= 2){
      setKapekText('kapky')
    }else if(kapekFixed >= 5){
      setKapekText('kapek')
    }else if(!kapekFixed){
      setKapekText('kapek')
    }
  }, [kapek])

  const handleClick = (e: any) => {
    e.preventDefault()
    const element = document.getElementById("content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pipeta = +(kapek * objemKapatka).toFixed(2)

  return (
    <CalculatorS embed={embed}>
      {embed.length && <EmbedHeader>
        <Typography variant="h1">CBD kalkulačka</Typography>
        <div className="embed-logo">
          <Link href="/">
            <Image src="/assets/logo-tulsio.svg" width="211" height="61" alt="Tulsio" />
          </Link>
        </div>
      </EmbedHeader>}
      {!embed.length && <div className="wrap-tabs">
        <TabsS value={state} onChange={handleState}>
          <Tab value="looking" label="Hledám CBD" disableRipple />
          <Tab value="has" label="Už mám CBD" disableRipple />
        </TabsS>
        <TabsS value={who} onChange={handleWho}>
          <Tab value="human" label="Člověk" disableRipple />
          <Tab value="dog" label="Pes" disableRipple />
          <Tab value="cat" label="Kočka" disableRipple />
        </TabsS>
      </div>}
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
      <Typography variant="h3">{state === 'looking' ? "Doporučená koncentrace kapek" : "Vyplňte údaje z vašich kapek"}</Typography>
      <InputsBlockWrap>
        <div>
          <Typography className="calcul-input-head" variant="h4" marginBottom={5}>Roztok</Typography>
          <BlockValue
            value={`${roztok}`}
            type="%"
            handle={state === "has" ? handleRoztok : () => {}}
            center
            state={state}
          />
        </div>
        <div>
          <Typography className="calcul-input-head" variant="h4" marginBottom={5}>Obsah CBD</Typography>
          <BlockValue
            value={`${cbd}`}
            type="mg"
            handle={state === "has" ? handleCbd : () => {}}
            center
            state={state}
          />
        </div>
        <div>
          <Typography className="calcul-input-head" variant="h4" marginBottom={5}>Objem láhvičky</Typography>
          <BlockValue value={`${objem}`} type="ml" state={state} handle={state === "has" ? handleObjem : () => {}} center />
        </div>
      </InputsBlockWrap>
      <Typography variant="h3">Doporučené denní dávkování</Typography>
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
            <span>{kapek.toFixed(0)} {kapekText}</span>
          </ResultCalculate>
        </Grid>
        <Grid item xs={3}>
          <ResultCalculate animation={animation} delay={0.5}>
            <div><PipetaIcon /></div>
            <span>
              {pipeta < 0.1 && "0 "}
              {pipeta >= 0.1 && pipeta < 0.25 && "1/4 "}
              {pipeta >= 0.25 && pipeta < 0.4 && "1/3 "}
              {pipeta >= 0.4 && pipeta < 0.6 && "1/2 "}
              {pipeta >= 0.6 && pipeta < 0.65 && "2/3 "}
              {pipeta >= 0.65 && pipeta < 0.8 && "3/4 "}
              {(pipeta >= 0.8 || pipeta === 0) && pipeta}
              × pipeta</span>
          </ResultCalculate>
        </Grid>
      </Grid>
      {!embed.length && <BottomButtons>
        <Link href="/" onClick={(e) => handleClick(e)}>
          <TriangleAlert />
          <span>Přečíst upozornění</span>
        </Link>
        <div onClick={() => {navigator.clipboard.writeText('<iframe src="https://tulsio.com/cs/calculator?embed=black" width="100%" height="400" />')}}>
          <CopyLight />
          <span>Vložte si kalkulačku na váš web</span>
        </div>
      </BottomButtons>}
    </CalculatorS>
  )
}

export default Calculator