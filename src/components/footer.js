import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作，检测频率 5 分钟</p>
        <p>&copy; 2020 <Link to="https://www.bmyjacks.cn/" text="BMYJACKS Group" /></p>
        <p> 感谢 <Link to="https://github.com/yb/uptime-status" text="yb/uptime-status" /></p>
      </div>
    </div>
  );
}

export default Footer;
