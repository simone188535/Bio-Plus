import Box from "@mui/material/Box";

const Header = () => {
  const imgCardStyles = {
    headerContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "3rem 0",
    },
    primaryHead: {
      fontSize: "3rem",
      margin: "1rem",
    },
    secondaryHead: {
      fontSize: "1rem",
      textAlign: "center",
      margin: 0,
    },
  };

  return (
    <Box sx={imgCardStyles.headerContainer}>
      <Box component="h1" sx={imgCardStyles.primaryHead}>
        Mocktails
      </Box>
      <Box component="p" sx={imgCardStyles.secondaryHead}>
        The ultimate guide for fun and work-friendly drinks.
      </Box>
    </Box>
  );
};

export default Header;
