import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { start } from "repl";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  height: 200px;
  width: 400px;
  background: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);
`;
const BoxVariants = {
  initial: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
  leaving: { opacity: 0, scale: 0, y: 50 },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click me</button>
      <AnimatePresence>
        {" "}
        {showing ? (
          <Box
            variants={BoxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
