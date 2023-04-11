import React from "react";
import TrendSectionStyle from "./TrendSection.module.scss";
import SearchBar from "./searchBar/SearchBar";
import Trend from "./trend/Trend";
import WhoToFollow from "./who-to-follow/WhoToFollow";
import { Footer } from "./footer/Footer";

const TrendSection = () => {
  return (
    <div className={TrendSectionStyle.trend_section}>
      <SearchBar />
      <Trend />
      <div className={TrendSectionStyle.dhdhs8788}>
        <WhoToFollow />
        <Footer />
      </div>
    </div>
  );
};

export default TrendSection;
