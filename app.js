// ====== DATOS (editables). Horas en texto separadas por espacio. w = lunes a viernes, s = sábado ======
var CAMPUS=[{id:"c4",name:"Campo Cuatro"},{id:"c1",name:"Campo Uno"},{id:"ic",name:"Intercampus"}];
var ROUTES=[
{id:"sub-c4",campus:"c4",name:"Suburbano Cuautitlán",fare:"$3.00",fn:"Después de las 18:30 h la tarifa es de $6.00.",dirs:[
 {t:"Suburbano Cuautitlán → Campo Cuatro",p:"Dársena 13",w:"6:00 6:20 6:40 7:00 7:10 7:20 7:30 7:40 7:50 8:00 8:30 9:00 9:30 10:00 10:30 11:00 11:30 12:00 12:30 13:00 13:30 14:00 14:30 15:00 15:30 16:00 16:30 17:00",s:"6:30 7:00 8:00"},
 {t:"Campo Cuatro → Suburbano Cuautitlán",p:"Andén 1",w:"10:50 11:30 12:30 13:00 13:30 14:00 14:30 15:00 15:30 16:00 16:30 17:00 17:30 18:00 18:30 19:00 19:30 20:00 20:30 21:15 21:30 21:45 22:00",s:"12:30 13:30 14:30"}]},
{id:"hue",campus:"c4",name:"Huehuetoca",fare:"$10.00",fn:"Por Teoloyucan y Coyotepec.",dirs:[
 {t:"Huehuetoca → Campo Cuatro",p:"",x:"Servicio ordinario tradicional, sin horario fijo."},
 {t:"Campo Cuatro → Huehuetoca",p:"",x:"Servicio ordinario tradicional, sin horario fijo."}]},
{id:"ros-c4",campus:"c4",name:"Rosario",fare:"$15.50",fn:"Cuando hay poca afluencia, la comunidad se traslada sin costo a Cementos para tomar Toreo o Politécnico.",dirs:[
 {t:"Rosario → Campo Cuatro",p:"Dársena C",w:"6:10"},
 {t:"Campo Cuatro → Rosario",p:"Andén 5",w:"13:30"}]},
{id:"que",campus:"c4",name:"La Quebrada",fare:"$10.00",fn:"",dirs:[
 {t:"La Quebrada → Campo Cuatro",p:"Puente de la Quebrada (antes de la estación Mexibús Lechería)",w:"6:00 6:20"},
 {t:"Campo Cuatro → La Quebrada",p:"Afuera de la puerta 3",w:"13:30"}]},
{id:"cc-c4",campus:"c4",name:"Cuatro Caminos",fare:"$15.50",fn:"Ascensos: CETRAM Cuatro Caminos, 1° de Mayo y Cementos. Descensos donde lo requieras, avisando al subir.",dirs:[
 {t:"CETRAM Cuatro Caminos → Campo Cuatro",p:"Junto al andén 1 (atrás de la tienda “K”, lado norte)",w:"6:00 6:10 6:20 6:30 6:45 7:00 7:20 7:40 8:00 8:30 9:00 10:00 11:00 12:00 13:00 14:00 15:00 16:00",s:"7:00"},
 {t:"Campo Cuatro → CETRAM Cuatro Caminos",p:"Andén 3",w:"11:10 11:50 12:30 13:00 13:20 13:40 14:00 14:20 14:40 15:00 15:40 16:20 17:00 17:40 18:20 19:00 19:30 20:00 20:30 21:00 21:30 22:00",s:"12:30 13:40 15:10"}]},
{id:"pol",campus:"c4",name:"Politécnico",fare:"$15.50",fn:"Ascensos: Metro Politécnico, Metrobús San José de la Escalera, Ceylán, puente peatonal de Jardines del Recuerdo y Cementos. Descensos donde lo requieras, avisando al subir.",dirs:[
 {t:"Metro Politécnico → Campo Cuatro",p:"Andén 1 (atrás de la Ruta 106)",w:"5:45 6:00 6:15 6:30 6:45 6:50 7:00 7:20 8:00 8:30 9:00 9:30 10:00 11:00 12:00 12:30 13:00 13:30 14:00 14:30 15:00 16:00 17:20",s:"7:00"},
 {t:"Campo Cuatro → Metro Politécnico",p:"Andén 4",w:"11:10 12:00 12:30 13:00 13:20 13:40 14:00 14:20 14:40 15:00 15:30 16:00 16:40 17:20 18:10 19:00 20:00 20:45 21:30",s:"12:30 13:30 14:30 15:30"}]},
{id:"cc-c1",campus:"c1",name:"Cuatro Caminos",fare:"$16.00",fn:"Ascensos: Metro Cuatro Caminos, 16 de Septiembre, Cuauhtémoc, Echegaray y Cementos.",dirs:[
 {t:"CETRAM Cuatro Caminos → Campo Uno",p:"Salida de camiones “Izcalli 123”",w:"5:45 6:00 7:00 8:00 9:00"},
 {t:"Campo Uno → CETRAM Cuatro Caminos",p:"Andén 2",w:"13:00 14:00 16:00 18:00 19:00 20:00"}]},
{id:"ros-c1",campus:"c1",name:"Rosario",fare:"$16.00",fn:"Si no se llega al mínimo de pasajeros, la comunidad puede irse en corridas ordinarias a tarifa preferencial.",dirs:[
 {t:"CETRAM Rosario → Campo Uno",p:"Andén 3",w:"5:45 6:00 7:10 10:00"},
 {t:"Campo Uno → CETRAM Rosario",p:"Andén 3",w:"14:30 20:00"}]},
{id:"lech",campus:"c1",name:"Suburbano Lechería",fare:"$12.00",fn:"",dirs:[
 {t:"Suburbano Lechería → Campo Uno",p:"Dársena 18",w:"6:20 6:30 6:40 6:50 7:00 7:10 7:20 7:30 7:40 7:50 8:00 8:30 9:00 9:30 10:00 10:30 11:00 11:30 12:00 12:30 13:00 13:30 14:00 14:30 15:00 15:30 16:00 16:30 17:00"},
 {t:"Campo Uno → Suburbano Lechería",p:"Andén 1",w:"11:30 12:30 13:00 13:30 14:00 14:30 15:00 15:30 16:00 16:30 17:00 17:30 18:00 18:30 19:00 19:30 20:00 20:30 21:10",s:"14:30"}]},
{id:"inter",campus:"ic",name:"Intercampus",fare:"$3.00",fn:"Después de las 18:30 h la tarifa es de $8.00. Paradas de C1 a C4: esquina Av. Torre Izcalli y Av. José María Morelos, Oxxo en el crucero de Paloma, puente de la Unidad Militar, Walmart de la Autopista y módulo de vigilancia entrando a Xhala. Paradas de C4 a C1: gasolinera bajando el retorno del puente, Plaza San Marcos, puente de la Unidad Militar, semáforo del crucero de Palomas, Club Sportway y Av. José María (antes de subir a Campo 1).",dirs:[
 {t:"Campo Uno → Campo Cuatro",p:"Andén 4",w:"6:20 7:00 7:30 8:30 9:00 10:00 10:30 11:30 12:00 13:00 13:30 14:30 15:00 16:00 16:30 17:30 18:00 19:00 19:30 20:30 21:00",s:"6:30 7:00 8:00 12:00 13:00 15:00"},
 {t:"Campo Cuatro → Campo Uno",p:"Andén 2",w:"6:20 7:45 8:15 9:15 9:45 10:45 11:15 12:15 12:45 13:45 15:15 15:45 16:45 17:15 18:15 18:45 19:45 20:30 21:30",s:"6:30 7:00 8:00 12:00 13:00 15:00"}]}
];
var DL={week:"Lunes a viernes",sat:"Sábado",sun:"Domingo"};

// ====== UTILIDADES ======
function toMin(h){var p=h.split(":");return +p[0]*60+ +p[1]}
function fmt(m){return String(Math.floor(m/60)).padStart(2,"0")+":"+String(m%60).padStart(2,"0")}
function tm(s){return s?s.split(" ").map(toMin):[]}
function dk(n){var g=n.getDay();return g===0?"sun":g===6?"sat":"week"}
function nowMin(){var n=new Date();return n.getHours()*60+n.getMinutes()}
function $(i){return document.getElementById(i)}
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}

// ====== ESTILOS (clases Tailwind) ======
var BTN_ON="bg-white/20 text-white ring-1 ring-white/40";
var BTN_OFF="bg-white/5 text-white/60 ring-1 ring-white/10";
var BTN_BASE="rounded-2xl px-3 py-3.5 text-sm font-semibold backdrop-blur transition active:scale-[.97] ";
var GRAD={c4:"from-[#b45309] to-[#6b2d0a]",c1:"from-[#1f55b5] to-[#0e2763]",ic:"from-[#5b3fb5] to-[#2a1c66]"};
var EMPTY="rounded-2xl border border-dashed border-white/20 p-3 text-sm text-white/60";

// ====== ESTADO ======
var camp="c4",rid="sub-c4",view=dk(new Date());
function route(){return ROUTES.filter(function(r){return r.id===rid})[0]}
function btn(txt,on,fn,parent,extra){
  var b=el("button",BTN_BASE+(on?BTN_ON:BTN_OFF)+" "+(extra||""),txt);
  b.type="button";b.setAttribute("aria-pressed",on);b.onclick=fn;parent.appendChild(b);
}

// ====== RENDER ======
function render(){
  var c=$("campus");c.textContent="";
  CAMPUS.forEach(function(k){btn(k.name,k.id===camp,function(){
    camp=k.id;rid=ROUTES.filter(function(r){return r.campus===k.id})[0].id;render();
  },c,"flex-1")});
  var rs=$("routes");rs.textContent="";
  ROUTES.filter(function(r){return r.campus===camp}).forEach(function(r){
    btn(r.name,r.id===rid,function(){rid=r.id;render()},rs,"shrink-0 whitespace-nowrap rounded-full px-5");
  });
  var r=route(),inf=$("info");inf.textContent="";
  inf.appendChild(el("p","text-lg font-bold","Tarifa plana: "+r.fare));
  if(r.fn)inf.appendChild(el("p","mt-1 text-sm leading-relaxed text-white/60",r.fn));
  var d=$("days");d.textContent="";
  ["week","sat","sun"].forEach(function(k){btn(DL[k],k===view,function(){view=k;render()},d,"flex-1")});
  renderDirs();
}

function renderDirs(){
  var r=route(),box=$("dirs"),realDay=dk(new Date()),m=nowMin(),isToday=(view===realDay);
  box.textContent="";
  r.dirs.forEach(function(d,i){
    var num="0"+(i+1);
    var card=el("article","relative overflow-hidden rounded-3xl bg-gradient-to-br "+GRAD[r.campus]+" p-5 ring-1 ring-white/10");
    card.appendChild(el("span","pointer-events-none absolute -bottom-4 right-3 select-none text-8xl font-black text-white/10",num));
    var in_=el("div","relative");
    in_.appendChild(el("div","mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-xl","🚌"));
    in_.appendChild(el("p","text-xs font-bold tracking-[.2em] text-white/50",num));
    in_.appendChild(el("h3","text-lg font-bold leading-snug",d.t));
    if(d.p)in_.appendChild(el("p","mt-0.5 text-sm text-white/60",d.p));
    var body=el("div","mt-4");
    if(d.x){
      body.appendChild(el("p",EMPTY,d.x));
    }else{
      var list=tm(view==="sat"?d.s:view==="week"?d.w:"");
      // Contador: solo si el día seleccionado es el día real del dispositivo
      if(isToday){
        var n=el("div","mb-3 flex flex-wrap items-baseline gap-x-3 rounded-2xl bg-black/25 px-4 py-3 ring-1 ring-white/10");
        var nx=list.filter(function(t){return t>=m})[0];
        if(!list.length)n.appendChild(el("span","text-sm font-medium","Hoy no hay servicio"));
        else if(nx==null)n.appendChild(el("span","text-sm font-medium","Hoy no hay más salidas"));
        else{
          var df=nx-m;
          n.appendChild(el("b","text-3xl font-black tabular-nums",df===0?"Ahora":"en "+df+" min"));
          n.appendChild(el("span","text-sm font-medium text-white/70","Sale a las "+fmt(nx)));
        }
        body.appendChild(n);
      }
      if(!list.length){
        body.appendChild(el("p",EMPTY,"Sin servicio: "+DL[view].toLowerCase()+"."));
      }else{
        var g=el("div","grid grid-cols-4 gap-1.5 sm:grid-cols-6"),mark=false;
        list.forEach(function(t){
          var c="rounded-xl py-1.5 text-center text-sm font-semibold tabular-nums ";
          c+="bg-white/10";
          if(isToday){if(t<m)c+=" opacity-40";else if(!mark){c="rounded-xl py-1.5 text-center text-sm font-bold tabular-nums bg-amber-300 text-zinc-900";mark=true}}
          g.appendChild(el("span",c,fmt(t)));
        });
        body.appendChild(g);
      }
    }
    in_.appendChild(body);
    var b=el("button","mt-4 w-full rounded-2xl bg-white/15 py-3.5 text-base font-bold ring-1 ring-white/25 backdrop-blur transition active:scale-[.98]","Camión en el andén");
    b.type="button";b.onclick=function(){notificarLlegada(r.id,i)};
    in_.appendChild(b);
    card.appendChild(in_);
    box.appendChild(card);
  });
}

// ====== TIEMPO REAL (pendiente de conectar Firebase o Supabase) ======
function notificarLlegada(rutaId,sentido){
  var ahora=new Date();
  console.log("[notificarLlegada] ruta:",rutaId,"| sentido:",sentido,"| hora:",ahora.toLocaleTimeString("es-MX"),"| ISO:",ahora.toISOString());
  // TODO: enviar a la base de datos, por ejemplo { rutaId, sentido, timestamp }.
}

function tick(){
  var n=new Date();
  $("clock").textContent=n.toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long"})+" · "+fmt(nowMin());
  renderDirs();
}
render();tick();setInterval(tick,30000);