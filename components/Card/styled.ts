import styled from "@emotion/styled";

export const CardS = styled.div(({theme}) => `
  background: white;
  width: 100%;
  border-radius: ${theme.borderRadius['base']};
  overflow: hidden;
  ${theme.breakpoints.down('xxl')} {
    border-radius: ${theme.borderRadius['xxl']};
  }
  ${theme.breakpoints.down('xl')} {
    border-radius: ${theme.borderRadius['xl']};
  }
  ${theme.breakpoints.down('lg')} {
    border-radius: ${theme.borderRadius['lg']};
  }
  ${theme.breakpoints.down('sm')} {
    border-radius: ${theme.borderRadius['sm']};
  }
  .img-wrap{
    position: relative;
    height: 350px;
    img{
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
    .label-wrap{
      position: absolute;
      z-index: 10;
      bottom: 30px;
      right: 30px;
      display: flex;
      flex-direction: column;
      > * {
        width: auto;
        margin-bottom: 5px;
        text-align: right;
      }
    }
  }
  .card-content{
    padding: 20px 30px;
  }
  .card-control{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    p{
      font-weight: 600;
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
  }
`)