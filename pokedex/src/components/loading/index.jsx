import { Container } from "@chakra-ui/react";
import slowPokeLoadingGif from "../../assets/slowPokeLoading.gif";
import { useContext } from "react";
import { Router } from "../../context/routerContext";

export default function LoadingPage() {
  return (
    <Container centerContent>
      <img src={slowPokeLoadingGif} alt="" />
    </Container>
  );
}
