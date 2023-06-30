import styled from "styled-components";

export const BodySTY = styled.div`
  width: 400px;
  height: 460px;
  cursor: pointer;
  display: flex;
  background-color: ${({ theme }) => theme.color.N0};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
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
  font-size: 32px;
  line-height: 44px;
  color: ${({ theme }) => theme.color.N700};
`;
