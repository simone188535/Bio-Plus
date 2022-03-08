import { useEffect, useState } from "react";
// import { Box } from "@mui/system";
import Box from "@mui/material/Box";
// import Grid from '@mui/material/Grid';
// import { makeStyles } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import axios from "axios";
// import './App.css';

const ImageCard = ({ idDrink, strDrink, strDrinkThumb }) => {
  const [hover, setHover] = useState(false);

  const invertHover = () => {
    setHover(prev => !prev);
  }

  return (<Box key={idDrink} sx={{
    position: 'relative',
  }}
  onMouseOver={() => invertHover()}
  onMouseOut={() => invertHover()}>
    <Box
      className="img"
      component="img"
      sx={{
        width: '100%',
      }}
      alt={strDrink}
      src={strDrinkThumb}
    />
    {hover && <p className="img-description">{strDrink}</p>}
  </Box>);

}
const GridLayout = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: ".3rem .5rem",
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

function App() {
  // const { classes } = useStyles();
  const [drinks, setDrinks] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setErrMsg("");
        const {
          data: { drinks },
        } = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`,
          { headers: { "Content-Type": "application/json" } }
        );
        setDrinks(drinks);
      } catch (err) {
        setErrMsg(
          "An error occurred while loading the API call! Please try again later!"
        );
      }
    })();
  }, []);

  // https://mui.com/system/basics/
  const displayDrinks = drinks.map((drink) => (
    <ImageCard {...drink} />
  ));

  return (
    <div className="App">
      <GridLayout>
        {/* <Grid
      // sx={{
      //   width: "100%",
      //   display: "grid",
      //   gridTemplateColumns: "repeat(5, 1fr)",
      //   gap: 1,
      // }}
      container 
      columns={{ xs: 1 , sm: 2, md: 3, lg: 5 }}
      spacing={1}
      > */}
        {displayDrinks}
      </GridLayout>
    </div>
  );
}

export default App;
