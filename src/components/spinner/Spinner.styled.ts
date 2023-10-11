import styled from '@emotion/styled';

export const StyledSpinner = styled.span`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  & {
    border: 2px solid #f3f3f3;
    border-top: 2px solid;
    border-radius: 50%;
    width: 1em;
    height: 1em;
    animation: spin 1s linear infinite;
  }
`;

/*
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${palette.primary.main};
  border-radius: 50%;
  width: 1em;
  height: 1em;
  animation: spin 1s linear infinite;
`;
*/
