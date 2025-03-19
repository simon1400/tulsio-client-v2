import styled from '@emotion/styled'

export const BottomButtonsS = styled.div(`
    display: flex;
    flex-wrap: wrap;
    margin-top: 65px;
    justify-content: center;
    align-items: center;
    gap: 25px;
    >* {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.55);
      text-decoration: none;
      cursor: pointer;
      svg{
        margin-right: 5px;
      }
    }
`)
