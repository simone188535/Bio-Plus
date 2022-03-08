import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import axios from "axios";
// import './App.css';

const ImageCard = ({ strDrink, strDrinkThumb }) => {
  const [hover, setHover] = useState(false);

  const imgCardStyles = {
    imgWrap: {
      position: "relative"
    },
    img: {
      width: "100%",
      height: "100%"
    },
    imgDescription: {
      display: "flex",
      margin: "0",
      position: "absolute",
      top: 0,
      background: "rgba(29, 106, 154, 0.72)",
      color: "white",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      overflowWrap: "break-word",
    }
  }

  const invertHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <Box
      sx={imgCardStyles.imgWrap}
    >
      <Box
        className="img"
        component="img"
        sx={imgCardStyles.img}
        alt={strDrink}
        src={strDrinkThumb}
        onMouseOver={() => invertHover()}
      />
      {hover && (
        <Box
          component="p"
          className="img-description"
          onMouseOut={() => invertHover()}
          sx={imgCardStyles.imgDescription}
        >
          {strDrink}
        </Box>
      )}
    </Box>
  );
};
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
  const [drinks, setDrinks] = useState([]);
  const [errMsg, setErrMsg] = useState("");

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

  const displayDrinks = drinks.map((drink) => (
    <ImageCard key={drink.idDrink} {...drink} />
  ));

  return (
    <div className="App">
      <GridLayout>
        {errMsg || displayDrinks}
      </GridLayout>
    </div>
  );
}

export default App;
