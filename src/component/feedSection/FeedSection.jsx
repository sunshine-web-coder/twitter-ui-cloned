import React, { useState } from "react";
import FeedSectionStyle from "./FeedSection.module.scss";

import { FHeader } from "./header/FHeader";
import Tweet from "./tweet/Tweet";
import ShowMoreFeed from "../showMoreFeed/ShowMoreFeed";
import FeedPost from "../feedPost/FeedPost";

const FeedSection = () => {
  
  return (
    <div className={FeedSectionStyle.feed_section}>
      <div className={FeedSectionStyle.inner_feed_section}>
        <FHeader />
        <div className={FeedSectionStyle.main_feed}>
          <Tweet />
        </div>
        <ShowMoreFeed />
        <FeedPost />
      </div>
    </div>
  );
};

export default FeedSection;
