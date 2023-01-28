import styled from "@emotion/styled";

export const ShareButtonS = styled.div`
  ul{
    padding: 0;
    margin: 50px 0;
    li{
      list-style-type: none;
      display: inline-block;
      margin-right: 10px;
      padding: 0;
      &:before {
        display: none;
      }
      a{
        display: flex;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
        background-color: #4545ff;
        transition: all .2s ease;
        transform: scale(1);
        svg{
          height: 22px;
          margin: auto;
          fill: white;
        }
        &:hover{
          transform: scale(1.03);
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
        }
      }
    }
  }
`