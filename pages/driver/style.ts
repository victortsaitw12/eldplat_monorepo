import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  /* width: 600px; */
  position: relative;
  height: calc(100% - 20px);
  margin: 10px;
`;

const StyledDot = styled.div<{ value: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ value, theme }) => {
    if (value === "01") {
      return theme.color.N400;
    }
    if (value === "02") {
      return theme.color.Y400;
    }
    return theme.color.G400;
  }};
`;

const UserSTY = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export { BodySTY, StyledDot, UserSTY };
