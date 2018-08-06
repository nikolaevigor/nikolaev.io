import React from "react";
import styled from "styled-components";

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
  align-items: flex-end;
  list-style-type: none;
  font-size: 14px;
  color: #9b9b9b;
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
  cursor: pointer;

  @media (max-width: 700px) {
    margin-right: 0.5rem;
  }
`;

const Link = styled.li`
  &:hover {
    text-decoration: none;
    position: relative;
  }
  &:hover::after {
    position: absolute;
    content: "";
    height: 2px;
    bottom: 2px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    background: #42bffe;
  }
`;

export default () => (
  <Links>
    <Link>experience</Link>
    <Link>telegram</Link>
    <Link>github</Link>
    <Link>stackoverflow</Link>
    <Link>twitter</Link>
  </Links>
);
