// pages/login/login.js
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
  , login: function (e) {//登录
    console.log("login---> " + e.target.id);
  },
  register: function (e) {//注册
    console.log("register---> " + e.target.id);
  },
  findpwd: function (e) {//找回密码
    console.log("findpwd---> " + e.target.id);
  }
})