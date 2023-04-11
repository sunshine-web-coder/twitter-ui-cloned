import React from "react";
import FeedSection from "../../../component/feedSection/FeedSection";
import SideBar from "../../../component/sidebarMenu/SideBar";
import TrendSection from "../../../component/trendSection/TrendSection";
import HomeStyle from "./Home.module.scss";
import { Message } from "../../../component/message/Message";
import MobileHeader from "../../../component/mobileHeader/MobileHeader";
import MobileBottomMenu from "../../../component/mobileBottomMenu/MobileBottomMenu";

const Home = () => {
  return (
    <div className={HomeStyle.home_page}>
      <MobileHeader />
      <div className={HomeStyle.inner_home_page}>
        <SideBar />
        <FeedSection />
        <TrendSection />
      </div>
      <Message />
      <div className={HomeStyle.tweetMobileButton}>
        <svg viewBox="0 0 24 24" aria-hidden="true" className=""><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
      </div>
      <MobileBottomMenu />
    </div>
  );
};

export default Home;
