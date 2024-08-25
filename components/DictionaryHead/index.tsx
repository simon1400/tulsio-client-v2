import { Container, Typography } from "@mui/material";
import { useScrollspy } from "helpers/useScrollspy";
import { FC, SyntheticEvent, useEffect, useMemo, useRef, useState } from "react";
import { useScroll } from "react-spring";
import { CategoryTop, StickyNav } from "./styled";
import NavDictionary from "components/NavDictionary";

interface IDictionaryHead {
  title: string;
  data: any;
}

const DictionaryHead: FC<IDictionaryHead> = ({ title, data }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null!);
  const [scrollYState, setScrollYState] = useState<number>(0);
  const [sticky, setSticky] = useState(false)



  const handleMenu = (e: SyntheticEvent, idx: number) => {
    e.preventDefault()
    setValue(idx);
    const element = document.getElementById(data[idx]);
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

  const transformData = data.map((item: any, idx: number) => ({
    title: item,
    slug: "",
  }));

  const posElTop = useMemo(
    () => ref?.current?.offsetTop,
    [ref.current?.offsetTop]
  );

  useScroll({
    onChange: ({ value: { scrollY } }) => setScrollYState(scrollY)
  });

  useEffect(() => {
    if(posElTop) {
      if (!sticky && scrollYState >= posElTop + 70) {
        setSticky(true)
      }else if(sticky && scrollYState <= posElTop + 70){
        setSticky(false)
      }
    }
  }, [scrollYState])

  const activeId = useScrollspy(data, 90)

  useEffect(() => {
    if(activeId !== "") {
      setValue(data.findIndex((item: string) => item === activeId));
    }
  }, [activeId])

  return (
    <Container>
      <CategoryTop>
        <Typography variant="h1">{title}</Typography>
        <div ref={ref}>
          <NavDictionary data={transformData} handle={handleMenu} active={value} subMenu />
        </div>
        <StickyNav sticky={sticky}>
          <NavDictionary data={transformData} handle={handleMenu} active={value} />
        </StickyNav>
      </CategoryTop>
    </Container>
  );
};

export default DictionaryHead;
