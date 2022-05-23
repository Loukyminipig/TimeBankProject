// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

Page({
  data: {
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false,
    PageCur: 'home'
  },

  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
});
