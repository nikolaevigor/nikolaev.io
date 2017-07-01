import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4px;
  flex-shrink: 0;
`;

const Text = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  color: #56bf4d;
  align-content: center;
`;

const Icon = styled.img`
  margin-left: 8px;
  height: 24px;
  width: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default () =>
  <Footer>
    <Wrapper>
      <Text>reach me via:</Text>
      <a href="https://t.me/nikolaevigor">
        <Icon src={`${process.env.PUBLIC_URL}/img/tg50.png`} />
      </a>
    </Wrapper>
    <Wrapper>
      <Text>find me here:</Text>
      <a href="https://github.com/nikolaevigor">
        <Icon src={`${process.env.PUBLIC_URL}/img/gh50.png`} />
      </a>
      <a href="https://stackoverflow.com/users/story/4113768">
        <Icon src={`${process.env.PUBLIC_URL}/img/so50.png`} />
      </a>
      <a href="https://twitter.com/NikolaevIgor">
        <Icon src={`${process.env.PUBLIC_URL}/img/twi50.png`} />
      </a>
    </Wrapper>

  </Footer>;
