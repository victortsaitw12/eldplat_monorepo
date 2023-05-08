import styled from "styled-components";

const BodySTY = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  .tab-container {
    display: flex;
    margin-left: 6px;
  }
  .tab-options {
    display: flex;
  }
`;

const FilterItemSTY = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 10px 10px 0px 0px;
  background-color: ${({ isActive }) => (isActive ? "#fff" : "transparent")};
  span {
    color: ${({ theme }) => theme.color.N700};
    font-size: 14px;
    font-weight: 600;
    margin-right: 0;
  }
`;

const ContentSTY = styled.div`
  height: calc(100% - 40px);
`;

export { BodySTY, FilterItemSTY, ContentSTY };
