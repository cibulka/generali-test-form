import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledSpinner = styled(Box)`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  border-radius: 50%;
  width: 0.6em;
  height: 0.6em;
  animation: spin 1s linear infinite;
`;

export function Spinner() {
  return <StyledSpinner sx={{ border: '4px solid #f3f3f3', borderTopColor: 'primary.main' }} />;
}
