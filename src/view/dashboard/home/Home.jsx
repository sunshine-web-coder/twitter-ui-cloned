import React from "react";
import FeedSection from "../../../component/feedSection/FeedSection";
import SideBar from "../../../component/sidebarMenu/SideBar";
import TrendSection from "../../../component/trendSection/TrendSection";
import HomeStyle from "./Home.module.scss";

const Home = () => {
  return (
    <div className={HomeStyle.home_page}>
      <div className={HomeStyle.inner_home_page}>
        <SideBar />
        <FeedSection />
        <TrendSection />
      </div>
    </div>
  );
};

export default Home;
