(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-229ada36"],{"20d6":function(t,e,i){"use strict";var n=i("5ca1"),o=i("0a49")(6),a="findIndex",c=!0;a in[]&&Array(1)[a](function(){c=!1}),n(n.P+n.F*c,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(a)},"247f":function(t,e,i){"use strict";var n=i("d1f0"),o=i.n(n);o.a},"3acb":function(t,e,i){"use strict";i("20d6"),i("f751"),i("e17f");var n=i("2241"),o=(i("aef6"),i("a481"),i("e7e5"),i("d399")),a=i("2b0e"),c=i("4db0"),r=i("d225"),s=i("b0b4"),l=i("c7a1"),m=i("db49"),d=i("7734"),u=i("5f9c"),p=u["a"].esZmtH5,f=function(t){t.globalUid=p.globalUid,t.dataSrc="H5",t.registerTime=p.registerTime,t.access_token=p.access_token,t.simt_token=p.access_token,t.userId=p.userId||"1"},g=function(){function t(){Object(r["a"])(this,t)}return Object(s["a"])(t,[{key:"getCommunityInfo",value:function(t){f(t);var e=m["h"]+"cmt/api/community/getCommunityInfo";return Object(l["a"])(e,t)}},{key:"getCommunityDynamicNoteList",value:function(t){f(t);var e=m["h"]+"cmt/api/noteEntity/getCommunityDynamicNoteList";return Object(l["a"])(e,t)}},{key:"getCommunityGoodNoteList",value:function(t){f(t);var e=m["h"]+"cmt/api/noteEntity/getCommunityGoodNoteList";return Object(l["a"])(e,t)}},{key:"getCommunityTopicList",value:function(t){f(t);var e=m["h"]+"cmt/api/noteEntity/getCommunityTopicNoteList";return Object(l["a"])(e,t)}},{key:"getHotTopicList",value:function(t){f(t);var e=m["h"]+"cmt/api/topicInfo/queryHotTopic";return Object(l["a"])(e,t)}},{key:"getAnswerList",value:function(t){f(t);var e=m["h"]+"cmt/api/answer/list";return Object(l["a"])(e,t)}},{key:"getNoteInfo",value:function(t){f(t);var e=Object(d["a"])("v_");e&&(t.v_=e);var i=m["h"]+"cmt/api/noteEntity/getNoteDetailInfo";return Object(l["a"])(i,t)}},{key:"getQuestionInfo",value:function(t){f(t);var e=m["h"]+"cmt/api/question/info";return Object(l["a"])(e,t)}},{key:"getAnswerInfo",value:function(t){f(t);var e=Object(d["a"])("v_");e&&(t.v_=e);var i=m["h"]+"cmt/api/answer/info";return Object(l["a"])(i,t)}},{key:"getNoteCommentList",value:function(t){f(t);var e=m["h"]+"ctt/api/comment/select/note/comment/list";return Object(l["c"])(e,t)}},{key:"getNoteCommentHotList",value:function(t){f(t);var e=m["h"]+"ctt/api/comment/select/note/comment/hot/list";return Object(l["c"])(e,t)}},{key:"getTopicInfo",value:function(t){f(t);var e=m["h"]+"cmt/api/topicInfo/getTopicInfo/pbcdhe";return Object(l["a"])(e,t)}},{key:"getTopicNewNoteList",value:function(t){f(t);var e=m["h"]+"cmt/api/topicInfo/queryTopicNewNoteInfo/pbcdhe";return Object(l["a"])(e,t)}},{key:"getTopicHotNoteList",value:function(t){f(t);var e=m["h"]+"cmt/api/topicInfo/queryTopicHotNoteInfo/pbcdhe";return Object(l["a"])(e,t)}},{key:"saveComment",value:function(t){f(t);var e=m["h"]+"cmt/api/noteEntity/saveComment";return Object(l["c"])(e,t)}},{key:"setCommentLike",value:function(t){f(t);var e=m["h"]+"ctt/api/comment/add/comment/like";return Object(l["c"])(e,t)}},{key:"setNoteLike",value:function(t){f(t);var e=m["h"]+"cmt/api/noteEntity/setNoteLike";return Object(l["c"])(e,t)}},{key:"getCommentInfo",value:function(t){f(t);var e=m["h"]+"ctt/api/comment/select/note/comment/info";return Object(l["a"])(e,t)}},{key:"getCommentRelayList",value:function(t){var e=m["h"]+"ctt/api/comment/select/note/comment/reply/list";return Object(l["c"])(e,t)}}]),t}(),h=new g;i.d(e,"b",function(){return b}),i.d(e,"a",function(){return w}),i.d(e,"c",function(){return T});var v=u["a"].esZmtH5,I=function(t){},b=a["default"].observable({replyShow:!1,wxShareShow:!1,get appUserid(){var t=v.userId;return t||"1"},circleId:1,circleInfo:{},circleHotNotes:{},circleGoodNotes:{},hotTopics:{},circleTopics:{},circleAnswers:{},cHotPage:{loading:!1,finished:!1,page:1,total:1,limit:5},cGoodPage:{loading:!1,finished:!1,page:1,total:1,limit:5},cTopicPage:{loading:!1,finished:!1,page:1,total:1,limit:10},cAnswerPage:{loading:!1,finished:!1,page:1,total:1,limit:5},topicName:"",topicId:"",topicInfo:{},topicNewNotes:{},topicHotNotes:{},topicNewPage:{loading:!1,finished:!1,page:1,total:1,limit:5},topicHotPage:{loading:!1,finished:!1,page:1,total:1,limit:5},noteId:1,noteInfo:{},noteComments:{},notePage:{loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0},answerId:0,answerInfo:{},answerPage:{loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0},questionId:0,questionInfo:{},questionPage:{loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0},comment:{id:"",replyUserId:"",commentUserId:"",comment:"",commentType:"",commentId:"",commentPid:"",appUserid:"",globalUid:"",dataSrc:"",registerTime:""},commentNickName:""});function C(){b.noteInfo={},b.noteComments={},b.notePage={loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0}}function N(){b.qusetionInfo={},b.noteComments={},b.notePage={loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0}}function y(){b.answerInfo={},b.noteComments={},b.notePage={loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0}}var w={toggelReply:function(t){b.replyShow=void 0!=t?t:!b.replyShow},wxShareShow:function(){b.wxShareShow=!0},wxShareHide:function(){b.wxShareShow=!1},initCircle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;b.circleId=t,t||Object(o["a"])("无效的圈子id"),h.getCommunityInfo({id:t,appUserid:b.appUserid}).then(function(t){200==t.code&&(b.circleInfo=t.data.result)}),h.getHotTopicList({communityId:t,appUserid:b.appUserid}).then(function(t){b.hotTopics=t.data.result})},loadCircleGoodNotes:function(){var t=b.cGoodPage,e={communityId:b.circleId,page:t.page,limit:t.limit,appUserid:b.appUserid};h.getCommunityGoodNoteList(e).then(function(e){e.data.page<=1?b.circleGoodNotes=e.data.result:b.circleGoodNotes=b.circleGoodNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadCircleHotNotes:function(){var t=b.cHotPage,e={communityId:b.circleId,page:t.page,limit:t.limit,appUserid:b.appUserid};h.getCommunityDynamicNoteList(e).then(function(e){e.data.page<=1?b.circleHotNotes=e.data.result:b.circleHotNotes=b.circleHotNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadCircleTopics:function(){var t=b.cTopicPage,e={communityId:b.circleId,page:t.page,limit:t.limit,appUserid:b.appUserid};h.getCommunityTopicList(e).then(function(e){e.data.page<=1?b.circleTopics=e.data.result:b.circleTopics=b.circleTopics.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadCircleAnswers:function(){var t=b.cAnswerPage,e={noteId:b.questionId,page:t.page,limit:t.limit,userId:b.appUserid};h.getAnswerList(e).then(function(e){if(0!=e.tag)return t.loading=!1,void(t.finished=!0);e.data.page<=1?b.circleAnswers=e.data.result:b.circleAnswers=b.circleAnswers.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},initTopic:function(t,e){var i={};if(t.topicName)i.topicName=t.topicName;else{if(!t.topicId)return void Object(o["a"])("无效的话题");i.topicId=parseInt(t.topicId)}h.getTopicInfo(i).then(function(t){0==t.tag?(b.topicInfo=t.data.result,b.topicId=t.data.result.topicId,b.topicName=t.data.result.topicName.replace(/#/g,"")):e&&e(t)})},loadTopicHotNotes:function(){var t=b.topicHotPage,e={topicName:b.topicName,page:t.page,limit:t.limit,appUserid:b.appUserid};h.getTopicHotNoteList(e).then(function(e){e.data.page<=1?b.topicHotNotes=e.data.result:b.topicHotNotes=b.topicHotNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadTopicNewNotes:function(){var t=b.topicNewPage,e={topicName:b.topicName,page:t.page,limit:t.limit,appUserid:b.appUserid};h.getTopicNewNoteList(e).then(function(e){e.data.page<=1?b.topicNewNotes=e.data.result:b.topicNewNotes=b.topicNewNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},initNote:function(t,e,i){var n=this;C(),b.noteId=t,t||Object(o["a"])("无效的帖子id"),h.getNoteInfo({id:t,appUserid:b.appUserid,is_wv:i?1:0}).then(function(t){if(0==t.tag){var i=t.data.result;i.content=n.removeBr(i.content),n.addIsArticle(i),i.isDelete||i.isHide?e&&e(i):b.noteInfo=i}else e&&e(t)})},addIsArticle:function(t){if(-1==location.href.indexOf("isArticle=")){var e="article"==t.mediaType?1:0,i="";i=-1!=location.href.indexOf("?")?location.href+"&isArticle="+e:location.href+"?isArticle="+e,history.replaceState("","",i)}},loadComments:function(){var t=b.notePage,e={contentId:b.noteId,contentTable:"SNF",page:t.page,limit:t.limit,appUserid:b.appUserid};h.getNoteCommentList(e).then(function(e){e.data.page<=1?b.noteComments=e.data.result:b.noteComments=b.noteComments.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},initQuestion:function(t,e){N(),b.questionId=t,t||Object(o["a"])("无效的问答id"),h.getQuestionInfo({noteId:t,userId:b.appUserid}).then(function(t){if(0==t.tag){var i=t.data.result;i.isDelete||i.isHide?e&&e(i):b.questionInfo=i}else e&&e(t)})},initAnswer:function(t,e,i){var n=this;y(),b.answerId=t,b.noteId=t,t||Object(o["a"])("无效的回答id"),h.getAnswerInfo({answerId:t,userId:b.appUserid,is_wv:i?1:0}).then(function(t){if(0==t.tag){var o=t.data.result;o.isDelete||o.isHide?e&&e(o):(o.content=n.removeBr(o.content),b.answerInfo=o,i||n.initQuestion(b.answerInfo.parentId))}else e&&e(t)})},removeBr:function(t){if(!t)return"";var e="<p><br></p >";return t.endsWith(e)?t.substring(0,t.length-e.length):t},likeNote:function(t){if(v.registerTime){t.isLike=1;var e={id:t.id,appUserid:t.appUserid,likeSrc:"H5",userId:v.userId,dataSrc:"H5"};h.setNoteLike(e).then(function(e){0==e.tag&&t.likeCount++})}else n["a"].confirm({confirmButtonText:"立即登录",cancelButtonText:"稍后登录",closeOnClickOverlay:!0,title:"是否立即登录姿美汇？"}).then(function(){Object(c["i"])()})},likeComment:function(t){if(v.registerTime){t.userLike=!0;var e={src:"H5",contentId:t.id,userId:v.userId,referenceUserId:t.referenceUserId};h.setCommentLike(e).then(function(e){0==e.tag&&t.likeCount++})}else n["a"].confirm({confirmButtonText:"立即登录",cancelButtonText:"稍后登录",closeOnClickOverlay:!0,title:"是否立即登录姿美汇？"}).then(function(){Object(c["i"])()})},goCommentFromContent:function(t){var e={id:t.id,replyUserId:t.appUserid,commentUserId:b.appUserid,commentType:0,commentPid:0,appUserid:t.appUserid};I(e),b.comment=Object.assign(b.comment,e),b.commentNickName="说点什么...",this.goComment()},goCommentFromComment:function(t,e){var i={id:t.contentId,replyUserId:t.userId,commentUserId:b.appUserid,commentType:1,commentId:t.id,commentPid:1===e?t.id:t.pid,appUserid:t.referenceUserId};I(i),b.comment=Object.assign(b.comment,i),b.commentNickName='回复"'.concat(t.nickName,'"'),this.goComment()},goComment:function(){v.registerTime?b.replyShow=!0:n["a"].confirm({confirmButtonText:"立即登录",cancelButtonText:"稍后登录",closeOnClickOverlay:!0,title:"是否立即登录姿美汇？"}).then(function(){Object(c["i"])()})},saveComment:function(){var t=this;h.saveComment(b.comment).then(function(e){0==e.tag&&(Object(o["a"])("评论成功"),b.noteInfo.commentCount||b.noteInfo.commentCount++,b.answerInfo.commentCount||b.answerInfo.commentCount++,b.questionInfo.commentCount||b.questionInfo.commentCount++,t.getCommentInfo(e.data.result.commentId))})},getCommentInfo:function(t){h.getCommentInfo({commentId:t}).then(function(t){if(0==t.tag){var e=t.data.result,i=function(t){return e.id===t.id},n=b.noteComments.findIndex(i);if(-1===n)b.noteComments.unshift(e);else{var o=b.noteComments[n].userLike;b.noteComments.splice(n,1,e),b.noteComments[n].userLike=o}}})},getCommentRelayList:function(t){var e=t.childComment.list[t.childComment.limit-1],i={page:1,limit:10,pid:t.id,contentTable:"SNF",id:e.id};h.getCommentRelayList(i).then(function(e){0==e.tag&&(t.childComment.list=t.childComment.list.concat(e.data.result))})}},T={initCircle:function(){Object(c["h"])()&&setTimeout(function(){var t=b.circleInfo,e={imgUrl:t.mainImgUrl,desc:t.communityDesc.substring(0,20)||"发现一个超有意思圈子，快来加入吧！",title:t.communityName,link:window.location.href};Object(c["b"])(e)},1e3)},initTopic:function(){Object(c["h"])()&&setTimeout(function(){var t=b.topicInfo,e={imgUrl:t.mainImgUrl,desc:t.content.substring(0,20)||"发现一个有意思的话题，快来参与讨论吧！",title:"#"+t.topicName+"#",link:window.location.href};Object(c["b"])(e)},1e3)},initNote:function(){Object(c["h"])()&&setTimeout(function(){var t=b.noteInfo,e={imgUrl:t.articleCoverImgUrl||"https://mtmall.meetao.com/img/logo100.png",desc:t.content,title:t.topicName||"快来看看我在姿美汇发现了什么",link:window.location.href};Object(c["b"])(e)},1e3)},initAnswer:function(){Object(c["h"])()&&setTimeout(function(){var t=b.answerInfo,e=t.media&&t.media.length>0?t.media[0].imageUrl:"https://mtmall.meetao.com/img/logo100.png",i={imgUrl:e,desc:t.articleExtractContent,title:b.questionInfo.articleTitle||"快来看看我在姿美汇发现了什么",link:window.location.href};Object(c["b"])(i)},1e3)},initQuestion:function(){Object(c["h"])()&&setTimeout(function(){var t=b.questionInfo,e=t.media&&t.media.length>0?t.media[0].imageUrl:"https://mtmall.meetao.com/img/logo100.png",i={imgUrl:e,desc:t.articleTitle,title:"".concat(t.answerCount,"个回答"),link:window.location.href};Object(c["b"])(i)},1500)}}},a481:function(t,e,i){"use strict";var n=i("cb7c"),o=i("4bf8"),a=i("9def"),c=i("4588"),r=i("0390"),s=i("5f1b"),l=Math.max,m=Math.min,d=Math.floor,u=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};i("214f")("replace",2,function(t,e,i,g){return[function(n,o){var a=t(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,a,o):i.call(String(a),n,o)},function(t,e){var o=g(i,t,this,e);if(o.done)return o.value;var d=n(t),u=String(this),p="function"===typeof e;p||(e=String(e));var v=d.global;if(v){var I=d.unicode;d.lastIndex=0}var b=[];while(1){var C=s(d,u);if(null===C)break;if(b.push(C),!v)break;var N=String(C[0]);""===N&&(d.lastIndex=r(u,a(d.lastIndex),I))}for(var y="",w=0,T=0;T<b.length;T++){C=b[T];for(var k=String(C[0]),U=l(m(c(C.index),u.length),0),O=[],j=1;j<C.length;j++)O.push(f(C[j]));var H=C.groups;if(p){var L=[k].concat(O,U,u);void 0!==H&&L.push(H);var S=String(e.apply(void 0,L))}else S=h(k,u,U,O,H,e);U>=w&&(y+=u.slice(w,U)+S,w=U+k.length)}return y+u.slice(w)}];function h(t,e,n,a,c,r){var s=n+t.length,l=a.length,m=p;return void 0!==c&&(c=o(c),m=u),i.call(r,m,function(i,o){var r;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(s);case"<":r=c[o.slice(1,-1)];break;default:var m=+o;if(0===m)return i;if(m>l){var u=d(m/10);return 0===u?i:u<=l?void 0===a[u-1]?o.charAt(1):a[u-1]+o.charAt(1):i}r=a[m-1]}return void 0===r?"":r})}})},aef6:function(t,e,i){"use strict";var n=i("5ca1"),o=i("9def"),a=i("d2c8"),c="endsWith",r=""[c];n(n.P+n.F*i("5147")(c),"String",{endsWith:function(t){var e=a(this,t,c),i=arguments.length>1?arguments[1]:void 0,n=o(e.length),s=void 0===i?n:Math.min(o(i),n),l=String(t);return r?r.call(e,l,s):e.slice(s-l.length,s)===l}})},c03e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"topicHeader",staticClass:"topic-header"},[i("img",{staticClass:"bg",attrs:{src:t.circleInfo.coverImgUrl}}),i("div",{staticClass:"bg-mask"}),i("div",{staticClass:"user-heads"},t._l(t.circleInfo.memberImgArr,function(t,e){return i("img",{key:e,staticClass:"user-head",attrs:{src:t}})}),0),i("button",{staticClass:"join-btn",on:{click:t.jumpApp}},[t._v("加入圈子")]),i("div",{staticClass:"circle-intro"},[i("img",{staticClass:"circle-icon",attrs:{src:t.circleInfo.mainImgUrl}}),i("span",{staticClass:"circle-name"},[t._v(t._s(t.circleInfo.communityName))]),i("span",{ref:"circleDes",class:t.simpleDes?"circle-des-simple":"circle-des",on:{click:function(e){t.simpleDes=!t.simpleDes}}},[t._v(t._s(t.circleInfo.communityDesc))])])]),i("div",{staticClass:"hot-topics"},[i("div",{staticClass:"hot-topics-title"},[t._v("热门话题")]),i("div",{staticClass:"outer"},[i("div",{staticClass:"hot-topics-list"},t._l(t.hotTopics,function(e,n){return i("span",{key:n,staticClass:"hot-topics-item",on:{click:function(i){return t.goTopic(e.topicId)}}},[t._v("#"+t._s(e.topicName)+"#")])}),0)])])])},o=[],a=i("3acb"),c=i("4db0"),r={data:function(){return{activeName:"a",simpleDes:!0}},methods:{jumpApp:function(){Object(c["a"])()},goTopic:function(t){this.$router.push({path:"/topic",query:{topicId:t}})}},computed:{circleInfo:function(){return a["b"].circleInfo},hotTopics:function(){return a["b"].hotTopics}}},s=r,l=(i("247f"),i("2877")),m=Object(l["a"])(s,n,o,!1,null,"a8d596d0",null);e["default"]=m.exports},d1f0:function(t,e,i){}}]);