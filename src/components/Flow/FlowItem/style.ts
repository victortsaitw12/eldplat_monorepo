import styled from "styled-components";
export const BodySTY = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  .image-container {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 30px;
    overflow: hidden;
  }
  .label-container {
    font-size: 16px;
    color: ${({ theme }) => theme.color.N600};
    font-weight: 600;
    text-align: center;
  }
`;
