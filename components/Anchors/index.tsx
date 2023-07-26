import { FC, SyntheticEvent } from "react";
import { AnchorsS } from "./styles"
import ArrowDown from "public/icons/arrow-2.svg";

const Anchors: FC<{data: any}> = ({data}) => {

  const handleMenu = (e: SyntheticEvent, item: any) => {
    e.preventDefault()
    const element = document.getElementById(item.idTarget.toLowerCase().split(' ').join('-'));
    var headerOffset = 80;
    if (element) {
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
    }
  };

  return (
    <AnchorsS>
      <ul>
        {!!data?.length && data.map((item: any, idx: number) => {
          if(item.idTarget) {
            return <li key={idx}><a href={`#${item.idTarget.toLowerCase().split(' ').join('-')}`} onClick={(e) => handleMenu(e, item)}><ArrowDown /> {item.idTarget}</a></li>
          }
          return null
        })}
      </ul>
    </AnchorsS>
  )
}

export default Anchors