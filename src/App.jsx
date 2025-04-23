import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar, ItemListContainer, Counter } from "./components";

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      { <ItemListContainer greeting={"Bienvenidos a mi tienda!"} /> }
      <Counter />
    </ChakraProvider>
  );
};

export default App;