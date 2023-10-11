import styled from '@emotion/styled';

export const StyledSuccess = styled.div`
  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(2em);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1em;
  animation: appear 1s ease forwards;
  &,
  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  strong {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
`;
