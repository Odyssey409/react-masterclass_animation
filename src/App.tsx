import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 500px;
  gap: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClickButton = styled(motion.button)`
  margin-top: 50px;

  border: none;
`;

const Circle = styled(motion.div)`
  height: 50px;
  width: 50px;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

const BoxVariants = {
  hover: (custom: number) => ({
    scale: 1.1,
    translateX: custom % 2 === 0 ? 20 : -20,
    translateY: custom <= 2 ? -20 : 20,
  }),
};
function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState("2");
  const [isClicked, setIsClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => {
      if (prev === "2") return "3";
      else return "2";
    });
    setIsClicked((prev) => !prev);
  };
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((i) => (
          <Box
            onClick={() => setId(i)}
            key={i}
            layoutId={i}
            whileHover="hover"
            variants={BoxVariants}
            custom={parseInt(i)}
          >
            {clicked === i ? <Circle layoutId="circle"></Circle> : null}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Box
              layoutId={id}
              style={{
                width: 300,
                height: 300,
                background: "rgba(255, 255, 255, 1)",
              }}
            ></Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
      <ClickButton
        onClick={toggleClicked}
        animate={{
          scale: isClicked ? 2 : 1,
          color: isClicked ? "red" : "blue",
        }}
        transition={{ duration: 0.2 }}
      >
        Switch
      </ClickButton>
    </Wrapper>
  );
}

export default App;
