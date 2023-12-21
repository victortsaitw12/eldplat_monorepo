import styled from "styled-components";

const BodySTY = styled.div<{ isHide: any }>`
  width: ${({ isHide }) => (isHide ? "0" : "100%")};
  /* height: 100%; */
  height: calc(100vh - 76px);
  /* border: 1px solid ${({ theme }) => theme.color.N100}; */
  /* overflow-y: auto; */
  overflow-y: hidden;
  display: ${({ isHide }) => (isHide ? "flex" : "flex")};
  flex-direction: column;

  .tabs-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .tab-container {
    display: flex;
    margin-left: 6px;
  }

  .table-content {
    border-radius: 4px 4px 0 0;
    flex: 1;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const FilterItemSTY = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 12px 0px 12px;
  border-radius: 10px 10px 0px 0px;
  background-color: ${({ isActive }) => (isActive ? "#fff" : "transparent")};
  > .require {
    color: ${({ theme }) => theme.color.R400};
  }

  span {
    color: ${({ theme }) => theme.color.N200};
    font-size: 14px;
    font-weight: 600;
    margin-right: 0;
    padding-bottom: 12px;

    &.active {
      color: ${({ theme }) => theme.color.B400};
      border-bottom: 3px solid ${({ theme }) => theme.color.B400};
    }
  }
`;

export { BodySTY, FilterItemSTY };
