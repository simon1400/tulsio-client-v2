import styled from "@emotion/styled";

export const ShareButtonS = styled.div`
  ul{
    padding: 0;
    margin: 50px 0;
    li{
      list-style-type: none;
      display: inline-block;
      margin-right: 10px;
      a{
        display: flex;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
        background-color: #4545ff;
        transition: all .5s ease;
        img, svg{
          height: 22px;
          margin: auto;
        }
        &:hover{
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
        }
      }
    }
  }
`