<<<<<<< HEAD
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
=======
// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    act_pic:[{"url":"/pages/comm/comm","srcs":"/images/project/h/h-01.jpg","title":"蓝绣流芳","text":"大家好！我们是嵌艺流光团队，专注于创新嵌银髹漆技艺的研发与推广，今天正式在这里与大家见面啦！","time":"2025/1/15","comment":"10","read":"560"},
    {"url":"/pages/comm/comm","srcs":"/images/project/h/h-02.jpg","title":"“蝶舞玫韵”","text":"本项目在嵌银髹漆工艺领域实现了显著的创新，主要包括引入激光开槽和机械臂嵌丝技术，大幅提升了生产效率和精度；结合3D打印工艺，扩展了产品种类并缩短了生产周期；同时，构建了AICG设计库，提供超过5000种纹样，增强了产品多样性。这些创新不仅优化了传统工艺，还提升了产品的市场竞争力和艺术价值。","time":"2024/12/29","comment":"8","read":"200"},
    {"url":"/pages/comm/comm","srcs":"/images/project/j/j-01.png","title":"禅心素语","text":"非物质文化遗产是中华优秀传统文化的重要组成部分，是中华文明绵延传承的生动见证。作为非遗大省，河南省非遗资源类型完备、内涵丰富、特色鲜明，是中原文化根源性、原创性、包容性、开放性、基础性的重要表征。在河南省“文旅文创融合战略”“乡村振兴战略”有序推进的背景下，深入调研我省非遗保护传承现状及存在问题，探索非遗保护传承与旅游活化的发展路径，实现“以文塑旅，以旅彰文”","time":"2024/12/10","comment":"7","read":"467"},
    {"url":"/pages/comm/comm","srcs":"/images/project/j/j-02.png","title":"凤栖梧桐","text":"中国非物质文化遗产传承人群研修研习培训计划（以下称“研培计划”）是《国家“十三五”文化发展改革规划纲要》提出的重要任务，是非物质文化遗产（以下称“非遗”）保护事业的一项基础性、战略性工作。该计划旨在为非遗保护工作提供高校的学术和教学资源支持，通过组织非遗项目持有者、从业者等传承人群到高校学习专业知识、研究技艺和技术！","time":"2024/11/28","comment":"5","read":"277"},
  ],
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
>>>>>>> a5c4669cb501ab2efdb14c9f89cac1c2b0105714
})