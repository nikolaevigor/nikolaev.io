import React, { Component } from "react";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";
import "./App.css";

import TelegramMessage from "./TelegramMessage";
import Footer from "./Footer";

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
  width: 100%;
  text-decoration: none;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content>
          <MessageContainer>
            <Grid id="message">
              <MessageWrapper>
                <MessageLink href="http://cybermates.org">
                  <TelegramMessage />
                </MessageLink>
              </MessageWrapper>
            </Grid>
          </MessageContainer>
          <Grid>
            <Footer />
          </Grid>
        </Content>
      </div>
    );
  }
}

export default App;
