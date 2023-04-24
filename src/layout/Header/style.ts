import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  background-color: #e2ecf7;
  justify-content: space-between;
  padding: 12px 20px;
  .tool-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .plan-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const StyledButton = styled.button`
  padding: 2px 8px;
  /* Chart/Chart Green */
  color: #6bdaae;
  border: 1px solid #6bdaae;
  border-radius: 20px;
  background: none;
  font-weight: 600;
  font-size: 14px;
`;

export { BodySTY, StyledButton };
