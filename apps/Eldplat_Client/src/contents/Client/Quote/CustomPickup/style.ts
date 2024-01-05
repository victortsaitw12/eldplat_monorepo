import styled from "styled-components";

export const BodySTY = styled.div`
  background-color: ${({ theme }) => theme.color.N300};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0;
  gap: 40px;
`;

export const StyledForm = styled.form`
  display: flex;
  padding: 20px;
  gap: 20px;
  background-color: ${({ theme }) => theme.color.N0};
  > .form_item {
    display: flex;
    flex: 1 0 0;
    align-items: center;
    gap: 20px;
    > .item_title {
      width: 70px;
    }
  }
`;

export const StyledCard = styled.div`
  width: 1030px;
  box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
  border-radius: 10px;
  overflow: hidden;
`;
