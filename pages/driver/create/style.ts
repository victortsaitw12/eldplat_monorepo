import styled from "styled-components";

const BodySTY = styled.div`
  height: calc(100% - 20px);
  display: flex;
  position: relative;
  margin: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.Paragraph200};
  font-size: ${({ theme }) => theme.fontWeight.Paragraph200};
  line-height: 19px;

`;

export { BodySTY };
