import { LangS } from "./styles"
import { useState } from "react";
import Check from '/public/assets/check.svg'
import Chevron from '/public/assets/chevron_mini.svg'
import { ClickAwayListener } from '@mui/base';
import { useQuery } from "@apollo/client";
import getLocales from "queries/locales";
import Link from "next/link";
import { useRouter } from "next/router";

const Lang = () => {
  const [active, setActive] = useState(false)

  const {data, loading} = useQuery(getLocales)
  const router = useRouter()

  if(loading) {
    return null
  }
  

  const locales = data?.i18NLocales?.data?.map((item: any) => item.attributes)

  return (
    <ClickAwayListener onClickAway={() => setActive(false)}>
      <LangS>
        <div className={`button-lang ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
          <span>{router.locale}</span>
          <Chevron />
        </div>
        <div className={`dropdown-lang ${active ? "active" : ""}`}>
          <ul>
            {locales?.map((item: any, idx: number) => <li key={idx}><Link href="/" locale={item.code}><span>{item.name}</span> {router.locale === item.code ? <Check /> : null}</Link></li>)}
          </ul>
        </div>
      </LangS>
    </ClickAwayListener>
  )
}

export default Lang