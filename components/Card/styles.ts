import styled from '@emotion/styled'

export const CardS = styled.div(
  ({ theme }) => `
  position: relative;
  background: white;
  width: 100%;
  border-radius: ${theme.borderRadius.base};
  overflow: hidden;
  transform: scale(1);
  transition: all .4s ease-in-out;
  &:hover{
    transform: scale(.98);
  }
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
      object-fit: cover;
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
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    h3{
      color: #2B2B2B;
      font-size: 24px;
      margin-bottom: 5px;
      word-break: break-word;

    }
    ${theme.breakpoints.between('xs', 'md')} {
      padding: 20px 20px;
      margin-bottom: 50px;
      h3{
        font-size: 20px;
      }
    }
  }

  .card-control {
    position: absolute;
    width: calc(100% - 60px);
    bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      font-weight: 600;
      font-size: 19px;
      color: #2B2B2B;
      width: auto;
    }
    a{
      display: flex;
      box-shadow: 0px 3px 6px #00000029;
      transform: scale(1);
      transition: all .4s ease-in-out;
      &:hover{
        transform: scale(1.2);
      }
      border: 2px solid #2020200D;
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
    ${theme.breakpoints.down('md')} {
      bottom: 20px;
      width: calc(100% - 30px);
      a{
        width: calc(60px*0.7);
        height: calc(60px*0.7);
        svg{
          height: calc(32px*0.7);
        }
      }
    }
    ${theme.breakpoints.down('sm')} {
      bottom: 15px;
      width: calc(100% - 30px);
      a {
        transform: none;
        transition: none;
        &:hover{
          transform: none;
        }
      }
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
