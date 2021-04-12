(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"modal_Overlay__1cdLN",Modal:"modal_Modal__17grR"}},15:function(e,t,a){e.exports={SearchBar:"searchBar_SearchBar__2Dnza"}},16:function(e,t,a){e.exports={ImageGallery:"imageGallery_ImageGallery__3d7P5"}},17:function(e,t,a){e.exports={text:"notification_text__3WK6H"}},18:function(e,t,a){e.exports={button:"button_button__W7Xzb"}},20:function(e,t,a){e.exports={loader:"loader_loader__3rH5r"}},21:function(e,t,a){e.exports={App:"app_App__3H6Jk"}},53:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),i=a(12),s=a(3),l=a(4),u=a(6),h=a(5),d=a(13);a(27),a(28),a(29);var m={searchTag:"",page:1,itemsOnPage:12,fetchImages:function(){var e=this,t="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(this.searchTag,"&page=").concat(this.page,"&per_page=").concat(this.itemsOnPage,"&key=").concat("20320156-7ced8cd7704588c90dd479ccb");return fetch(t).then((function(e){if(e.ok)return e.json()})).then((function(t){if(0!==t.hits.length)return e.page+=1,t.hits;(0,d.alert)({title:"No matches found",text:"There is no images with such tag please try again"})}))},resetPageToFirst:function(){this.page=1},get tag(){return this.searchTag},set tag(e){this.searchTag=e}},g=a(11),b=a.n(g),j=a(0),p=document.querySelector("#modal-root"),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{className:b.a.Overlay,onClick:this.handleOverlayClick,children:Object(j.jsx)("div",{className:b.a.Modal,children:this.props.children})}),p)}}]),a}(n.Component),f=a(14),O=a(7),v=a.n(O),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(f.a)({},n.toLowerCase(),r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onShowGalleryByQuery(e.state),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(j.jsxs)("form",{className:v.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:v.a.button,children:Object(j.jsx)("span",{className:v.a.buttonLabel,children:"Search"})}),Object(j.jsx)("input",{className:v.a.input,name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange})]})}}]),a}(n.Component),x=a(15),_=a.n(x),S=function(e){var t=e.onShowGalleryByQuery;return Object(j.jsx)("header",{className:_.a.SearchBar,children:Object(j.jsx)(w,{onShowGalleryByQuery:t})})},k=a(9),C=a.n(k),N=function(e){var t=e.image,a=e.handleOnImageClick;return Object(j.jsxs)("li",{className:C.a.item,onClick:function(e){return a(e)},children:[Object(j.jsx)("img",{src:t.webformatURL,alt:t.tags,className:C.a.image,"data-source":t.largeImageURL}),Object(j.jsxs)("div",{className:C.a.stats,children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"material-icons",children:"thumb_up"}),t.likes]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"material-icons",children:"visibility"}),t.views]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"material-icons",children:"comment"}),t.comments]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"material-icons",children:"cloud_download"}),t.downloads]})]})]})},B=N;N.defaultProps={handleOnImageClick:function(){return null}};var I=a(16),P=a.n(I),G=function(e){var t=e.gallery,a=e.handleOnImageClick;return Object(j.jsx)("ul",{className:P.a.ImageGallery,children:t.map((function(e){return Object(j.jsx)(B,{image:e,handleOnImageClick:a},e.id)}))})},F=a(17),L=a.n(F),T=function(e){var t=e.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{className:L.a.text,children:t})})},M=a(18),Q=a.n(M),q=function(e){var t=e.name,a=e.type,n=e.handleOnClick;return Object(j.jsx)("button",{className:Q.a.button,type:a,onClick:n,children:t})},D=q;q.defaultProps={handleOnClick:function(){return null}};var A=a(19),H=a.n(A),E=a(20),K=a.n(E),U=(a(51),function(){return Object(j.jsx)(H.a,{className:K.a.loader,type:"TailSpin",color:"#00BFFF",height:80,width:80,timeout:3e3})}),J=a(21),R=a.n(J),V=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],searchQuery:"",modalVisible:!1,showPaginationBtn:!1,bodyOverflow:"scroll"},e.windowScrollTo=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.onNewSearch=function(t){var a=t.query;m.resetPageToFirst(),e.setState({searchQuery:a,gallery:[],showPaginationBtn:!1,showLoader:!1,currentBigPicture:""})},e.renderGallery=function(){e.setState({showPaginationBtn:!1,showLoader:!0});var t=e.state.searchQuery;m.tag=t,m.fetchImages().then((function(t){0!==t.length&&(e.setState((function(e){return{gallery:[].concat(Object(i.a)(e.gallery),Object(i.a)(t)),showPaginationBtn:t.length===m.itemsOnPage}})),e.windowScrollTo())})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({showLoader:!1})}))},e.changeModalState=function(){e.setState((function(e){return{modalVisible:!e.modalVisible,bodyOverflow:"hidden"===e.bodyOverflow?"scroll":"hidden"}}))},e.imageClickHandler=function(t){"IMG"===t.target.nodeName&&(e.setState({currentBigPicture:t.target.dataset.source}),e.changeModalState())},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.renderGallery(),document.body.style.overflow=this.state.bodyOverflow}},{key:"render",value:function(){var e=this.state,t=e.modalVisible,a=e.gallery,n=e.showPaginationBtn,r=e.showLoader,o=e.currentBigPicture;return Object(j.jsxs)("div",{className:R.a.App,children:[Object(j.jsx)(S,{onShowGalleryByQuery:this.onNewSearch}),a.length>0?Object(j.jsx)(G,{gallery:a,handleOnImageClick:this.imageClickHandler}):Object(j.jsx)(T,{message:"No images to show, Pls enter correct image query"}),r&&Object(j.jsx)(U,{}),n&&Object(j.jsx)(D,{name:"Load More",type:"Button",handleOnClick:this.renderGallery}),t&&Object(j.jsx)(y,{onClose:this.changeModalState,children:Object(j.jsx)("img",{src:o,alt:"hello"})})]})}}]),a}(n.Component);a(52);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={SearchForm:"searchForm_SearchForm__MDcbs",button:"searchForm_button__1USIo",buttonLabel:"searchForm_buttonLabel__2RbK0",input:"searchForm_input__2-1J2"}},9:function(e,t,a){e.exports={item:"imageGalleryItem_item__19GbH",image:"imageGalleryItem_image__-F7rA",stats:"imageGalleryItem_stats__3k7I7"}}},[[53,1,2]]]);
//# sourceMappingURL=main.ead54906.chunk.js.map