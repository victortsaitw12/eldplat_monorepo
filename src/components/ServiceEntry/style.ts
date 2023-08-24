import styled from "styled-components";

export const BodySTY = styled.div`
  width: 240px;
  height: 264px;
  cursor: pointer;
  display: flex;
  background-color: ${({ theme }) => theme.color.N0};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25.5px 40px;
  gap: 20px;
  /* Neutral/N100 */
  border: 1px solid ${({ theme }) => theme.color.N100};
  border-radius: 10px;
`;

export const IconSTY = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.color.N0};
  border-radius: 50%;
  overflow: hidden;
`;

export const LabelSTY = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.color.N700};
`;
