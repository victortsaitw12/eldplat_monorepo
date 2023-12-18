import styled from "styled-components";

const BodySTY = styled.ul`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid  ${({ theme }) => theme.color.N40};
  
  .grid_title {
    background-color: ${({ theme }) => theme.color.N20};
    color: ${({ theme }) => theme.color.N300};
    padding: 10px 20px;
    font-weight: 600;
  }
`;

export { BodySTY };