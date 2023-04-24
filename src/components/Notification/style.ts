import styled from "styled-components";
import { MessageStatus } from ".";

interface BodyProps {
  isSuccess: boolean;
}

export const BodySTY = styled.div<BodyProps>`
  position: fixed;
  top: 50%;
  right: 0%;
  transform: translate(-5%, 0);
  border-left: 4px solid ${(props) => (props.isSuccess ? "green" : "red")};
  background-color: white;
  border-radius: 3px;
  height: 60px;
  width: 300px;
  z-index: 10;
  .position-ref {
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    align-items: center;
  }
  .container {
    display: flex;
    gap: 10px;
    align-items: center;
    padding-left: 1rem;
  }

  .icon-background {
    background-color: ${(props) => (props.isSuccess ? "green" : "red")};
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .icon-picture {
    color: white;
    width: 20px;
    height: 20px;
    transform: translate(0%, 0%);
    /* border: 0.1rem solid red; */
  }
  .notification-message {
    font-size: 18px;
    color: #262c2d9c;
  }

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
    text-align: center;
    border: none;
    background: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .close-button:hover {
    transform: scale(1.2, 1.2);
    font-weight: bold;
    /* box-shadow: 0px 0px 5px black; */
  }
`;
