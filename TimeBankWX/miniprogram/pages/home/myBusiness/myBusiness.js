// pages/home/myBusiness/myBusiness.js
import { LocalCash } from '../../../datas/LocalCach'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft: 0,
    /* state 1 审核中 2 招募中 3 已报名 4 进行中/服务中 5 已完成 6 已关闭 */
    tabs: [
      [{ index: 0, state: 0 }, { index: 1, state: 1 }, { index: 2, state: 2 }, { index: 3, state: 4 },
      { index: 4, state: 5 }, { index: 5, state: 6 }],
      [{ index: 0, state: 0 }, { index: 1, state: 3 }, { index: 2, state: 4 }, { index: 3, state: 5 },
      { index: 4, state: 6 }]
    ],
    businessList: [],
    bustype: 0,
    listLen: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bustype = options.bustype;
    // console.log("onload bustype=" + this.bustype);
    this.businessList = this.getCurListData(this.bustype);
    this.tabList = this.data.tabs[this.bustype];
    // console.log(this.businessList);
    // console.log(this.tabList);
    this.setData({
      businessList: this.businessList,
      listLen: this.businessList.length,
      tabList: this.tabList,
      bustype: this.bustype
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  tabSelect: function (e) {
    var filterKey = e.currentTarget.dataset.state;
    // console.log('filterKey=' + filterKey);
    var curList = (filterKey != 0) ? this.getSubList(filterKey) : this.businessList;
    // console.log('curlist=' + curList);
    this.setData({
      businessList: curList,
      TabCur: e.currentTarget.dataset.index,
      tabList: this.tabList,
    })
  },

  getSubList: function (filterKey) {
    // console.log(this.businessList);
    var res = [];
    for (var i = 0, len = this.businessList.length; i < len; i++) {
      if (this.businessList[i].state === filterKey)
        res.push(this.businessList[i]);
    }
    return res;
  },

  getCurListData: function (type) {
    if (type == 1) {
      if (this.myServiceObj == null)
        this.myServiceObj = new LocalCash('serviceList');
      return this.myServiceObj.getAllData();
    } else {
      if (this.myRequeObj == null)
        this.myRequeObj = new LocalCash('requeList');
      return this.myRequeObj.getAllData();
    }
  }
})