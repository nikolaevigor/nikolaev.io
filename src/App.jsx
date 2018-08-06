import React, { Component } from "react";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";
import "./App.css";

import TelegramMessage from "./TelegramMessage";
import Links from "./Links";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MessageLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  max-width: 30rem;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content>
          <MessageContainer>
            <Grid id="message">
              <MessageWrapper>
                <MessageLink href="https://t.me/nikolaevigor">
                  <TelegramMessage />
                </MessageLink>
              </MessageWrapper>
              <MessageWrapper>
                <Links />
              </MessageWrapper>
            </Grid>
          </MessageContainer>
        </Content>
      </div>
    );
  }
}

export default App;
