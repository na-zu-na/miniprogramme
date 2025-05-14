// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   login_success:false,
   nickName:'',
   avatarUrl:''
  },
  getlogin(e){
    this.setData({
      login_success:e.detail.value.login_success,
      nickName:e.detail.value.nickName,
      avatarUrl:e.detail.value.avatarUrl
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },
  
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})