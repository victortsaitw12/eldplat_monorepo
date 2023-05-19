import styled from "styled-components";
export const BodySYT = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .customer-address {
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 2fr;
    .content {
      display: flex;
      gap: 12px;
      .double-input {
        display: flex;
        gap: 20px;
      }
    }
  }
  .customer-tel {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .tel-content {
      display: grid;
      grid-template-columns: minmax(160px, 1fr) 1fr 2fr;
      column-gap: 8px;
    }
  }
`;
