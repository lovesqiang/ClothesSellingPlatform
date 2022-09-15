// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置导航栏标题
  wx.setNavigationBarTitle({
    title: '消息',
   }) 
    this.getNews()
    
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

//从服务器获取消息数据
getNews() {
  const that=this
  wx.request({
    url: 'http://localhost:3366/news',
    method:'GET',
    success(data){
      that.setData({
         news:data.data
      })
    }
  })
}

})