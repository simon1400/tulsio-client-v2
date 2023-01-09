import styled from '@emotion/styled'
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';

export const Accordion = styled(MuiAccordion)`
  border-radius: 60px!important;
  background: #2b2b2b;
  color: #eee;
  
`;

export const AccordionSummary = styled(MuiAccordionSummary)`
  >div{
    margin: 0!important;  
  }
  p{
    margin: 0;
    padding: 40px;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.3;
  }
`;

export const AccordionDetails = styled(MuiAccordionDetails)`
  padding: 30px 40px;
  padding-top: 0;
`

export const FaqItemS = styled.div`
  margin-bottom: 30px;
`