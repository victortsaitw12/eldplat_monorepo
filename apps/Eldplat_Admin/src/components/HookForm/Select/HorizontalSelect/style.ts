// not use now
import styled from "styled-components";

export const BodySYT = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .title {
    display: flex;
    align-items: center;
    font-weight: 400;
    width: 160px;
    font-size: 14px;
    gap: 4px;
    color: ${({ theme }) => theme.color.N800};
    .required {
      color: ${({ theme }) => theme.color.R400};
    }
  }
`;
