!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define([,],t):"object"==typeof exports?exports.ReactMic=t(require("react"),require("prop-types")):e.ReactMic=t(e.React,e.PropTypes)}(self,((e,t)=>(()=>{"use strict";var r={894:e=>{e.exports=t},809:t=>{t.exports=e}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};o.r(i),o.d(i,{ReactMic:()=>N});var a=o(809),c=o.n(a),u=o(894),s=new(window.AudioContext||window.webkitAudioContext),l=s.createAnalyser();const f=function(){return s},p=function(){return l},v=function(){l=s.createAnalyser()};function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function b(e){var t=function(e,t){if("object"!=d(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:t+""}var m,h,g,S,w,C,R,P,j,O,M,T=[];navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var k,x=function(){return e=function e(t,r,n,o,i,a){var c,u,s,l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c=this,s=function(){if(S=Date.now(),g){if(h&&"suspended"===h.state&&h.resume(),g&&"paused"===g.state)return void g.resume();h&&g&&"inactive"===g.state&&(g.start(10),h.createMediaStreamSource(w).connect(m),R&&R())}else navigator.mediaDevices?(console.log("getUserMedia supported."),navigator.mediaDevices.getUserMedia(M).then((function(e){w=e,g=MediaRecorder.isTypeSupported(C.mimeType)?new MediaRecorder(e,C):new MediaRecorder(e),R&&R(),g.onstop=l.onStop,g.ondataavailable=function(e){T.push(e.data),O&&O(e.data)},(h=f()).resume().then((function(){m=p(),g.start(10),h.createMediaStreamSource(w).connect(m)}))}))):alert("Your browser does not support audio recording")},(u=b(u="startRecording"))in c?Object.defineProperty(c,u,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[u]=s;var v=a.echoCancellation,d=a.autoGainControl,y=a.noiseSuppression,k=a.channelCount;R=t,P=r,j=n,O=o,C=i,M={audio:{echoCancellation:v,autoGainControl:d,noiseSuppression:y,channelCount:k},video:!1}},(t=[{key:"stopRecording",value:function(){g&&"inactive"!==g.state&&(g.stop(),w.getAudioTracks().forEach((function(e){e.stop()})),g=null,v())}},{key:"onStop",value:function(){var e=new Blob(T,{type:C.mimeType});T=[];var t={blob:e,startTime:S,stopTime:Date.now(),options:C,blobURL:window.URL.createObjectURL(e)};P&&P(t),j&&j(t)}}])&&y(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),q={create:function(e){var t=f(),r=p();if(void 0===k){var n=t.createMediaElementSource(e);n.connect(r),k=n}r.connect(t.destination)}};const z=q;var B={visualizeSineWave:function(e,t,r,n,o,i){var a=p(),c=a.fftSize,u=new Uint8Array(c);e.clearRect(0,0,r,n),function s(){requestAnimationFrame(s),(a=p()).getByteTimeDomainData(u),e.fillStyle=o,e.fillRect(0,0,r,n),e.lineWidth=2,e.strokeStyle=i,e.beginPath();for(var l=1*r/c,f=0,v=0;v<c;v++){var d=u[v]/128*n/2;0===v?e.moveTo(f,d):e.lineTo(f,d),f+=l}e.lineTo(t.width,t.height/2),e.stroke()}()},visualizeFrequencyBars:function(e,t,r,n,o,i){var a=p();a.fftSize=256;var c=a.frequencyBinCount,u=new Uint8Array(c);e.clearRect(0,0,r,n),function t(){requestAnimationFrame(t),(a=p()).getByteFrequencyData(u),e.fillStyle=o,e.fillRect(0,0,r,n);for(var s,l,f=r/c*2.5,v=0,d=0;d<c;d++)s=u[d],void 0,(l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i))&&(parseInt(l[1],16),parseInt(l[2],16),parseInt(l[3],16)),e.fillStyle=i,e.fillRect(v,n-s/2,f,s/2),v+=f+1}()},visualizeFrequencyCircles:function(e,t,r,n,o,i){var a=p();a.fftSize=32;var c=a.frequencyBinCount,u=new Uint8Array(c);e.clearRect(0,0,r,n),function t(){requestAnimationFrame(t),(a=p()).getByteFrequencyData(u);for(var s=new Uint8Array(c/3),l=0;l<c;l+=3){for(var f=0,v=0;v<3;v++)f+=u[l+v];s[l/3]=f/3}e.clearRect(0,0,r,n),e.beginPath(),e.arc(r/2,n/2,Math.min(n,r)/2,0,2*Math.PI),e.fillStyle=o,e.fill();var d=Math.min(n,r)/2/s.length;e.strokeStyle=i;for(var y=0;y<s.length;y++){e.beginPath();var b=d*y+d*(s[y]/128);e.arc(r/2,n/2,b,0,2*Math.PI),e.stroke()}}()}};const U=B;function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,I(n.key),n)}}function _(e,t,r){return t=F(t),function(e,t){if(t&&("object"==D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,E()?Reflect.construct(t,r||[],F(e).constructor):t.apply(e,r))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function I(e){var t=function(e,t){if("object"!=D(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==D(t)?t:t+""}var N=function(e){function t(e){var r,n,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=r=_(this,t,[e]),i=function(){var e=r.props,t=e.backgroundColor,n=e.strokeColor,o=e.width,i=e.height,a=e.visualSetting,c=r.state,u=c.canvas,s=c.canvasCtx;"sinewave"===a?U.visualizeSineWave(s,u,o,i,t,n):"frequencyBars"===a?U.visualizeFrequencyBars(s,u,o,i,t,n):"frequencyCircles"===a&&U.visualizeFrequencyCircles(s,u,o,i,t,n)},(o=I(o="visualize"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,r.visualizerRef=c().createRef(),r.state={microphoneRecorder:null,canvas:null,canvasCtx:null},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(t,e),r=t,(n=[{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.record,n=t.onStop,o=this.state.microphoneRecorder;e.record!==r&&(r?o&&o.startRecording():o&&(o.stopRecording(n),this.clear()))}},{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.onSave,n=t.onStop,o=t.onStart,i=t.onData,a=t.audioElem,c=t.audioBitsPerSecond,u=t.echoCancellation,s=t.autoGainControl,l=t.noiseSuppression,f=(t.channelCount,t.mimeType),p=this.visualizerRef.current,v=p.getContext("2d"),d={audioBitsPerSecond:c,mimeType:f},y={echoCancellation:u,autoGainControl:s,noiseSuppression:l};a?(z.create(a),this.setState({canvas:p,canvasCtx:v},(function(){e.visualize()}))):this.setState({microphoneRecorder:new x(o,n,r,i,d,y),canvas:p,canvasCtx:v},(function(){e.visualize()}))}},{key:"clear",value:function(){var e=this.props,t=e.width,r=e.height;this.state.canvasCtx.clearRect(0,0,t,r)}},{key:"render",value:function(){var e=this.props,t=e.width,r=e.height;return c().createElement("canvas",{ref:this.visualizerRef,height:r,width:t,className:this.props.className})}}])&&A(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(a.Component);return N.propTypes={backgroundColor:u.string,strokeColor:u.string,className:u.string,audioBitsPerSecond:u.number,mimeType:u.string,height:u.number,record:u.bool.isRequired,onStop:u.func,onData:u.func,onSave:u.func},N.defaultProps={backgroundColor:"rgba(255, 255, 255, 0.5)",strokeColor:"#000000",className:"visualizer",audioBitsPerSecond:128e3,mimeType:"audio/webm;codecs=opus",record:!1,width:640,height:100,visualSetting:"sinewave",echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1,channelCount:2},i})()));