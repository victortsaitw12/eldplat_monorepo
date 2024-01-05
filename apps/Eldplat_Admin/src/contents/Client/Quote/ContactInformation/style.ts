import styled from "styled-components";
export const BodySTY = styled.ul`
  overflow: hidden;
`;

export const ContainerSTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const ItemSTY = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 100%;
  > .item_container {
    display: flex;
    flex-wrap: wrap;
    flex: 1 0 0;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 21px;
    
    .custom_select {
      > div {
        width: 100%;
      }

      select + svg {
        background-color: ${({ theme }) => theme.color.N20};;
      }
    }

    > .item_title {
      width: 100%; 
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0;
      color: ${({ theme }) => theme.color.N700};
      font-weight: 600;
    }
    > .item_input_container {
      width: 100%; 

      max-width: 216px;
      
      input {
        max-width: 216px; 
      }

      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1 0 0;
      > input {
        width: auto;
      }
      .input_error {
        color: ${({ theme }) => theme.color.R400};
      }
    }
    > .double_input_container {
      display: flex;
      /* gap: 8px; */
      flex: 1 0 0;
      > .item_input_container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1 0 0;
        > input {
          width: auto;
        }
        .input_error {
          color: ${({ theme }) => theme.color.R400};
        }
      }
    }
  }
`;

export const StyledCollapseTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  > button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 14px;
    color: ${({ theme }) => theme.color.N700};
  }
  > label {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
