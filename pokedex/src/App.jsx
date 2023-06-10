import GlobalStyles from "./GlobalStyles";
import GlobalContextProvider from "./context/global/globalContext";
import { RouterPage } from "./routes/routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <GlobalStyles />
        <ChakraProvider>
          <RouterPage />
        </ChakraProvider>
      </GlobalContextProvider>
    </>
  );
}

export default App;
