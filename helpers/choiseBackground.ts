import { useState } from "react";
import { useOnMountUnsafe } from "./useOnMountUnsaf";

export const choiceBackground = (background: string | undefined) => {
  const [convert, setConvert] = useState<string>("#4545ff")
  const [color, setColor] = useState<string>("#ffffff");

  useOnMountUnsafe(() => {
    if (background === "green") {
      setConvert("#9f9");
      setColor("#202020");
    } else if (background === "yellow") {
      setConvert("#fff899");
      setColor("#202020");
    } else if (background === "purple") {
      setConvert("#a50d5a")
    } else if (background === "bluePurpleG") {
      setConvert("linear-gradient(125deg, #a50d5a, #4545ff)")
    } else if (background === "greenYellowG") {
      setConvert("linear-gradient(to bottom, #fff899, #9f9);")
      setColor("#202020")
    }
  })
  
  return {convert, color}
}