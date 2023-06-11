import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const LoadingContainer = styled.div`
  animation: ${({ isLoading }) =>
      isLoading ? fadeOutAnimation : fadeInAnimation}
    2s ease-in-out;
`;

export const ButtonsDiv = styled.div`
  height: 5vh;
  width: 100%;
  display: flex;
  gap: 10%;
  align-items: center;
  justify-content: center;
  margin: 3vh 0;
`;
export const Previous = styled.button`
  width: 5vw;
  height: 80%;
  background-color: rebeccapurple;
  border-radius: 0.4vw;
  color: white;
  cursor: ${({ previous }) => (previous ? "pointer" : "not-allowed")};

  ${({ previous }) =>
    previous
      ? `
    &:hover {
      color: black;
      background-color: bisque;
    }
  `
      : null}
`;
export const Next = styled.button`
  width: 5vw;
  height: 80%;
  background-color: purple;
  border-radius: 0.4vw;
  color: white;
  cursor: ${({ next }) => (next ? "pointer" : "not-allowed")};

  ${({ next }) =>
    next
      ? `
  &:hover {
    color: black;
    background-color: bisque;
  }
`
      : null}
`;
