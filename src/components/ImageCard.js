import { useState } from "react";
import Box from "@mui/material/Box";

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

  export default ImageCard;