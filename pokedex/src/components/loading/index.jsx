import { Container } from "@chakra-ui/react";
import slowPokeLoadingGif from "../../assets/slowPokeLoading.gif";

export default function LoadingPage() {
  return (
    <Container centerContent>
      <img src={slowPokeLoadingGif} alt="" />
    </Container>
  );
}
