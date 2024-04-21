import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "E:\\Web前端之路\\project\\my-site\\src\\assets\\smile.jpg",
    siteTitle: "我的个人空间",
    yuque: "https://www.yuque.com/ymwang",
    qq: "267***0403",
    qqQrCode: "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    weixin: "ymwang",
    weixinQrCode: "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    mail: "267***0403@qq.com",
    icp: "xxx备xxx号",
    githubName: "前行者",
    favicon: "https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*PXAJTYXseTsAAAAAAAAAAAAADvuFAQ/original",
  },
});
