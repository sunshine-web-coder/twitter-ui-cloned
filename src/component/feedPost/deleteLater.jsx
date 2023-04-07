import React from "react";
import FeedPostStyle from "./FeedPost.module.scss";
import avatar from "../../assets/UNJ05AV8_400x400.jpg";
import { Link } from "react-router-dom";
import { FeedPostData } from "../data/FeedPost";

const FeedPost = () => {
  return (
    <>
    {FeedPostData.map((data, i) => (
      <div className={FeedPostStyle.feedPost} key={i}>
        <div className={FeedPostStyle.top}>
          <div className="lAvatar">
            <div className="avatar">
              <img src={data.avatar} alt="" />
            </div>
          </div>
          <div className={FeedPostStyle.right}>
              <div className={FeedPostStyle.top}>
                  <div className={FeedPostStyle.fphds76}>
                      <span className={FeedPostStyle.name}><Link to="">{data.name}</Link></span>
                      <span className={FeedPostStyle.userName}><Link to="">@{data.username}</Link></span>
                      <span className={FeedPostStyle.dot}>.</span>
                      <span className={FeedPostStyle.time}>12h</span>
                  </div>
                  <div className="sBut47378">
                    <div className="inner_sBut47378">
                      <div className='fp32868bIcon fphds39Icon'><svg viewBox="0 0 24 24" aria-hidden="true" className="r_feed_icon"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg></div>
                    </div> 
                  </div>
                  
              </div>
              <div className={FeedPostStyle.tweetText}>
                  <span>{data.post_text}</span>
              </div>
              <div className={FeedPostStyle.image_video_w82}>
                  <img src={data.post_img} alt="" />
              </div>
              <div className={FeedPostStyle.bottom}>
                  <div className="sBut47378">
                      <div className="inner_sBut47378 bottomFp">
                        {data.bottom_icons.map((bIcon, i) => (
                          <div className="fp32868b fpbTom868b" key={i}>
                            <div className="fp32868bIcon fp3U68bIcon">{bIcon.icon}</div>
                            <span>{bIcon.counts}</span>
                          </div>
                        ))}
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className={FeedPostStyle.thread_show}></div>
      </div>
    ))}
      
    </>
    
  );
};

export default FeedPost;
