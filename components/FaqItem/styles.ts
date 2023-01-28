import styled from '@emotion/styled'
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';

export const Accordion = styled(MuiAccordion)`
  border-radius: 0!important;
  background: transparent;
  box-shadow: none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.05);
  &:last-of-type{
    /* border-bottom: 0; */
  }
`;

export const AccordionSummary = styled(MuiAccordionSummary)(({theme}) => `
  padding-top: 30px;
  padding-bottom: 30px;
  .Mui-expanded, .MuiAccordionSummary-content{
    margin: 0 0;
  }
  h3{
    font-weight: bold;
    mark{
      background: ${theme.palette.primary.main};
      color: white;
      border-radius: 6px;
      padding: 0 3px;
    }
  }
`);

export const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => `
  p{
    mark{
      background: ${theme.palette.primary.main};
      color: white;
      border-radius: 6px;
      padding: 0 3px;
    }
    &:first-of-type{
      margin-top: 0;
    }
  }
`)

export const FaqItemS = styled.div`
  /* margin-bottom: 30px; */
  &:last-of-type{
    > div {
      border-bottom: none;
    }
  }
`