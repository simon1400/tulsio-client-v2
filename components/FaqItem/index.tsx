import { Typography } from "@mui/material"
import { FC } from "react"
import { FaqItemS, Accordion, AccordionDetails, AccordionSummary } from "./styles"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Content from "components/Content";

interface IFaqItem {
  title: string;
  answer: string; 
}

const FaqItem: FC<{data: IFaqItem}> = ({ data }) => {
  return (
    <FaqItemS>
      <Accordion>
        <AccordionSummary 
          aria-controls="panel1a-content"
          expandIcon={<ExpandMoreIcon fontSize="large" sx={{ color: "white" }} />}>
          <Typography variant="h3">{data.title}</Typography>
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