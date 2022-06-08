// pages/home/news/publicGoodStory/storyList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storyListData: [],
    defaultImg: "/images/storyListTumb.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("storyList onLoad")
     wx.cloud.callFunction({
        name: "getStoryList",
        data: {
          num: 8
        }
      }).then(res => {
        console.log(res.result.data)
        this.setData({
          storyListData : res.result.data
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  storyDetail:function(e){
    console.log("tap one storyDetail");
    // console.log(e.currentTarget.dataset);
    wx.navigateTo({
      url: '/pages/home/news/richDetail/richDetail',
      success: function(res){
        res.eventChannel.emit('acceptDataFromOpenerPage', e.currentTarget.dataset.content)
      }
    })
  }
})