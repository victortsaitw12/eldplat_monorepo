import styled from "styled-components";

export const EventListSTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const EventBtnSTY = styled.div<{ duration: number; color?: string }>`
  .reminder {
    animation: 200ms ease-out 200ms infinite alternate reminder;
    /* animation-delay: 200ms;
    animation-timing-function: ease-out;
    animation-duration: 200msr; */
  }

  @keyframes reminder {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.6;
    }
  }
  button {
    width: ${({ duration }) =>
      "calc(" + duration * 100 + "% + " + (duration - 1) * 16 + "px)"};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    gap: 4px;
    background: ${({ theme, color }) => (color ? theme.color[color] : "unset")};
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.N0};
    z-index: 1;
    padding: 4px 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* display: -webkit-box;
    -webkit-box-orient: vertical; */
    cursor: pointer;

    svg {
      width: 12px;
      min-width: 12px;
      height: 12px;
      fill: ${({ theme }) => theme.color.N0};
    }
  }
`;
