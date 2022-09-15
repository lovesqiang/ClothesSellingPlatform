// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sort:[],
    show:[],
    catagory:'',
    sort_id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSort()
    this.setData({
      sort_id:options.s_id
    })
    wx.setNavigationBarTitle({
      title: '分类',
     }) 
    this.getShow()
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
    this.getCurrentSort
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

  getSort(){
    const that=this;
    wx.request({
      url: 'http://localhost:3366/sort',
      method:"GET",
      success(data){
        that.setData({
          sort:data.data
        })
        that.getCurrentSort()
      }
    })
  },

  getId(e){
    const that = this
    that.setData({
      sort_id:e.target.dataset.id
    })
    that.getShow()
    that.getCurrentSort()
  },

  getShow(){
    const that = this
    let id = this.data.sort_id
    wx.request({
      url: 'http://localhost:3366/detailShop',
      method:'GET',
      data:{
        s_id:id
      },
      success(data){
        that.setData({
          show:data.data
        })
      }
    })

  },

  getCurrentSort(){
    const that = this
    let id = this.data.sort_id
    let list = this.data.sort
    for(let i=0;i<list.length;i++){
      if(list[i].s_id == id){
        that.setData({
          catagory:list[i].s_name
        })
      }
    }
  }
})