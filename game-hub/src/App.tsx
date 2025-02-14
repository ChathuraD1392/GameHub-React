import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg="coral">
        Nav
      </GridItem>

      <GridItem
        area={"aside"}
        bg="gold"
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>

      <GridItem area={"main"} bg="green">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
