import styled from "styled-components";

export const BodySTY = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  td {
    height: 46px;

    &:nth-child(2) {
      width: 140px;
    }

    &:last-child {
      width: 140px;
    }
  }
`;
