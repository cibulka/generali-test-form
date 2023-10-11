import styled from '@emotion/styled';

export const StyledWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: calc(100vw - 2em);
  overflow: hidden;
  width: 32em;
  background: #fafafa;
  padding: 1em;
`;

export const StyledContent = styled.div`
  position: relative;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: transform 0.4s ease;
  transform: translateX(0);
  &.is-success {
    transform: translate(calc(-100% - 2em));
  }
`;

export const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    font-weight: 500;
    text-transform: none;
  }
`;
