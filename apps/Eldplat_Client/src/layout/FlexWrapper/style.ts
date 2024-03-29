import styled from "styled-components";

export const BodySTY = styled.div<{
  padding: string;
  gap: string;
  flexDirection: string;
}>`
  display: flex;
  gap: ${(props) => (props.gap ? props.gap : "10px")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  flex: 1;
`;
