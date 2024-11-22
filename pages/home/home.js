// pages/home/home.js
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    piclist:['/images/project/logo2.jpg','/images/project/jinxiu.png','/images/project/huangcheng.png'],
    act_pic:[{"url":"https://mp.weixin.qq.com/s/aQF0lIU26OAfAVKeWm6sYw","srcs":"/images/project/logo1.jpg","title":"嵌艺流光，传承千年艺","text":"大家好！我们是嵌艺流光团队，专注于创新嵌银髹漆技艺的研发与推广，今天正式在这里与大家见面啦！"},
    {"url":"","srcs":"/images/project/logo2.jpg","title":"宫廷月亮虾饼","text":"任丘市裕华中路与会战北道东南角，蕾莎汇生活4层小吃街"},
    {"url":"","srcs":"/images/project/jinxiu.png","title":"宫廷月亮虾饼","text":"任丘市裕华中路与会战北道东南角，蕾莎汇生活4层小吃街"},
    {"url":"","srcs":"/images/project/huangcheng.png","title":"宫廷月亮虾饼","text":"任丘市裕华中路与会战北道东南角，蕾莎汇生活4层小吃街"}
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        }),
      
        console.log(res.userInfo);
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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