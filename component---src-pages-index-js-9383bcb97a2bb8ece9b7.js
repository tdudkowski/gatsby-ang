(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,s=i(a("PJYZ")),n=i(a("VbXa")),o=i(a("8OQS")),l=i(a("pVnL")),c=i(a("q1tI")),u=i(a("17x9")),d=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed,i=p(t||a||[]);return i&&i.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=d(e),a=f(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,y=E&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},i&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:s}),c.default.createElement("source",{media:r,srcSet:a,sizes:s}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function N(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+c+n+o+a+i+t+s+r+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=c.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,s=e.spreadProps,n=e.ariaHidden,o=c.default.createElement(q,(0,l.default)({ref:t,src:a},s,{ariaHidden:n}));return i.length>1?c.default.createElement("picture",null,r(i),o):o})),q=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,u=e.onError,d=e.loading,m=e.draggable,f=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":f,sizes:a,srcSet:i,src:r},p,{onLoad:n,onError:u,ref:t,loading:d,draggable:m,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));q.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||E&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),(a=f(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,u=e.placeholderStyle,m=void 0===u?{}:u,f=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,E=e.durationFadeIn,y=e.Tag,v=e.itemProp,S=e.loading,L=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:k?1:0,transition:z?"opacity "+E+"ms":"none"},o),C="boolean"==typeof b?"lightgray":b,V={transitionDelay:E+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&V,o,m),j={title:t,alt:this.state.isVisible?"":a,style:T,className:f,itemProp:v};if(g){var F=g,M=p(g);return c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),C&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&V)}),M.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:j,imageVariants:F,generateSources:x}),M.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:j,imageVariants:F,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,w(F),c.default.createElement(q,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:S},M,{imageVariants:F}))}}))}if(h){var H=h,W=p(h),P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},s);return"inherit"===s.display&&delete P.display,c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},C&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},z&&V)}),W.base64&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:j,imageVariants:H,generateSources:x}),W.tracedSVG&&c.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:j,imageVariants:H,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,w(H),c.default.createElement(q,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:S},W,{imageVariants:H}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function V(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");u.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}z.propTypes={resolutions:O,sizes:C,fixed:V(u.default.oneOfType([O,u.default.arrayOf(O)])),fluid:V(u.default.oneOfType([C,u.default.arrayOf(C)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=z;t.default=T},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var i=a("q1tI"),r=a.n(i),s=a("Bl7J"),n=a("9eSz"),o=a.n(n),l=a("z/o8"),c=a("Haw6"),u=a("lCAa");l.a.registerPlugin(c.a,u.a);t.default=function(e){var t=e.data;return Object(i.useEffect)((function(){document.querySelectorAll(".section").forEach((function(e){!function(e,t){switch(e){case"1":l.a.fromTo(t,{x:"+=10",opacity:0},{x:0,opacity:1,duration:2});break;case"2":l.a.fromTo(t,{x:"+=1",opacity:0},{x:0,opacity:1,duration:2,scrollTrigger:{trigger:t,start:"top bottom",scrub:!0}});break;case"3":console.log("ELO3");break;case"4":console.log("ELO4");break;default:console.log("WRONG")}}(e.dataset.animation,e)}))}),[]),r.a.createElement(s.a,null,r.a.createElement("section",{id:"gongi",className:"section","data-animation":"1"},r.a.createElement("article",{className:"gongi"},r.a.createElement("h2",null,"Gongi"),r.a.createElement("p",{className:"effect"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores! Nobis cum ratione harum velit quibusdam maiores molestias explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus voluptatibus ab."),r.a.createElement("p",{className:"effect"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores! Nobis cum ratione harum velit quibusdam maiores molestias explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus voluptatibus ab."),r.a.createElement("p",{className:"effect"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores! Nobis cum ratione harum velit quibusdam maiores molestias explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus voluptatibus ab."))),r.a.createElement("section",{id:"usluga",className:"section","data-animation":"2"},r.a.createElement("article",{className:"usluga"},r.a.createElement("iframe",{src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FD%C5%BAwi%C4%99koterapia-relaksacje-z-u%C5%BCyciem-gong%C3%B3w-i-mis-tybeta%C5%84skich-420657995360697%2F&tabs=timeline&width=800&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"600",height:"700","max-width":"50%","max-height":"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media",title:"facebook"})),r.a.createElement("article",{className:"usluga"},r.a.createElement("h2",null,"Dźwiękoterapia"),r.a.createElement("p",{className:"effect"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores! Nobis cum ratione harum velit quibusdam maiores molestias explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus voluptatibus ab."),r.a.createElement("p",{className:"effect"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores! Nobis cum ratione harum velit quibusdam maiores molestias explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus voluptatibus ab."),r.a.createElement("p",{className:"effect"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores! Nobis cum ratione harum velit quibusdam maiores molestias explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus voluptatibus ab."),r.a.createElement("picture",null,r.a.createElement(o.a,{fixed:t.zestaw.childImageSharp.fixed})))),r.a.createElement("section",{id:"omnie",className:"section","data-animation":"3"},r.a.createElement("article",{className:"omnie"},r.a.createElement("p",{className:"effect"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores! Nobis cum ratione harum velit quibusdam maiores molestias explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus voluptatibus ab."),r.a.createElement("p",{className:"effect"},"awesome headline, amazing picture, komunikat 3 sec czy ta strona jest dla mnie co robisz i dlaczego jestes wyjatkowy, dlczego to robisz clear value prop logical flow: explanation, benefits testimonial, cta identify the pain and sth on pleasure multiple forms of contact guarente, powerful cta orange"),r.a.createElement("p",{className:"effect"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores! Nobis cum ratione harum velit quibusdam maiores molestias explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus voluptatibus ab."),r.a.createElement("p",{className:"effect"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores! Nobis cum ratione harum velit quibusdam maiores molestias explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus voluptatibus ab."),r.a.createElement("p",{className:"effect"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, asperiores! Nobis cum ratione harum velit quibusdam maiores molestias explicabo. Fuga hic illo consequuntur libero laborum eos nobis ducimus voluptatibus ab.")),r.a.createElement("article",{className:"omnie"},r.a.createElement("h2",null,"O mnie"),r.a.createElement("picture",null,r.a.createElement(o.a,{fixed:t.terapia.childImageSharp.fixed})))),r.a.createElement("section",{id:"kontakt",className:"section","data-animation":"4"},r.a.createElement("article",{className:"kontakt"},r.a.createElement("ul",null,r.a.createElement("li",null,"telefon: 111 222 333"),r.a.createElement("li",null,"mail: jnjvnnv@cmskmcm.com"),r.a.createElement("li",null,"inne: "))),r.a.createElement("article",{className:"kontakt"},r.a.createElement("h2",null,"Kontakt"),r.a.createElement("form",{action:"",className:"form"},r.a.createElement("label",{for:"name","aria-label":"name"},"Nadawca: ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"name",name:"name"}),r.a.createElement("br",null)),r.a.createElement("label",{for:"email"},"Email: ",r.a.createElement("br",null),r.a.createElement("input",{type:"email",id:"email",name:"email"}),r.a.createElement("br",null)),r.a.createElement("label",{for:"message"},"Wiadomość: ",r.a.createElement("br",null),r.a.createElement("textarea",{name:"message",rows:"10",cols:"30"}),r.a.createElement("br",null)),r.a.createElement("input",{type:"submit",value:"Wyczyść",className:"btn"}),r.a.createElement("input",{type:"submit",value:"Wyślij",className:"btn"})))))};var d="2962911986"}}]);
//# sourceMappingURL=component---src-pages-index-js-9383bcb97a2bb8ece9b7.js.map