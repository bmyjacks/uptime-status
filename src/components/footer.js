import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作，检测频率 5 分钟</p>
        <p>&copy; 2020 <Link to="https://www.bmyjacks.cn/" text="BMYJACKS Group" /></p>
        <p> 感谢 <a href="https://github.com/yb/uptime-status">yb/uptime-stats</a></p>
      </div>
    </div>
  );
}

export default Footer;
