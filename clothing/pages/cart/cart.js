// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart_shop:[], //存放购物车数据
    allChoose:false, //是否全选
    sum:0,  //商品总数,
    allPrice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车',
     }) 
  },

  //获取购物车数据
  getCart(){
    const that = this
    let cart = this.data.cart_shop
    let list = []
    let allSelect = ''
    wx.request({
      url: 'http://localhost:3366/cartDetail',
      method:'GET',
      success(data){
          data.data.forEach(function(item,index){
            list.push({checked:false,...item})
          })
          // 如果cart_shop不为空，并且不比当前的list长，证明cart_shop有数据，list需要获得之前的checked数据
          if(cart.length !== 0 && cart.length<= list.length){
            for(let i=0;i<cart.length;i++){
              list[i].checked = cart[i].checked
            }
          }
          if(list.length == 0){
            allSelect=false
          }
          else{
            allSelect = that.data.allChoose
          }
        that.setData({
          cart_shop:list,
          allChoose:allSelect
        })
        that.total()
        that.totalPrice()
        
      }
    })
  },

  //数量增加
  addNum(e){
    const that = this
    let id = e.target.dataset.id
    let num = e.target.dataset.num + 1
    wx.request({
      url: 'http://localhost:3366/updateCart',
      method:'POST',
      data:{
        w_id:id,
        num:num
      },
      success(data){
        that.getCart()
        if(data.statusCode === 200){
          wx.showToast({
            title: '添加成功',
            icon:'success',
            duration:1500
          })
        }
      }
    })
    
  },

  //数量减少,减到0自动删除
  deNum(e){
    const that = this
    let id = e.target.dataset.id
    let num = e.target.dataset.num
    if(num > 1){
      wx.request({
        url: 'http://localhost:3366/updateCart',
        method:'POST',
        data:{
          w_id:id,
          num:num - 1
        },
        success(data){
          that.getCart()
          if(data.statusCode === 200){
            wx.showToast({
              title: '减少成功',
              icon:'success',
              duration:1500
            })
            that.total()
          }
        }
      })
    }
    else{
      wx.request({
        url: 'http://localhost:3366/delCart',
        method:'POST',
        data:{
          w_id:id
        },
        success(data){
          that.getCart()
          if(data.statusCode === 200){
            wx.showToast({
              title: '删除成功',
              icon:'success',
              duration:1500
            })
            that.total()
          }
        }
      })
    }
    
  },

  //改变选中状态
  changeState(e){
    const that = this
    let id = e.target.dataset.id
    let list = this.data.cart_shop

    let select = true
    for(let i=0;i<list.length;i++){
      if(id === list[i].c_id){
        list[i].checked = !list[i].checked
      }
    }
    for(let i=0;i<list.length;i++){
      if(list[i].checked === false){
        select = false
      }
    }
    that.setData({
      cart_shop:list,
      allChoose:select
    })
    this.total()
    this.totalPrice()
    
  },

  //设置全选
  allSelect(){
    const that = this
    let list = this.data.cart_shop
    let select = this.data.allChoose
    select = !select
    for(let i=0;i<list.length;i++){
      if(list[i].checked != select)
      list[i].checked = select
    }
    that.setData({
      cart_shop:list,
      allChoose:select
    })
    that.total()
    that.totalPrice()
  },

  //加入订单，先加入shoporder表，在删除cart表的数据
  addOrder(){
    let that = this
    let list = this.data.cart_shop
    let newList = []
    for(let i=0;i<list.length;i++){
      if(list[i].checked === true){
        newList.push(list[i])
      }
    }
    for(let i=0;i<newList.length;i++){
      wx.request({
        url: 'http://localhost:3366/addOrder',
        method:'POST',
        data:{
          w_id:newList[i].w_id,
          num:newList[i].num
        },
        success(data){
          wx.showToast({
            title: '添加订单成功',
            icon:'success',
            duration:1500
          })
          wx.request({
            url: 'http://localhost:3366/delCart',
            method:'POST',
            data:{
              w_id:newList[i].w_id
            },
            success(data){
              that.getCart()
            }
        })
    }
  })
  }
},

  //计算选中商品总数
  total(){
    const that = this
    let list = this.data.cart_shop
    let num = 0
    for(let i=0;i<list.length;i++){
      if(list[i].checked === true){
        num += list[i].num
      }
    }
    that.setData({
      sum:num
    })

  },

   //计算选中商品总数
  totalPrice(){
    const that = this
    let list = this.data.cart_shop
    let price = 0
      for(let i=0;i<list.length;i++){
        if(list[i].checked == true){
          price +=list[i].price * list[i].num
        }
      }
      that.setData({
        allPrice:price
      })
  },

  //删除订单
  delCart(){
    let list = this.data.cart_shop
    let newList = []
    const that = this
    for(let i=0;i<list.length;i++){
      if(list[i].checked == true){
        newList.push(list[i])
      }
    }
    wx.showModal({
      title: '提示',
      content: '是否确认删除',
      success(res) {
       if (res.confirm) {
        console.log('用户点击确定')
        for(let i=0;i<newList.length;i++){
          wx.request({
            url: 'http://localhost:3366/delCart',
            method:'POST',
            data:{
              w_id:newList[i].w_id
            },
            success(data){
              that.getCart()
              wx.showToast({
                title: '删除成功',
                icon:'success',
                duration:1500
              })
            }
          })
        }
       } else if (res.cancel) {
        console.log('用户点击取消')
        wx.showToast({
          title: '你已取消删除',
          icon:'success',
          duration:1500
        })
       }
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
    this.getCart()
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