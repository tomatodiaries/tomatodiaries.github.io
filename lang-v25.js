/* de | en switch. Each translatable element carries its German text in data-de
   (and data-de-alt / data-de-aria-label / data-de-title for attributes); the English
   is read from the page itself. On a switch, only the words that actually change
   pirouette out and back in, in a wave from the top left to the bottom right. */
(function(){
  var KEY='site-lang';
  var ATTRS={deAlt:'alt',deAriaLabel:'aria-label',deTitle:'title'};
  var items=[].slice.call(document.querySelectorAll('[data-de]'));
  var attrEls=[].slice.call(document.querySelectorAll('[data-de-alt],[data-de-aria-label],[data-de-title]'));
  var buttons=[].slice.call(document.querySelectorAll('[data-set-lang]'));
  var current='en',busy=false;

  items.forEach(function(el){el.dataset.en=el.tagName==='TITLE'?el.textContent:el.innerHTML});
  attrEls.forEach(function(el){Object.keys(ATTRS).forEach(function(k){
    if(el.dataset[k]!=null)el.dataset[k.replace(/^de/,'en')]=el.getAttribute(ATTRS[k])||'';
  })});

  function apply(lang){
    items.forEach(function(el){
      var v=el.dataset[lang];
      if(el.tagName==='TITLE')document.title=v;else el.innerHTML=v;
    });
    attrEls.forEach(function(el){Object.keys(ATTRS).forEach(function(k){
      var v=el.dataset[k.replace(/^de/,lang)];
      if(v!=null)el.setAttribute(ATTRS[k],v);
    })});
    document.documentElement.lang=lang;
    buttons.forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.setLang===lang))});
    current=lang;
    try{localStorage.setItem(KEY,lang)}catch(e){}
  }

  // wrap every word (text only, markup like <i> and <a> stays intact) in span.dw
  function wrap(root){
    var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
      var p=n.parentNode;
      if(!n.nodeValue.trim()||p.closest('.lang,.fort-btn,.dw'))return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }}),nodes=[];
    while(w.nextNode())nodes.push(w.currentNode);
    nodes.forEach(function(n){
      var frag=document.createDocumentFragment();
      n.nodeValue.split(/(\s+)/).forEach(function(part){
        if(!part)return;
        if(/^\s+$/.test(part)){frag.appendChild(document.createTextNode(part));return}
        var s=document.createElement('span');s.className='dw';s.textContent=part;frag.appendChild(s);
      });
      n.parentNode.replaceChild(frag,n);
    });
  }
  function unwrap(root){
    [].slice.call(root.querySelectorAll('span.dw')).forEach(function(s){s.replaceWith(document.createTextNode(s.textContent))});
    root.normalize();
  }
  // the words of an HTML string, split the same way wrap() splits them
  function tokens(html){
    var d=document.createElement('div');d.innerHTML=html;
    var w=document.createTreeWalker(d,NodeFilter.SHOW_TEXT),t=[];
    while(w.nextNode())w.currentNode.nodeValue.split(/\s+/).forEach(function(x){if(x)t.push(x)});
    return t;
  }
  // elements whose text differs between the two languages (titles and screen-reader-only text excluded)
  function changing(){
    return items.filter(function(el){
      return el.tagName!=='TITLE'&&!el.closest('.sr-only')&&el.dataset.en!==el.dataset.de;
    });
  }
  // visible words that differ from the other language's version, each with a delay
  // set by its place on the top-left -> bottom-right diagonal. When both versions have
  // the same number of words (like "56, no. 4" / "56, Nr. 4"), words that match stay still.
  function words(els,other){
    var out=[];
    els.forEach(function(el){
      var spans=[].slice.call(el.querySelectorAll('span.dw')),o=tokens(el.dataset[other]);
      var aligned=spans.length===o.length;
      spans.forEach(function(s,i){
        if(aligned&&s.textContent===o[i])return;
        var b=s.getBoundingClientRect();
        if(b.bottom<0||b.top>innerHeight||b.width===0)return;
        out.push({el:s,delay:((b.left/innerWidth)+(b.top/innerHeight))/2*700});
      });
    });
    return out;
  }
  var P='perspective(420px) ';
  var OUT=[{opacity:1,transform:P+'translate(0,0) rotateY(0deg) rotate(0deg)'},
           {opacity:0,transform:P+'translate(7px,7px) rotateY(180deg) rotate(18deg)'}];
  var IN =[{opacity:0,transform:P+'translate(-7px,-7px) rotateY(-180deg) rotate(-18deg)'},
           {opacity:1,transform:P+'translate(0,0) rotateY(0deg) rotate(0deg)'}];
  var wait=function(ms){return new Promise(function(r){setTimeout(r,ms)})};

  async function dance(lang){
    if(busy||lang===current)return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){apply(lang);return}
    busy=true;
    var from=current,els=changing();
    els.forEach(wrap);
    var outs=words(els,lang).map(function(w){
      return w.el.animate(OUT,{duration:420,delay:w.delay,easing:'cubic-bezier(.55,0,.8,.4)',fill:'forwards'});
    });
    await wait(700+420+40);
    els.forEach(unwrap);
    apply(lang);
    els.forEach(wrap);
    outs.forEach(function(a){a.cancel()});
    var ins=words(els,from).map(function(w){
      return w.el.animate(IN,{duration:520,delay:w.delay,easing:'cubic-bezier(.2,.6,.35,1)',fill:'backwards'});
    });
    await wait(700+520+40);
    ins.forEach(function(a){a.cancel()});
    els.forEach(unwrap);
    busy=false;
  }

  buttons.forEach(function(b){b.addEventListener('click',function(){dance(b.dataset.setLang)})});
  var saved='en';
  try{saved=localStorage.getItem(KEY)||'en'}catch(e){}
  if(/[?&]lang=de\b/.test(location.search))saved='de';
  if(saved==='de')apply('de');else apply('en');
})();
