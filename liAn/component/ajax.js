function $request(url,type,callback,data){
  wx.request({
    url: url + App.globalData.url,
    method:type,
    data,
    header:{},//请求头
    success(res){
      callback(res);
    }
  })
}
module.exports = {
  $request //---ajax封装函数导出
}