import { useEffect, useState } from "react";
// import { Box } from "@mui/system";
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import { makeStyles } from "@material-ui/core";
import { styled, createTheme } from '@mui/material/styles';
import axios from "axios";
// import './App.css';

const GridLayout = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "grid",
    gap: 1,
    gridTemplateColumns: "1fr",
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
}));

function App() {
  // const { classes } = useStyles();
  const [drinks, setDrinks] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

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

  const displayDrinks = drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
      <div key={idDrink}>
        <h1>
          {/* <img src={strDrinkThumb} alt={strDrink} />  */}
          {strDrink}
        </h1>
      </div>
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
