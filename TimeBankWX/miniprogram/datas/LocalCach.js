class LocalCash {
  constructor(dataName) {
    this.storageKeyName = dataName;
  }

  getAllData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      var dataObj = require("../datas/data.js");
      if (this.storageKeyName == "newsList")
        res = dataObj.newsList;
      else if (this.storageKeyName == "hotsList") {
        res = dataObj.hotsList;
      } else if(this.storageKeyName == "msgList"){
        res = dataObj.msgList;
      } else if(this.storageKeyName == "serviceList"){
        res = dataObj.serviceList;
      } else if(this.storageKeyName == "requeList"){
        res = dataObj.requeList;
      }
      this.exeStorageSync(this.storageKeyName, res);
    }
    return res;
  }

  exeStorageSync(key, data){
    wx.setStorageSync(key, data);
  }
}

module.exports = {
  LocalCash: LocalCash
}