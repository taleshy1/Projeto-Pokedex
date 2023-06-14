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
