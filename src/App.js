import { useEffect, useState } from "react";
import { Box } from '@mui/system';
import axios from "axios";
// import './App.css';

function App() {
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

  return (
    <div className="App">
      {console.log(drinks)}

      <Box
        sx={{
          width: '100%',
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)'
        }}
      />
    </div>
  );
}

export default App;
