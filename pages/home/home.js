// pages/home/home.js
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    piclist:['/images/project/logo2.jpg','/images/project/jinxiu.png','/images/project/huangcheng.png'],
    act_pic:[{"url":"/pages/orser/orser","srcs":"/images/project/logo1.jpg","title":"嵌艺流光，传承千年艺","text":"大家好！我们是嵌艺流光团队，专注于创新嵌银髹漆技艺的研发与推广，今天正式在这里与大家见面啦！","time":"2025/1/15","category":"个性化定制"},
    {"url":"/pages/more/more","srcs":"/images/project/recomm1.jpg","title":"“璞玉嵌丝：传统工艺的创新之路”","text":"本项目在嵌银髹漆工艺领域实现了显著的创新，主要包括引入激光开槽和机械臂嵌丝技术，大幅提升了生产效率和精度；结合3D打印工艺，扩展了产品种类并缩短了生产周期；同时，构建了AICG设计库，提供超过5000种纹样，增强了产品多样性。这些创新不仅优化了传统工艺，还提升了产品的市场竞争力和艺术价值。","time":"2024/12/29","category":"科技创新"},
    {"url":"/pages/news/news","srcs":"/images/project/recomm2.jpg","title":"河南省非遗保护与旅游活化路径","text":"非物质文化遗产是中华优秀传统文化的重要组成部分，是中华文明绵延传承的生动见证。作为非遗大省，河南省非遗资源类型完备、内涵丰富、特色鲜明，是中原文化根源性、原创性、包容性、开放性、基础性的重要表征。在河南省“文旅文创融合战略”“乡村振兴战略”有序推进的背景下，深入调研我省非遗保护传承现状及存在问题，探索非遗保护传承与旅游活化的发展路径，实现“以文塑旅，以旅彰文”","time":"2024/12/10","category":"新闻直达"},
    {"url":"/pages/course/course","srcs":"/images/project/recomm3.jpg","title":"非遗传承人培训计划","text":"中国非物质文化遗产传承人群研修研习培训计划（以下称“研培计划”）是《国家“十三五”文化发展改革规划纲要》提出的重要任务，是非物质文化遗产（以下称“非遗”）保护事业的一项基础性、战略性工作。该计划旨在为非遗保护工作提供高校的学术和教学资源支持，通过组织非遗项目持有者、从业者等传承人群到高校学习专业知识、研究技艺和技术！","time":"2024/11/28","category":"官方课程"},
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