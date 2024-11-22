// pages/shop/shop.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    choosed_items:[],
    price:0,
    shop_item0:[{
      num:4,
      price:30.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/h/h-01.jpg",
    },{
      num:2,
      price:50.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/h/h-02.jpg",
    },
    {
      num:6,
      price:80.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/h/h-03.jpg",
    },
    {
      num:3,
      price:100.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/h/h-04.jpg",
    },
    {
      num:2,
      price:90.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/h/h-05.jpg",
    },
    {
      num:10,
      price:80.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/h/h-06.jpg",
    },
  ],

    shop_item1:[{
      num:20,
      price:40.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/j/j-01.png",
    },{
      num:10,
      price:220.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/j/j-02.png",
    },
    {
      num:9,
      price:42.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/j/j-03.png",
    },
    {
      num:9,
      price:10.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/j/j-04.png",
    },
    {
      num:15,
      price:22.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/j/j-05.png",
    },
    {
      num:5,
      price:30.00,
      desc:"左侧图片裁剪、缩放的模式，可选值参考小程序 ",
      title:"商品标题",
      thumb:"/images/project/j/j-06.png",
    }
  ],
    mainActiveIndex: 0,
    activeId:null,
    pics:["/images/link-01.png",'/images/link-02.png'],
    items:[
      {
        // 导航名称
        text: '皇宸御品',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项

      },
      {
        // 导航名称
        text: '金绣阁',
        // 禁用选项
        disabled: false,
      }
    ]
  },
  onSubmit(){
    wx.showLoading({
      title: '提交中',
    })
    this.setData({
      
      price:0
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 1000);
    setTimeout(() => {
      wx.showToast({
        title: '提交成功'
      })
    }, 1000);

  },

  // 选择商品函数
  add(e){
    //哪个数组
    const type = e.currentTarget.dataset.type;
    //选的是哪个
    const index = e.currentTarget.dataset.index;
    const arrKey = type == 0 ? 'shop_item0' : 'shop_item1';
    //现有数量
    const currentNum = parseFloat(this.data[arrKey][index].num);
    var item={};
    var choosed=this.data.choosed_items;
  
    if(e.currentTarget.dataset.num>0){
      item={type:arrKey,id_item:index}
      choosed.push(item)
      this.setData({
        price:this.data.price+e.currentTarget.dataset.price,
        [`${arrKey}[${index}].num`]: currentNum-1,
        choosed_items:choosed
      })
      
    }
    else{
      wx.showModal({
        title: '错误',
        content: '请重新选择',
    })
  }
  },

  delete(e) {
    // 确定数组类型
    const type = e.currentTarget.dataset.type;
    // 确定索引
    const index = e.currentTarget.dataset.index;
    // 确定数组键
    const arrKey = type == 0 ? 'shop_item0' : 'shop_item1';
    // 当前数量
    const currentNum = parseFloat(this.data[arrKey][index].num);
    // 价格
    const price = parseFloat(e.currentTarget.dataset.price);
    const choosed = this.data.choosed_items;
    const item = { type: arrKey, id_item: index };
  
    const itemIndex = choosed.findIndex(value => 
      value.id_item == item.id_item && value.type == item.type
    );

    if (itemIndex !== -1 && price<=this.data.price) {
      choosed.splice(itemIndex, 1);
      this.setData({
        price: this.data.price - price,
        [`${arrKey}[${index}].num`]: currentNum + 1,
        choosed_items: choosed
      });
    } else {
      wx.showModal({
        title: '错误',
        content: '请重新选择',
        complete: (res) => {}
      });
    }
  },

  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },

  onClickItem({ detail = {} }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;
    this.setData({ activeId });
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