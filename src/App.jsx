import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import style from "./Themes.module.scss";
import Home from "./view/dashboard/home/Home";
import ComposeTweet from "./component/modals/compose/ComposeTweet";
import TwitterBlue from "./component/modals/twitterBlue/TwitterBlue";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  return (
    <div className={theme === "light" ? style.light_theme : style.dark_theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home toggleTheme={toggleTheme} theme={theme} />}>
            <Route path="compose/tweet" element={<ComposeTweet theme={theme} />} />
            <Route path="i/twitter_blue_sign_up" element={<TwitterBlue theme={theme} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
