import styled from "styled-components";
import { useState } from "react";
import styles from "./DynamicButton.module.css";
import { Button } from "@mui/material";

const StyledButton = styled.button<{ clicked: boolean }>`
  background-color: ${(props) =>
    props.clicked ? "#f50057" : "#1976d2"}; // 动态改变颜色
  &:hover {
    background-color: ${(props) => (props.clicked ? "#c51162" : "#1565c0")};
  }
`;

export default function DynamicStyledButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    // <StyledButton clicked={clicked} onClick={handleClick} className={styles.button}>
    //   {clicked ? "Clicked" : "Click Me"}
    // </StyledButton>

    <Button
      className={styles.button}
      onClick={handleClick}
      sx={{
        backgroundColor: clicked ? "#c51162" : "#1565c0",
        "&:hover": {
          backgroundColor: "#c51162",
        },
      }}
    >
      {clicked ? "Clicked" : "Click Me"}
    </Button>
  );
}
