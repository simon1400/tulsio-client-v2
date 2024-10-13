import styled from '@emotion/styled'

export const CardS = styled.div(
  ({ theme }) => `
  background: white;
  width: 100%;
  border-radius: ${theme.borderRadius.base};
  overflow: hidden;
  ${theme.breakpoints.down('xxl')} {
    border-radius: ${theme.borderRadius.xxl};
  }
  ${theme.breakpoints.down('xl')} {
    border-radius: ${theme.borderRadius.xl};
  }
  ${theme.breakpoints.down('lg')} {
    border-radius: ${theme.borderRadius.lg};
  }
  ${theme.breakpoints.down('sm')} {
    border-radius: ${theme.borderRadius.sm};
  }
  box-shadow: 0px 3px 16px #0000000F;

  .img-wrap {
    position: relative;
    height: 100%;
    img {
      // object-fit: cover;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
    
    .label-wrap {
      position: absolute;
      z-index: 10;
      bottom: 30px;
      right: 30px;
      > * {
        width: auto;
        text-align: right;
       }
    }
  }

  .card-content {
    padding: 20px 30px;
    h3{
      color: #2B2B2B;
      font-size: 24px;
    }
  }

  .card-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      font-weight: 600;
      font-size: 19px;
      color: #2B2B2B;
    }
  }

  a{
    display: flex;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border: solid 2px rgba(32, 32, 32, 0.05);
    background-color: #fff;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    svg{
      height: 32px;
      margin: auto;
      fill: ${theme.palette.primary.main};
    }
  }

  ${theme.breakpoints.up('lg')} {
    .img-wrap {
      height: auto;
    }
  }
  ${theme.breakpoints.up('md')} {
    .img-wrap {
      height: auto;
      aspect-ratio: 1;
    }
  }
  ${theme.breakpoints.between('xs', 'md')} {
    .card-content {
      padding: 10px 15px;
    }
    .img-wrap {
      height: auto;
      aspect-ratio: 1; 
    }
  }
  ${theme.breakpoints.down('sm')} { 
    a {
      width: 42px;
      height: 42px;
      svg {
        height: 22px;
      }
    }
    .card-control{
      p {
        font-size: 13px;
      }
    }
    .card-content {
    h3{
      font-size: 16px;
    }
  }
  }
`,
)
