/* global IODIDE_PUBLIC */
import React from "react";
import PropTypes from "prop-types";

import Header from "../components/header";
import PageBody from "../components/page-body";
import PageHeader from "../components/page-header";
import TopContainer from "../components/page-containers/top-container";
import MarketingCopySplash from "../components/splash/marketing-copy-splash";
import LoggedInSplash from "../components/splash/logged-in-splash";
import AttentionBlock from "../components/attention-block";
import NewNotebookButton from "../components/new-notebook-button";
import FeaturedNotebooks from "../../shared/components/featured-notebooks";
import { sharedProperties } from "../../server/style/base";

const LetsGetStarted = () => (
  <AttentionBlock>
    <NewNotebookButton />
  </AttentionBlock>
);
export default class HomePage extends React.Component {
  static propTypes = {
    userInfo: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string
    })
  };
  render() {
    const isLoggedIn = "name" in this.props.userInfo;
    return (
      <div>
        <Header userInfo={this.props.userInfo} />
        <PageBody>
          <TopContainer>
            {!isLoggedIn && !IODIDE_PUBLIC && <MarketingCopySplash />}
            {!isLoggedIn && IODIDE_PUBLIC && <LetsGetStarted />}
            {isLoggedIn && <LoggedInSplash userInfo={this.props.userInfo} />}
            <PageHeader>Get started with one of these examples</PageHeader>
            <FeaturedNotebooks width={`${sharedProperties.pageWidth}px`} />
          </TopContainer>
        </PageBody>
      </div>
    );
  }
}
