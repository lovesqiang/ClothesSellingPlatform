// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      inputVal:'',
      searchShop:[],
      like:['2021新款','韩版','针织衫','显瘦','直筒','青春','圆领','高腰'],
      focus:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索',
     })
     this.setData({
       focus:true
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

  getInput(event){
    const that = this
    that.setData({
      inputVal : event.detail.value
    })
  },

  search(){
    const that = this
    let val = this.data.inputVal
    wx.request({
      url: 'http://localhost:3366/searchShop',
      method:'GET',
      data:{
        text:val
      },
      success(data){
        that.setData({
          searchShop:data.data
        })
      }
    })
  },

  getLike(event) {
    const that=this;
    that.setData({
      inputVal:event.target.dataset.like
    })
    that.search()
  }



})