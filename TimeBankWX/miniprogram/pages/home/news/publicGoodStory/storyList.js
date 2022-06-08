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
    this.getData()
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
    // console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // console.log("onReachBottom")
    var page = this.data.storyListData.length
    // console.log("page=" + page)
    this.getData(8,page)
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
  },

  getData:function(num=8, page=0){
    wx.cloud.callFunction({
      name: "getStoryList",
      data: {
        num: num,
        page: page
      }
    }).then(res => {
        var oldData = this.data.storyListData
        var newData = oldData.concat(res.result.data)
        console.log(newData)
        this.setData({
          storyListData : newData
        })
    })
  }
})