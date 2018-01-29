webpackJsonp([61],{1904:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=a(i),s=n(5),l=a(s),r=n(4),u=a(r),c=n(1),d=a(c),f=n(2719),m=a(f);n(2079),n(2038);var p=function(e){function t(n){(0,o["default"])(this,t);var a=(0,l["default"])(this,e.call(this,n));return a.state={visible:!1,animation:"zoom"},a}return(0,u["default"])(t,e),t.prototype.show=function(e){this.setState({animation:e,visible:!0})},t.prototype.hide=function(){this.setState({visible:!1})},t.prototype.render=function(){var e=this,t=["zoom","fade","flip","door","rotate","slideUp","slideDown","slideLeft","slideRight"],n=t.map(function(t,n){var a={animationDelay:100*n+"ms",WebkitAnimationDelay:100*n+"ms"};return d["default"].createElement("button",{key:n,className:"btn scale",onClick:e.show.bind(e,t),style:a},t)});return d["default"].createElement("div",{className:"wrap"},d["default"].createElement("div",{className:"container",style:{paddingTop:(window.innerHeight-440)/2}},d["default"].createElement("div",{className:"btn-area"},n)),d["default"].createElement(m["default"],{visible:this.state.visible,onClose:this.hide.bind(this),animation:this.state.animation},d["default"].createElement("div",{className:"header"},"Rodal"),d["default"].createElement("div",{className:"body"},"A React modal with animations."),d["default"].createElement("button",{className:"rodal-confirm-btn",onClick:this.hide.bind(this)},"ok"),d["default"].createElement("button",{className:"rodal-cancel-btn",onClick:this.hide.bind(this)},"close")))},t}(d["default"].Component);t["default"]=p,e.exports=t["default"]},2038:13,2079:function(e,t){e.exports={scale:"scale___1yOO9"}},2719:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=n(1),c=a(u),d=n(6),f=a(d),m="undefined"!=typeof window,p=m&&window.navigator.userAgent.toLowerCase(),h=p&&p.indexOf("msie 9.0")>0,b=function(e){var t="rodal-dialog rodal-"+e.animation+"-"+e.animationType,n=e.showCloseButton?c["default"].createElement("span",{className:"rodal-close",onClick:e.onClose}):null,a=e.width,i=e.height,o=e.measure,s=e.duration,l=e.customStyles,u={width:a+o,height:i+o,animationDuration:s+"ms",WebkitAnimationDuration:s+"ms"},d=r({},u,l);return c["default"].createElement("div",{style:d,className:t},n,e.children)},y=function(e){function t(){var e,n,a,s;i(this,t);for(var l=arguments.length,r=Array(l),u=0;u<l;u++)r[u]=arguments[u];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),a.state={isShow:!1,animationType:"leave"},a.animationEnd=function(){"leave"===a.state.animationType&&a.setState({isShow:!1});var e=a.props.onAnimationEnd;e&&e()},s=n,o(a,s)}return s(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.visible&&this.enter()}},{key:"componentWillReceiveProps",value:function(e){!this.props.visible&&e.visible?this.enter():this.props.visible&&!e.visible&&this.leave()}},{key:"enter",value:function(){this.setState({isShow:!0,animationType:"enter"})}},{key:"leave",value:function(){this.setState(h?{isShow:!1}:{animationType:"leave"})}},{key:"render",value:function(){var e=this.props,t=this.state,n=e.closeMaskOnClick?e.onClose:null,a=e.showMask?c["default"].createElement("div",{className:"rodal-mask",style:e.customMaskStyles,onClick:n}):null,i={display:t.isShow?"":"none",animationDuration:e.duration+"ms",WebkitAnimationDuration:e.duration+"ms"};return c["default"].createElement("div",{style:i,className:"rodal rodal-fade-"+t.animationType+" "+e.className,onAnimationEnd:this.animationEnd},a,c["default"].createElement(b,r({},e,{animationType:t.animationType}),e.children))}}]),t}(c["default"].Component);y.propTypes={width:f["default"].number,height:f["default"].number,measure:f["default"].string,visible:f["default"].bool,showMask:f["default"].bool,closeMaskOnClick:f["default"].bool,showCloseButton:f["default"].bool,animation:f["default"].string,duration:f["default"].number,className:f["default"].string,customStyles:f["default"].object,customMaskStyles:f["default"].object,onClose:f["default"].func.isRequired,onAnimationEnd:f["default"].func},y.defaultProps={width:400,height:240,measure:"px",visible:!1,showMask:!0,closeMaskOnClick:!0,showCloseButton:!0,animation:"zoom",duration:300,className:"",customStyles:{},customMaskStyles:{}},t["default"]=y}});