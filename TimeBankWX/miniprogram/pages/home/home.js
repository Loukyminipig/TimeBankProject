// pages/home/home.js
import { LocalCash } from '../../datas/LocalCach';
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

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
    },{
      icon: 'evaluate_fill',
      color: 'olive',
      name: '微心愿',
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
    postListdata: []
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
      console.log(e.target.dataset);
      wx.navigateTo({
        url: '/pages/home/news/newsDetail/newsDetail',
      })
    },

    myBusiness(e) {
      // console.log(e.target.dataset.bustype);
      wx.navigateTo({
        url: '/pages/home/myBusiness/myBusiness?bustype=' + e.target.dataset.bustype,
      })
    }
  },

  lifetimes: {
    attached: function () {
      this.newsListObj = new LocalCash('newsList');
      this.msgListOjb = new LocalCash('msgList');
      this.hostListObj = new LocalCash('hotsList');
      this.setData({
        swiperList: this.hostListObj.getAllData(),
        msgList: this.msgListOjb.getAllData(),
        postListdata: this.newsListObj.getAllData()
      })
    }
  }
})
