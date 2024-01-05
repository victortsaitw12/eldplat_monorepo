import styled, { keyframes } from "styled-components";

type StyleProps = {
  visible: boolean;
};

const shake_animation = keyframes`
    0% {
      transform: translate(0, 0);
    }
    1.78571% {
      transform: translate(5px, 0);
    }
    3.57143% {
      transform: translate(0, 0);
    }
    5.35714% {
      transform: translate(5px, 0);
    }
    7.14286% {
      transform: translate(0, 0);
    }
    8.92857% {
      transform: translate(5px, 0);
    }
    10.71429% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
`;

export const BodySTY = styled.div<StyleProps>`
  display: flex;
  background-color: ${(Props) => (Props.visible ? "black" : "red")};
  margin: 20px auto;
  border-radius: 10px;
  font-weight: 600;
  height: ${(Props) => (Props.visible ? "auto" : 0)};
  /* visibility: ${(Props) => (Props.visible ? "visible" : "hidden")}; */
  display: ${(Props) => (Props.visible ? "block" : "none")};
  animation: ${(Props) => (Props.visible ? shake_animation : null)} 5s ease;
  .container {
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    color: white;
  }
`;
