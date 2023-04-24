import styled from "styled-components";

export const StarRateSTY = styled.div`
  display: flex;
  align-items: center;

  .rate {
    width: 30px;
  }

  .reviews {
    margin-left: 3px;
    text-decoration: none;
  }
`;

interface I_Star {
  status?: "empty" | "half" | "full";
}
export const StarSTY = styled.span<I_Star>`
  position: relative;
  width: 18px;
  height: 18px;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  background-color: #ddd;
  overflow: hidden;

  &:not(:last-child) {
    margin-right: 3px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";

    display: inline-block;
    height: 20px;
    background-color: #ffb020;

    width: ${(props) => {
      switch (props.status) {
        case "full":
          return "100%";
        case "half":
          return "50%";
        default:
          return 0;
      }
    }};
  }
`;
