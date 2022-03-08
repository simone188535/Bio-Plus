import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const GridLayout = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: ".5rem",
    padding: ".5rem",
    gridTemplateColumns: "1fr",
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
  }));

  export default GridLayout;