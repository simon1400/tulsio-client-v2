import { useEffect } from "react";
import Granim from 'granim'
import styled from "@emotion/styled";

const StyledCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -10;
`
// linear-gradient(119deg, #4545ff 20%, #ff4564 90%); }
// linear-gradient(119deg, #ff4564 20%, #ff8f45 90%); }
// linear-gradient(119deg, #ff8f45 20%, #ffe645 90%); }
// linear-gradient(119deg, #ffe645 20%, #7dff45 90%); }
// linear-gradient(119deg, #7dff45 20%, #45f9ff 90%); }
// linear-gradient(119deg, #45f9ff 20%, #4545ff 90%); }

export default function GranimComponent() {
    useEffect(() => {
      if(window !== undefined) {
        const animationGradient = new Granim({
          element: '#canvas',
          name: 'granim',
          states : {
              "default-state": {
                  gradients: [
                      ['#4545ff', '#ff4564'],
                      ['#ff4564', '#ff8f45'],
                      ['#ff8f45', '#ffe645'],
                      ['#ffe645', '#7dff45'],
                      ['#7dff45', '#45f9ff'],
                      ['#45f9ff', '#4545ff']
                  ]
              }
          }
        })
  
        animationGradient.play()
      }
      
    }, []);

    return <StyledCanvas id="canvas">

    </StyledCanvas>;
}