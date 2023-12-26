import styled from "styled-components";

export const DivSTY = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .list {
    display: flex;
    justify-content: space-between;
  }

  .expense-title {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.Heading600};
    color: ${({ theme }) => theme.color.N700};
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};
  }

  .sub-title {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.Heading600};
    color: ${({ theme }) => theme.color.N500};
    padding: 10px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};
  }

  .bold {
    font-weight: ${({ theme }) => theme.fontWeight.Heading600};
  }

  .red {
    color: ${({ theme }) => theme.color.R400};
  }
`;
