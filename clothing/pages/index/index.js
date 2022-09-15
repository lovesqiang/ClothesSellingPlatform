// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    background: [],  //存放轮播图
    recommendImage:[],  //存放主页推荐商品
    sort:[],  //存放主页商品分类

    //轮播图所需参数
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular:true,
    interval: 2000,
    duration: 500,
  },

onLoad(){
  //调用自建函数
  this.getBanner(),
  this.getRecommendImage()
  this.getSort()
},

//从服务器获取轮播图
getBanner(){
  var that=this;
  wx.request({
    url: 'http://localhost:3366/banner',
    method:'GET',
    success(data){

     that.setData({
       background:data.data
     })
    }

  })
},

//从服务器获得推荐商品
getRecommendImage(){
 const that=this;
 wx.request({
   url: 'http://localhost:3366/shop',
   method:'GET',
   success: function(data) {// 服务器回包信息
    that.setData({
      recommendImage:data.data.slice(0,5)
    })
    

  }
 })
},

//c服务器获得分类
getSort(){
  const that=this;
  wx.request({
    url: 'http://localhost:3366/sort',
    method:"GET",
    success(data){
      that.setData({
        sort:data.data.slice(0,4)
      })
    }
  })
},

//添加购物车
addCart(event){
  let id = event.target.dataset.id
  //先查询购物车是否存在该商品，存在就数量+1，不存在就添加
  wx.request({
    url: 'http://localhost:3366/cart',
    method:'get',
    data:{
      w_id:id
    },
    success(res){
      if(res.data.length === 0){
          wx.request({
            url: 'http://localhost:3366/addCart',
            method:'POST',
            data:{
              w_id:id
            },
            success(data){
              wx.showToast({ // 显示Toast
  
                title: '添加购物车成功',
            
                icon: 'success',
            
                duration: 1500
            
              })
            }
          })
        }
      else{
        let num = res.data[0].num + 1
        wx.request({
          url: 'http://localhost:3366/updateCart',
          method:'POST',
          data:{
            w_id:id,
            num:num
          },
          success(res){
            wx.showToast({ // 显示Toast
  
              title: '添加购物车成功',
            
              icon: 'success',
            
              duration: 1500
            
            })
      }
    })
          }
        }
  })
}
})
