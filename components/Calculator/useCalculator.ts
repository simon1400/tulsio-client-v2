import { useEffect, useReducer, useMemo, useCallback, SyntheticEvent, ChangeEvent } from 'react'
import { CalculatorState, WhoType, StateType } from './types'
import { objemKapatka, baseKg, tinktura, weightRanges, defaultState } from './constants'

const reducer = (state: CalculatorState, action: Partial<CalculatorState>): CalculatorState => ({
  ...state,
  ...action,
})

export const useCalculator = () => {
  const [inputs, dispatch] = useReducer(reducer, defaultState)
  const [who, setWho] = useReducer((_: WhoType, newValue: WhoType) => newValue, 'human')
  const [state, setState] = useReducer((_: StateType, newValue: StateType) => newValue, 'looking')

  useEffect(() => {
    dispatch({ kg: (weightRanges[who][0] + weightRanges[who][1]) / 2 })
  }, [who])

  const handleChange =
    (key: keyof CalculatorState) =>
    (e: ChangeEvent<HTMLInputElement> | Event, newValue: number | number[]) => {
      if (Array.isArray(newValue)) return
      if (Number.isFinite(newValue)) {
        dispatch({ [key]: newValue })
      }
    }

  const koef = useMemo(() => inputs.kg / baseKg, [inputs.kg])
  const pocetKapek = useMemo(() => inputs.objem / objemKapatka, [inputs.objem])

  const cbd = useMemo(
    () => (inputs.objem / tinktura) * tinktura * (inputs.roztok / 100) * 1000,
    [inputs.objem, inputs.roztok]
  )

  const kapek = useMemo(
    () => (inputs.lavelState / (cbd / pocetKapek)) * koef,
    [inputs.lavelState, cbd, pocetKapek, koef]
  )

  const kapekText = useMemo(() => {
    const kapekFixed = Math.round(kapek)
    return kapekFixed === 1 ? 'kapka' : kapekFixed <= 4 ? 'kapky' : 'kapek'
  }, [kapek])

  const pipeta = +(kapek * objemKapatka).toFixed(2)

  const handleScroll = useCallback((e: SyntheticEvent) => {
    e.preventDefault()
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return {
    inputs,
    handleChange,
    who,
    setWho,
    state,
    setState,
    kapek,
    kapekText,
    pipeta,
    cbd,
    handleScroll,
  }
}