// pages/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        order:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getOrder()
          wx.setNavigationBarTitle({
            title: '订单',
           }) 
    },

    getOrder(){
        const that = this
        wx.request({
          url: 'http://localhost:3366/order',
          method:'GET',
          success(data){
              that.setData({
                  order:data.data
              })
          }
        })
    },

    delOrder(e){
        const that = this
        let id = e.target.dataset.id
        wx.request({
          url: 'http://localhost:3366/delOrder',
          method:'POST',
          data:{
              o_id:id
          },
          success(data){
              that.getOrder()
              wx.showToast({
                title: '删除订单成功',
                icon:'success',
                duration:1500
              })
          }

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

    }
})