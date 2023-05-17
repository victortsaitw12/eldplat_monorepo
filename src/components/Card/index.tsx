import React from "react";
import styled from "styled-components";
const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color["N100"]};
  gap: 20px;
  padding: 30px 20px;
  background-color: #fff;
  margin-bottom: 10px;
  .title {
    font-weight: 600;
    font-size: 16px;
  }
  .content {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    gap: 20px;
  }
`;

const Card = ({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <BodySTY>
      <div className="title">{title}</div>
      <div className="content">{children}</div>
    </BodySTY>
  );
};
export default Card;
