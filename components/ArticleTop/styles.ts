import styled from "@emotion/styled";

export const ArticleTopS = styled.div`
  position: relative;
  border-radius: 60px;
  overflow: hidden;
  padding: 240px 200px;
  background: #4545ff;
  img {
    position: absolute;
    object-fit: cover;
    object-position: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: 0.4;
    mix-blend-mode: luminosity;
  }
  h1{
    position: relative;
    z-index: 2;
    margin-bottom: 30px;
  }
  label{
    position: relative;
    z-index: 2;
  }
`