var newsList = [{
  content: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
  title: "五大装备+两大管家...",
  datetime: "2020-12-09 17:09:20"
},
{
  content: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84002.jpg',
  title: "“家外有家”，社区...",
  datetime: "2020-12-09 17:00:09"
},
{
  content: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84003.jpg',
  title: "满足居民“家门口”需求...",
  datetime: "2020-12-09 15:07:49"
},
{
  content: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84004.jpg',
  title: "独居老人的生活也可以...",
  datetime: "2020-09-15 18:14:23"
},
{
  content: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84005.jpg',
  title: "羡慕！普陀万里的老年...",
  datetime: "2020-09-15 18:11:08"
},
{
  content: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84006.jpg',
  title: "全国首个市场化适老化...",
  datetime: "2020-09-15 18:00:58"
}];

var msgList = [{
  title: "金山社区积极推进嵌入式养老工作...",
  url: ""
}, {
  title: "独居老人的生活也可以丰富多彩...",
  url: ""
}, {
  title: "满足“家门口”养老需求，市府社区...",
  url: ""
}, {
  title: "全国首个市场化适老化改造项目落地...",
  url: ""
}];

var hotsList = [{
  id: 0,
  type: 'image',
  url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
}, {
  id: 1,
  type: 'image',
  url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
}, {
  id: 2,
  type: 'image',
  url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
}];

/* 
==>type
0 全部
1 健康科普-{0-健康知识宣传 1-心理咨询 2-其他}
2 情感慰藉-{0-陪伴聊天 1-其他}
3 法律援助-{0-法律咨询 1-其他}
4 文体活动-{0-文体活动 1-其他}
5 出行陪伴-{0-陪同购物 1-陪同就医 2-其他}
6 培训讲座-{0-智能设备培训 1-厨艺培训 2-其他}
7 防范金融和网络风险-{0-防范网络诈骗 1-防范金融诈骗 2-其他}
==>state
0 全部 1 审核中 2 招募中 3 已报名 4 进行中/服务 5 已完成 6 已关闭 
==>partner
1人 >1人
*/
// 模拟志愿者业务数据
var businessList1 = [{
  id: '202109270042',
  title: '爱心早点志愿者',
  type: 0,
  datetime: '2021-09-27 07:00-08:00',
  position: '凯里市金地花园...',
  state: 3,
}, {
  id: '202109270040',
  title: '老年合唱',
  type: 2,
  datetime: '2021-09-26 17:00-18:00',
  position: '凯里市金湖华庭...',
  state: 1,
}, {
  id: '202109270037',
  title: '散步聊天',
  type: 3,
  datetime: '2021-09-26 10:00-11:30',
  position: '凯里市苹果山社区...',
  state: 5,
}, {
  id: '202109270033',
  title: '陪伴聊天',
  type: 1,
  datetime: '2021-09-26 16:00-17:00',
  position: '凯里市贵都花园...',
  state: 4,
}, {
  id: '202109270050',
  title: '老年人心血管疾病知识科普',
  type: 8,
  datetime: '2021-09-30 09:00-10:00',
  position: '凯里市市府社区老年活动中心...',
  state: 3,
}, {
  id: '202109270053',
  title: '上门打扫卫生',
  type: 5,
  datetime: '2021-09-27 07:00-08:00',
  position: '凯里市未来城...',
  state: 3,
}, {
  id: '202109270059',
  title: '免费上门理发',
  type: 4,
  datetime: '2021-09-30 20:00-21:00',
  position: '凯里市金泉花园...',
  state: 3,
}, {
  id: '202109270030',
  title: '爱心早点志愿者',
  type: 0,
  datetime: '2021-09-23 07:00-08:00',
  position: '凯里市金地花园...',
  state: 5,
}, {
  id: '202109270029',
  title: '爱心早点志愿者',
  type: 0,
  datetime: '2021-09-22 07:00-08:00',
  position: '凯里市金地花园...',
  state: 5,
}, {
  id: '202109270028',
  title: '爱心早点志愿者',
  type: 0,
  datetime: '2021-09-21 07:00-08:00',
  position: '凯里市金地花园...',
  state: 5,
}, {
  id: '202109270027',
  title: '爱心早点志愿者',
  type: 0,
  datetime: '2021-09-20 07:00-08:00',
  position: '凯里市金地花园...',
  state: 5,
}];

// 模拟老人业务数据
var businessList2 = [{
  id: '202109270042',
  title: '爱心早点志愿者',
  type: 0,
  datetime: '2021-09-27 07:00-08:00',
  position: '凯里市金地花园...',
  state: 2,
}, {
  id: '202109270040',
  title: '老年合唱',
  type: 2,
  datetime: '2021-09-26 17:00-18:00',
  position: '凯里市金湖华庭...',
  state: 1,
}, {
  id: '202109270037',
  title: '散步聊天',
  type: 3,
  datetime: '2021-09-26 10:00-11:30',
  position: '凯里市苹果山社区...',
  state: 5,
}, {
  id: '202109270033',
  title: '陪伴聊天',
  type: 1,
  datetime: '2021-09-26 16:00-17:00',
  position: '凯里市贵都花园...',
  state: 4,
}, {
  id: '202109270050',
  title: '老年人心血管疾病知识科普',
  type: 8,
  datetime: '2021-09-30 09:00-10:00',
  position: '凯里市市府社区老年活动中心...',
  state: 4,
}, {
  id: '202109270053',
  title: '上门打扫卫生',
  type: 5,
  datetime: '2021-09-27 07:00-08:00',
  position: '凯里市未来城...',
  state: 4,
}];

module.exports = {
  newsList: newsList,
  msgList: msgList,
  hotsList: hotsList,
  serviceList: businessList1,
  requeList: businessList2
}