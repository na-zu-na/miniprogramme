// pages/orser/orser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    act_list:[{"url":"/pages/orser/orser","srcs":["/images/project/male/1.jpg","/images/project/male/2.jpg"],"title":"中年男性的饮食健康大揭秘：吃出健康，活出精彩！","text":"中年男性在饮食方面的选择直接关系到身体健康和生活质量。本文将分享中年男性应该注意的饮食原则，帮助他们控制热量摄入、增加膳食纤维、多摄入富含维生素和矿物质的食物，让健康成为生活的底色，活出精彩人生！","time":"2024/2/14","comment":"49","like":"82"},
    {"url":"/pages/orser/orser","srcs":["/images/project/male/3.jpg","/images/project/male/4.jpg"],"title":"中年男性养生指南，7个方面入手养出好身体","text":"步入中年后，男性朋友们往往面临着家庭和事业的双重压力，身体健康也逐渐成为关注的焦点。为了保持身心健康，中年男性需要从多个方面入手，进行全面而科学的养生。以下是一份针对中年男性的养生指南，涵盖七个关键方面，帮助大家养出好身体。","time":"2024/6/26","comment":"8","like":"21"},
    {"url":"/pages/orser/orser","srcs":["/images/project/male/5.jpg"],"title":"男性营养基本指南：实现最佳健康的重要建议和膳食计划","text":"怎样才算心理健康?怎样控制自己的情绪？ (1)人贵有自知之明。一个人如果只看到自己的短处与缺点，就会丧失信心、缺乏朝气;如果只看到自己的长处与优点，又会自以为是，自我欣赏。这种自卑与自负皆不利于自我成长，只有正确认识自己才算是心理健康。 ","time":"2024/1/26","comment":"12","like":"64"}
  ]
  },

  onChange(event) {
    this.setData({
      active: event.detail.index
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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