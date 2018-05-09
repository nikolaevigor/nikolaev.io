import React from "react";
import styled from "styled-components";

const TelegramMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  background: #fff;
  width: 100%;
  max-width: 30rem;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }
`;

const Avatar = styled.img`
  flex-shrink: 0;
  height: 64px;
  width: 64px;
  padding-left: 4px;
`;

const Name = styled.h1`
  font-size: 16px;
  color: #000;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`;

const Message = styled.p`
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  color: #8e8d92;
  margin-top: 4px;
  margin-bottom: 24px;
`;

const Timestamp = styled.small`
  font-size: 14px;
  color: #999;
  margin-left: 4px;
`;

const TimestampWrapper = styled.div`
  display: flex;
  margin-right: 8px;
`;

const Content = styled.div`
  flex-grow: 1;
  justify-content: space-between;
  border-top: solid 1px #d5d5d8;
  border-bottom: solid 1px #d5d5d8;
  margin-left: 8px;

  &:hover {
    border-top: none;
    border-bottom: none;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 8px;
`;

export default () => (
  <TelegramMessage>
    <Avatar src={`${process.env.PUBLIC_URL}/img/avatar.png`} alt="Avatar" />
    <Content>
      <Row>
        <Name>Igor Nikolaev</Name>
        <TimestampWrapper>
          <img
            width="16"
            height="16"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABGZJREFUaAXtWGFoFFcQntm9mKpEFJFSKSLSQml/FW2CWMndEZGQ3Jn02JiWYhFBQSpYqC1ii7QqCPWHoEIriCDSxrvGnHtJrRDuYhWFovhDhIIoIsVSRCoN2mBy+zov7a6zL7d39xLu4o89uNt5s9+8mW/ezHu7BxB+wgyEGQgzEGYgzECYAcAXKQdWPtGKCPsFwgJ0nM/S8aELQfGp2EgQsN76VH5DC6LzM/l9CQX9onGMfl8rFUcp7AtB5L1C+6smOAOSBAvcZLInBmFnnUgil5gXAcwCiFe8aGkgBOxh40mxHNZQwXUdC8C5TXCS4l7p8yvEwUw8971fVx47q0SsQuJLENDDA6b2OPfmL6u+4DopV8LO2q7Vk0+kaM/MUIw8hptjDbjGftce5USqwfJJuG1N5dTF5NumIy6Rk/nM0UMDzOa+WPYe00G12Lo3+/vDyZeLQlBzMxICnhmGk+qL5nwkdLB17ZH2n9obi6YYoL5YxrNOB+D2vuiQXCHvo4OVRnUl0jSv4Tj5XO1F+59wOBPLnVB0oIOVtnUrLWukcxedDpv8AeMF8bDxU7+OdigNrGtbl2a38skORHGOnHqnNW2zv42DuTobyz52g5FXHSy3qzmRVD7xFkV/hTbZBczxX0VDtPS3Dt5mOtDBcjsp17RHuoe7F1Pt2gqJCQCnRyWhg1VJ1JTI1msrGyLmxI+0I63gjump5JN0bGiY63Sw3I7LNVuRx6NLj1DdRrkzkr/LxOyjig50sKqtO64JEauQ/JgcbHOdyCs198jCpgc7uE7KOljVlo/RGkmuQyEOSKUQ+FUmbg9xgK7cU+hoo9Y7T3be1k4vSnefOZHmgbaBR3w+HSy3KyXTk4H4lm68I7+0RWatQufGUsBqdKmLna8TiTRhPRK0FH9TdydVEjrYanyrpRVBwNPTIdNV6FpoOGiT00XMcZGa+4P+eO4W04EOltuVk4kI7iIAJc37aJOx0pY5B5w+au43vFlIECh2q6Wqg+VzVZKNM3H7rADxIQGnTQaXjB2isNf7nCGeykQHv/HpaKCDVW3LjSdLKxMbPDNdMvTmtoUc7FScXB19Or5V0cm3vKqxqm2lse8RRfaG7BEyet6stFKSpCSrTtY70rHWcYxhOrnnePcQ7psT2PxDm/2npyNBB8vtqpV9RKRRtWR6C13LHSj+SiZLmLMnRQPX9rfaN5gOdLDcTkdWdy2opsySl5NNRELuUJwELRx8pJLQweoErmKnrIgLCFoZKqNN9J8TlSBscLHySrq99BfO1/yABRT76JDdEoTl9jOVA4nIiQPITPWJkE635nqJpNiYT9xRHxR9Bgzr089wMKW0+HwBZcYhJOP1f0ZhsySh3Cgx1MGWMC+jKktE2lUg88cEjHflErmnz31MOWDdWyWw7q2ZXysSkS4CyIwVhdF9Nnb+dx5GwAFbEsvtZiqX7RF18v/fp/dO6hE/T0ftgopxxzpY1ya8hhkIMxBmIMxAmIHZysC/CdAvw97jXXMAAAAASUVORK5CYII="
            alt="Double check icon"
          />
          <Timestamp>1/10/16</Timestamp>
        </TimestampWrapper>
      </Row>
      <Message>Я сейчас в Cybermates</Message>
    </Content>
  </TelegramMessage>
);
