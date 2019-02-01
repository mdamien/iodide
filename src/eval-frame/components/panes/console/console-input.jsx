import React from "react";
import styled from "react-emotion";
import DoubleChevronIcon from "../double-chevron-icon";
import BaseIcon from "./base-icon";
import ConsoleContainer from "./console-container";
import ConsoleGutter from "./console-gutter";

const DoubleChevron = styled(BaseIcon(DoubleChevronIcon))`
  margin: 0;
  opacity: 0.3;
`;

const InputContainer = styled(ConsoleContainer)`
  overflow: auto;
  margin-bottom: 0px;
  margin-top: 0px;
  background-color: #fbfbfd;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const InputBody = styled("pre")`
  padding: 8px;
  padding-left:0px;
  padding-right:0px;
  font-family: monospace;
  grid-column: 2 / 4;
  margin: 0;
  opacity:.7;

  :before {
    font-family: sans-serif;
    content: "${props => props.language || ""}";
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 3px;
    color: rgba(0,0,0,.5);
    padding: 3px;
    padding-right:5px;
    padding-left:5px;
    font-size: 0.8em;
    float: right;
    transform: translate(0px, -8px);
  }
`;

export default class ConsoleInput extends React.Component {
  render() {
    return (
      <InputContainer>
        <ConsoleGutter side="left">
          <DoubleChevron />
        </ConsoleGutter>
        <InputBody language={this.props.language}>
          {this.props.children.trim()}
        </InputBody>
      </InputContainer>
    );
  }
}