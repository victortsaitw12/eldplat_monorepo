import styled from "styled-components";

// 標籤
interface I_Tag {
  color?: string;
  backgroundColor?: string;
}
export const TagSTY = styled.span<I_Tag>`
  margin: 0 5px;
  padding: 5px 8px;
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor ?? "#eee"};
  color: ${(props) => props.color ?? "#222"};
  font-size: 12px;
`;

// 圖片
interface I_Image {
  status?: "success" | "error" | "pending" | "warning";
}
export const ImageSTY = styled.span<I_Image>`
  position: relative;
  width: 35px;
  height: 35px;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  &::after {
    position: absolute;
    right: -5px;
    bottom: -5px;
    display: ${(props) => (props.status ? "block" : "none")};
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: ${(props) => {
      switch (props.status) {
        case "success":
          return "#52bd94";
        case "error":
          return "#d14343 ";
        case "pending":
          return "#3670c9";
        case "warning":
          return "#ffb020";
        default:
          return "#808080";
      }
    }};
  }
`;

interface I_Avatar {
  size?: number;
}

// 頭像
export const AvatarSTY = styled.span<I_Avatar>`
  display: inline-block;
  width: ${({ size = 35 }) => `${size}px`};
  height: ${({ size = 35 }) => `${size}px`};
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// 狀態
interface I_Status {
  status?: "success" | "error" | "pending" | "warning";
}
export const StatusSTY = styled.span<I_Status>`
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    margin: 5px;
    border-radius: 50%;
    background-color: ${(props) => {
      switch (props.status) {
        case "success":
          return "#52bd94";
        case "error":
          return "#d14343 ";
        case "pending":
          return "#3670c9";
        case "warning":
          return "#ffb020";
        default:
          return "#808080";
      }
    }};
  }
`;

interface I_Text {
  status?: "success" | "error" | "pending" | "warning";
  changeColor?: number | string;
}
// 多行敘述
export const MultipleTxtSTY = styled.div<I_Text>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > div {
    letter-spacing: 0;

    &:nth-child(${({ changeColor = 2 }) => changeColor}) {
      color: ${(props) => {
        switch (props.status) {
          case "success":
            return "#52bd94";
          case "error":
            return "#d14343 ";
          case "pending":
            return "#3670c9";
          case "warning":
            return "#ffb020";
          default:
            return "#808080";
        }
      }};
    }
  }
`;
