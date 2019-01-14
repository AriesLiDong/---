// pages/register/register.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "hasuser":false,
    "haspwd":false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /*获取用户名*/
  getUsernameInput: function (e) {
    this.setData({
        "username":e.detail.value      
    });
  },

  /*获取密码*/
  getPasswordInput: function (e) {
    this.setData({
        "password":e.detail.value
    });
  },

  /*表单提交方法*/
  doSubmit: function () {
    let username = this.data.username;
    let pwd = this.data.password;
    if(!username){
      this.setData({
        "hasuser":true
      });
    }
    if(!pwd){
      this.setData({
        "haspwd":true
      });
    }
    if(username && pwd){
      db.collection('user').add({
        data:{
          "username": username,
          'pwd':pwd
        },
        success(res) {
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          console.log(res)
        }
      });
    }
  }
})