// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  var num = event.num
  return await db.collection("hot_swiper_list").orderBy("_createTime", "desc").limit(num).get()
}