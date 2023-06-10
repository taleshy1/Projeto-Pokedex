import GlobalStyles from "./GlobalStyles";
import { RouterPage } from "./routes/routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <GlobalStyles />
      <ChakraProvider>
        <RouterPage />
      </ChakraProvider>
    </>
  );
}

export default App;
