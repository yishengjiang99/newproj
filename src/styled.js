import styled, { css } from "styled-components";
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export const Container = styled.div`
  text-align: center;
`;
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
