// pages/home/home.js
import {
  LocalCash
} from '../../datas/LocalCach';
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    cardCur: 0,
    swiperList: [],
    iconList: [{
      icon: 'wefill',
      color: 'red',
      name: '活动报名',
      url: '/pages/home/businessList/businessList'
    }, {
      icon: 'post',
      color: 'pink',
      name: '参加培训',
      url: '/pages/home/businessList/businessList'
    }, {
      icon: 'moneybagfill',
      color: 'yellow',
      name: '时间币',
      url: '/pages/home/businessList/businessList'
    }, {
      icon: 'evaluate_fill',
      color: 'olive',
      name: '心愿墙',
      url: '/pages/home/businessList/businessList'
    }, {
      icon: 'friendfill',
      color: 'cyan',
      name: '加入团队',
      url: '/pages/home/businessList/businessList'
    }, {
      icon: 'locationfill',
      color: 'mauve',
      name: '服务地图',
      url: '/pages/home/businessList/businessList'
    }],
    gridCol: 3,
    msgList: [],
    postListdata: [],
    defaultImg: "/images/defaultThumb.jpg"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },

    newsMore(e) {
      console.log("tap more");
      wx.navigateTo({
        url: '/pages/home/news/newsList/newsList',
      })
    },

    newsDetail(e) {
      console.log("tap one news");
      console.log(e.target);
      wx.navigateTo({
        url: '/pages/home/news/newsDetail/newsDetail',
      })
    },

    myBusiness(e) {
      // console.log(e.target.dataset.bustype);
      wx.navigateTo({
        url: '/pages/home/myBusiness/myBusiness?bustype=' + e.target.dataset.bustype,
      })
    },

    storyDetail(e){
      console.log("tap one story");
      // console.log(e);
      wx.navigateTo({
        url: '/pages/home/news/richDetail/richDetail',
        success: function(res){
          res.eventChannel.emit('acceptDataFromOpenerPage', e.currentTarget.dataset.content)
        }
      })
    },

    moreStory(){
      wx.navigateTo({
        url: '/pages/home/news/publicGoodStory/storyList',
      })
    }
  },

  lifetimes: {
    created: function () {
      console.log("c-created")
      wx.cloud.callFunction({
        name: "getStoryList",
        data: {
          num: 6,
          page: 0
        }
      }).then(res => {
        console.log(res.result.data)
        this.setData({
          postListdata: res.result.data
        })
      })
    },
    ready: function () {
      console.log("c-ready")
    },
    attached: function () {
      console.log("c-attached")
      // this.newsListObj = new LocalCash('newsList');
      this.msgListOjb = new LocalCash('msgList');
      this.hostListObj = new LocalCash('hotsList');
      this.setData({
        swiperList: this.hostListObj.getAllData(),
        msgList: this.msgListOjb.getAllData(),
        // postListdata: this.newsListObj.getAllData()
      })
    }
  }
})