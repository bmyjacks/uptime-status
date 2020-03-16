// 配置
window.Config = {

  // 站点名
  SiteName: 'BMYJACKS Service Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm784514358-420ca4f5c4f4ee92ff06a064',
    'm784379265-9fd5d1878f815ef86e8c5162',
    'm784514386-b3bde2a0c57c7e6737269fc1',
    'm784379275-9dd5f08a54c09b167733009e',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 导航栏菜单
  Navi: [
    {
      text: 'Status',
      url: 'https://status.bmyjacks.cn/'
    },
    {
      text: 'Blog',
      url: 'https://www.bmyjacks.cn/'
    }
  ]
};
