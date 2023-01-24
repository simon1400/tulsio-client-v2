import { SvgIcon, Typography } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { FaqItemS, Accordion, AccordionDetails, AccordionSummary } from "./styles"
import Content from "components/Content";
import parse from 'html-react-parser';
import Chevron from 'public/icons/chevron.svg'

interface IFaqItem {
  _highlightResult: {
    title: {
      value: string;
    }
  };
  answer: string;
}

const FaqItem: FC<{data: IFaqItem}> = ({ data }) => {

  return (
    <FaqItemS>
      <Accordion>
        <AccordionSummary 
          aria-controls="panel1a-content"
          expandIcon={<SvgIcon component={Chevron} fontSize="medium" sx={{ color: "white" }} />}>
          <Typography variant="h3" dangerouslySetInnerHTML={{__html: data._highlightResult.title.value}} />
        </AccordionSummary>
        <AccordionDetails>
          <Content removePadding>
            <Typography variant="body1" dangerouslySetInnerHTML={{__html: data.answer}} />
          </Content>
        </AccordionDetails>
      </Accordion>
    </FaqItemS>
  )
}

export default FaqItem