(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df91f69a","chunk-72f37568"],{"20d6":function(t,e,i){"use strict";var n=i("5ca1"),o=i("0a49")(6),a="findIndex",c=!0;a in[]&&Array(1)[a](function(){c=!1}),n(n.P+n.F*c,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(a)},"33c2":function(t,e,i){"use strict";var n=i("672d"),o=i.n(n);o.a},"3acb":function(t,e,i){"use strict";i("20d6"),i("f751"),i("e17f");var n=i("2241"),o=(i("aef6"),i("a481"),i("e7e5"),i("d399")),a=i("2b0e"),c=i("4db0"),r=i("d225"),s=i("b0b4"),l=i("c7a1"),d=i("db49"),m=i("7734"),u=i("5f9c"),p=u["a"].esZmtH5,f=function(t){t.globalUid=p.globalUid,t.dataSrc="H5",t.registerTime=p.registerTime,t.access_token=p.access_token,t.simt_token=p.access_token,t.userId=p.userId||"1"},g=function(){function t(){Object(r["a"])(this,t)}return Object(s["a"])(t,[{key:"getCommunityInfo",value:function(t){f(t);var e=d["h"]+"cmt/api/community/getCommunityInfo";return Object(l["a"])(e,t)}},{key:"getCommunityDynamicNoteList",value:function(t){f(t);var e=d["h"]+"cmt/api/noteEntity/getCommunityDynamicNoteList";return Object(l["a"])(e,t)}},{key:"getCommunityGoodNoteList",value:function(t){f(t);var e=d["h"]+"cmt/api/noteEntity/getCommunityGoodNoteList";return Object(l["a"])(e,t)}},{key:"getCommunityTopicList",value:function(t){f(t);var e=d["h"]+"cmt/api/noteEntity/getCommunityTopicNoteList";return Object(l["a"])(e,t)}},{key:"getHotTopicList",value:function(t){f(t);var e=d["h"]+"cmt/api/topicInfo/queryHotTopic";return Object(l["a"])(e,t)}},{key:"getAnswerList",value:function(t){f(t);var e=d["h"]+"cmt/api/answer/list";return Object(l["a"])(e,t)}},{key:"getNoteInfo",value:function(t){f(t);var e=Object(m["a"])("v_");e&&(t.v_=e);var i=d["h"]+"cmt/api/noteEntity/getNoteDetailInfo";return Object(l["a"])(i,t)}},{key:"getQuestionInfo",value:function(t){f(t);var e=d["h"]+"cmt/api/question/info";return Object(l["a"])(e,t)}},{key:"getAnswerInfo",value:function(t){f(t);var e=Object(m["a"])("v_");e&&(t.v_=e);var i=d["h"]+"cmt/api/answer/info";return Object(l["a"])(i,t)}},{key:"getNoteCommentList",value:function(t){f(t);var e=d["h"]+"ctt/api/comment/select/note/comment/list";return Object(l["c"])(e,t)}},{key:"getNoteCommentHotList",value:function(t){f(t);var e=d["h"]+"ctt/api/comment/select/note/comment/hot/list";return Object(l["c"])(e,t)}},{key:"getTopicInfo",value:function(t){f(t);var e=d["h"]+"cmt/api/topicInfo/getTopicInfo/pbcdhe";return Object(l["a"])(e,t)}},{key:"getTopicNewNoteList",value:function(t){f(t);var e=d["h"]+"cmt/api/topicInfo/queryTopicNewNoteInfo/pbcdhe";return Object(l["a"])(e,t)}},{key:"getTopicHotNoteList",value:function(t){f(t);var e=d["h"]+"cmt/api/topicInfo/queryTopicHotNoteInfo/pbcdhe";return Object(l["a"])(e,t)}},{key:"saveComment",value:function(t){f(t);var e=d["h"]+"cmt/api/noteEntity/saveComment";return Object(l["c"])(e,t)}},{key:"setCommentLike",value:function(t){f(t);var e=d["h"]+"ctt/api/comment/add/comment/like";return Object(l["c"])(e,t)}},{key:"setNoteLike",value:function(t){f(t);var e=d["h"]+"cmt/api/noteEntity/setNoteLike";return Object(l["c"])(e,t)}},{key:"getCommentInfo",value:function(t){f(t);var e=d["h"]+"ctt/api/comment/select/note/comment/info";return Object(l["a"])(e,t)}},{key:"getCommentRelayList",value:function(t){var e=d["h"]+"ctt/api/comment/select/note/comment/reply/list";return Object(l["c"])(e,t)}}]),t}(),h=new g;i.d(e,"b",function(){return y}),i.d(e,"a",function(){return C}),i.d(e,"c",function(){return T});var v=u["a"].esZmtH5,I=function(t){},y=a["default"].observable({replyShow:!1,wxShareShow:!1,get appUserid(){var t=v.userId;return t||"1"},circleId:1,circleInfo:{},circleHotNotes:{},circleGoodNotes:{},hotTopics:{},circleTopics:{},circleAnswers:{},cHotPage:{loading:!1,finished:!1,page:1,total:1,limit:5},cGoodPage:{loading:!1,finished:!1,page:1,total:1,limit:5},cTopicPage:{loading:!1,finished:!1,page:1,total:1,limit:10},cAnswerPage:{loading:!1,finished:!1,page:1,total:1,limit:5},topicName:"",topicId:"",topicInfo:{},topicNewNotes:{},topicHotNotes:{},topicNewPage:{loading:!1,finished:!1,page:1,total:1,limit:5},topicHotPage:{loading:!1,finished:!1,page:1,total:1,limit:5},noteId:1,noteInfo:{},noteComments:{},notePage:{loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0},answerId:0,answerInfo:{},answerPage:{loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0},questionId:0,questionInfo:{},questionPage:{loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0},comment:{id:"",replyUserId:"",commentUserId:"",comment:"",commentType:"",commentId:"",commentPid:"",appUserid:"",globalUid:"",dataSrc:"",registerTime:""},commentNickName:""});function b(){y.noteInfo={},y.noteComments={},y.notePage={loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0}}function w(){y.qusetionInfo={},y.noteComments={},y.notePage={loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0}}function N(){y.answerInfo={},y.noteComments={},y.notePage={loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0}}var C={toggelReply:function(t){y.replyShow=void 0!=t?t:!y.replyShow},wxShareShow:function(){y.wxShareShow=!0},wxShareHide:function(){y.wxShareShow=!1},initCircle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;y.circleId=t,t||Object(o["a"])("无效的圈子id"),h.getCommunityInfo({id:t,appUserid:y.appUserid}).then(function(t){200==t.code&&(y.circleInfo=t.data.result)}),h.getHotTopicList({communityId:t,appUserid:y.appUserid}).then(function(t){y.hotTopics=t.data.result})},loadCircleGoodNotes:function(){var t=y.cGoodPage,e={communityId:y.circleId,page:t.page,limit:t.limit,appUserid:y.appUserid};h.getCommunityGoodNoteList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?y.circleGoodNotes=e.data.result:y.circleGoodNotes=y.circleGoodNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadCircleHotNotes:function(){var t=y.cHotPage,e={communityId:y.circleId,page:t.page,limit:t.limit,appUserid:y.appUserid};h.getCommunityDynamicNoteList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?y.circleHotNotes=e.data.result:y.circleHotNotes=y.circleHotNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadCircleTopics:function(){var t=y.cTopicPage,e={communityId:y.circleId,page:t.page,limit:t.limit,appUserid:y.appUserid};h.getCommunityTopicList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?y.circleTopics=e.data.result:y.circleTopics=y.circleTopics.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadCircleAnswers:function(){var t=y.cAnswerPage,e={noteId:y.questionId,page:t.page,limit:t.limit,userId:y.appUserid};h.getAnswerList(e).then(function(e){if(0!=e.tag)return t.loading=!1,void(t.finished=!0);console.log("page",e.data.page),e.data.page<=1?y.circleAnswers=e.data.result:y.circleAnswers=y.circleAnswers.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},initTopic:function(t,e){var i={};if(t.topicName)i.topicName=t.topicName;else{if(!t.topicId)return void Object(o["a"])("无效的话题");i.topicId=parseInt(t.topicId)}h.getTopicInfo(i).then(function(t){0==t.tag?(y.topicInfo=t.data.result,y.topicId=t.data.result.topicId,y.topicName=t.data.result.topicName.replace(/#/g,"")):e&&e(t)})},loadTopicHotNotes:function(){var t=y.topicHotPage,e={topicName:y.topicName,page:t.page,limit:t.limit,appUserid:y.appUserid};h.getTopicHotNoteList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?y.topicHotNotes=e.data.result:y.topicHotNotes=y.topicHotNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadTopicNewNotes:function(){var t=y.topicNewPage,e={topicName:y.topicName,page:t.page,limit:t.limit,appUserid:y.appUserid};h.getTopicNewNoteList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?y.topicNewNotes=e.data.result:y.topicNewNotes=y.topicNewNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},initNote:function(t,e,i){var n=this;b(),y.noteId=t,t||Object(o["a"])("无效的帖子id"),h.getNoteInfo({id:t,appUserid:y.appUserid,is_wv:i?1:0}).then(function(t){if(0==t.tag){var i=t.data.result;i.content=n.removeBr(i.content),n.addIsArticle(i),i.isDelete||i.isHide?e&&e(i):y.noteInfo=i}else e&&e(t)})},addIsArticle:function(t){if(-1==location.href.indexOf("isArticle=")){var e="article"==t.mediaType?1:0,i="";i=-1!=location.href.indexOf("?")?location.href+"&isArticle="+e:location.href+"?isArticle="+e,history.replaceState("","",i)}},loadComments:function(){var t=y.notePage,e={contentId:y.noteId,contentTable:"SNF",page:t.page,limit:t.limit,appUserid:y.appUserid};h.getNoteCommentList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?y.noteComments=e.data.result:y.noteComments=y.noteComments.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},initQuestion:function(t,e){w(),y.questionId=t,t||Object(o["a"])("无效的问答id"),h.getQuestionInfo({noteId:t,userId:y.appUserid}).then(function(t){if(0==t.tag){var i=t.data.result;i.isDelete||i.isHide?e&&e(i):y.questionInfo=i}else e&&e(t)})},initAnswer:function(t,e,i){var n=this;N(),y.answerId=t,y.noteId=t,t||Object(o["a"])("无效的回答id"),h.getAnswerInfo({answerId:t,userId:y.appUserid,is_wv:i?1:0}).then(function(t){if(0==t.tag){var o=t.data.result;o.isDelete||o.isHide?e&&e(o):(o.content=n.removeBr(o.content),y.answerInfo=o,i||n.initQuestion(y.answerInfo.parentId))}else e&&e(t)})},removeBr:function(t){if(!t)return"";var e="<p><br></p >";return t.endsWith(e)?t.substring(0,t.length-e.length):t},likeNote:function(t){if(v.registerTime){t.isLike=1;var e={id:t.id,appUserid:t.appUserid,likeSrc:"H5",userId:v.userId,dataSrc:"H5"};h.setNoteLike(e).then(function(e){0==e.tag&&t.likeCount++})}else n["a"].confirm({confirmButtonText:"立即登录",cancelButtonText:"稍后登录",closeOnClickOverlay:!0,title:"是否立即登录姿美汇？"}).then(function(){Object(c["i"])()})},likeComment:function(t){if(v.registerTime){t.userLike=!0;var e={src:"H5",contentId:t.id,userId:v.userId,referenceUserId:t.referenceUserId};h.setCommentLike(e).then(function(e){0==e.tag&&t.likeCount++})}else n["a"].confirm({confirmButtonText:"立即登录",cancelButtonText:"稍后登录",closeOnClickOverlay:!0,title:"是否立即登录姿美汇？"}).then(function(){Object(c["i"])()})},goCommentFromContent:function(t){var e={id:t.id,replyUserId:t.appUserid,commentUserId:y.appUserid,commentType:0,commentPid:0,appUserid:t.appUserid};I(e),console.log(t),y.comment=Object.assign(y.comment,e),y.commentNickName="说点什么...",this.goComment()},goCommentFromComment:function(t,e){var i={id:t.contentId,replyUserId:t.userId,commentUserId:y.appUserid,commentType:1,commentId:t.id,commentPid:1===e?t.id:t.pid,appUserid:t.referenceUserId};I(i),y.comment=Object.assign(y.comment,i),y.commentNickName='回复"'.concat(t.nickName,'"'),this.goComment()},goComment:function(){v.registerTime?y.replyShow=!0:n["a"].confirm({confirmButtonText:"立即登录",cancelButtonText:"稍后登录",closeOnClickOverlay:!0,title:"是否立即登录姿美汇？"}).then(function(){Object(c["i"])()})},saveComment:function(){var t=this;h.saveComment(y.comment).then(function(e){0==e.tag&&(Object(o["a"])("评论成功"),y.noteInfo.commentCount||y.noteInfo.commentCount++,y.answerInfo.commentCount||y.answerInfo.commentCount++,y.questionInfo.commentCount||y.questionInfo.commentCount++,t.getCommentInfo(e.data.result.commentId))})},getCommentInfo:function(t){h.getCommentInfo({commentId:t}).then(function(t){if(0==t.tag){var e=t.data.result,i=function(t){return e.id===t.id},n=y.noteComments.findIndex(i);if(-1===n)y.noteComments.unshift(e);else{var o=y.noteComments[n].userLike;y.noteComments.splice(n,1,e),y.noteComments[n].userLike=o}}})},getCommentRelayList:function(t){var e=t.childComment.list[t.childComment.limit-1],i={page:1,limit:10,pid:t.id,contentTable:"SNF",id:e.id};h.getCommentRelayList(i).then(function(e){0==e.tag&&(t.childComment.list=t.childComment.list.concat(e.data.result))})}},T={initCircle:function(){Object(c["h"])()&&setTimeout(function(){var t=y.circleInfo,e={imgUrl:t.mainImgUrl,desc:t.communityDesc.substring(0,20)||"发现一个超有意思圈子，快来加入吧！",title:t.communityName,link:window.location.href};Object(c["b"])(e)},1e3)},initTopic:function(){Object(c["h"])()&&setTimeout(function(){var t=y.topicInfo,e={imgUrl:t.mainImgUrl,desc:t.content.substring(0,20)||"发现一个有意思的话题，快来参与讨论吧！",title:"#"+t.topicName+"#",link:window.location.href};Object(c["b"])(e)},1e3)},initNote:function(){Object(c["h"])()&&setTimeout(function(){var t=y.noteInfo,e={imgUrl:t.articleCoverImgUrl||"https://mtmall.meetao.com/img/logo100.png",desc:t.content,title:t.topicName||"快来看看我在姿美汇发现了什么",link:window.location.href};Object(c["b"])(e)},1e3)},initAnswer:function(){Object(c["h"])()&&setTimeout(function(){var t=y.answerInfo,e=t.media&&t.media.length>0?t.media[0].imageUrl:"https://mtmall.meetao.com/img/logo100.png",i={imgUrl:e,desc:t.articleExtractContent,title:y.questionInfo.articleTitle||"快来看看我在姿美汇发现了什么",link:window.location.href};Object(c["b"])(i)},1e3)},initQuestion:function(){Object(c["h"])()&&setTimeout(function(){var t=y.questionInfo,e=t.media&&t.media.length>0?t.media[0].imageUrl:"https://mtmall.meetao.com/img/logo100.png",i={imgUrl:e,desc:t.articleTitle,title:"".concat(t.answerCount,"个回答"),link:window.location.href};Object(c["b"])(i)},1500)}}},"672d":function(t,e,i){},"793c":function(t,e,i){"use strict";i.d(e,"c",function(){return o}),i.d(e,"d",function(){return a}),i.d(e,"a",function(){return c}),i.d(e,"b",function(){return r});i("b54a"),i("a481"),i("097d"),i("e7e5"),i("d399"),i("c0e9");var n=i("2fb4");function o(t){var e={imgUrl:t.imgUrl||"",desc:t.desc||"描述",title:t.title||"标题",link:t.link||window.location.href};n["a"].callhandler("share.share",{type:"url",target:"wx",data:e})}function a(t){var e={imgUrl:t.imgUrl||"",desc:t.desc||"描述",title:t.title||"标题",link:t.link||window.location.href};n["a"].callhandler("share.share",{type:"url",target:"wx_circle",data:e})}function c(t,e){n["a"].callhandler("nativeui.jump",{type:t,data:{id:e}})}function r(t){n["a"].callhandler("play.video",{data:t})}},aef6:function(t,e,i){"use strict";var n=i("5ca1"),o=i("9def"),a=i("d2c8"),c="endsWith",r=""[c];n(n.P+n.F*i("5147")(c),"String",{endsWith:function(t){var e=a(this,t,c),i=arguments.length>1?arguments[1]:void 0,n=o(e.length),s=void 0===i?n:Math.min(o(i),n),l=String(t);return r?r.call(e,l,s):e.slice(s-l.length,s)===l}})},b4c5:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"article-content",domProps:{innerHTML:t._s(t.note.content||"暂无内容")}})])},o=[],a=i("db49"),c=i("793c"),r=i("7734"),s=1,l=null,d={data:function(){return{}},props:{simpleModel:{type:Boolean,default:!1},note:{type:Object,default:function(){}}},created:function(){},mounted:function(){window.jump=this.jump,window.picture=this.picture,window.playVideo=this.playVideo,this.$nextTick(function(){Object(r["b"])("//imgcache.qq.com/open/qcloud/video/vcplayer/TcPlayer-2.3.2.js",function(){})})},methods:{jump:function(t,e){if(1==this.$route.query.isApp)console.log(t+"  "+e),Object(c["a"])(t,e);else switch(t){case"goods":location.href=a["g"]+"productDetails.html?isFx=1&productId="+e;break;case"groups":this.$router.push({path:"/circle",query:{communityId:e}});break;case"article":this.$router.push({path:"/noteDetail?"+new Date,query:{id:e}}),this.$router.go(0);break;default:alert("不支持的跳转类型")}},picture:function(){},playVideo:function(t,e){l&&(l.destroy(),l=null);var i=e.parentNode,n=i.getAttribute("srcwidth"),o=i.getAttribute("srcheight"),a=i.getElementsByClassName("tcplayer")[0],r=i.getElementsByClassName("poster")[0],d=i.getElementsByClassName("poster-box")[0];if(a.id="tc_"+s++,1==this.$route.query.isApp)Object(c["b"])({video:i.dataset.video,poster:r.currentSrc,width:n,height:o});else{d.style.zIndex=-100,l=new TcPlayer(a.id,{mp4:i.dataset.video,width:n,height:o,listener:function(t){"fullscreen"==t.type&&(t.detail.isFullscreen||l&&(l.destroy(),l=null,d.style.zIndex=1))}});var m=i.getElementsByTagName("video")[0];m.setAttribute("x5-video-player-type","h5-page"),l.play()}}}},m=d,u=(i("33c2"),i("2877")),p=Object(u["a"])(m,n,o,!1,null,"09d8e6fc",null);e["default"]=p.exports},f7fa:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"0 15px"}},["article"==t.note.mediaType?i("NoteContentArticle",{attrs:{note:t.note}}):t._e()],1)},o=[],a=i("b4c5"),c=i("3acb"),r={name:"",props:{},data:function(){return{}},mounted:function(){},created:function(){var t=this,e=this.$route.query.id;c["a"].initNote(e,function(e){t.$router.push({path:"/noteLost",query:{isDelete:e.isDelete,isHide:e.isHide,errMsg:e.errMsg}})},!0)},computed:{note:function(){return c["b"].noteInfo}},components:{NoteContentArticle:a["default"]},methods:{}},s=r,l=i("2877"),d=Object(l["a"])(s,n,o,!1,null,"da4aae7e",null);e["default"]=d.exports}}]);