"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[7979],{1714:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return y}});var a=n(5392),l=n(2784),r=n(4385),c=n(6854);function o(e){const t=Object.assign({h1:"h1",p:"p",hr:"hr",h2:"h2",a:"a",div:"div",strong:"strong",pre:"pre",code:"code",h3:"h3",br:"br"},(0,a.ah)(),e.components),{RepositoryLink:n,BrandPrimaryText:o,BrandSecondaryText:i}=t;return o||s("BrandPrimaryText",!0),i||s("BrandSecondaryText",!0),n||s("RepositoryLink",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Wheel Gestures"),"\n",l.createElement(n,{to:"https://github.com/xiel/embla-carousel-wheel-gestures"},l.createElement(t.p,null,"View plugin on GitHub")),"\n",l.createElement(t.p,null,"This plugin is used to extend Embla Carousel with the ability to use the mouse/trackpad wheel to navigate through the carousel."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"installation",style:{position:"relative"}},l.createElement(t.a,{href:"#installation","aria-label":"installation permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Installation"),"\n",l.createElement(t.p,null,"First you need to install the ",l.createElement(t.strong,null,"npm package")," and save it to your dependencies:"),"\n",l.createElement(r.mQ,{groupId:"package-manager"},l.createElement(c.L,{label:"npm",value:"npm"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"npm install embla-carousel-wheel-gestures --save\n"))),l.createElement(c.L,{label:"yarn",value:"yarn"},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"yarn add embla-carousel-wheel-gestures\n")))),"\n",l.createElement(t.p,null,"Alternatively, you can use a ",l.createElement(t.strong,null,"CDN")," to include it in your project:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<script src="https://unpkg.com/embla-carousel-wheel-gestures/dist/embla-carousel-wheel-gestures.umd.js"><\/script>\n')),"\n",l.createElement(t.h2,{id:"usage",style:{position:"relative"}},l.createElement(t.a,{href:"#usage","aria-label":"usage permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Usage"),"\n",l.createElement(t.p,null,"This plugin accepts a single ",l.createElement(t.strong,null,"optional")," parameter, which is its ",l.createElement(t.a,{href:"/plugins/wheel-gestures/#options"},"options")," object that allows you to configure it."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js"},"import EmblaCarousel from 'embla-carousel'\nimport { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'\n\nconst embla = EmblaCarousel(emblaRoot, { loop: false }, [WheelGesturesPlugin()]) // Add plugin\n")),"\n",l.createElement(t.h2,{id:"options",style:{position:"relative"}},l.createElement(t.a,{href:"#options","aria-label":"options permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Options"),"\n",l.createElement(t.p,null,"The Wheel Gestures plugin accepts an optional ",l.createElement(t.strong,null,"options")," object as the first argument. Here's an example of how to make use of it:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js"},"import EmblaCarousel from 'embla-carousel'\nimport { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'\n\nconst wheelGesturesOptions = {\n  wheelDraggingClass: 'my-wheel-class'\n}\n\nconst embla = EmblaCarousel(emblaRoot, { loop: false }, [\n  WheelGesturesPlugin(wheelGesturesOptions) // Add plugin with options\n])\n")),"\n",l.createElement(t.hr),"\n",l.createElement(t.h3,{id:"wheeldraggingclass",style:{position:"relative"}},l.createElement(t.a,{href:"#wheeldraggingclass","aria-label":"wheeldraggingclass permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"wheelDraggingClass"),"\n",l.createElement(t.p,null,"Type: ",l.createElement(o,null,l.createElement(t.code,null,"string")),l.createElement(t.br),"\n","Default: ",l.createElement(i,null,l.createElement(t.code,null,"is-wheel-dragging"))),"\n",l.createElement(t.p,null,"Choose a classname that will be applied to the container during a wheel gesture. Pass an empty string to opt-out."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h3,{id:"forcewheelaxis",style:{position:"relative"}},l.createElement(t.a,{href:"#forcewheelaxis","aria-label":"forcewheelaxis permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"forceWheelAxis"),"\n",l.createElement(t.p,null,"Type: ",l.createElement(o,null,l.createElement(t.code,null,"string | undefined")),l.createElement(t.br),"\n","Default: ",l.createElement(i,null,l.createElement(t.code,null,"undefined"))),"\n",l.createElement(t.p,null,"Force an axis on which to listen for wheel events. Choose scroll axis between ",l.createElement(t.code,null,"x")," and ",l.createElement(t.code,null,"y"),". Useful if you want to slide horizontally when scrolling vertically or vice versa."),"\n",l.createElement(t.hr),"\n",l.createElement(t.h3,{id:"target",style:{position:"relative"}},l.createElement(t.a,{href:"#target","aria-label":"target permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"target"),"\n",l.createElement(t.p,null,"Type: ",l.createElement(o,null,l.createElement(t.code,null,"Element")),l.createElement(t.br),"\n","Default: ",l.createElement(i,null,l.createElement(t.code,null,"undefined"))),"\n",l.createElement(t.p,null,"Specify the element that should be observed for wheel events."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=n(4234),u=n(3785),d=n(8116),h=n(3559),g=n(7377),p=n(286),E=n(1429),f=n(8944),v=n(9726);const b=e=>{const{data:t,pageContext:n}=e,{siteUrl:a,author:r}=(0,d.$)(),{title:c="",description:o,date:i}=t.mdx.frontmatter,s=(0,l.useMemo)((()=>new Date(i+" UTC").toISOString()),[i]);return l.createElement(m.p,{title:c,description:o,url:""+a+n.slug},l.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,f.P)(a)+'",\n        "description": "'+o+'",\n        "url": "'+a+n.slug+'",\n        "headline": "'+c+'",\n        "image": "'+a+'/share-image.png",\n        "datePublished": "'+s+'",\n        "dateModified": "'+s+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+r+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+r+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+a+u.Z+'"\n          }\n        }\n      }\n    '))},w=e=>{const{pageContext:t,children:n}=e,{next:a,previous:r,filePath:c,id:o}=t;return l.createElement(l.Fragment,null,l.createElement(p.V,{id:o}),l.createElement("article",{id:E.O},l.createElement(v.i,null,n)),l.createElement(h.l,{pageUrl:c}),l.createElement(g.R,{previous:r,next:a}))};function y(e){return l.createElement(w,e,l.createElement(i,e))}},286:function(e,t,n){n.d(t,{V:function(){return f}});var a=n(2784),l=n(1195),r=n(9900),c=(n(7694),n(4049)),o=n(5211);var i=n(6807),s=n(3792),m=n(727),u=n(127);const d=l.default.nav.withConfig({displayName:"PageBreadcrumbs__PageBreadcrumbsWrapper",componentId:"sc-1mlty1z-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],m.u.COMPLEMENTARY,u.v.THREE),h=(0,l.css)(["color:",";padding:"," 0;"],s.DM.TEXT_LOW_CONTRAST,u.v.ONE),g=(0,l.default)(r.t).withConfig({displayName:"PageBreadcrumbs__Link",componentId:"sc-1mlty1z-1"})(["",";"],h),p=l.default.span.withConfig({displayName:"PageBreadcrumbs__ActiveTitle",componentId:"sc-1mlty1z-2"})(["",";"],h),E=(0,l.default)(i.J).withConfig({displayName:"PageBreadcrumbs__Separator",componentId:"sc-1mlty1z-3"})(["color:",";margin:0 ",";"],s.DM.TEXT_LOW_CONTRAST,u.v.ONE),f=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,o.V)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,c.D)(e.slug,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:a.createElement(d,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:l,slug:r,title:c}=e;return t!==n.length-1?a.createElement(a.Fragment,{key:l},a.createElement(g,{to:r},c),a.createElement(E,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):a.createElement(p,{key:l},c)})))}},3559:function(e,t,n){n.d(t,{l:function(){return d}});var a=n(2784),l=n(1195),r=n(9900),c=n(3792),o=n(727),i=n(127),s=n(2657),m=n(6722);const u=(0,l.default)(r.t).withConfig({displayName:"PageEditThisPage__PageEditThisPageWrapper",componentId:"sc-15acsrz-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],o.u.COMPLEMENTARY,i.v.ONE,i.v.ONE,i.v.EIGHT,c.DM.TEXT_LOW_CONTRAST),d=e=>{const{pageUrl:t}=e,n=s.n.GITHUB_DOCUMENTATION+"/"+t;return a.createElement(u,{to:n},a.createElement(m.M5,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},7377:function(e,t,n){n.d(t,{R:function(){return f}});var a=n(2784),l=n(1195),r=n(9900),c=n(4097),o=n(3792),i=n(127),s=n(727),m=n(6722),u=n(6991);const d=i.v.FOUR,h=l.default.nav.withConfig({displayName:"PagePagination__PagePaginationWrapper",componentId:"sc-3ejrow-0"})(["",";display:flex;justify-content:space-between;margin-top:",";"],(0,u.h)(d,"","div"),i.v.EIGHT),g=l.default.div.withConfig({displayName:"PagePagination__Item",componentId:"sc-3ejrow-1"})(["> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],o.DM.BRAND_PRIMARY,o.DM.BRAND_SECONDARY),p=l.default.div.withConfig({displayName:"PagePagination__ItemLabel",componentId:"sc-3ejrow-2"})(["color:",";padding-bottom:",";"],o.DM.TEXT_LOW_CONTRAST,i.v.ONE),E=l.default.div.withConfig({displayName:"PagePagination__ItemTitle",componentId:"sc-3ejrow-3"})(["display:inline-flex;align-items:center;font-weight:",";","{",";}"],s.X.MEDIUM,m.EG,c.V),f=e=>{const{next:t,previous:n}=e;return a.createElement(h,{"aria-label":"Pagination Navigation"},a.createElement(g,null,n&&a.createElement(r.t,{to:n.slug},a.createElement(p,null,"Previous"),a.createElement(E,null,a.createElement(m.M5,{iconSvg:"arrowLeft"},n.title)))),a.createElement(g,null,t&&a.createElement(r.t,{to:t.slug},a.createElement(p,null,"Next"),a.createElement(E,null,a.createElement(m.M5,{iconSvg:"arrowRight",iconSide:"right"},t.title)))))}},4234:function(e,t,n){n.d(t,{p:function(){return o}});var a=n(2784),l=n(8116),r=n(8944),c=n(3471);const o=e=>{const{title:t,description:n,lang:o="en",url:i,children:s}=e,m=(0,l.$)(),u=t+" | "+(0,c.g)(m.title),d=n||m.description;return a.createElement(a.Fragment,null,a.createElement("html",{lang:o}),a.createElement("title",null,u),a.createElement("link",{rel:"canonical",href:i}),a.createElement("meta",{name:"description",content:d}),a.createElement("meta",{name:"og:title",content:t}),a.createElement("meta",{name:"og:description",content:d}),a.createElement("meta",{name:"og:type",content:"article"}),a.createElement("meta",{name:"og:locale",content:"en_EN"}),a.createElement("meta",{name:"og:url",content:i}),a.createElement("meta",{name:"og:site_name",content:(0,r.P)(m.siteUrl)}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:m.author}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:d}),s)}},3471:function(e,t,n){n.d(t,{g:function(){return a}});const a=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=""),e.replace(/(^\w|-\w)/g,(e=>e.replace(/-/,t).toUpperCase()))}},8944:function(e,t,n){n.d(t,{P:function(){return a}});const a=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,n){t.Z=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-default-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-plugins-wheel-gestures-mdx-bb29d7d15c535155dd4b.js.map