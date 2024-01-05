import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContainerSTY = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeaderSTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  > .detail_with_icon {
    display: flex;
    height: 32px;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    align-self: stretch;
    > li {
      > span {
        width: 115px;
      }
    }
  }
`;

export { BodySTY, HeaderSTY, ContainerSTY };
