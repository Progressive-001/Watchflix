import{e as A,g as F,r as i,_ as U,b as o,j as s,f,y as v,z as R}from"./index-BykVF5uZ.js";import{a as V,b as X,c as q,s as J,d as K}from"./useSlot-BY5szWOg.js";function W(e){return A("MuiSkeleton",e)}F("MuiSkeleton",["root","variantOverlay","variantCircular","variantRectangular","variantText","variantInline","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs"]);const D=["className","component","children","animation","overlay","loading","variant","level","height","width","sx","slots","slotProps"];let d=e=>e,k,x,_,w,C;const G=e=>{const{variant:a,level:l}=e,t={root:["root",a&&`variant${f(a)}`,l&&`level${f(l)}`]};return K(t,W,{})},z=R(k||(k=d`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
    background: var(--unstable_pulse-bg);
  }

  100% {
    opacity: 1;
  }
`)),O=R(x||(x=d`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),Y=J("span",{name:"JoySkeleton",slot:"Root",overridesResolver:(e,a)=>a.root})(({ownerState:e,theme:a})=>e.animation==="pulse"&&e.variant!=="inline"&&v(_||(_=d`
      &::before {
        animation: ${0} 2s ease-in-out 0.5s infinite;
        background: ${0};
      }
    `),z,a.vars.palette.background.level3),({ownerState:e,theme:a})=>e.animation==="pulse"&&e.variant==="inline"&&v(w||(w=d`
      &::after {
        animation: ${0} 2s ease-in-out 0.5s infinite;
        background: ${0};
      }
    `),z,a.vars.palette.background.level3),({ownerState:e,theme:a})=>e.animation==="wave"&&v(C||(C=d`
      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);
      background: ${0};

      &::after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: var(--unstable_pseudo-zIndex);
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          var(--unstable_wave-bg, rgba(0 0 0 / 0.08)),
          transparent
        );
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
      }
    `),a.vars.palette.background.level3,O),({ownerState:e,theme:a})=>{var l,t,c,r;const n=((l=a.components)==null||(l=l.JoyTypography)==null||(l=l.defaultProps)==null?void 0:l.level)||"body1";return[{display:"block",position:"relative","--unstable_pseudo-zIndex":9,"--unstable_pulse-bg":a.vars.palette.background.level1,overflow:"hidden",cursor:"default",color:"transparent","& *":{visibility:"hidden"},"&::before":{display:"block",content:'" "',top:0,bottom:0,left:0,right:0,zIndex:"var(--unstable_pseudo-zIndex)",borderRadius:"inherit"},[a.getColorSchemeSelector("dark")]:{"--unstable_wave-bg":"rgba(255 255 255 / 0.1)"}},e.variant==="rectangular"&&o({borderRadius:"min(0.15em, 6px)",height:"auto",width:"100%","&::before":{position:"absolute"}},!e.animation&&{backgroundColor:a.vars.palette.background.level3},e.level!=="inherit"&&o({},a.typography[e.level])),e.variant==="circular"&&o({borderRadius:"50%",width:"100%",height:"100%","&::before":{position:"absolute"}},!e.animation&&{backgroundColor:a.vars.palette.background.level3},e.level!=="inherit"&&o({},a.typography[e.level])),e.variant==="text"&&o({borderRadius:"min(0.15em, 6px)",background:"transparent",width:"100%"},e.level!=="inherit"&&o({},a.typography[e.level||n],{paddingBlockStart:`calc((${((t=a.typography[e.level||n])==null?void 0:t.lineHeight)||1} - 1) * 0.56em)`,paddingBlockEnd:`calc((${((c=a.typography[e.level||n])==null?void 0:c.lineHeight)||1} - 1) * 0.44em)`,"&::before":o({height:"1em"},a.typography[e.level||n],e.animation==="wave"&&{backgroundColor:a.vars.palette.background.level3},!e.animation&&{backgroundColor:a.vars.palette.background.level3}),"&::after":o({height:"1em",top:`calc((${((r=a.typography[e.level||n])==null?void 0:r.lineHeight)||1} - 1) * 0.56em)`},a.typography[e.level||n])})),e.variant==="inline"&&o({display:"inline",position:"initial",borderRadius:"min(0.15em, 6px)"},!e.animation&&{backgroundColor:a.vars.palette.background.level3},e.level!=="inherit"&&o({},a.typography[e.level]),{WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::before":{position:"absolute",zIndex:"var(--unstable_pseudo-zIndex)",backgroundColor:a.vars.palette.background.level3}},e.animation==="pulse"&&{"&::after":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:"var(--unstable_pseudo-zIndex)",backgroundColor:a.vars.palette.background.level3}}),e.variant==="overlay"&&o({borderRadius:a.vars.radius.xs,position:"absolute",width:"100%",height:"100%",zIndex:"var(--unstable_pseudo-zIndex)"},e.animation==="pulse"&&{backgroundColor:a.vars.palette.background.surface},e.level!=="inherit"&&o({},a.typography[e.level]),{"&::before":{position:"absolute"}})]}),Q=i.forwardRef(function(a,l){const t=V({props:a,name:"JoySkeleton"}),{className:c,component:r="span",children:n,animation:$="pulse",overlay:I=!1,loading:g=!0,variant:b="overlay",level:E=b==="text"?"body-md":"inherit",height:h,width:m,sx:u,slots:j={},slotProps:B={}}=t,L=U(t,D),P=o({},L,{component:r,slots:j,slotProps:B,sx:[{width:m,height:h},...Array.isArray(u)?u:[u]]}),y=o({},t,{animation:$,component:r,level:E,loading:g,overlay:I,variant:b,width:m,height:h}),T=G(y),[H,M]=X("root",{ref:l,className:q(T.root,c),elementType:Y,externalForwardedProps:P,ownerState:y});return g?s.jsx(H,o({},M,{children:n})):s.jsx(i.Fragment,{children:i.Children.map(n,(p,N)=>N===0&&i.isValidElement(p)?i.cloneElement(p,{"data-first-child":""}):p)})});Q.muiName="Skeleton";function ee(){const[e,a]=i.useState(!1);i.useEffect(()=>{const t=()=>{window.scrollY>500?a(!0):a(!1)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]);const l=()=>{window.scrollTo({top:10,behavior:"smooth"})};return s.jsx(s.Fragment,{children:e&&s.jsx("button",{onClick:l,className:`\r
            fixed bottom-6 right-6\r
            bg-red-600 text-white font-medium\r
            rounded-full shadow-md\r
            p-3 sm:p-4\r
            hover:bg-red-700 transition-all duration-300\r
            animate-fade-in\r
        \r
          `,children:"Get Started"})})}const ae="data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20width='16'%20height='16'%20data-icon='CaretDownSmall'%20data-icon-id=':R4sllb9qldat56:'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20role='img'%3e%3cpath%20fill='currentColor'%20fill-rule='evenodd'%20d='M11.6%206.5c.15%200%20.22.18.12.28l-3.48%203.48a.33.33%200%200%201-.48%200L4.28%206.78a.17.17%200%200%201%20.12-.28z'%20clip-rule='evenodd'/%3e%3c/svg%3e",oe="data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20width='16'%20height='16'%20data-icon='LanguagesSmall'%20data-icon-id=':R4cllb9qldat56:'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20role='img'%3e%3cpath%20fill='currentColor'%20fill-rule='evenodd'%20d='M10.77%205.33%2010.5%206%209.34%208.94l-.57%201.44L7.33%2014h1.78l.73-1.97h3.58l.74%201.97H16l-3.43-8.67zm-.15%204.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11%2011%200%200%201%200%2010.43c.33.28.81.8%201.05%201.16%201.5-.91%202.85-2.36%203.88-4.02v5.1h1.49V7.52q.6.95%201.33%201.8l.57-1.43a12%2012%200%200%201-1.34-1.9h2.09z'%20clip-rule='evenodd'/%3e%3c/svg%3e";export{Q as S,ae as a,ee as b,oe as i};
