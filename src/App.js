import { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import GridLayout from "./components/GridLayout";
import Header from "./components/Header";

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
      <Header/>
      <GridLayout>
        {errMsg || displayDrinks}
      </GridLayout>
    </div>
  );
}

export default App;
