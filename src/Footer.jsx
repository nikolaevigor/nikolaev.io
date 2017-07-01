import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 8px;
  flex-shrink: 0;
`;

const Text = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  color: #56bf4d;
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 4px;
`;

const Icon = styled.img`
  height: 25px;
  width: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  display: flex;
  margin-left: 8px;
  align-items: center;
`;

export default () =>
  <Footer>
    <Wrapper>
      <Text>reach me via:</Text>
      <Link href="https://t.me/nikolaevigor">
        <Icon src={`${process.env.PUBLIC_URL}/img/tg50.png`} />
      </Link>
    </Wrapper>
    <Wrapper>
      <Text>find me here:</Text>
      <Link href="https://github.com/nikolaevigor">
        <Icon src={`${process.env.PUBLIC_URL}/img/gh50.png`} />
      </Link>
      <Link href="https://stackoverflow.com/users/story/4113768">
        <Icon src={`${process.env.PUBLIC_URL}/img/so50.png`} />
      </Link>
      <Link href="https://twitter.com/NikolaevIgor">
        <Icon src={`${process.env.PUBLIC_URL}/img/twi50.png`} />
      </Link>
    </Wrapper>

  </Footer>;
