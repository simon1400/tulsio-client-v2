import styled from "@emotion/styled";

export const ContentS = styled.div<{removePadding: boolean; smallPadding: boolean}>(({removePadding, smallPadding}) => `
  color: rgba(255,255,255, .85);
  padding: ${removePadding ? '0' : smallPadding ? '50px 0 100px' : '100px 0'};
  figure {
    display: block;
    margin: 0;
    overflow: hidden;
    border-radius: 60px;
    position: relative;
    div{
      position: relative;
      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`)