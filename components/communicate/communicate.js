// components/communicate/communicate.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    nickName:String,
    avatarUrl:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    userinfo:{
      nickName:'',
      avatarUrl:''
    },
    isCard: true,
    like_list:[
      {
        user_id:1,
        user_name:'随手一赞',
        user_avatar:'/images/link-01.png'
      },
      {
        user_id: 2,
        user_name: '随手一赞',
        user_avatar: '/images/link-01.png'
      },
      {
        user_id: 3,
        user_name: '随手一赞',
        user_avatar: '/images/link-01.png'
      },
      {
        user_id: 4,
        user_name: '随手一赞',
        user_avatar: '/images/link-01.png'
      },
      {
        user_id: 5,
        user_name: '随手一赞',
        user_avatar: '/images/link-01.png'
      },
    ],
    comment_list:[
      {
        comment_id:1,
        comment_pr_id:1,
        comment_user_name:'布呐呐',
        comment_user_avatar: 'https://austin-management.oss-cn-beijing.aliyuncs.com/pic-01.jpg',
        comment_text:"做的不错嘛",
        comment_time:'2024-3-20',
        reply_id: 0,
        parent_id: 0,
      },
      {
        comment_id: 4,
        comment_pr_id: 1,
        comment_user_name: '李干嘛',
        comment_user_avatar: 'https://austin-management.oss-cn-beijing.aliyuncs.com/pic-02.jpg',
        comment_text: "可以多做点修改吗",
        comment_time: '2024-4-10',
        reply_id:0,
        parent_id: 0,
      },
      {
        comment_id: 5,
        comment_pr_id: 1,
        comment_user_name: '苍蓝の孤独惑星',
        comment_user_avatar: 'https://austin-management.oss-cn-beijing.aliyuncs.com/pic-03.jpg',
        comment_text: "学习学习",
        comment_time: '2024-1-21',
        reply_id: 0,
        parent_id: 0,
      },
    ],
    comment_list2: [
      {
        comment_id: 2,
        comment_pr_id: 1,
        comment_user_name: 'Charlie',
        comment_user_avatar: '/images/link-02.png',
        comment_text: "确实是这样的呀",
        comment_time: '2024-6-27',
        reply_id: 1,
        parent_id:1,
        reply_name:''
      },
      {
        comment_id: 6,
        comment_pr_id: 1,
        comment_user_name: '欧布',
        comment_user_avatar: '/images/link-01.png',
        comment_text: "你也可以跟我学学",
        comment_time: '2024-8-21',
        reply_id: 2,
        parent_id: 1,
        reply_name: '布呐呐'
      },
      {
        comment_id: 7,
        comment_pr_id: 1,
        comment_user_name: '九月',
        comment_user_avatar: '/images/link-01.png',
        comment_text: "确实，作者很厉害啊",
        comment_time: '2024-6-20',
        reply_id: 2,
        parent_id: 1,
        reply_name: ''
      },
      
      {
        comment_id: 9,
        comment_pr_id: 1,
        comment_user_name: '九月时',
        comment_user_avatar: '/images/link-01.png',
        comment_text: "确实很有学习价值",
        comment_time: '2024-7-20',
        reply_id: 5,
        parent_id: 5,
        reply_name: ''
      },
      {
        comment_id: 10,
        comment_pr_id: 1,
        comment_user_name: '李干嘛',
        comment_user_avatar: '/images/link-01.png',
        comment_text: "是的，你是大佬啊",
        comment_time: '2024-5-20',
        reply_id: 9,
        parent_id: 5,
        reply_name: '九月时',
      },
    ],
    comment_text: null,
    reply_id:0,
    placeholder:'就不说一句吗？',
    reply_id:0,
    now_reply_name:null,
    type:0,
    now_parent_id:0,
    now_reply:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getCommentText: function (e) {
      var val = e.detail.value;
      this.setData({
        comment_text: val
      });
    },
  onReplyBlur: function (e) {
      var that = this;
      const text = e.detail.value.trim();
      if (text === '') {
        that.setData({
          now_reply: 0,
          now_reply_name:null,
          now_reply_type:0,
          now_parent_id:0,
          placeholder: "就不说一句吗？",
          focus:false
        });
      }
    },
    
    sendComment:function(e){
      var that= this
      var comment_list = that.data.comment_list  //获取data中的评论列表
      var comment_list2 = that.data.comment_list2  //获取data中的回复列表
      var comment_text = that.data.comment_text  //获取当前的评论幸喜
      var userinfo = that.data.userinfo   //获取当前的用户信息
      var comment_user_name = userinfo.nickName  //用户昵称
      var comment_user_avatar = userinfo.avatarUrl //用户头像
      var timestamp = Date.parse(new Date()); //时间戳
      var create_time = common.timetrans(timestamp)  //格式化时间戳
      var reply_id = that.data.reply_id //获取回复的评论id
      console.log(timestamp)
      console.log(create_time)
      var comment_list_length = comment_list.length //获取当前评论数组的长度
      console.log("当前评论数组的长度" + comment_list_length)
      var last_id = comment_list[comment_list_length -1].comment_id //获取最后一个的id
      console.log("当前评论数组的最后一个的id" + last_id)
      var comment_list2_length = comment_list2.length //获取当前回复数组的长度
      console.log("当前评论数组的长度" + comment_list2_length)
      var last_id2 = comment_list2[comment_list2_length - 1].comment_id //获取回复一个的id
      console.log("当前评论数组的最后一个的id" + last_id2)
      var new_id = last_id > last_id2 ? last_id + 1 : last_id2 + 1
      console.log("新的id是"+new_id)
      var reply_name = null
      var parent_id = 0
      var reply_id = that.data.now_reply
      console.log("回复的id是" + reply_id)
      if (reply_id!=0){
        console.log("现在是回复")
        var reply_type = that.data.now_reply_type
        parent_id = that.data.now_parent_id
        console.log("回复的所属的parent_id是" + parent_id)
        console.log("回复的类型是" + reply_type)
        if (parent_id > 0) {
          if (reply_type == 1){
            parent_id = reply_id
            console.log("现在是回复评论")
          }else{
      
            reply_name = that.data.now_reply_name
            console.log("现在是再回复" + reply_name+"的回复")
          }
        }
      }else{
        console.log("现在是评论" )
      }
      var comment_detail = {}
      comment_detail.comment_id = new_id
      comment_detail.comment_user_name = comment_user_name
      comment_detail.comment_user_avatar = comment_user_avatar
      comment_detail.comment_text = comment_text
      comment_detail.comment_time = create_time
      comment_detail.reply_id = reply_id
      comment_detail.parent_id = parent_id
      comment_detail.reply_name = reply_name
      console.log(comment_detail)
      if (comment_detail.parent_id>0){
        comment_list2.push(comment_detail)
      }else{
        comment_list.unshift(comment_detail)
      }
      
      that.setData({
        comment_text:null,
        now_reply: 0,
        now_reply_name: null,
        now_reply_type: 0,
        now_parent_id: 0,
        placeholder: "就不说一句吗？",
        comment_list,
        comment_list2
      },()=>{
        //这里写你访问后台插入数据库的代码
      })
      
    },
    replyComment:function(e){
      var id = e.currentTarget.dataset.cid
      console.log(id)
      var name = e.currentTarget.dataset.name
      var type = e.currentTarget.dataset.type
      var parent_id = e.currentTarget.dataset.pid
      console.log(parent_id)
      this.setData({
        now_reply:id,
        now_reply_name: name,
        now_reply_type: type,
        now_parent_id:parent_id,
        focus:true,
        placeholder: '回复' + name+":"
      })
    },

    commentTap(){
      this.setData({
        'userinfo.nickName':this.properties.nickName,
        'userinfo.avatarUrl':this.properties.avatarUrl
      })
    },

    getCommentText: function (e) {
      var val = e.detail.value;
      this.setData({
        comment_text: val
      });
    },
  onReplyBlur: function (e) {
      var that = this;
      const text = e.detail.value.trim();
      if (text === '') {
        that.setData({
          now_reply: 0,
          now_reply_name:null,
          now_reply_type:0,
          now_parent_id:0,
          placeholder: "就不说一句吗？",
          focus:false
        });
      }
    },

    getTime:pt=>{ 
     return (new Date().toJSON().substring(0, 10) + ' ' + new Date().toTimeString().substring(0,8));
    },
  
    
    sendComment:function(e){
      var that= this
      var comment_list = that.data.comment_list  //获取data中的评论列表
      var comment_list2 = that.data.comment_list2  //获取data中的回复列表
      var comment_text = that.data.comment_text  //获取当前的评论幸喜
      var userinfo = that.data.userinfo   //获取当前的用户信息
      var comment_user_name = userinfo.nickName  //用户昵称
      var comment_user_avatar = userinfo.avatarUrl //用户头像
      var timestamp = Date.parse(new Date()); //时间戳
      var create_time = this.getTime(timestamp)  //格式化时间戳
      var reply_id = that.data.reply_id //获取回复的评论id
      console.log(timestamp)
      console.log(create_time)
      var comment_list_length = comment_list.length //获取当前评论数组的长度
      console.log("当前评论数组的长度" + comment_list_length)
      var last_id = comment_list[comment_list_length -1].comment_id //获取最后一个的id
      console.log("当前评论数组的最后一个的id" + last_id)
      var comment_list2_length = comment_list2.length //获取当前回复数组的长度
      console.log("当前评论数组的长度" + comment_list2_length)
      var last_id2 = comment_list2[comment_list2_length - 1].comment_id //获取回复一个的id
      console.log("当前评论数组的最后一个的id" + last_id2)
      var new_id = last_id > last_id2 ? last_id + 1 : last_id2 + 1
      console.log("新的id是"+new_id)
      var reply_name = null
      var parent_id = 0
      var reply_id = that.data.now_reply
      console.log("回复的id是" + reply_id)
      if (reply_id!=0){
        console.log("现在是回复")
        var reply_type = that.data.now_reply_type
        parent_id = that.data.now_parent_id
        console.log("回复的所属的parent_id是" + parent_id)
        console.log("回复的类型是" + reply_type)
        if (parent_id > 0) {
          if (reply_type == 1){
            parent_id = reply_id
            console.log("现在是回复评论")
          }else{
      
            reply_name = that.data.now_reply_name
            console.log("现在是再回复" + reply_name+"的回复")
          }
        }
      }else{
        console.log("现在是评论" )
      }
      var comment_detail = {}
      comment_detail.comment_id = new_id
      comment_detail.comment_user_name = comment_user_name
      comment_detail.comment_user_avatar = comment_user_avatar
      comment_detail.comment_text = comment_text
      comment_detail.comment_time = create_time
      comment_detail.reply_id = reply_id
      comment_detail.parent_id = parent_id
      comment_detail.reply_name = reply_name
      console.log(comment_detail)
      if (comment_detail.parent_id>0){
        comment_list2.push(comment_detail)
      }else{
        comment_list.unshift(comment_detail)
      }
      
      that.setData({
        comment_text:null,
        now_reply: 0,
        now_reply_name: null,
        now_reply_type: 0,
        now_parent_id: 0,
        placeholder: "就不说一句吗？",
        comment_list,
        comment_list2
      },()=>{
        //这里写你访问后台插入数据库的代码
      })
      
    },
  }
})