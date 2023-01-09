import { Typography } from "@mui/material"
import { FC } from "react"
import { FaqItemS, Accordion, AccordionDetails, AccordionSummary } from "./styles"

interface IFaqItem {
  title: string;
  answer: string; 
}

const FaqItem: FC<{data: IFaqItem}> = ({ data }) => {
  return (
    <FaqItemS>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>{data.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" dangerouslySetInnerHTML={{__html: data.answer}} />
        </AccordionDetails>
      </Accordion>
    </FaqItemS>
  )
}

export default FaqItem