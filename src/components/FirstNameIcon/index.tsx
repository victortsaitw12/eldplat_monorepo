import React from "react";
import styled from "styled-components";
const StyleIdIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  background-color: ${({ theme }) => theme.color.V100};
  color: ${({ theme }) => theme.color.V600};
`;
export default function FirstNameIcon({ text }: { text: string }) {
  return <StyleIdIcon>{text}</StyleIdIcon>;
}
