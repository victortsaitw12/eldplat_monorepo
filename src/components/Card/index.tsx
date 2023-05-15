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
      <h2>{title}</h2>
      {children}
    </BodySTY>
  );
};
export default Card;
