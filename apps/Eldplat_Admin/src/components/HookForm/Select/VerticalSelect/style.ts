// not use now
import styled from "styled-components";

export const BodySYT = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  .title {
    display: flex;
    align-items: flex-start;
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
