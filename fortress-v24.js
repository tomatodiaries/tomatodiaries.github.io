/* fortress drawing animation — used by the icon in the nav on every page.
   FORT_SVG is a copy of images/fortress.svg (kept inline so it also works when the file is opened locally). */
var FORT_SVG="<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1600 1000\" preserveAspectRatio=\"xMidYMax slice\" fill=\"none\" stroke=\"#B8962E\" stroke-width=\"1.4\" stroke-linecap=\"square\" stroke-linejoin=\"miter\">\n<g opacity=\".55\"><path d=\"M0 420V396H30V420H60V396H90V420H120V396H150V420H170M0 420V1000M170 420V1000\"/><path d=\"M170 1000V300H194.0V278H218.0V300H242.0V278H266.0V300H290.0V1000\"/><path d=\"M215 380v34\"/><path d=\"M215 560V534a14 14 0 0 1 28 0V560z\"/><path d=\"M290 520V496H320V520H350V496H380V520H410V496H430V520H430M290 520V1000M430 520V1000\"/><path d=\"M430 1000V610H448.0V588H466.0V610H484.0V588H502.0V610H520.0V1000\"/><path d=\"M468 680v34\"/><path d=\"M520 700V676H550V700H580V676H610V700H640V676H670V700H700V676H730V700H760V676H790V700H820V676H850V700H880V676H910V700H940V676H970V700H1000V676H1030V700H1060V676H1080V700H1080M520 700V1000M1080 700V1000\"/><path d=\"M760 1000V880A40 40 0 0 1 840 880V1000\"/><path d=\"M1080 1000V560H1098.0V538H1116.0V560H1134.0V538H1152.0V560H1170.0V1000\"/><path d=\"M1118 630v34\"/><path d=\"M1170 500V476H1200V500H1230V476H1260V500H1290M1170 500V1000M1290 500V1000\"/><path d=\"M1290 1000V330H1311.4285714285713V308H1332.8571428571427V330H1354.2857142857142V308H1375.7142857142856V330H1397.142857142857V308H1418.5714285714284V330H1440.0V1000\"/><path d=\"M1340 450V424a14 14 0 0 1 28 0V450z\"/><path d=\"M1385 450V424a14 14 0 0 1 28 0V450z\"/><path d=\"M1360 560v34\"/><path d=\"M1331.0 1000V890A34 34 0 0 1 1399.0 890V1000\"/><path d=\"M1440 450V426H1470V450H1500V426H1530V450H1560V426H1590V450H1600M1440 450V1000M1600 450V1000\"/><path d=\"M1500 1000V870A32 32 0 0 1 1564 870V1000\"/></g>\n<g opacity=\".26\"><path d=\"M0 970H1600\"/><path d=\"M0 464H170M85 464v46M0 510H170M0 556H170M85 556v46M0 602H170M0 648H170M85 648v46M0 694H170M0 740H170M85 740v46M0 786H170M0 832H170M85 832v46M0 878H170M0 924H170M85 924v46M170 344H290M230 344v46M170 390H290M170 436H290M230 436v46M170 482H290M170 528H290M230 528v46M170 574H290M170 620H290M230 620v46M170 666H290M170 712H290M230 712v46M170 758H290M170 804H290M230 804v46M170 850H290M170 896H290M230 896v46M170 942H290M290 564H430M360 564v46M290 610H430M290 656H430M360 656v46M290 702H430M290 748H430M360 748v46M290 794H430M290 840H430M360 840v46M290 886H430M290 932H430M360 932v46M430 654H520M475 654v46M430 700H520M430 746H520M475 746v46M430 792H520M430 838H520M475 838v46M430 884H520M430 930H520M475 930v46M520 744H1080M566 744v46M660 744v46M753 744v46M846 744v46M940 744v46M1033 744v46M520 790H1080M613 790v46M706 790v46M800 790v46M893 790v46M986 790v46M520 836H1080M566 836v46M660 836v46M753 836v46M846 836v46M940 836v46M1033 836v46M520 882H1080M613 882v46M706 882v46M800 882v46M893 882v46M986 882v46M520 928H1080M566 928v46M660 928v46M753 928v46M846 928v46M940 928v46M1033 928v46M1080 604H1170M1125 604v46M1080 650H1170M1080 696H1170M1125 696v46M1080 742H1170M1080 788H1170M1125 788v46M1080 834H1170M1080 880H1170M1125 880v46M1080 926H1170M1170 544H1290M1230 544v46M1170 590H1290M1170 636H1290M1230 636v46M1170 682H1290M1170 728H1290M1230 728v46M1170 774H1290M1170 820H1290M1230 820v46M1170 866H1290M1170 912H1290M1230 912v46M1170 958H1290M1290 374H1440M1365 374v46M1290 420H1440M1290 466H1440M1365 466v46M1290 512H1440M1290 558H1440M1365 558v46M1290 604H1440M1290 650H1440M1365 650v46M1290 696H1440M1290 742H1440M1365 742v46M1290 788H1440M1290 834H1440M1365 834v46M1290 880H1440M1290 926H1440M1365 926v46M1440 494H1600M1520 494v46M1440 540H1600M1440 586H1600M1520 586v46M1440 632H1600M1440 678H1600M1520 678v46M1440 724H1600M1440 770H1600M1520 770v46M1440 816H1600M1440 862H1600M1520 862v46M1440 908H1600M1440 954H1600M1520 954v46\"/></g>\n</svg>";
(function(){
  var btn=document.getElementById('fort'),busy=false;
  var wait=function(ms){return new Promise(function(r){setTimeout(r,ms)})};
  var NS='http://www.w3.org/2000/svg';
  // merlon tops the knight lands on, in the fortress drawing's own coordinates (left to right)
  var ALL=[[206,278],[365,496],[493,588],[595,676],[775,676],[1045,676],[1107,538],[1245,476],[1322,308],[1455,426]];

  function makeKnight(svg){
    var g=document.createElementNS(NS,'g');g.style.opacity='0';
    var C='#B8962E',B='#FBF5D5',S='fill="'+B+'"',L='fill="'+C+'" fill-opacity=".28"';
    g.innerHTML='<g transform="translate(-58 -122)" fill="none" stroke="'+C+'" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+
      '<path '+L+' d="M54 64C40 52 24 54 6 68C20 70 22 78 32 80C34 88 44 86 54 78Z"/>'+                  // cloak streaming behind
      '<path d="M46 98L28 120L16 116M62 100L84 102L90 124M84 102L98 102"/>'+                           // legs mid-stride
      '<path '+S+' d="M44 98L56 64L70 68L62 100Z"/>'+                                                  // torso
      '<path '+S+' d="M44 72L36 76L38 90L48 94Z"/>'+                                                   // shield on the back arm
      '<path '+S+' d="M60 58V48Q60 40 68 40Q76 42 76 50V60Z"/><path d="M66 50H76"/>'+                  // helm and visor
      '<path '+L+' d="M66 40Q56 28 40 32Q52 34 58 42Z"/>'+                                             // plume
      '<path d="M68 70L92 64"/><path d="M88 58L96 70"/><path '+S+' d="M94 64L118 44L117 49L96 68Z"/>'+ // sword arm, guard, blade
    '</g>';
    svg.appendChild(g);return g;
  }
  function hop(path,a,b,t0,dur){            // arc from a to b, appended as keyframes
    var n=14,dist=Math.hypot(b[0]-a[0],b[1]-a[1]),h=70+dist*.18;
    for(var i=1;i<=n;i++){var t=i/n;
      path.push({x:a[0]+(b[0]-a[0])*t,y:a[1]+(b[1]-a[1])*t-4*h*t*(1-t),at:t0+dur*t});}
    return t0+dur;
  }
  async function knight(svg,reduce){
    if(reduce)return;
    // keep only the merlons that are on screen (the drawing is cropped on narrow windows)
    var w=innerWidth,hh=innerHeight,s=Math.max(w/1600,hh/1000),ox=(w-1600*s)/2;
    var lo=-ox/s+40,hi=(w-ox)/s-40;
    var STOPS=ALL.filter(function(p){return p[0]>lo&&p[0]<hi});
    if(STOPS.length<2)STOPS=ALL;
    // two big leaps cover the whole fortress: far left -> middle -> beyond the far right
    var first=STOPS[0],last=STOPS[STOPS.length-1],mid=(first[0]+last[0])/2;
    var middle=STOPS.reduce(function(m,p){return Math.abs(p[0]-mid)<Math.abs(m[0]-mid)?p:m});
    var away=[last[0]+220,last[1]-170];
    var g=makeKnight(svg),pts=[{x:first[0],y:first[1],at:0}],t=300;
    pts.push({x:first[0],y:first[1],at:t});
    var d1=Math.hypot(middle[0]-first[0],middle[1]-first[1]);
    t=hop(pts,first,middle,t,800+d1*.8);              // leap 1: lands mid-fortress
    t+=450;pts.push({x:middle[0],y:middle[1],at:t});  // a moment on the merlon
    var d2=Math.hypot(away[0]-middle[0],away[1]-middle[1]);
    var dur2=900+d2*.8,ft=hop(pts,middle,away,t,dur2);  // leap 2: across to the far side and vanish
    var total=ft,vs=t+dur2*.55;
    g.animate(pts.map(function(p){return{transform:'translate('+p.x+'px,'+p.y+'px)',offset:p.at/total}}),
      {duration:total,easing:'linear',fill:'forwards'});
    g.animate([{opacity:0,offset:0},{opacity:1,offset:250/total},{opacity:1,offset:vs/total},{opacity:0,offset:1}],
      {duration:total,fill:'forwards'});
    await wait(total+200);
    g.remove();
  }

  btn.addEventListener('click',async function(){
    if(busy)return;busy=true;btn.disabled=true;
    var host=document.createElement('div');host.className='fort-draw';
    try{
      host.innerHTML=FORT_SVG;
      var svg=host.querySelector('svg');svg.removeAttribute('width');svg.removeAttribute('height');
      var paths=[].slice.call(svg.querySelectorAll('path'));
      var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      // hide every line before anything is shown, so the fortress never flashes up complete
      host.style.opacity='0';document.body.appendChild(host);
      paths.forEach(function(p){p.dataset.x=p.getBBox().x;p.setAttribute('pathLength','1');
        p.style.strokeDasharray='1';p.style.strokeDashoffset=reduce?'0':'1';});
      paths.sort(function(a,b){return a.dataset.x-b.dataset.x});
      document.body.classList.add('drawing');
      await wait(1300);                     // page fully faded out, blank beat
      host.style.opacity='1';
      paths.forEach(function(p,i){
        if(!reduce)p.animate([{strokeDashoffset:1},{strokeDashoffset:0}],
          {duration:1600,delay:i*(2400/paths.length),easing:'ease-in-out',fill:'forwards'});
      });
      await wait(reduce?800:4200);          // drawn
      await knight(svg,reduce);
      await wait(600);
      host.style.transition='opacity 1s ease';host.style.opacity='0';
      await wait(1300);                     // blank again before the page returns
    }catch(e){}
    document.body.classList.remove('drawing');
    host.remove();busy=false;btn.disabled=false;
  });
})();
