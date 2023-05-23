import styled from "styled-components";
export const BodySTY = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ItemSTY = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  list-style: none;
  .content {
    display: grid;
    grid-template-columns: minmax(160px, 1fr) 2fr;
    column-gap: 8px;
    .content-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .content-item {
      display: flex;
      gap: 8px;
    }
  }
  .delete {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    background: none;
  }
`;
