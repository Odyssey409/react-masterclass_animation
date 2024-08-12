import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  flex-direction: column;
`;

const Box = styled(motion.div)`
  height: 400px;
  width: 400px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
`;
const Circle = styled(motion.div)`
  height: 100px;
  width: 100px;
  background: #00a5ff;
  border-radius: 50%;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box
        style={{
          justifyContent: clicked ? "center" : "flex-start",
          alignItems: clicked ? "center" : "flex-start",
        }}
      >
        <Circle layout></Circle>
      </Box>
    </Wrapper>
  );
}

export default App;
