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

// ====== CONFIGURACIÓN ======
var SUPABASE_URL="https://dgajvyumnkyoybckgmpv.supabase.co";       // Project URL, ej. https://abcd1234.supabase.co
var SUPABASE_ANON_KEY="sb_publishable_9daC4r-G5lJElt6a-wvNbw_SYm4L0v0";  // clave pública (anon o publishable); protégela con RLS
var COOLDOWN_MIN=5;      // minutos entre reportes "Camión en el andén" (por ruta y sentido)
var EARLY_MIN=15;        // un reporte hasta 15 min antes de la salida cuenta como llegada
var LATE_SEVERE_MIN=15;  // más de 15 min de retraso = alerta severa
var CANCEL_MIN=20;       // más de 20 min sin reporte de llegada = se da por cancelada la salida
var CANCEL_SHOW_MIN=60;  // cuánto tiempo se muestra el aviso de salida cancelada
var REPORT_VENTANA_MIN=180; // cuánto tiempo se conservan los reportes compartidos en memoria
var COMENT_CD_SEG=60;    // segundos entre comentarios desde el mismo dispositivo

// Cliente de Supabase. Si falta la librería o las claves, la página sigue funcionando en modo local.
var db=null;
try{
  if(window.supabase&&SUPABASE_URL&&SUPABASE_ANON_KEY)db=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
}catch(e){console.error("Supabase no se pudo iniciar:",e)}

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

// Estilos del botón de llegada según estado
var BTN_A="mt-4 w-full rounded-2xl py-3.5 text-base font-bold transition ";
var BTN_NORMAL=BTN_A+"bg-amber-400 text-zinc-900 active:scale-[.98]";
var BTN_LATE=BTN_A+"bg-red-600 text-white ring-1 ring-red-300/40 active:scale-[.98]";
var BTN_SEVERE=BTN_A+"animate-pulse bg-red-700 text-white ring-2 ring-red-300 active:scale-[.98]";
var BTN_DONE=BTN_A+"cursor-not-allowed bg-white/5 text-white/40 ring-1 ring-white/10";
var BTN_SEC="mt-2 w-full rounded-2xl bg-white/15 py-3 text-sm font-semibold ring-1 ring-white/25 transition active:scale-[.98]";
var BTN_SEC_DONE="mt-2 w-full cursor-not-allowed rounded-2xl bg-white/5 py-3 text-sm font-semibold text-white/40 ring-1 ring-white/10";

function renderDirs(){
  var r=route(),box=$("dirs"),realDay=dk(new Date()),m=nowMin(),isToday=(view===realDay);
  box.textContent="";
  r.dirs.forEach(function(d,i){
    var num="0"+(i+1),late=0; // late: 0 = a tiempo, 1 = retrasado, 2 = retraso severo
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
      // Contador y alerta de retraso: solo si el día seleccionado es el día real del dispositivo
      if(isToday){
        var st=estado(r,i,d);late=st.late; // retraso: la última salida ya pasó y nadie reportó llegada
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
        if(st.cancelled!==null)body.appendChild(el("p","mb-3 rounded-xl bg-red-500/20 px-3 py-2 text-sm font-semibold text-red-100 ring-1 ring-red-300/30","Se dio por cancelada la salida de las "+fmt(st.cancelled)+" (sin reporte de llegada)."+(nx!=null?" Sigue la de las "+fmt(nx)+".":"")));
        var resumen=infoReportes(r.id,i);
        if(resumen)body.appendChild(el("p","mb-3 text-sm font-medium text-white/80",resumen));
      }
      if(!list.length){
        body.appendChild(el("p",EMPTY,"Sin servicio: "+DL[view].toLowerCase()+"."));
      }else{
        var g=el("div","grid grid-cols-4 gap-1.5 sm:grid-cols-6"),mark=false;
        list.forEach(function(t){
          var c="rounded-xl py-1.5 text-center text-sm font-semibold tabular-nums bg-white/10";
          if(isToday){if(t<m)c+=" opacity-40"+(t===st.cancelled?" line-through":"");else if(!mark){c="rounded-xl py-1.5 text-center text-sm font-bold tabular-nums bg-amber-300 text-zinc-900";mark=true}}
          g.appendChild(el("span",c,fmt(t)));
        });
        body.appendChild(g);
      }
    }
    in_.appendChild(body);

    // Botón principal: en retraso reporta la alerta (rojo); si no, reporta llegada (amarillo). Enfriamiento = gris.
    var gL=cooldownLeft(r.id,i,"llegada"),gA=cooldownLeft(r.id,i,"alerta"),b;
    if(late){
      var tipoAlerta=late===2?"posible_cancelacion":"retraso";
      if(gA){b=el("button",BTN_DONE,"✔ Reporte enviado · otro en "+gA+" min");b.disabled=true}
      else{
        b=el("button",late===2?BTN_SEVERE:BTN_LATE,late===2?"⚠️ Posible cancelación / Retraso severo":"🔴 Camión retrasado");
        b.onclick=function(){notificarLlegada(r.id,i,tipoAlerta)};
      }
    }else if(gL){
      b=el("button",BTN_DONE,"✔ Reportado · otro reporte en "+gL+" min");b.disabled=true;
    }else{
      b=el("button",BTN_NORMAL,"🚌 Camión en el andén");
      b.onclick=function(){notificarLlegada(r.id,i,"llegada")};
    }
    b.type="button";in_.appendChild(b);
    if(late){ // con retraso también se puede avisar que el camión ya llegó
      var s2=gL?el("button",BTN_SEC_DONE,"✔ Llegada reportada"):el("button",BTN_SEC,"🚌 Ya llegó el camión");
      s2.type="button";
      if(gL)s2.disabled=true;else s2.onclick=function(){notificarLlegada(r.id,i,"llegada")};
      in_.appendChild(s2);
    }
    card.appendChild(in_);
    box.appendChild(card);
  });
}

// ====== REPORTES DE LLEGADA (cooldown con localStorage) ======
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function repKey(rutaId,sentido,grupo){return "fesc:rep:"+rutaId+":"+sentido+":"+(grupo||"llegada")}
function lastReport(rutaId,sentido,grupo){var t=+lsGet(repKey(rutaId,sentido,grupo))||0;return t>Date.now()?0:t}
function cooldownLeft(rutaId,sentido,grupo){ // minutos que faltan (0 = ya puede reportar)
  var left=COOLDOWN_MIN*60000-(Date.now()-lastReport(rutaId,sentido,grupo));
  return left>0?Math.ceil(left/60000):0;
}
// Horarios de HOY (en minutos) de un sentido
function horariosHoy(d){var k=dk(new Date());return d.x?[]:tm(k==="sat"?d.s:k==="week"?d.w:"")}
// Estado en vivo: última salida pasada, próxima salida y nivel de retraso (0 a tiempo, 1 retrasado, 2 severo)
function estado(r,i,d){
  var list=horariosHoy(d),m=nowMin(),last=null,next=null,late=0,cancelled=null;
  list.forEach(function(t){if(t<=m)last=t;if(next==null&&t>=m)next=t});
  if(last!==null){
    var ago=m-last,dep=new Date();dep.setHours(0,last,0,0);
    var arrived=lastReport(r.id,i,"llegada")>=dep.getTime()-EARLY_MIN*60000||llegadaCompartida(r.id,i,last,dep.getTime());
    if(ago>=1&&!arrived){
      if(ago<=CANCEL_MIN)late=ago>LATE_SEVERE_MIN?2:1;   // 1-15 min retrasado, 16-20 posible cancelación
      else if(ago<=CANCEL_SHOW_MIN)cancelled=last;        // más de 20 min: se da por cancelada
    }
  }
  return {late:late,last:last,next:next,cancelled:cancelled};
}

// ====== TIEMPO REAL: reportes (Supabase, tabla "reportes") ======
function toast(txt){
  var t=el("div","fixed left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 rounded-2xl bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg",txt);
  t.style.bottom="max(1rem, env(safe-area-inset-bottom))";
  t.setAttribute("role","alert");document.body.appendChild(t);
  setTimeout(function(){t.remove()},4000);
}
// tipo: "llegada" | "retraso" | "posible_cancelacion"
async function notificarLlegada(rutaId,sentido,tipo){
  tipo=tipo||"llegada";
  var grupo=tipo==="llegada"?"llegada":"alerta";
  if(cooldownLeft(rutaId,sentido,grupo))return;
  var r=ROUTES.filter(function(x){return x.id===rutaId})[0],d=r&&r.dirs[sentido];
  var st=d?estado(r,sentido,d):{late:0,last:null,next:null};   // antes de guardar el cooldown
  // Horario programado al que se refiere el reporte:
  // alerta o llegada tardía -> la salida retrasada; llegada normal -> la próxima salida
  var hm=tipo!=="llegada"?st.last:(st.late?st.last:(st.next!=null?st.next:st.last));
  var hora=(hm==null)?null:fmt(hm);
  var ahora=new Date(),k=repKey(rutaId,sentido,grupo);
  lsSet(k,String(ahora.getTime()));  // bloquea el botón al instante (cooldown)
  renderDirs();
  console.log("[notificarLlegada]",tipo,"| ruta:",rutaId,"| sentido:",sentido,"| horario:",hora,"| hora:",ahora.toLocaleTimeString("es-MX"));
  if(!db){console.warn("Supabase sin configurar: el reporte solo se guardó en este dispositivo.");return}
  try{
    // created_at lo pone el servidor (default now()), así no depende del reloj del teléfono
    var res=await db.from("reportes").insert({ruta_id:rutaId,sentido:sentido,hora_programada:hora,tipo:tipo});
    if(res.error)throw res.error;
  }catch(e){
    console.error("notificarLlegada:",e);
    try{localStorage.removeItem(k)}catch(_){}   // si falló, devolvemos el botón para reintentar
    renderDirs();
    toast("No se pudo enviar el reporte. Intenta de nuevo.");
  }
}

// ====== REPORTES COMPARTIDOS (lectura + tiempo real) ======
var compartidos=[],vistos={};
function guardarReportes(rows){
  rows.forEach(function(x){
    if(x.id!=null){if(vistos[x.id])return;vistos[x.id]=1}
    compartidos.push({ruta:x.ruta_id,sentido:x.sentido,hora:x.hora_programada?String(x.hora_programada).slice(0,5):null,tipo:x.tipo,t:new Date(x.created_at).getTime()});
  });
  var corte=Date.now()-REPORT_VENTANA_MIN*60000;
  compartidos=compartidos.filter(function(x){return x.t>=corte});
}
// ¿Algún usuario reportó la llegada de esta salida?
function llegadaCompartida(rid,i,hm,depTs){
  var h=fmt(hm);
  return compartidos.some(function(x){
    if(x.ruta!==rid||x.sentido!==i||x.tipo!=="llegada")return false;
    return x.hora?x.hora===h:x.t>=depTs-EARLY_MIN*60000;
  });
}
// Resumen para la tarjeta: última llegada y reportes de retraso de los últimos 30 min
function infoReportes(rid,i){
  var ahora=Date.now(),ll=null,al=0,out=[];
  compartidos.forEach(function(x){
    if(x.ruta!==rid||x.sentido!==i||ahora-x.t>30*60000)return;
    if(x.tipo==="llegada"){if(ll===null||x.t>ll)ll=x.t}else al++;
  });
  if(ll!==null){var mm=Math.max(0,Math.round((ahora-ll)/60000));out.push("🟢 Camión reportado en el andén "+(mm===0?"ahora":"hace "+mm+" min"))}
  if(al)out.push("🔴 "+al+(al===1?" reporte":" reportes")+" de retraso o cancelación");
  return out.join(" · ");
}
async function cargarReportes(){
  if(!db)return;
  try{
    var desde=new Date(Date.now()-REPORT_VENTANA_MIN*60000).toISOString();
    var res=await db.from("reportes").select("id,ruta_id,sentido,hora_programada,tipo,created_at")
      .gte("created_at",desde).order("created_at",{ascending:true}).limit(500);
    if(res.error)throw res.error;
    guardarReportes(res.data||[]);renderDirs();
  }catch(e){console.warn("No se pudieron leer los reportes:",e)}
}
function suscribirReportes(){
  if(!db)return;
  db.channel("reportes-en-vivo")
    .on("postgres_changes",{event:"INSERT",schema:"public",table:"reportes"},function(p){guardarReportes([p.new]);renderDirs()})
    .subscribe();
}

// ====== BUZÓN DE COMENTARIOS ANÓNIMOS (Supabase) ======
function msgComentario(txt,ok){
  var s=$("coment-msg");s.textContent=txt;
  s.className="mt-3 text-sm font-medium "+(ok?"text-emerald-300":"text-red-300");
  clearTimeout(msgComentario.t);msgComentario.t=setTimeout(function(){s.textContent=""},5000);
}
async function enviarComentario(){
  var ta=$("coment-txt"),b=$("coment-btn"),mensaje=ta.value.trim();
  if(!mensaje)return msgComentario("Escribe un comentario antes de enviar.",false);
  if(mensaje.length>500)return msgComentario("El comentario es muy largo (máximo 500 caracteres).",false);
  var wait=Math.ceil((COMENT_CD_SEG*1000-(Date.now()-(+lsGet("fesc:coment")||0)))/1000);
  if(wait>0&&wait<=COMENT_CD_SEG)return msgComentario("Espera "+wait+" s para enviar otro comentario.",false);
  if(!db)return msgComentario("El buzón aún no está configurado.",false);
  b.disabled=true;
  try{
    var res=await db.from("comentarios").insert({mensaje:mensaje});
    if(res.error)throw res.error;
    ta.value="";lsSet("fesc:coment",String(Date.now()));
    msgComentario("¡Gracias! Tu comentario se envió de forma anónima.",true);
  }catch(e){
    console.error("enviarComentario:",e);
    msgComentario("No se pudo enviar. Intenta de nuevo en un momento.",false);
  }finally{b.disabled=false}
}

function tick(){
  var n=new Date();
  $("clock").textContent=n.toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long"})+" · "+fmt(nowMin());
  renderDirs();
}
$("coment-btn").onclick=enviarComentario;
render();tick();setInterval(tick,15000);
cargarReportes();suscribirReportes();
setInterval(cargarReportes,120000); // respaldo por si se cae la conexión en vivo
document.addEventListener("visibilitychange",function(){if(!document.hidden)cargarReportes()});