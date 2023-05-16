import styled from "styled-components";

export const BodySTY = styled.div<{ padding: string, gap: string, flexDirection: string }>`
  padding: ${props => props.padding ? props.padding : "1rem"} ;
  display: flex;
  gap:${props => props.gap ? props.gap : "10px"};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : "row"};
  /* flex-direction: column; */
  & > * {
    display: block;
    flex:1;
  }
`;