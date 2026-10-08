/* ---------- Catalog ---------- */
const GROUPS = [
  {id:'pecho', name:'Pecho', color:'var(--p-red)'},
  {id:'espalda', name:'Espalda', color:'var(--p-blue)'},
  {id:'piernas', name:'Piernas', color:'var(--p-yellow)'},
  {id:'hombros', name:'Hombros', color:'var(--p-green)'},
  {id:'brazos', name:'Brazos', color:'var(--g-brazos)'},
  {id:'core', name:'Core', color:'var(--p-black)'},
  {id:'cardio', name:'Cardio', color:'var(--p-cardio)'},
  {id:'completo', name:'Cuerpo completo', color:'var(--plate-chrome)'}
];
const GROUP = Object.fromEntries(GROUPS.map(g=>[g.id,g]));
const EQUIP = {barra:'Barra', ez:'Barra Z', manc:'Mancuernas', kb:'Kettlebell', polea:'Polea', maq:'Máquina', multi:'Multipower', corp:'Peso corporal', banda:'Banda', otro:'Otros'};
// [id, nombre, grupo, músculo principal, material, nombre en inglés]
const CATALOG = [
 // Pecho
 ['press-banca','Press de banca','pecho','Pecho','barra','Bench press'],
 ['press-banca-pausa','Press de banca con pausa','pecho','Pecho','barra','Paused bench press'],
 ['press-inclinado','Press inclinado con barra','pecho','Pecho superior','barra','Incline bench press'],
 ['press-declinado','Press declinado con barra','pecho','Pecho','barra','Decline bench press'],
 ['press-banca-manc','Press de banca con mancuernas','pecho','Pecho','manc','Dumbbell bench press'],
 ['press-incl-manc','Press inclinado con mancuernas','pecho','Pecho superior','manc','Incline dumbbell press'],
 ['press-decl-manc','Press declinado con mancuernas','pecho','Pecho','manc','Decline dumbbell press'],
 ['press-suelo-manc','Press en suelo con mancuernas','pecho','Pecho','manc','Dumbbell floor press'],
 ['press-banca-multi','Press de banca en multipower','pecho','Pecho','multi','Smith machine bench press'],
 ['press-incl-multi','Press inclinado en multipower','pecho','Pecho superior','multi','Smith machine incline press'],
 ['press-pecho-maq','Press de pecho en máquina','pecho','Pecho','maq','Chest press machine'],
 ['press-incl-maq','Press inclinado en máquina','pecho','Pecho superior','maq','Incline chest press machine'],
 ['press-polea-pecho','Press de pecho en polea','pecho','Pecho','polea','Cable chest press'],
 ['aperturas','Aperturas con mancuernas','pecho','Pecho','manc','Dumbbell fly'],
 ['aperturas-incl','Aperturas inclinadas con mancuernas','pecho','Pecho superior','manc','Incline dumbbell fly'],
 ['pec-deck','Contractor de pecho (pec deck)','pecho','Pecho','maq','Pec deck'],
 ['cruces-polea','Cruces en polea','pecho','Pecho','polea','Cable crossover'],
 ['cruces-polea-baja','Cruces en polea de abajo arriba','pecho','Pecho superior','polea','Low-to-high cable fly'],
 ['fondos','Fondos en paralelas','pecho','Pecho','corp','Dips'],
 ['fondos-asist','Fondos asistidos en máquina','pecho','Pecho','maq','Assisted dip'],
 ['flexiones','Flexiones','pecho','Pecho','corp','Push-up'],
 ['flexiones-incl','Flexiones inclinadas','pecho','Pecho','corp','Incline push-up'],
 ['flexiones-decl','Flexiones declinadas','pecho','Pecho superior','corp','Decline push-up'],
 ['pullover-manc','Pullover con mancuerna','pecho','Pecho','manc','Dumbbell pullover'],
 ['svend-press','Press Svend con disco','pecho','Pecho','otro','Svend press'],
 ['press-landmine','Press landmine','pecho','Pecho superior','otro','Landmine press'],
 // Espalda
 ['peso-muerto','Peso muerto','espalda','Cadena posterior','barra','Deadlift'],
 ['peso-muerto-sumo','Peso muerto sumo','espalda','Cadena posterior','barra','Sumo deadlift'],
 ['peso-muerto-deficit','Peso muerto en déficit','espalda','Cadena posterior','barra','Deficit deadlift'],
 ['peso-muerto-trap','Peso muerto con barra hexagonal','espalda','Cadena posterior','otro','Trap bar deadlift'],
 ['rack-pull','Rack pull','espalda','Espalda alta','barra','Rack pull'],
 ['dominadas','Dominadas','espalda','Dorsal','corp','Pull-up'],
 ['dominadas-supinas','Dominadas supinas','espalda','Dorsal','corp','Chin-up'],
 ['dominadas-neutras','Dominadas con agarre neutro','espalda','Dorsal','corp','Neutral-grip pull-up'],
 ['dominadas-lastre','Dominadas con lastre','espalda','Dorsal','corp','Weighted pull-up'],
 ['dominadas-asist','Dominadas asistidas','espalda','Dorsal','maq','Assisted pull-up'],
 ['jalon','Jalón al pecho','espalda','Dorsal','polea','Lat pulldown'],
 ['jalon-estrecho','Jalón con agarre estrecho','espalda','Dorsal','polea','Close-grip lat pulldown'],
 ['jalon-supino','Jalón con agarre supino','espalda','Dorsal','polea','Reverse-grip lat pulldown'],
 ['jalon-unilateral','Jalón a una mano','espalda','Dorsal','polea','Single-arm lat pulldown'],
 ['pullover','Pullover en polea','espalda','Dorsal','polea','Straight-arm pulldown'],
 ['remo-barra','Remo con barra','espalda','Espalda alta','barra','Barbell row'],
 ['remo-pendlay','Remo Pendlay','espalda','Espalda alta','barra','Pendlay row'],
 ['remo-yates','Remo Yates (agarre supino)','espalda','Dorsal','barra','Yates row'],
 ['remo-seal','Remo seal','espalda','Espalda alta','barra','Seal row'],
 ['remo-t','Remo en T','espalda','Espalda alta','otro','T-bar row'],
 ['remo-manc','Remo con mancuerna','espalda','Dorsal','manc','One-arm dumbbell row'],
 ['remo-banco-incl','Remo en banco inclinado con mancuernas','espalda','Espalda alta','manc','Chest-supported dumbbell row'],
 ['remo-kroc','Remo Kroc','espalda','Dorsal','manc','Kroc row'],
 ['remo-polea','Remo en polea baja','espalda','Espalda alta','polea','Seated cable row'],
 ['remo-polea-unilateral','Remo en polea a una mano','espalda','Dorsal','polea','Single-arm cable row'],
 ['remo-maq','Remo en máquina','espalda','Espalda alta','maq','Machine row'],
 ['remo-invertido','Remo invertido','espalda','Espalda alta','corp','Inverted row'],
 ['encogimientos-barra','Encogimientos con barra','espalda','Trapecio','barra','Barbell shrug'],
 ['encogimientos-manc','Encogimientos con mancuernas','espalda','Trapecio','manc','Dumbbell shrug'],
 ['hiperextensiones','Hiperextensiones','espalda','Lumbar','corp','Back extension'],
 ['buenos-dias','Buenos días','espalda','Lumbar','barra','Good morning'],
 ['superman','Superman','espalda','Lumbar','corp','Superman'],
 // Piernas
 ['sentadilla','Sentadilla','piernas','Cuádriceps','barra','Back squat'],
 ['sentadilla-baja','Sentadilla con barra baja','piernas','Glúteos','barra','Low-bar squat'],
 ['sentadilla-pausa','Sentadilla con pausa','piernas','Cuádriceps','barra','Paused squat'],
 ['sentadilla-frontal','Sentadilla frontal','piernas','Cuádriceps','barra','Front squat'],
 ['sentadilla-caja','Sentadilla a cajón','piernas','Cuádriceps','barra','Box squat'],
 ['sentadilla-zercher','Sentadilla Zercher','piernas','Cuádriceps','barra','Zercher squat'],
 ['sentadilla-goblet','Sentadilla goblet','piernas','Cuádriceps','kb','Goblet squat'],
 ['sentadilla-multi','Sentadilla en multipower','piernas','Cuádriceps','multi','Smith machine squat'],
 ['sentadilla-hack','Sentadilla hack','piernas','Cuádriceps','maq','Hack squat'],
 ['sentadilla-pendulo','Sentadilla péndulo','piernas','Cuádriceps','maq','Pendulum squat'],
 ['sentadilla-cinturon','Sentadilla con cinturón (belt squat)','piernas','Cuádriceps','maq','Belt squat'],
 ['sentadilla-sissy','Sentadilla sissy','piernas','Cuádriceps','corp','Sissy squat'],
 ['sentadilla-pistol','Sentadilla a una pierna (pistol)','piernas','Cuádriceps','corp','Pistol squat'],
 ['sentadilla-libre','Sentadilla sin peso','piernas','Cuádriceps','corp','Air squat'],
 ['prensa','Prensa de piernas','piernas','Cuádriceps','maq','Leg press'],
 ['prensa-unilateral','Prensa a una pierna','piernas','Cuádriceps','maq','Single-leg press'],
 ['bulgara','Sentadilla búlgara','piernas','Cuádriceps','manc','Bulgarian split squat'],
 ['zancadas','Zancadas','piernas','Cuádriceps','manc','Lunge'],
 ['zancadas-atras','Zancadas hacia atrás','piernas','Glúteos','manc','Reverse lunge'],
 ['zancadas-caminando','Zancadas caminando','piernas','Cuádriceps','manc','Walking lunge'],
 ['zancadas-barra','Zancadas con barra','piernas','Cuádriceps','barra','Barbell lunge'],
 ['zancada-lateral','Zancada lateral','piernas','Aductores','manc','Lateral lunge'],
 ['step-up','Subida al cajón (step-up)','piernas','Cuádriceps','manc','Step-up'],
 ['ext-cuad','Extensión de cuádriceps','piernas','Cuádriceps','maq','Leg extension'],
 ['rumano','Peso muerto rumano','piernas','Isquiotibiales','barra','Romanian deadlift'],
 ['rumano-manc','Peso muerto rumano con mancuernas','piernas','Isquiotibiales','manc','Dumbbell Romanian deadlift'],
 ['rumano-unilateral','Peso muerto a una pierna','piernas','Isquiotibiales','manc','Single-leg Romanian deadlift'],
 ['piernas-rigidas','Peso muerto con piernas rígidas','piernas','Isquiotibiales','barra','Stiff-leg deadlift'],
 ['curl-femoral','Curl femoral tumbado','piernas','Isquiotibiales','maq','Lying leg curl'],
 ['curl-femoral-sentado','Curl femoral sentado','piernas','Isquiotibiales','maq','Seated leg curl'],
 ['curl-femoral-pie','Curl femoral de pie','piernas','Isquiotibiales','maq','Standing leg curl'],
 ['curl-nordico','Curl nórdico','piernas','Isquiotibiales','corp','Nordic hamstring curl'],
 ['glute-ham','Elevación glúteo-isquio (GHR)','piernas','Isquiotibiales','maq','Glute-ham raise'],
 ['hip-thrust','Hip thrust','piernas','Glúteos','barra','Barbell hip thrust'],
 ['hip-thrust-maq','Hip thrust en máquina','piernas','Glúteos','maq','Hip thrust machine'],
 ['puente-gluteo','Puente de glúteo','piernas','Glúteos','corp','Glute bridge'],
 ['patada-polea','Patada de glúteo en polea','piernas','Glúteos','polea','Cable glute kickback'],
 ['patada-maq','Patada de glúteo en máquina','piernas','Glúteos','maq','Glute kickback machine'],
 ['pull-through','Pull-through en polea','piernas','Glúteos','polea','Cable pull-through'],
 ['abduccion-maq','Abducción de cadera en máquina','piernas','Abductores','maq','Hip abduction machine'],
 ['abduccion-banda','Abducción con banda','piernas','Abductores','banda','Banded hip abduction'],
 ['aduccion-maq','Aducción de cadera en máquina','piernas','Aductores','maq','Hip adduction machine'],
 ['gemelos','Elevación de gemelos de pie','piernas','Gemelos','maq','Standing calf raise'],
 ['gemelos-sentado','Elevación de gemelos sentado','piernas','Gemelos','maq','Seated calf raise'],
 ['gemelos-prensa','Gemelos en prensa','piernas','Gemelos','maq','Leg press calf raise'],
 ['gemelos-unilateral','Elevación de gemelos a una pierna','piernas','Gemelos','manc','Single-leg calf raise'],
 ['tibial','Elevación de tibiales','piernas','Tibial','otro','Tibialis raise'],
 // Hombros
 ['press-militar','Press militar','hombros','Hombro anterior','barra','Overhead press'],
 ['press-militar-sentado','Press militar sentado','hombros','Hombro anterior','barra','Seated barbell press'],
 ['push-press','Push press','hombros','Hombro anterior','barra','Push press'],
 ['press-tras-nuca','Press tras nuca','hombros','Hombro anterior','barra','Behind-the-neck press'],
 ['press-z','Press Z','hombros','Hombro anterior','barra','Z press'],
 ['press-hombro-manc','Press de hombro con mancuernas','hombros','Hombro anterior','manc','Dumbbell shoulder press'],
 ['press-arnold','Press Arnold','hombros','Hombro anterior','manc','Arnold press'],
 ['press-hombro-maq','Press de hombro en máquina','hombros','Hombro anterior','maq','Machine shoulder press'],
 ['press-hombro-multi','Press de hombro en multipower','hombros','Hombro anterior','multi','Smith machine shoulder press'],
 ['press-kb','Press con kettlebell','hombros','Hombro anterior','kb','Kettlebell press'],
 ['pike-pushup','Flexiones pica','hombros','Hombro anterior','corp','Pike push-up'],
 ['flexiones-pino','Flexiones en pino','hombros','Hombro anterior','corp','Handstand push-up'],
 ['elev-laterales','Elevaciones laterales','hombros','Hombro lateral','manc','Lateral raise'],
 ['elev-laterales-polea','Elevaciones laterales en polea','hombros','Hombro lateral','polea','Cable lateral raise'],
 ['elev-laterales-maq','Elevaciones laterales en máquina','hombros','Hombro lateral','maq','Machine lateral raise'],
 ['remo-menton','Remo al mentón','hombros','Hombro lateral','barra','Upright row'],
 ['remo-menton-polea','Remo al mentón en polea','hombros','Hombro lateral','polea','Cable upright row'],
 ['elev-frontales','Elevaciones frontales','hombros','Hombro anterior','manc','Front raise'],
 ['elev-frontales-disco','Elevación frontal con disco','hombros','Hombro anterior','otro','Plate front raise'],
 ['elev-frontales-polea','Elevaciones frontales en polea','hombros','Hombro anterior','polea','Cable front raise'],
 ['pajaros','Pájaros','hombros','Hombro posterior','manc','Reverse dumbbell fly'],
 ['pajaros-maq','Contractor inverso (pec deck inverso)','hombros','Hombro posterior','maq','Reverse pec deck'],
 ['pajaros-polea','Cruces inversos en polea','hombros','Hombro posterior','polea','Reverse cable fly'],
 ['face-pull','Face pull','hombros','Hombro posterior','polea','Face pull'],
 ['band-pull-apart','Separaciones con banda (pull-apart)','hombros','Hombro posterior','banda','Band pull-apart'],
 ['elev-y','Elevaciones en Y','hombros','Trapecio inferior','manc','Y raise'],
 ['rotacion-externa','Rotación externa en polea','hombros','Manguito rotador','polea','Cable external rotation'],
 // Brazos
 ['curl-barra','Curl con barra','brazos','Bíceps','barra','Barbell curl'],
 ['curl-ez','Curl con barra Z','brazos','Bíceps','ez','EZ-bar curl'],
 ['curl-21','Curl 21','brazos','Bíceps','barra','21s curl'],
 ['curl-manc','Curl con mancuernas','brazos','Bíceps','manc','Dumbbell curl'],
 ['curl-alterno','Curl alterno con mancuernas','brazos','Bíceps','manc','Alternating dumbbell curl'],
 ['curl-inclinado','Curl inclinado con mancuernas','brazos','Bíceps','manc','Incline dumbbell curl'],
 ['curl-concentrado','Curl concentrado','brazos','Bíceps','manc','Concentration curl'],
 ['curl-arana','Curl araña','brazos','Bíceps','manc','Spider curl'],
 ['curl-predicador','Curl predicador (Scott)','brazos','Bíceps','ez','Preacher curl'],
 ['curl-maq','Curl de bíceps en máquina','brazos','Bíceps','maq','Machine biceps curl'],
 ['curl-polea','Curl en polea','brazos','Bíceps','polea','Cable curl'],
 ['curl-bayesiano','Curl bayesiano en polea','brazos','Bíceps','polea','Bayesian cable curl'],
 ['curl-martillo','Curl martillo','brazos','Braquial','manc','Hammer curl'],
 ['curl-cuerda','Curl martillo en polea con cuerda','brazos','Braquial','polea','Rope hammer curl'],
 ['curl-invertido','Curl invertido','brazos','Antebrazo','ez','Reverse curl'],
 ['curl-zottman','Curl Zottman','brazos','Antebrazo','manc','Zottman curl'],
 ['curl-muneca','Curl de muñeca','brazos','Antebrazo','manc','Wrist curl'],
 ['curl-muneca-inv','Curl de muñeca invertido','brazos','Antebrazo','manc','Reverse wrist curl'],
 ['colgarse','Colgarse de la barra (segundos)','brazos','Antebrazo','corp','Dead hang'],
 ['press-cerrado','Press de banca agarre cerrado','brazos','Tríceps','barra','Close-grip bench press'],
 ['jm-press','Press JM','brazos','Tríceps','barra','JM press'],
 ['press-frances','Press francés','brazos','Tríceps','ez','Skull crusher'],
 ['press-frances-manc','Press francés con mancuernas','brazos','Tríceps','manc','Dumbbell skull crusher'],
 ['ext-triceps','Extensión de tríceps en polea','brazos','Tríceps','polea','Triceps pushdown'],
 ['ext-triceps-cuerda','Extensión de tríceps con cuerda','brazos','Tríceps','polea','Rope pushdown'],
 ['ext-triceps-unilateral','Extensión de tríceps a una mano en polea','brazos','Tríceps','polea','Single-arm pushdown'],
 ['ext-triceps-cabeza-polea','Extensión de tríceps sobre la cabeza en polea','brazos','Tríceps','polea','Overhead cable triceps extension'],
 ['ext-triceps-cabeza-manc','Extensión de tríceps sobre la cabeza con mancuerna','brazos','Tríceps','manc','Overhead dumbbell extension'],
 ['patada-triceps','Patada de tríceps','brazos','Tríceps','manc','Triceps kickback'],
 ['fondos-banco','Fondos en banco','brazos','Tríceps','corp','Bench dip'],
 ['fondos-triceps-maq','Fondos de tríceps en máquina','brazos','Tríceps','maq','Machine triceps dip'],
 ['flexiones-diamante','Flexiones diamante','brazos','Tríceps','corp','Diamond push-up'],
 // Core
 ['plancha','Plancha (segundos)','core','Abdomen','corp','Plank'],
 ['plancha-lateral','Plancha lateral (segundos)','core','Oblicuos','corp','Side plank'],
 ['hollow','Hollow hold (segundos)','core','Abdomen','corp','Hollow body hold'],
 ['l-sit','L-sit (segundos)','core','Abdomen','corp','L-sit'],
 ['crunch','Crunch','core','Abdomen','corp','Crunch'],
 ['crunch-polea','Crunch en polea de rodillas','core','Abdomen','polea','Cable crunch'],
 ['crunch-maq','Crunch en máquina','core','Abdomen','maq','Ab crunch machine'],
 ['crunch-inverso','Crunch inverso','core','Abdomen','corp','Reverse crunch'],
 ['crunch-declinado','Crunch en banco declinado','core','Abdomen','corp','Decline crunch'],
 ['crunch-bicicleta','Crunch bicicleta','core','Oblicuos','corp','Bicycle crunch'],
 ['sit-up','Abdominales completos (sit-up)','core','Abdomen','corp','Sit-up'],
 ['v-up','V-ups','core','Abdomen','corp','V-up'],
 ['elev-piernas','Elevación de piernas colgado','core','Abdomen','corp','Hanging leg raise'],
 ['elev-rodillas','Elevación de rodillas colgado','core','Abdomen','corp','Hanging knee raise'],
 ['elev-piernas-silla','Elevación de piernas en silla romana','core','Abdomen','corp',"Captain's chair leg raise"],
 ['elev-piernas-suelo','Elevación de piernas tumbado','core','Abdomen','corp','Lying leg raise'],
 ['pies-barra','Pies a la barra','core','Abdomen','corp','Toes-to-bar'],
 ['dragon-flag','Dragon flag','core','Abdomen','corp','Dragon flag'],
 ['rueda','Rueda abdominal','core','Abdomen','otro','Ab wheel rollout'],
 ['dead-bug','Dead bug','core','Abdomen','corp','Dead bug'],
 ['escaladores','Escaladores','core','Abdomen','corp','Mountain climbers'],
 ['pallof','Press Pallof','core','Oblicuos','polea','Pallof press'],
 ['lenador','Leñador en polea','core','Oblicuos','polea','Cable woodchopper'],
 ['giro-ruso','Giro ruso','core','Oblicuos','otro','Russian twist'],
 ['flexion-lateral','Flexión lateral con mancuerna','core','Oblicuos','manc','Dumbbell side bend'],
 ['rotacion-landmine','Rotaciones con landmine','core','Oblicuos','otro','Landmine rotation'],
 ['bird-dog','Bird dog','core','Lumbar','corp','Bird dog'],
 // Cuerpo completo
 ['cargada','Cargada de potencia','completo','Cuerpo completo','barra','Power clean'],
 ['cargada-colgante','Cargada colgante','completo','Cuerpo completo','barra','Hang clean'],
 ['arrancada','Arrancada','completo','Cuerpo completo','barra','Snatch'],
 ['arrancada-potencia','Arrancada de potencia','completo','Cuerpo completo','barra','Power snatch'],
 ['dos-tiempos','Dos tiempos','completo','Cuerpo completo','barra','Clean and jerk'],
 ['envion','Envión','completo','Cuerpo completo','barra','Push jerk'],
 ['thruster','Thruster','completo','Cuerpo completo','barra','Barbell thruster'],
 ['thruster-manc','Thruster con mancuernas','completo','Cuerpo completo','manc','Dumbbell thruster'],
 ['man-maker','Man maker','completo','Cuerpo completo','manc','Man maker'],
 ['swing-kb','Swing con kettlebell','completo','Glúteos','kb','Kettlebell swing'],
 ['arrancada-kb','Arrancada con kettlebell','completo','Cuerpo completo','kb','Kettlebell snatch'],
 ['turkish','Levantamiento turco','completo','Cuerpo completo','kb','Turkish get-up'],
 ['granjero','Paseo del granjero (metros)','completo','Agarre','manc',"Farmer's carry"],
 ['burpees','Burpees','completo','Cuerpo completo','corp','Burpee'],
 ['salto-cajon','Salto al cajón','completo','Potencia de piernas','corp','Box jump'],
 ['wall-ball','Wall ball','completo','Cuerpo completo','otro','Wall ball'],
 ['slam','Lanzamiento de balón al suelo','completo','Cuerpo completo','otro','Medicine ball slam'],
 ['cuerdas','Cuerdas de batalla (segundos)','completo','Cuerpo completo','otro','Battle ropes'],
 ['trineo','Empuje de trineo (metros)','completo','Cuerpo completo','otro','Sled push'],
 // Cardio: se registra con tiempo y distancia [.., unidad de distancia]
 ['cinta','Cinta de correr','cardio','Resistencia','maq','Treadmill run','km'],
 ['cinta-inclinada','Caminar en cinta inclinada','cardio','Resistencia','maq','Incline treadmill walk','km'],
 ['correr','Correr','cardio','Resistencia','corp','Running','km'],
 ['caminar','Caminar','cardio','Resistencia','corp','Walking','km'],
 ['senderismo','Senderismo','cardio','Resistencia','corp','Hiking','km'],
 ['bici-estatica','Bici estática','cardio','Resistencia','maq','Stationary bike','km'],
 ['spinning','Spinning','cardio','Resistencia','maq','Spin class','km'],
 ['ciclismo','Ciclismo','cardio','Resistencia','otro','Cycling','km'],
 ['air-bike','Bici de aire (assault bike)','cardio','Resistencia','maq','Air bike','km'],
 ['eliptica','Elíptica','cardio','Resistencia','maq','Elliptical','km'],
 ['remo-ergometro','Remo ergómetro','cardio','Resistencia','maq','Rowing machine','m'],
 ['skierg','Esquí ergómetro (SkiErg)','cardio','Resistencia','maq','SkiErg','m'],
 ['natacion','Natación','cardio','Resistencia','otro','Swimming','m'],
 ['escaladora','Escaladora','cardio','Resistencia','maq','Stair climber',''],
 ['comba','Saltar a la comba','cardio','Resistencia','otro','Jump rope',''],
 ['saco-boxeo','Saco de boxeo','cardio','Resistencia','otro','Heavy bag',''],
 ['hiit','HIIT o intervalos','cardio','Resistencia','corp','HIIT','']
].map(([id,name,group,muscle,equip,en,dist])=>({id,name,group,muscle,equip,en,bar:equip==='barra',builtin:true,...(group==='cardio'?{kind:'cardio',dist:dist||''}:{})}));

/* ---------- Helpers ---------- */
const $ = (s,r=document)=>r.querySelector(s);
const uid = ()=>Math.random().toString(36).slice(2,9)+Date.now().toString(36).slice(-5);
const esc = s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num = v=>{ if(v===''||v==null) return 0; const n=parseFloat(String(v).replace(',','.')); return isFinite(n)?n:0; };
const fmt = n=>(Math.round(n*100)/100).toLocaleString('es-ES',{maximumFractionDigits:2});
const fmtIn = n=>String(Math.round(n*100)/100).replace('.',',');
const fmtInt = n=>Math.round(n).toLocaleString('es-ES');
const clone = o=>JSON.parse(JSON.stringify(o));
const norm = s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const DAY = 864e5;
const sod = t=>{const d=new Date(t); d.setHours(0,0,0,0); return d.getTime();};
const dkey = t=>{const d=new Date(t); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();};
const dShort = new Intl.DateTimeFormat('es-ES',{day:'numeric',month:'short'});
const dWeek = new Intl.DateTimeFormat('es-ES',{weekday:'short'});
const dMonth = new Intl.DateTimeFormat('es-ES',{month:'long',year:'numeric'});
const dTime = new Intl.DateTimeFormat('es-ES',{hour:'2-digit',minute:'2-digit'});
function ago(t){ const d=Math.round((sod(Date.now())-sod(t))/DAY); if(d<=0) return 'hoy'; if(d===1) return 'ayer'; if(d<7) return `hace ${d} días`; if(d<14) return 'hace una semana'; if(d<60) return `hace ${Math.floor(d/7)} semanas`; return 'el '+dShort.format(t); }
const durTxt = ms=>{ const m=Math.max(1,Math.round(ms/6e4)); return m<60?`${m} min`:`${Math.floor(m/60)} h ${m%60} min`; };
const clock = s=>{ s=Math.max(0,Math.floor(s)); const h=Math.floor(s/3600), m=Math.floor(s%3600/60), x=s%60; return (h?h+':'+String(m).padStart(2,'0'):m)+':'+String(x).padStart(2,'0'); };
const e1rm = (w,r)=> (w>0&&r>0) ? (r===1?w:w*(1+r/30)) : 0;
const cap = s=>s.charAt(0).toUpperCase()+s.slice(1);

const ICON = {
  info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
  pause:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
  more:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg>',
  down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>'
};

/* Cómo se hace: [posición, movimiento con puntos de referencia, clave] */
const HOW={
// Pecho
'press-banca':['Túmbate con los ojos bajo la barra, pies firmes en el suelo y escápulas juntas y hacia abajo. Agarra la barra algo más ancho que los hombros.','Baja la barra controlando hasta tocar el pecho a la altura de la línea de los pezones, con los codos a unos 45° del torso. Empuja hasta estirar los brazos sin bloquear de golpe.','Los antebrazos deben quedar verticales abajo. No rebotes la barra en el pecho ni despegues los glúteos del banco.'],
'press-banca-pausa':['Igual que el press de banca: escápulas retraídas, pies en el suelo y agarre algo más ancho que los hombros.','Baja hasta tocar el pecho y quédate quieto 1-2 segundos con la barra apoyada sin relajar el cuerpo. Después empuja con fuerza hasta arriba.','Durante la pausa mantén la tensión; la barra no debe hundirse en el pecho.'],
'press-inclinado':['Banco inclinado a 30-45°. Pies en el suelo, escápulas juntas y agarre algo más ancho que los hombros.','Baja la barra hasta la parte alta del pecho, justo debajo de las clavículas. Empuja en vertical hasta estirar los brazos por encima de los hombros.','Si el banco pasa de 45°, el trabajo se va al hombro. Los codos no deben abrirse a 90°.'],
'press-declinado':['Banco declinado unos 15-30° con las piernas sujetas bajo el rodillo. Agarre algo más ancho que los hombros.','Baja la barra hasta la parte baja del pecho, cerca del esternón. Empuja hasta estirar los brazos en línea con los hombros.','Pide que te pasen la barra o usa soportes: la cabeza queda baja y desmontar solo cuesta.'],
'press-banca-manc':['Túmbate con una mancuerna en cada mano a la altura del pecho, palmas mirando a los pies.','Empuja hasta que las mancuernas casi se toquen sobre el pecho. Baja hasta que los codos queden un poco por debajo del banco y los antebrazos verticales.','Baja despacio (2-3 segundos). Al terminar, apoya las mancuernas en los muslos antes de incorporarte.'],
'press-incl-manc':['Banco a 30-45° con una mancuerna en cada mano a la altura de los hombros.','Empuja hacia arriba hasta que las mancuernas queden sobre los hombros, casi juntas. Baja hasta notar estiramiento en el pecho con los codos algo por debajo del banco.','Mantén las muñecas rectas sobre los codos. No choques las mancuernas arriba.'],
'press-decl-manc':['Banco declinado con las piernas sujetas y una mancuerna en cada mano sobre la parte baja del pecho.','Empuja hasta estirar los brazos y baja hasta que los codos queden a la altura del banco.','Ve con peso moderado: con la cabeza abajo cuesta más controlar las mancuernas.'],
'press-suelo-manc':['Túmbate en el suelo con las rodillas dobladas y una mancuerna en cada mano sobre el pecho.','Baja hasta que la parte de atrás de los brazos toque el suelo, con los codos a unos 45° del cuerpo. Haz una pausa breve y empuja hasta arriba.','El suelo limita el recorrido y protege el hombro. No dejes caer los codos de golpe.'],
'press-banca-multi':['Coloca el banco para que la barra baje a la altura de los pezones. Escápulas juntas y pies firmes.','Desbloquea la barra girándola, baja hasta rozar el pecho y empuja hasta estirar los brazos.','Comprueba la posición del banco con la barra vacía antes de cargar.'],
'press-incl-multi':['Banco a 30-45° colocado para que la barra baje a la parte alta del pecho.','Baja hasta rozar el pecho bajo las clavículas y empuja en vertical.','Pon los topes de seguridad un poco por encima de tu pecho.'],
'press-pecho-maq':['Ajusta el asiento para que las asas queden a la altura de la mitad del pecho. Espalda pegada al respaldo.','Empuja hasta casi estirar los brazos y vuelve hasta notar estiramiento, con los codos un poco por detrás del torso.','No despegues la espalda ni los hombros del respaldo al empujar.'],
'press-incl-maq':['Ajusta el asiento para que las asas salgan a la altura de la parte alta del pecho.','Empuja hacia arriba y adelante hasta casi estirar los brazos. Vuelve despacio hasta que las manos queden junto al pecho.','Mantén las escápulas juntas y el pecho alto durante todo el recorrido.'],
'press-polea-pecho':['De pie, de espaldas a dos poleas a la altura del pecho, con un pie adelantado. Asas junto al pecho.','Empuja las asas hacia delante hasta estirar los brazos y que las manos casi se toquen. Vuelve hasta tener las manos a la altura del pecho.','El tronco no debe balancearse: el movimiento sale de los brazos y el pecho.'],
'aperturas':['Túmbate con las mancuernas sobre el pecho, palmas enfrentadas y codos ligeramente flexionados.','Abre los brazos en arco hasta que las manos lleguen a la altura del banco o notes estiramiento. Cierra el arco hasta juntar las mancuernas arriba.','Mantén el mismo ángulo de codo todo el rato (unos 20°). No conviertas el movimiento en un press.'],
'aperturas-incl':['Banco a 30°, mancuernas sobre la parte alta del pecho, palmas enfrentadas y codos un poco flexionados.','Abre en arco hasta que las manos queden a la altura del pecho y cierra hasta juntarlas.','Baja despacio y para cuando notes estiramiento, sin forzar el hombro.'],
'pec-deck':['Ajusta el asiento para que los codos o las manos queden a la altura del pecho. Espalda pegada al respaldo.','Junta los brazos delante del pecho en arco hasta que las asas casi se toquen. Vuelve hasta que las manos queden a la altura de los hombros, sin pasar de ahí.','Aprieta el pecho un segundo al juntar y no dejes que el peso tire de los hombros hacia atrás.'],
'cruces-polea':['Poleas altas. Da un paso adelante, inclina el tronco unos 15° y lleva los brazos abiertos con los codos un poco flexionados.','Junta las manos en arco por delante de la cadera o a la altura del ombligo. Vuelve hasta que los brazos queden en línea con los hombros.','El codo mantiene el mismo ángulo. Puedes cruzar ligeramente las manos al final.'],
'cruces-polea-baja':['Poleas bajas, de pie entre ellas y con los brazos abajo y abiertos.','Sube las manos en arco hasta juntarlas a la altura de la barbilla. Baja despacio hasta la cadera.','Trabaja la parte alta del pecho: piensa en llevar los bíceps hacia la cara.'],
'fondos':['Sujétate en las paralelas con los brazos estirados, el cuerpo un poco inclinado hacia delante y las piernas cruzadas detrás.','Baja hasta que los brazos formen 90° en el codo o los hombros queden a la altura de los codos. Empuja hasta estirar.','Más inclinación trabaja más el pecho. Si te molesta el hombro, no bajes de 90°.'],
'fondos-asist':['Apoya las rodillas en la plataforma de la máquina y agarra las paralelas con los brazos estirados. Más contrapeso significa más ayuda.','Baja hasta tener los codos a 90° y empuja hasta estirar los brazos.','Ve quitando contrapeso semana a semana hasta poder hacerlos sin ayuda.'],
'flexiones':['Manos en el suelo algo más anchas que los hombros. El cuerpo forma una línea recta de los talones a la cabeza.','Baja hasta que el pecho quede a un puño del suelo, con los codos a unos 45° del cuerpo. Empuja hasta estirar los brazos.','Aprieta glúteos y abdomen para que la cadera no se hunda ni suba.'],
'flexiones-incl':['Manos en un banco o un escalón, cuerpo recto desde los talones a la cabeza.','Baja hasta que el pecho toque o casi toque el borde del banco y empuja hasta estirar los brazos.','Cuanto más alto el apoyo, más fácil. Es la progresión ideal para llegar a la flexión normal.'],
'flexiones-decl':['Pies sobre un banco y manos en el suelo algo más anchas que los hombros. Cuerpo recto.','Baja hasta que la cara quede a un puño del suelo y empuja hasta estirar los brazos.','Cuanto más alto pongas los pies, más trabaja la parte alta del pecho y el hombro.'],
'pullover-manc':['Tumbado en el banco, sujeta una mancuerna con las dos manos sobre el pecho, con los codos un poco flexionados.','Lleva la mancuerna en arco por detrás de la cabeza hasta que los brazos queden en línea con el torso. Vuelve hasta tenerla sobre el pecho.','No arquees la zona lumbar al bajar; mantén las costillas hacia abajo.'],
'svend-press':['De pie, aprieta un disco entre las palmas delante del pecho.','Sin dejar de apretar, estira los brazos al frente a la altura del pecho y vuelve al pecho.','La clave es la presión constante entre las manos; el peso puede ser ligero.'],
'press-landmine':['De pie frente al extremo de una barra anclada en el suelo. Sujétala a la altura del hombro con una o dos manos.','Empuja hacia arriba y adelante hasta estirar el brazo. Baja hasta que la barra vuelva al hombro.','Mantén el abdomen firme para no arquear la espalda. Es un press muy amable con el hombro.'],
// Espalda
'peso-muerto':['Pies a la anchura de la cadera con la barra sobre la mitad del pie, a unos 3 cm de las espinillas. Agarra justo por fuera de las piernas.','Con la espalda recta y el pecho alto, empuja el suelo con las piernas y sube la barra rozando las piernas. Termina de pie con cadera y rodillas estiradas a la vez.','La barra sube en línea recta. Si la espalda se redondea, baja el peso. No eches los hombros hacia atrás al terminar.'],
'peso-muerto-sumo':['Pies muy abiertos con las puntas hacia fuera y la barra sobre la mitad del pie. Agarra por dentro de las piernas, con los brazos verticales.','Empuja las rodillas hacia fuera y sube con el pecho alto hasta quedar de pie.','Las rodillas siguen la dirección de las puntas. El torso queda más vertical que en el convencional.'],
'peso-muerto-deficit':['Súbete a un disco o plataforma de 3-5 cm con la barra en el suelo. Misma colocación que en el peso muerto.','Baja la cadera un poco más de lo normal y sube con la espalda recta hasta quedar de pie.','Usa menos peso que en el convencional: el recorrido es más largo.'],
'peso-muerto-trap':['Colócate dentro de la barra hexagonal con los pies a la anchura de la cadera y agarra las asas.','Con la espalda recta, empuja el suelo con las piernas hasta quedar de pie. Baja controlando hasta tocar el suelo.','La posición es más vertical que con barra: más pierna y menos carga en la zona lumbar.'],
'rack-pull':['Coloca la barra en los soportes justo por debajo de las rodillas. Agarre como en el peso muerto.','Con la espalda recta, extiende la cadera hasta quedar de pie. Baja hasta apoyar la barra en los soportes.','Permite mover más peso para trabajar la parte alta del movimiento y el agarre.'],
'dominadas':['Cuélgate de la barra con agarre prono algo más ancho que los hombros y los brazos estirados.','Tira hasta que la barbilla supere la barra, llevando los codos hacia las costillas. Baja hasta estirar los brazos del todo.','Empieza el movimiento bajando los hombros. Evita balancearte con las piernas.'],
'dominadas-supinas':['Cuélgate con las palmas hacia ti, a la anchura de los hombros.','Tira hasta pasar la barbilla por encima de la barra y baja hasta estirar los brazos.','Trabaja más el bíceps que la dominada prona. Controla la bajada.'],
'dominadas-neutras':['Cuélgate de las asas paralelas con las palmas enfrentadas.','Tira hasta que la barbilla supere las asas y baja hasta estirar los brazos.','Es la variante más cómoda para hombros y codos.'],
'dominadas-lastre':['Cuélgate con un cinturón de lastre o una mancuerna entre los pies.','Haz una dominada completa: barbilla por encima de la barra y bajada hasta estirar los brazos.','Añade peso solo cuando hagas más de 8 dominadas limpias sin lastre.'],
'dominadas-asist':['Arrodíllate o ponte de pie en la plataforma de la máquina y agarra la barra. El contrapeso te ayuda: a más peso, más fácil.','Tira hasta pasar la barbilla por encima del agarre y baja hasta estirar los brazos.','Reduce el contrapeso poco a poco hasta poder hacerlas sin ayuda.'],
'jalon':['Sentado con los muslos sujetos bajo el rodillo, agarra la barra algo más ancho que los hombros.','Tira de la barra hasta la parte alta del pecho, llevando los codos hacia abajo y atrás. Sube despacio hasta estirar los brazos.','Inclina el tronco solo unos 10-15°. No tires con impulso echándote hacia atrás.'],
'jalon-estrecho':['Usa el agarre en V o una barra estrecha, sentado con los muslos sujetos.','Tira hasta llevar el agarre a la parte alta del pecho, con los codos pegados al cuerpo. Sube hasta estirar los brazos.','Saca el pecho al final del tirón y junta las escápulas.'],
'jalon-supino':['Agarre con las palmas hacia ti a la anchura de los hombros.','Tira hasta la parte alta del pecho con los codos pegados al cuerpo y sube hasta estirar.','Notarás más el bíceps. Mantén el tronco estable.'],
'jalon-unilateral':['Sentado de lado a la polea alta, agarra el asa con una mano y el brazo estirado.','Tira llevando el codo hacia la cadera hasta que la mano quede a la altura del hombro. Sube hasta estirar el brazo.','Permite un recorrido más largo. Evita girar el tronco para ayudarte.'],
'pullover':['De pie frente a la polea alta con una barra o cuerda, brazos estirados al frente y tronco algo inclinado.','Con los brazos casi rectos, baja el agarre en arco hasta los muslos. Vuelve hasta que los brazos queden a la altura de la cabeza.','Los codos no se doblan más durante el movimiento: trabaja el dorsal sin bíceps.'],
'remo-barra':['De pie, dobla la cadera hasta que el tronco quede a unos 45° y las rodillas un poco flexionadas. Barra colgando con los brazos estirados.','Tira de la barra hasta el ombligo, llevando los codos hacia atrás junto al cuerpo. Baja hasta estirar los brazos.','La espalda se mantiene recta y el tronco quieto; si te levantas para subir la barra, baja el peso.'],
'remo-pendlay':['Tronco casi paralelo al suelo y barra apoyada en el suelo en cada repetición.','Tira de forma explosiva hasta tocar la parte baja del pecho y devuelve la barra al suelo.','Cada repetición empieza parada en el suelo. Mantén la espalda plana.'],
'remo-yates':['Agarre supino (palmas hacia delante) y tronco más erguido, a unos 60° del suelo.','Tira de la barra hasta el ombligo con los codos pegados al cuerpo y baja hasta estirar los brazos.','Permite más peso que el remo clásico. Evita balancear el tronco.'],
'remo-seal':['Túmbate boca abajo en un banco alto para que los brazos cuelguen sin tocar el suelo con la barra.','Tira de la barra hasta tocar la parte de abajo del banco y baja hasta estirar los brazos.','El pecho no se despega del banco: aísla la espalda sin ayudar con la zona lumbar.'],
'remo-t':['Colócate sobre la barra en T o una barra anclada, rodillas flexionadas y tronco a unos 45°.','Tira del agarre hasta el pecho llevando los codos atrás y baja hasta estirar los brazos.','Mantén la espalda recta y el cuello en línea con el tronco.'],
'remo-manc':['Apoya una rodilla y la mano del mismo lado en un banco. Espalda paralela al suelo y mancuerna colgando.','Tira de la mancuerna hacia la cadera, llevando el codo hacia atrás y arriba. Baja hasta estirar el brazo.','Piensa en llevar el codo al bolsillo trasero. No gires el tronco.'],
'remo-banco-incl':['Túmbate boca abajo en un banco a 30-45° con una mancuerna en cada mano y los brazos colgando.','Tira de las mancuernas hasta que los codos pasen la línea del tronco y baja hasta estirar los brazos.','El pecho se queda pegado al banco todo el rato.'],
'remo-kroc':['Igual que el remo con mancuerna, apoyado en un banco, pero con un peso alto.','Haz muchas repeticiones (15-25) con un pequeño impulso controlado del tronco, llevando la mancuerna a la cadera.','Es una variante de alto volumen; reserva el impulso para las últimas repeticiones.'],
'remo-polea':['Sentado con los pies en la plataforma, rodillas un poco flexionadas y espalda recta. Brazos estirados al frente.','Tira del agarre hasta el ombligo, sacando pecho y juntando las escápulas. Vuelve hasta estirar los brazos.','El tronco puede moverse unos 10°; no te balancees adelante y atrás.'],
'remo-polea-unilateral':['Sentado frente a la polea con un asa en una mano y el brazo estirado.','Tira hasta llevar la mano junto a la cadera y vuelve estirando el brazo hasta notar el estiramiento.','Mantén los hombros a la misma altura y sin girar el tronco.'],
'remo-maq':['Ajusta el asiento para que las asas queden a la altura del pecho y apoya el pecho en el respaldo.','Tira de las asas hasta que los codos pasen la línea del torso y vuelve hasta estirar los brazos.','No despegues el pecho del apoyo al tirar.'],
'remo-invertido':['Túmbate bajo una barra a la altura de la cadera y agárrala con los brazos estirados. Cuerpo recto y talones en el suelo.','Tira hasta que el pecho toque la barra y baja hasta estirar los brazos.','Cuanto más horizontal esté el cuerpo, más difícil. Aprieta glúteos para no doblar la cadera.'],
'encogimientos-barra':['De pie con la barra delante de los muslos y los brazos estirados.','Sube los hombros hacia las orejas lo más alto posible, aguanta un segundo y baja del todo.','No hagas círculos con los hombros ni dobles los codos.'],
'encogimientos-manc':['De pie con una mancuerna a cada lado y los brazos estirados.','Eleva los hombros hacia las orejas, mantén un segundo arriba y baja controlando.','Las mancuernas a los lados permiten un recorrido más natural que la barra.'],
'hiperextensiones':['Colócate en el banco de 45° con la cadera apoyada justo por encima del borde y los pies sujetos.','Baja el tronco hasta que forme unos 90° con las piernas y sube hasta que quede en línea con ellas.','No subas más allá de la línea recta: arquear la espalda no aporta y sobrecarga la zona lumbar.'],
'buenos-dias':['De pie con la barra sobre la parte alta de la espalda, como en una sentadilla, y las rodillas un poco flexionadas.','Echa la cadera atrás e inclina el tronco hasta que quede casi paralelo al suelo. Sube empujando la cadera adelante.','La espalda se mantiene recta y el peso es moderado. Las rodillas apenas se mueven.'],
'superman':['Túmbate boca abajo con los brazos estirados por delante de la cabeza.','Levanta a la vez brazos, pecho y piernas unos centímetros del suelo, aguanta 2 segundos y baja.','Mira al suelo para no forzar el cuello.'],
// Piernas
'sentadilla':['Barra sobre la parte alta de la espalda (no en el cuello), pies algo más anchos que la cadera y puntas un poco hacia fuera.','Baja echando la cadera atrás y doblando las rodillas hasta que los muslos queden paralelos al suelo (rodilla a 90°) o algo más. Sube empujando el suelo.','Las rodillas siguen la dirección de las puntas y los talones no se despegan. Pecho alto y espalda recta.'],
'sentadilla-baja':['Barra apoyada más baja, sobre la parte posterior de los hombros. Pies a la anchura de los hombros.','Inclina más el tronco y baja hasta que el pliegue de la cadera quede a la altura de la rodilla. Sube empujando con la cadera.','Mueve más peso gracias a los glúteos. Agarra la barra cerca de los hombros para que no resbale.'],
'sentadilla-pausa':['Misma colocación que la sentadilla.','Baja hasta el paralelo y mantente 2 segundos abajo sin relajarte. Sube con fuerza.','La pausa elimina el rebote: usa un 70-80 % de tu peso habitual.'],
'sentadilla-frontal':['Barra apoyada sobre la parte delantera de los hombros con los codos altos, apuntando al frente.','Baja con el tronco muy vertical hasta que los muslos queden paralelos o por debajo. Sube manteniendo los codos altos.','Si los codos caen, la barra se va hacia delante. Trabaja más el cuádriceps.'],
'sentadilla-caja':['Coloca un cajón o banco detrás que quede a la altura del paralelo. Barra como en la sentadilla.','Baja hasta sentarte suavemente en el cajón sin relajarte, haz una pausa breve y sube.','No te dejes caer en el cajón. Ayuda a aprender la profundidad correcta.'],
'sentadilla-zercher':['Sujeta la barra en el pliegue de los codos, pegada al cuerpo.','Baja hasta que los muslos queden paralelos al suelo y sube con el tronco erguido.','Pon una toalla o almohadilla en la barra. Exige mucho abdomen y espalda alta.'],
'sentadilla-goblet':['Sujeta una kettlebell o mancuerna delante del pecho con las dos manos.','Baja hasta que los codos toquen la parte interna de las rodillas, con el tronco erguido, y sube.','Ideal para aprender a hacer sentadillas: el peso delante te ayuda a mantener el pecho alto.'],
'sentadilla-multi':['Barra en la parte alta de la espalda con los pies un poco adelantados respecto a la barra.','Baja hasta que los muslos queden paralelos al suelo y sube empujando con los talones.','Ajusta los topes de seguridad justo por debajo de tu profundidad.'],
'sentadilla-hack':['Espalda apoyada en el respaldo, hombros bajo las almohadillas y pies en la mitad de la plataforma.','Baja hasta que las rodillas formen 90° o algo más y sube sin bloquear las rodillas arriba.','Pies más bajos en la plataforma = más cuádriceps; más altos = más glúteo.'],
'sentadilla-pendulo':['Hombros bajo las almohadillas y pies en la plataforma, ligeramente adelantados.','Baja hasta que los muslos superen el paralelo y sube empujando con todo el pie.','El recorrido en arco permite bajar mucho con poca carga en la espalda.'],
'sentadilla-cinturon':['Cinturón en la cadera enganchado a la máquina, de pie sobre la plataforma.','Baja hasta que los muslos queden paralelos al suelo y sube, con el tronco erguido.','La carga va a la cadera, no a la espalda: útil si tienes molestias lumbares.'],
'sentadilla-sissy':['De pie, sujétate a un apoyo con una mano. Ponte de puntillas.','Echa las rodillas hacia delante y el tronco hacia atrás, en línea con los muslos, hasta que las rodillas casi toquen el suelo. Sube.','La cadera no se dobla: el cuerpo forma una línea de las rodillas a la cabeza. Exige mucho cuádriceps.'],
'sentadilla-pistol':['De pie sobre una pierna con la otra estirada al frente y los brazos adelante.','Baja sobre la pierna de apoyo hasta que el glúteo quede cerca del talón, manteniendo la otra pierna en el aire. Sube.','Empieza bajando a un banco o sujetándote a algo. El talón de apoyo no se despega.'],
'sentadilla-libre':['De pie, pies a la anchura de los hombros y brazos al frente.','Baja hasta que los muslos queden paralelos al suelo y sube estirando la cadera.','Útil para calentar o hacer muchas repeticiones. Talones siempre en el suelo.'],
'prensa':['Espalda y glúteos pegados al respaldo, pies en el centro de la plataforma a la anchura de la cadera.','Baja la plataforma hasta que las rodillas formen unos 90° y empuja hasta casi estirar las piernas.','No bloquees las rodillas arriba y no dejes que la zona lumbar se despegue del asiento al bajar.'],
'prensa-unilateral':['Un pie en el centro de la plataforma y el otro fuera, apoyado en el suelo o en el marco.','Baja hasta que la rodilla forme 90° y empuja hasta casi estirar.','Útil para corregir diferencias entre piernas. Empieza con la pierna más débil.'],
'bulgara':['De espaldas a un banco, apoya el empeine de un pie en él. El pie de delante, a un paso largo del banco.','Baja hasta que la rodilla de atrás casi toque el suelo y la de delante forme 90°. Sube empujando con el talón delantero.','Tronco erguido = más cuádriceps; inclinado hacia delante = más glúteo.'],
'zancadas':['De pie con los pies juntos y una mancuerna en cada mano.','Da un paso largo al frente y baja hasta que las dos rodillas formen 90° y la de atrás casi toque el suelo. Vuelve empujando con el pie de delante.','La rodilla delantera no debe irse hacia dentro. Tronco erguido.'],
'zancadas-atras':['De pie con los pies juntos.','Da un paso largo hacia atrás y baja hasta que ambas rodillas formen 90°. Vuelve a juntar los pies.','Es más amable con la rodilla que la zancada al frente.'],
'zancadas-caminando':['De pie con una mancuerna en cada mano.','Avanza con zancadas alternas, bajando hasta que la rodilla de atrás casi toque el suelo en cada paso.','Mantén los pasos largos y el tronco recto. Cuenta cada pierna como una repetición.'],
'zancadas-barra':['Barra sobre la parte alta de la espalda, como en la sentadilla.','Da un paso adelante o atrás y baja hasta que ambas rodillas formen 90°. Vuelve a la posición inicial.','Usa un peso con el que controles el equilibrio. El tronco no se inclina.'],
'zancada-lateral':['De pie con los pies juntos.','Da un paso amplio hacia un lado y baja sobre esa pierna echando la cadera atrás, con la otra pierna estirada. Vuelve al centro.','Los dos pies miran al frente y el talón de la pierna flexionada no se despega.'],
'step-up':['De pie frente a un cajón o banco a la altura de la rodilla, con mancuernas si quieres.','Apoya todo el pie en el cajón y sube empujando con esa pierna hasta quedar de pie arriba. Baja controlando.','No te impulses con la pierna de abajo: que trabaje la que está sobre el cajón.'],
'ext-cuad':['Ajusta la máquina para que la rodilla quede alineada con el eje y el rodillo sobre los tobillos.','Estira las piernas hasta que queden rectas, aguanta un segundo y baja hasta que las rodillas formen 90°.','Agarra las asas para no levantar la cadera del asiento.'],
'rumano':['De pie con la barra delante de los muslos y las rodillas un poco flexionadas.','Echa la cadera atrás bajando la barra pegada a las piernas hasta media espinilla o hasta notar tensión en los isquios. Sube empujando la cadera adelante.','Las rodillas apenas se doblan durante el movimiento. Espalda recta: la barra no se separa de las piernas.'],
'rumano-manc':['De pie con una mancuerna en cada mano delante de los muslos.','Echa la cadera atrás y baja las mancuernas rozando las piernas hasta media espinilla. Sube empujando la cadera.','Mantén la espalda recta y los hombros hacia atrás.'],
'rumano-unilateral':['De pie sobre una pierna con una mancuerna en la mano contraria.','Inclina el tronco hacia delante mientras la otra pierna se eleva hacia atrás, hasta que tronco y pierna queden casi paralelos al suelo. Vuelve.','La cadera mira al suelo, sin abrirse. Ve despacio para no perder el equilibrio.'],
'piernas-rigidas':['De pie con la barra delante y las rodillas casi estiradas.','Baja la barra hasta que notes un estiramiento intenso en los isquios, con la espalda recta, y sube.','Las rodillas se mantienen casi bloqueadas; baja solo hasta donde mantengas la espalda recta.'],
'curl-femoral':['Túmbate boca abajo con las rodillas justo fuera del banco y el rodillo sobre los tobillos.','Dobla las rodillas llevando los talones hacia los glúteos hasta pasar de 90°. Baja hasta casi estirar.','No despegues la cadera del banco al subir.'],
'curl-femoral-sentado':['Sentado con la rodilla alineada con el eje de la máquina y el rodillo bajo los tobillos. Sujeta los muslos con la almohadilla.','Lleva los talones hacia abajo y atrás hasta que las rodillas pasen de 90°. Vuelve hasta casi estirar.','Inclinarte un poco hacia delante aumenta el estiramiento de los isquios.'],
'curl-femoral-pie':['De pie en la máquina con el rodillo detrás de un tobillo y el tronco apoyado.','Dobla la rodilla llevando el talón hacia el glúteo y baja controlando.','La rodilla de la pierna que trabaja no se mueve hacia delante.'],
'curl-nordico':['De rodillas sobre una superficie blanda con los tobillos sujetos.','Con el cuerpo recto de las rodillas a la cabeza, déjate caer hacia delante lo más lento posible. Frena con las manos y vuelve.','La cadera no se dobla. Al principio ayúdate empujando con las manos para subir.'],
'glute-ham':['Colócate en el banco GHR con los pies sujetos y las rodillas apoyadas justo detrás de la almohadilla.','Desde el tronco paralelo al suelo, sube doblando las rodillas hasta quedar vertical. Baja controlando.','Combina extensión de cadera y flexión de rodilla: aprieta glúteos e isquios.'],
'hip-thrust':['Espalda alta apoyada en el borde de un banco y la barra sobre la cadera, con almohadilla. Pies apoyados a la anchura de la cadera.','Sube la cadera hasta que el cuerpo quede recto de los hombros a las rodillas y las espinillas verticales (rodilla a 90°). Baja sin tocar el suelo.','Mete la barbilla y aprieta glúteos arriba un segundo. No arquees la zona lumbar.'],
'hip-thrust-maq':['Espalda apoyada en el respaldo y la almohadilla sobre la cadera. Pies a la anchura de la cadera.','Sube la cadera hasta alinearla con hombros y rodillas, aprieta un segundo y baja.','Las espinillas quedan verticales arriba; si no, ajusta la posición de los pies.'],
'puente-gluteo':['Tumbado boca arriba con las rodillas dobladas y los pies apoyados cerca de los glúteos.','Sube la cadera hasta que el cuerpo forme una línea recta de los hombros a las rodillas. Aguanta un segundo y baja.','Empuja con los talones y aprieta los glúteos arriba.'],
'patada-polea':['Tobillera en la polea baja. De pie frente a la máquina, sujétate con las manos y el tronco algo inclinado.','Lleva la pierna hacia atrás y arriba con la rodilla casi estirada, hasta que el muslo quede detrás del cuerpo. Vuelve despacio.','No arquees la zona lumbar para subir más: el movimiento sale de la cadera.'],
'patada-maq':['Apoya el pecho o los antebrazos en la máquina y el pie en la plataforma.','Empuja la plataforma hacia atrás hasta estirar la cadera y vuelve controlando.','Mantén la espalda neutra y aprieta el glúteo al final.'],
'pull-through':['De espaldas a la polea baja con la cuerda entre las piernas. Da dos pasos al frente.','Echa la cadera atrás dejando que la cuerda pase entre las piernas y sube empujando la cadera adelante hasta quedar de pie.','Los brazos solo sujetan; el movimiento es de cadera, como en un peso muerto rumano.'],
'abduccion-maq':['Sentado con la espalda pegada al respaldo y las almohadillas por fuera de las rodillas.','Abre las piernas lo máximo posible, aguanta un segundo y vuelve sin que las placas choquen.','Inclinarte un poco hacia delante trabaja más el glúteo.'],
'abduccion-banda':['Banda elástica alrededor de las rodillas, sentado o en posición de media sentadilla.','Separa las rodillas contra la resistencia de la banda y vuelve despacio.','Mantén los pies fijos y la tensión de la banda todo el rato.'],
'aduccion-maq':['Sentado con las almohadillas por dentro de las rodillas y las piernas abiertas.','Junta las piernas hasta que las almohadillas casi se toquen y vuelve hasta notar estiramiento.','No dejes que el peso abra las piernas de golpe al volver.'],
'gemelos':['De pie con las puntas de los pies en el borde de un escalón y los hombros bajo las almohadillas.','Baja los talones por debajo del escalón hasta notar estiramiento y sube de puntillas lo más alto posible.','Aguanta un segundo arriba y otro abajo. Las rodillas casi estiradas.'],
'gemelos-sentado':['Sentado con la almohadilla sobre los muslos y las puntas en el borde de la plataforma.','Baja los talones todo lo posible y sube de puntillas al máximo.','Con la rodilla doblada se trabaja más el sóleo. Haz el recorrido completo.'],
'gemelos-prensa':['En la prensa, apoya solo las puntas de los pies en el borde de la plataforma con las piernas casi estiradas.','Empuja la plataforma con las puntas extendiendo el tobillo y vuelve hasta notar estiramiento.','No desbloquees el seguro de la prensa: las piernas no se doblan.'],
'gemelos-unilateral':['De pie sobre un pie en el borde de un escalón, con una mancuerna en la mano del mismo lado.','Baja el talón por debajo del escalón y sube de puntillas lo más alto posible.','Sujétate con la otra mano para mantener el equilibrio.'],
'tibial':['Espalda apoyada en la pared y talones a un pie de distancia de ella.','Levanta las puntas de los pies hacia las espinillas lo más alto posible y bájalas despacio.','Ayuda a prevenir molestias en la espinilla al correr.'],
// Hombros
'press-militar':['De pie, barra apoyada en la parte delantera de los hombros y agarre algo más ancho que ellos. Glúteos y abdomen apretados.','Empuja la barra en vertical, apartando la cara, hasta estirar los brazos con la barra sobre la mitad del pie. Baja hasta la clavícula.','Cuando la barra pase la frente, mete la cabeza debajo. No arquees la zona lumbar.'],
'press-militar-sentado':['Sentado en un banco con respaldo vertical y la barra a la altura de la clavícula.','Empuja hasta estirar los brazos sobre la cabeza y baja hasta la barbilla o la clavícula.','La espalda se queda pegada al respaldo.'],
'push-press':['Barra en la parte delantera de los hombros, como en el press militar.','Flexiona un poco las rodillas (5-10 cm) y extiéndelas con fuerza para impulsar la barra; termina el empuje con los brazos hasta bloquear arriba.','El impulso de piernas es corto y vertical; el tronco no se inclina.'],
'press-tras-nuca':['Sentado o de pie, barra apoyada detrás del cuello sobre los trapecios.','Empuja en vertical hasta estirar los brazos y baja hasta la altura de las orejas.','Solo si tienes buena movilidad de hombro. Usa poco peso y no bajes a la nuca.'],
'press-z':['Sentado en el suelo con las piernas estiradas y la barra en la parte delantera de los hombros.','Empuja la barra en vertical hasta estirar los brazos y baja hasta la clavícula.','Sin apoyo en la espalda: exige mucho core para no inclinarte atrás.'],
'press-hombro-manc':['Sentado en un banco vertical con las mancuernas a la altura de las orejas y los codos debajo de las muñecas.','Empuja hasta estirar los brazos con las mancuernas casi juntas sobre la cabeza. Baja hasta que los codos queden a 90°.','No choques las mancuernas arriba ni bajes los codos por debajo de los hombros con mucho peso.'],
'press-arnold':['Sentado con las mancuernas delante de la cara, palmas hacia ti y codos al frente.','Al subir, gira las palmas hacia delante a la vez que abres los codos, hasta estirar los brazos arriba. Deshaz el giro al bajar.','El giro es continuo durante todo el recorrido.'],
'press-hombro-maq':['Ajusta el asiento para que las asas queden a la altura de los hombros.','Empuja hasta casi estirar los brazos y baja hasta que las manos queden a la altura de la barbilla.','Espalda pegada al respaldo.'],
'press-hombro-multi':['Banco vertical colocado para que la barra baje justo delante de la cara.','Empuja hasta estirar los brazos y baja hasta la barbilla.','Comprueba el recorrido con la barra vacía antes de cargar.'],
'press-kb':['De pie con la kettlebell en posición de rack: apoyada en el antebrazo, junto al hombro.','Empuja hasta estirar el brazo sobre la cabeza con el bíceps junto a la oreja y baja al rack.','Mantén la muñeca recta y aprieta el glúteo del mismo lado.'],
'pike-pushup':['Manos y pies en el suelo con la cadera muy alta, formando una V invertida.','Dobla los codos y baja la cabeza hasta casi tocar el suelo por delante de las manos. Empuja hasta estirar los brazos.','Cuanto más vertical esté el tronco, más trabaja el hombro. Paso previo a la flexión en pino.'],
'flexiones-pino':['En pino contra la pared, manos a la anchura de los hombros y a un palmo de la pared.','Baja hasta que la cabeza toque suavemente el suelo (o una almohadilla) y empuja hasta estirar los brazos.','Ejercicio avanzado: empieza con las flexiones pica o con recorrido parcial.'],
'elev-laterales':['De pie con una mancuerna en cada mano a los lados y los codos un poco flexionados.','Sube los brazos hacia los lados hasta que las manos lleguen a la altura de los hombros (brazos paralelos al suelo). Baja despacio.','Los codos van un poco por delante de las manos. No subas por encima de los hombros ni balancees el cuerpo.'],
'elev-laterales-polea':['De lado a una polea baja, agarra el asa con la mano más alejada y deja que el cable cruce por delante.','Sube el brazo hacia el lado hasta la altura del hombro y baja despacio.','El cable mantiene la tensión abajo, donde la mancuerna no trabaja.'],
'elev-laterales-maq':['Sentado con los brazos junto a las almohadillas laterales.','Sube los brazos hacia los lados hasta la altura de los hombros y baja controlando.','Mantén los hombros bajos, sin encogerlos hacia las orejas.'],
'remo-menton':['De pie con la barra delante de los muslos y agarre a la anchura de los hombros o algo más.','Sube la barra pegada al cuerpo llevando los codos hacia arriba y afuera, hasta la altura del pecho. Baja despacio.','Los codos siempre por encima de las manos. No subas más allá de la altura de los hombros.'],
'remo-menton-polea':['De pie frente a la polea baja con una barra recta o cuerda.','Tira hasta la altura del pecho llevando los codos arriba y afuera. Baja estirando los brazos.','Agarre algo más ancho que los hombros para cuidar la articulación.'],
'elev-frontales':['De pie con las mancuernas delante de los muslos.','Sube los brazos al frente, con los codos casi rectos, hasta la altura de los ojos. Baja despacio.','Evita el balanceo. Puedes alternar brazos.'],
'elev-frontales-disco':['De pie sujetando un disco por los lados, delante de los muslos.','Sube el disco con los brazos casi rectos hasta la altura de los ojos y baja.','Mantén el abdomen firme para no inclinarte hacia atrás.'],
'elev-frontales-polea':['De espaldas a la polea baja con el cable entre las piernas.','Sube el agarre al frente hasta la altura de los ojos y baja controlando.','La tensión es constante durante todo el recorrido.'],
'pajaros':['Inclina el tronco hasta casi paralelo al suelo, rodillas un poco flexionadas y mancuernas colgando.','Abre los brazos hacia los lados hasta que queden a la altura del tronco, con los codos un poco flexionados. Baja despacio.','Piensa en llevar las manos hacia fuera, no hacia atrás. No juntes las escápulas en exceso.'],
'pajaros-maq':['Sentado de cara al respaldo del contractor, con las asas a la altura de los hombros.','Abre los brazos hacia atrás en arco hasta que queden en línea con los hombros. Vuelve despacio.','Brazos casi rectos. El movimiento sale del hombro, no de juntar escápulas.'],
'pajaros-polea':['Entre dos poleas altas, agarra los cables cruzados a la altura de los hombros.','Abre los brazos hacia atrás hasta que queden en línea con los hombros y vuelve.','Usa poco peso y controla la vuelta.'],
'face-pull':['Polea a la altura de la cara con una cuerda. Agarra los extremos con las palmas hacia dentro.','Tira de la cuerda hacia la frente separando las manos, con los codos altos, hasta que las manos queden a los lados de la cara.','Termina con los pulgares apuntando atrás. Peso ligero y mucha calidad.'],
'band-pull-apart':['De pie con una banda sujeta con los brazos estirados al frente a la altura de los hombros.','Separa las manos hasta que la banda toque el pecho y los brazos queden en cruz. Vuelve despacio.','Ideal para calentar los hombros antes de empujar.'],
'elev-y':['Tumbado boca abajo en un banco inclinado o de pie inclinado, con mancuernas ligeras.','Sube los brazos estirados formando una Y con el cuerpo, con los pulgares hacia arriba, hasta la altura de las orejas. Baja.','Usa muy poco peso: trabaja la parte baja del trapecio.'],
'rotacion-externa':['De lado a la polea a la altura del codo, con el codo pegado al costado a 90° y la mano delante del ombligo.','Gira el antebrazo hacia fuera manteniendo el codo pegado, hasta que apunte al frente o algo más afuera. Vuelve.','El codo no se separa del cuerpo. Peso muy ligero; cuida el manguito rotador.'],
// Brazos
'curl-barra':['De pie con la barra agarrada a la anchura de los hombros, palmas hacia delante y codos pegados al cuerpo.','Sube la barra doblando los codos hasta que quede a la altura de los hombros. Baja hasta estirar casi del todo los brazos.','Los codos no se mueven hacia delante ni atrás. Sin balancear el tronco.'],
'curl-ez':['De pie con la barra Z agarrada por la zona inclinada y los codos pegados al cuerpo.','Sube hasta que los antebrazos queden casi verticales y baja hasta estirar los brazos.','El agarre inclinado es más cómodo para las muñecas que la barra recta.'],
'curl-21':['De pie con la barra, como en el curl normal.','Haz 7 repeticiones de abajo a la mitad (codo a 90°), 7 de la mitad hasta arriba y 7 completas, sin descanso.','Usa un peso bastante menor que en el curl normal.'],
'curl-manc':['De pie con una mancuerna en cada mano, brazos estirados y palmas hacia delante.','Sube las dos mancuernas a la vez hasta la altura de los hombros y baja hasta estirar los brazos.','Los codos se quedan junto al cuerpo. Baja en 2-3 segundos.'],
'curl-alterno':['De pie con las mancuernas a los lados y las palmas mirando al cuerpo.','Sube una mancuerna girando la palma hacia arriba durante la subida, hasta el hombro. Baja y repite con el otro brazo.','El giro de muñeca activa más el bíceps. No te balancees.'],
'curl-inclinado':['Sentado en un banco inclinado a 45-60° con los brazos colgando por detrás del torso.','Sube las mancuernas sin mover los codos hacia delante y baja hasta estirar del todo.','El brazo empieza por detrás del cuerpo: gran estiramiento del bíceps. Peso moderado.'],
'curl-concentrado':['Sentado, apoya la parte de atrás del brazo contra el interior del muslo, con la mancuerna colgando.','Sube la mancuerna hacia el hombro y baja hasta estirar el brazo.','El codo no se separa del muslo. Aprieta arriba un segundo.'],
'curl-arana':['Túmbate boca abajo en un banco inclinado con los brazos colgando en vertical.','Sube las mancuernas doblando solo los codos hasta que las manos lleguen a los hombros. Baja hasta estirar.','Sin impulso posible: aísla mucho el bíceps.'],
'curl-predicador':['Sentado en el banco Scott con la parte de atrás de los brazos apoyada en la almohadilla.','Sube la barra hasta que los antebrazos queden casi verticales y baja hasta que los codos queden casi estirados.','No estires de golpe abajo: es donde más se sufre el codo.'],
'curl-maq':['Sentado con los brazos apoyados en la almohadilla y los codos alineados con el eje de la máquina.','Sube las asas doblando los codos y baja hasta casi estirar.','Ajusta el asiento para que los hombros no se levanten.'],
'curl-polea':['De pie frente a la polea baja con una barra recta o Z.','Sube doblando los codos hasta los hombros y baja hasta estirar los brazos.','El cable mantiene tensión también abajo.'],
'curl-bayesiano':['De espaldas a la polea baja, con el asa en una mano y el brazo un poco por detrás del cuerpo.','Dobla el codo llevando la mano hacia el hombro sin mover el codo hacia delante. Vuelve hasta estirar.','Gran estiramiento del bíceps al empezar con el brazo atrás.'],
'curl-martillo':['De pie con las mancuernas a los lados y las palmas mirando al cuerpo.','Sube las mancuernas sin girar la muñeca, como si sujetaras un martillo, hasta la altura de los hombros. Baja.','Trabaja el braquial y el antebrazo. Codos quietos.'],
'curl-cuerda':['De pie frente a la polea baja con una cuerda, palmas enfrentadas.','Sube la cuerda hasta los hombros con los codos pegados y baja hasta estirar.','Es un curl martillo con tensión constante.'],
'curl-invertido':['De pie con la barra agarrada con las palmas hacia abajo, a la anchura de los hombros.','Sube la barra doblando los codos hasta los hombros y baja.','Usa menos peso que en el curl normal: trabaja el antebrazo.'],
'curl-zottman':['De pie con las mancuernas y las palmas hacia delante.','Sube como un curl normal; arriba gira las palmas hacia abajo y baja despacio así. Gira de nuevo abajo.','Combina bíceps al subir y antebrazo al bajar.'],
'curl-muneca':['Sentado con los antebrazos apoyados en los muslos y las muñecas fuera de las rodillas, palmas hacia arriba.','Deja caer la mancuerna doblando la muñeca hacia abajo y súbela flexionándola hacia arriba al máximo.','Solo se mueve la muñeca; los antebrazos no se despegan.'],
'curl-muneca-inv':['Sentado con los antebrazos en los muslos y las palmas hacia abajo.','Sube el dorso de la mano lo más alto posible y baja despacio.','Usa muy poco peso.'],
'colgarse':['Agarra la barra de dominadas con las manos a la anchura de los hombros.','Cuélgate con los brazos estirados y los hombros activos (sin hundirte) el tiempo marcado.','Mejora el agarre y descomprime la espalda. Apunta los segundos como repeticiones.'],
'press-cerrado':['Tumbado en el banco con las manos a la anchura de los hombros.','Baja la barra hasta la parte baja del pecho con los codos pegados al cuerpo y empuja hasta estirar.','Agarre a la anchura de los hombros, no más estrecho: cuida las muñecas.'],
'jm-press':['Tumbado con agarre cerrado y la barra sobre el pecho.','Baja la barra hacia la barbilla doblando los codos, que apuntan a los pies, hasta que los antebrazos toquen los bíceps. Empuja hasta estirar.','Es un híbrido entre press cerrado y press francés. Peso moderado.'],
'press-frances':['Tumbado con la barra Z sobre la frente y los brazos estirados hacia el techo.','Dobla solo los codos bajando la barra hasta la frente o un poco por detrás de la cabeza. Estira los brazos.','Los codos apuntan al techo todo el rato, sin abrirse.'],
'press-frances-manc':['Tumbado con una mancuerna en cada mano y los brazos estirados sobre los hombros, palmas enfrentadas.','Baja las mancuernas doblando los codos hasta los lados de la cabeza y estira.','Más cómodo para los codos que con barra.'],
'ext-triceps':['De pie frente a la polea alta con una barra, codos pegados al cuerpo y antebrazos a 90°.','Empuja hacia abajo hasta estirar los brazos y vuelve hasta que los antebrazos queden paralelos al suelo.','Los codos no se mueven. Inclínate un poco hacia delante.'],
'ext-triceps-cuerda':['De pie frente a la polea alta con una cuerda y los codos pegados al cuerpo.','Empuja hacia abajo y, al final, separa los extremos de la cuerda hacia fuera. Vuelve hasta 90°.','Separar la cuerda abajo aumenta la contracción.'],
'ext-triceps-unilateral':['De pie frente a la polea alta con un asa en una mano y el codo pegado al costado.','Estira el brazo hacia abajo y vuelve hasta que el antebrazo quede a 90°.','Útil para igualar los dos brazos.'],
'ext-triceps-cabeza-polea':['De espaldas a la polea, con la cuerda detrás de la cabeza y los codos apuntando al frente.','Estira los brazos hacia delante y arriba hasta que queden rectos y vuelve hasta notar estiramiento.','Gran estiramiento de la cabeza larga del tríceps. Codos quietos.'],
'ext-triceps-cabeza-manc':['Sentado o de pie, sujeta una mancuerna con las dos manos por encima de la cabeza.','Baja la mancuerna por detrás de la cabeza doblando los codos hasta unos 90° o algo más, y estira.','Los codos apuntan al techo y quedan cerca de la cabeza.'],
'patada-triceps':['Inclinado con una mano apoyada en un banco, el brazo que trabaja pegado al cuerpo y el codo a 90°.','Estira el brazo hacia atrás hasta que quede recto y paralelo al suelo. Vuelve a 90°.','El brazo, del hombro al codo, no se mueve.'],
'fondos-banco':['Manos en el borde de un banco detrás de ti y piernas estiradas al frente.','Baja doblando los codos hasta unos 90° y empuja hasta estirar los brazos.','Mantén la espalda cerca del banco. Con las rodillas dobladas es más fácil.'],
'fondos-triceps-maq':['Sentado en la máquina con las asas a los lados y los codos atrás.','Empuja hacia abajo hasta estirar los brazos y vuelve hasta 90°.','Tronco erguido para que trabaje el tríceps.'],
'flexiones-diamante':['Posición de flexión con las manos juntas bajo el pecho, formando un rombo con pulgares e índices.','Baja hasta que el pecho roce las manos con los codos pegados al cuerpo y empuja.','Si es demasiado difícil, apoya las rodillas.'],
// Core
'plancha':['Apoya los antebrazos con los codos bajo los hombros y las puntas de los pies.','Mantén el cuerpo en línea recta de la cabeza a los talones el tiempo marcado.','Aprieta glúteos y abdomen. Si la cadera se hunde, para. Apunta los segundos como repeticiones.'],
'plancha-lateral':['De lado, apoyado en un antebrazo con el codo bajo el hombro y los pies uno sobre otro.','Levanta la cadera hasta que el cuerpo forme una línea recta y mantén el tiempo marcado.','No dejes caer la cadera. Haz los dos lados.'],
'hollow':['Tumbado boca arriba con los brazos estirados por detrás de la cabeza.','Despega hombros y piernas del suelo unos 15 cm con la zona lumbar pegada al suelo y mantén.','Si la lumbar se despega, dobla las rodillas o sube más las piernas.'],
'l-sit':['Manos en el suelo o en paralelas a los lados de la cadera, brazos estirados.','Levanta el cuerpo y mantén las piernas estiradas al frente, paralelas al suelo, formando una L.','Empieza con las rodillas dobladas. Hombros abajo, lejos de las orejas.'],
'crunch':['Tumbado boca arriba con las rodillas dobladas y las manos junto a las sienes.','Despega los hombros del suelo acercando las costillas a la cadera, hasta que los omóplatos se levanten. Baja despacio.','No tires del cuello con las manos. La zona lumbar se queda en el suelo.'],
'crunch-polea':['De rodillas frente a la polea alta con la cuerda a los lados de la cabeza.','Enrolla el tronco llevando los codos hacia los muslos, flexionando la columna. Vuelve hasta erguirte.','La cadera no se mueve: el movimiento es de la columna, no de sentarte sobre los talones.'],
'crunch-maq':['Sentado en la máquina con las asas o almohadillas junto al pecho.','Enrolla el tronco hacia delante hasta notar la contracción del abdomen y vuelve despacio.','Expulsa el aire al bajar el tronco.'],
'crunch-inverso':['Tumbado boca arriba con las rodillas a 90° sobre la cadera y los brazos a los lados.','Lleva las rodillas hacia el pecho despegando la cadera del suelo y baja controlando.','Sin impulso: la cadera sube por el abdomen, no por la inercia de las piernas.'],
'crunch-declinado':['En el banco declinado con los pies sujetos y las manos junto a las sienes.','Sube el tronco enrollándolo hasta quedar casi vertical y baja despacio.','Cuanta más inclinación, más difícil.'],
'crunch-bicicleta':['Tumbado boca arriba con las manos junto a la cabeza y las piernas en el aire.','Lleva un codo hacia la rodilla contraria mientras estiras la otra pierna. Alterna como si pedalearas.','Ve despacio y gira el tronco, no solo el codo.'],
'sit-up':['Tumbado boca arriba con las rodillas dobladas y los pies apoyados (sujetos si hace falta).','Sube el tronco hasta quedar sentado y baja despacio.','No tires del cuello. Si los pies se levantan, sujétalos.'],
'v-up':['Tumbado boca arriba con brazos y piernas estirados.','Sube a la vez tronco y piernas rectas hasta tocar o acercar las manos a los pies, formando una V. Baja controlando.','Si no llegas, dobla un poco las rodillas.'],
'elev-piernas':['Cuélgate de la barra con los brazos estirados.','Sube las piernas estiradas hasta que queden paralelas al suelo (o más) y baja despacio.','Evita balancearte; si te balanceas, para un momento abajo.'],
'elev-rodillas':['Cuélgate de la barra con los brazos estirados.','Sube las rodillas hacia el pecho hasta pasar la altura de la cadera y baja despacio.','Versión más fácil de la elevación de piernas.'],
'elev-piernas-silla':['Espalda apoyada en el respaldo de la silla romana y antebrazos en los apoyos.','Sube las rodillas o las piernas estiradas hasta la altura de la cadera y baja despacio.','La espalda no se despega del respaldo.'],
'elev-piernas-suelo':['Tumbado boca arriba con las piernas estiradas y las manos bajo los glúteos.','Sube las piernas rectas hasta la vertical y bájalas hasta casi tocar el suelo.','Si la zona lumbar se despega al bajar, no bajes tanto.'],
'pies-barra':['Cuélgate de la barra con los brazos estirados.','Sube las piernas hasta tocar la barra con los pies y baja controlando.','Ejercicio avanzado: domina antes la elevación de piernas.'],
'dragon-flag':['Tumbado en un banco agarrando el borde por detrás de la cabeza.','Sube el cuerpo recto apoyado solo en la parte alta de la espalda y bájalo lo más despacio posible sin doblar la cadera.','Muy avanzado. Empieza con las rodillas dobladas o solo con la fase de bajada.'],
'rueda':['De rodillas con la rueda en el suelo, debajo de los hombros.','Rueda hacia delante estirando el cuerpo hasta donde puedas mantener la espalda recta y vuelve.','La cadera no se hunde. Empieza con poco recorrido.'],
'dead-bug':['Tumbado boca arriba con los brazos hacia el techo y las rodillas a 90° sobre la cadera.','Estira a la vez un brazo hacia atrás y la pierna contraria hasta casi tocar el suelo. Vuelve y cambia de lado.','La zona lumbar siempre pegada al suelo. Ve despacio.'],
'escaladores':['En posición de flexión con los brazos estirados.','Lleva una rodilla hacia el pecho y cambia de pierna rápidamente, como si corrieras.','La cadera no sube. Apunta tiempo o repeticiones.'],
'pallof':['De lado a una polea a la altura del pecho, sujeta el asa con las dos manos junto al pecho.','Empuja el asa al frente hasta estirar los brazos sin dejar que el tronco gire, aguanta 2 segundos y vuelve.','El objetivo es resistir el giro: el abdomen trabaja para mantenerte recto.'],
'lenador':['De lado a una polea alta, agarra el asa con las dos manos por encima del hombro.','Tira en diagonal hacia la cadera contraria girando el tronco y pivotando el pie de atrás. Vuelve despacio.','Los brazos casi rectos; el giro sale del tronco.'],
'giro-ruso':['Sentado con las rodillas dobladas, el tronco inclinado unos 45° atrás y un disco en las manos.','Gira el tronco llevando el disco a un lado de la cadera y luego al otro.','Para más dificultad, levanta los pies del suelo.'],
'flexion-lateral':['De pie con una mancuerna en una mano y la otra en la cintura.','Inclina el tronco hacia el lado de la mancuerna hasta que baje a la altura de la rodilla y sube hasta pasar del centro.','Solo se mueve el tronco hacia el lado, sin girar ni inclinarse adelante.'],
'rotacion-landmine':['De pie frente al extremo de una barra anclada, sujétalo con las manos estiradas sobre la cabeza.','Lleva la barra en arco hacia una cadera girando tronco y pies, y luego hacia la otra.','Controla el arco; los brazos se mantienen casi estirados.'],
'bird-dog':['A cuatro patas con las manos bajo los hombros y las rodillas bajo la cadera.','Estira a la vez un brazo al frente y la pierna contraria atrás hasta que queden paralelos al suelo. Aguanta 2 segundos y cambia.','La espalda no se arquea ni la cadera gira.'],
// Cuerpo completo
'cargada':['Posición de peso muerto: barra sobre la mitad del pie, agarre algo más ancho que las piernas.','Levanta la barra hasta las rodillas, extiende la cadera de forma explosiva y tira con los hombros; mete los codos rápido y recibe la barra en los hombros con una media sentadilla.','La barra va pegada al cuerpo. Aprende la técnica con poco peso o con un entrenador.'],
'cargada-colgante':['De pie con la barra a la altura de los muslos (posición colgante).','Baja la barra hasta justo encima de las rodillas, extiende la cadera de golpe y recíbela en los hombros con los codos altos.','Más fácil de aprender que la cargada desde el suelo.'],
'arrancada':['Agarre muy ancho y barra sobre la mitad del pie.','En un solo movimiento, sube la barra desde el suelo con una extensión explosiva y recíbela con los brazos estirados sobre la cabeza en sentadilla profunda.','Movimiento muy técnico: aprende con una pica o barra vacía.'],
'arrancada-potencia':['Igual que la arrancada, con agarre ancho.','Recibe la barra sobre la cabeza con los brazos estirados en una media sentadilla (rodillas por encima de 90°).','Menos movilidad que la arrancada completa.'],
'dos-tiempos':['Posición de cargada con la barra en el suelo.','Haz una cargada hasta los hombros, ponte de pie y, con un pequeño impulso de piernas, empuja la barra sobre la cabeza recibiéndola en tijera.','Son dos movimientos encadenados: domina cada uno por separado.'],
'envion':['Barra en los hombros con los codos al frente.','Flexiona un poco las rodillas, extiéndelas con fuerza y mete el cuerpo bajo la barra con los brazos estirados, recibiendo en tijera o media sentadilla.','El impulso es de piernas: los brazos solo bloquean.'],
'thruster':['Barra en la parte delantera de los hombros, como en la sentadilla frontal.','Baja a una sentadilla frontal hasta el paralelo y, al subir, aprovecha el impulso para empujar la barra sobre la cabeza.','Un solo movimiento continuo. Codos altos abajo.'],
'thruster-manc':['Mancuernas sobre los hombros.','Baja a sentadilla hasta el paralelo y, al subir, empuja las mancuernas sobre la cabeza en un solo movimiento.','Más fácil de equilibrar que con barra.'],
'man-maker':['En posición de flexión con las manos sobre dos mancuernas.','Haz una flexión, un remo con cada brazo, salta con los pies hacia las manos, levanta las mancuernas a los hombros y haz un thruster.','Ejercicio completo y muy exigente: usa mancuernas ligeras.'],
'swing-kb':['Pies algo más anchos que la cadera, kettlebell delante en el suelo.','Llévala entre las piernas echando la cadera atrás y extiende la cadera con fuerza para lanzarla hasta la altura del pecho con los brazos estirados. Déjala caer y repite.','La fuerza sale de la cadera, no de los brazos ni de una sentadilla.'],
'arrancada-kb':['Igual que el swing, con una mano.','Lanza la kettlebell con la cadera y guíala cerca del cuerpo hasta terminar con el brazo estirado sobre la cabeza.','Gira la muñeca al final para que la kettlebell no te golpee el antebrazo.'],
'turkish':['Tumbado boca arriba con una kettlebell sujeta con el brazo estirado hacia el techo.','Levántate paso a paso hasta quedar de pie sin bajar el brazo: apoyo en el codo, en la mano, rodilla al suelo, de pie. Deshaz el camino.','Mira la kettlebell durante todo el movimiento. Empieza sin peso.'],
'granjero':['De pie con una mancuerna o kettlebell pesada en cada mano.','Camina la distancia marcada con pasos cortos, tronco erguido y hombros atrás.','No dejes que las pesas golpeen las piernas. Apunta los metros.'],
'burpees':['De pie.','Agáchate y apoya las manos, salta con los pies atrás a posición de flexión, haz una flexión (opcional), vuelve a los pies junto a las manos y salta con los brazos arriba.','Mantén un ritmo que puedas sostener.'],
'salto-cajon':['De pie frente a un cajón, a medio paso.','Flexiona cadera y rodillas, balancea los brazos y salta para aterrizar con los dos pies sobre el cajón en media sentadilla. Baja andando.','Aterriza suave y con las rodillas alineadas. Baja andando, no saltando.'],
'wall-ball':['De pie frente a una pared con un balón medicinal delante del pecho.','Baja a sentadilla hasta el paralelo y, al subir, lanza el balón a la diana de la pared (unos 3 m). Recógelo y enlaza.','Un solo movimiento fluido. El impulso sale de las piernas.'],
'slam':['De pie con un balón de golpeo sobre la cabeza.','Lánzalo contra el suelo con toda la fuerza, doblando cadera y tronco. Recógelo con la espalda recta.','Usa balones que no boten (slam ball).'],
'cuerdas':['En media sentadilla con un extremo de la cuerda en cada mano.','Mueve los brazos arriba y abajo de forma alterna y rápida para crear ondas el tiempo marcado.','Mantén la posición estable; el movimiento sale de los hombros.'],
'trineo':['Agarra los postes del trineo con los brazos estirados y el cuerpo inclinado unos 45°.','Empújalo con pasos cortos y potentes la distancia marcada.','Espalda recta y empuje desde las piernas. Apunta los metros.'],
// Cardio
'cinta':['Sube a la cinta parada y empieza caminando a velocidad baja.','Ve subiendo la velocidad hasta tu ritmo, con zancadas cortas y el pie aterrizando debajo de la cadera.','No te agarres a las barras. Usa la llave de seguridad. Apunta el tiempo y los kilómetros.'],
'cinta-inclinada':['Inclinación entre 8 y 15 % y velocidad de paseo rápido (4-6 km/h).','Camina sin agarrarte, con pasos naturales y el tronco erguido.','Si necesitas agarrarte, baja la inclinación. Muy eficaz y suave con las articulaciones.'],
'correr':['Calienta 5 minutos caminando o trotando suave.','Corre con el tronco erguido, brazos a 90° y el pie aterrizando cerca de la vertical de la cadera.','A ritmo suave deberías poder hablar. Apunta tiempo y kilómetros.'],
'caminar':['Calzado cómodo y paso natural.','Camina a ritmo vivo, balanceando los brazos.','Apunta tiempo y distancia; es la forma más sencilla de sumar actividad.'],
'senderismo':['Calzado de montaña y mochila ajustada a la cadera.','Sube con pasos cortos y constantes; en bajada, dobla un poco las rodillas.','Apunta el tiempo total y los kilómetros recorridos.'],
'bici-estatica':['Ajusta el sillín para que la rodilla quede casi estirada (unos 25-30° de flexión) con el pedal abajo.','Pedalea a una cadencia de 80-100 rpm con la resistencia que te permita mantenerla.','La cadera no debe balancearse en el sillín; si se mueve, está demasiado alto.'],
'spinning':['Sillín y manillar ajustados: rodilla casi estirada con el pedal abajo.','Alterna fases sentado y de pie según la clase, con la resistencia que marque el monitor.','Nunca pedalees de pie sin resistencia.'],
'ciclismo':['Bici ajustada y casco puesto.','Pedalea con cadencia constante, cambiando de marcha antes de las subidas.','Apunta tiempo y kilómetros.'],
'air-bike':['Ajusta el sillín como en la bici estática y agarra los brazos de la máquina.','Empuja y tira de los brazos a la vez que pedaleas: cuanto más fuerte, más resistencia.','Ideal para intervalos cortos e intensos.'],
'eliptica':['Sube con los pies en los pedales y agarra las asas móviles.','Haz el movimiento elíptico empujando con las piernas y acompañando con los brazos, tronco erguido.','No te apoyes en las asas; los talones no se despegan.'],
'remo-ergometro':['Sentado con los pies sujetos y el agarre en las manos, rodillas dobladas y brazos estirados.','Empuja primero con las piernas, luego inclina el tronco atrás y por último tira del agarre hasta el esternón. Vuelve en orden inverso: brazos, tronco, piernas.','El 60 % de la fuerza sale de las piernas. Apunta tiempo y metros.'],
'skierg':['De pie frente a la máquina con un asa en cada mano por encima de la cabeza.','Tira hacia abajo doblando la cadera y un poco las rodillas hasta que las manos pasen los muslos. Vuelve a erguirte.','El empuje viene del tronco y las piernas, no solo de los brazos.'],
'natacion':['Calienta con unos largos suaves.','Nada al estilo elegido manteniendo el cuerpo horizontal y una respiración rítmica.','Apunta el tiempo y los metros (largos × longitud de la piscina).'],
'escaladora':['Sube a la máquina y agarra las barras laterales sin cargar el peso en ellas.','Sube los escalones con el pie entero, tronco erguido y ritmo constante.','Si necesitas apoyarte mucho, baja la velocidad.'],
'comba':['Comba ajustada: con los pies en el centro, los extremos llegan a las axilas.','Salta con saltos pequeños sobre la parte delantera del pie, girando la comba con las muñecas.','Codos cerca del cuerpo. Apunta el tiempo.'],
'saco-boxeo':['Guardia: pies separados, uno adelantado, manos a la altura de la cara.','Alterna golpes rectos, ganchos y crochés en rondas (por ejemplo, 3 minutos de golpeo y 1 de descanso).','Usa vendas y guantes. Vuelve a la guardia tras cada golpe.'],
'hiit':['Elige uno o varios ejercicios: saltos, burpees, sprints, bici…','Alterna intervalos intensos (20-40 s) con descansos cortos (10-60 s) durante el tiempo marcado.','En los intervalos intensos, ve casi al máximo. Apunta el tiempo total.']
};

/* ---------- State ---------- */
const S = { tab:'train', loaded:false, loadError:false, mode:'local',
  library:[], routines:[], sessions:[], settings:{bar:20, rest:90}, active:null,
  editing:null, openSession:null, progEx:null, picker:null, rest:null, creating:null, lib:{q:'',group:null,equip:null} };

function allEx(){ return CATALOG.concat(S.library); }
function exById(id){ return allEx().find(e=>e.id===id) || {id, name:'Ejercicio eliminado', group:'core', muscle:'', equip:'otro', bar:false}; }

/* ---------- Storage (db in your Claude account, browser as fallback) ---------- */
const LS = 'serie:';
function lsGet(k){ try{ const v=localStorage.getItem(LS+k); return v?JSON.parse(v):null; }catch(e){ return null; } }
function lsSet(k,v){ try{ if(v==null) localStorage.removeItem(LS+k); else localStorage.setItem(LS+k, JSON.stringify(v)); }catch(e){} }

const Store = {
  db:null, uid:null, timers:{}, pending:{}, busy:{},
  ref(k){ return this.db.doc('data/users/'+this.uid+'/'+k); },
  sessCol(){ return this.db.doc('data/users/'+this.uid+'/profile').collection('sessions'); },
  async init(){
    let db=null, user=null;
    if(window.claude && typeof window.claude.use==='function'){
      try{ [db,user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]); }catch(e){}
    }
    if(db && user){ try{ this.uid = await user.id(); }catch(e){} }
    if(db && this.uid){ this.db=db; S.mode='db'; } else { S.mode='local'; }
    return this.loadAll();
  },
  async loadAll(){
    if(S.mode==='db'){
      const keys=['library','routines','settings','active'];
      const snaps = await Promise.all(keys.map(k=>this.ref(k).get()));
      const out={};
      keys.forEach((k,i)=>{ out[k] = snaps[i].exists ? clone(snaps[i].data()) : null; });
      const qs = await this.sessCol().orderBy('date','desc').limit(1000).get();
      out.sessions = qs.docs.map(d=>clone(d.data()));
      return out;
    }
    const out={};
    for(const k of ['library','routines','settings','active','sessions']) out[k]=lsGet(k);
    if(out.sessions) out.sessions={list:out.sessions};
    return out;
  },
  save(k,data,delay=500){
    this.pending[k]=data; setSync();
    clearTimeout(this.timers[k]);
    this.timers[k]=setTimeout(()=>this.flush(k),delay);
  },
  flushAll(){ Object.keys(this.pending).forEach(k=>{ clearTimeout(this.timers[k]); this.flush(k); }); },
  async flush(k){
    if(this.busy[k] || !(k in this.pending)) return;
    const data=this.pending[k]; delete this.pending[k];
    this.busy[k]=true; setSync();
    try{ await this.write(k,data); }
    catch(e){
      if(e && e.code==='unavailable'){ await new Promise(r=>setTimeout(r,800+Math.random()*800)); try{ await this.write(k,data); }catch(e2){ reportErr(e2); } }
      else reportErr(e);
    }
    this.busy[k]=false; setSync();
    if(k in this.pending) this.flush(k);
  },
  async write(k,data){
    if(S.mode!=='db'){ lsSet(k,data); return; }
    if(data==null) await this.ref(k).delete(); else await this.ref(k).set(data);
  },
  async putSession(s){
    if(S.mode!=='db'){ lsSet('sessions', S.sessions); return; }
    setSyncText('Guardando…');
    try{ await this.sessCol().doc(s.id).set(s); }catch(e){ reportErr(e); }
    setSync();
  },
  async dropSession(id){
    if(S.mode!=='db'){ lsSet('sessions', S.sessions); return; }
    try{ await this.sessCol().doc(id).delete(); }catch(e){ reportErr(e); }
  }
};
function reportErr(e){
  const c=e&&e.code;
  if(c==='quota_exceeded') toast('El almacenamiento está lleno. Borra entrenos antiguos para seguir guardando.');
  else if(c==='invalid_argument') toast('No se pudo guardar este cambio.');
  else if(c==='revoked') toast('Se ha perdido el acceso a tus datos. Recarga la página.');
  else toast('No se pudo guardar. Revisa tu conexión.');
}
function setSyncText(t){ const el=$('#sync'); if(el) el.textContent=t; }
function setSync(){ const busy=Object.keys(Store.pending).length || Object.values(Store.busy).some(Boolean); setSyncText(busy?'Guardando…':''); }
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='hidden') Store.flushAll(); });
window.addEventListener('pagehide',()=>Store.flushAll());

const saveLibrary = ()=>Store.save('library',{list:S.library});
const saveRoutines = ()=>Store.save('routines',{list:S.routines});
const saveSettings = ()=>Store.save('settings',S.settings);
const saveActive = ()=>Store.save('active', S.active?{w:S.active}:null, 700);

/* ---------- Derived data ---------- */
function sortedSessions(){ return S.sessions.slice().sort((a,b)=>b.date-a.date); }
function lastPerf(exId){
  for(const s of sortedSessions()){ const e=s.exercises.find(x=>x.exId===exId); if(e&&e.sets.length) return {date:s.date, sets:e.sets, rest:e.rest, planned:e.planned}; }
  return null;
}
function exBest(exId, before=Infinity){
  let best=0, top=null;
  for(const s of S.sessions){ if(s.date>=before) continue; const e=s.exercises.find(x=>x.exId===exId); if(!e) continue;
    for(const st of e.sets){ const v=e1rm(st.w,st.r); if(v>best){best=v; top=st;} } }
  return {best, top};
}
function volume(s){ let v=0; for(const e of s.exercises) for(const st of e.sets) v+=(st.w||0)*(st.r||0); return v; }
function setsCount(s){ return s.exercises.reduce((a,e)=>a+e.sets.length,0); }

/* ---------- Plates ---------- */
const PL = {25:{c:'var(--p-red)',h:56,w:13},20:{c:'var(--p-blue)',h:56,w:11},15:{c:'var(--p-yellow)',h:56,w:9.5},10:{c:'var(--p-green)',h:56,w:8},5:{c:'var(--p-white)',h:34,w:7},2.5:{c:'var(--p-red)',h:26,w:5},1.25:{c:'var(--plate-chrome)',h:20,w:4}};
function loadOut(total, bar){
  if(total<bar) return null;
  let side=(total-bar)/2; const list=[];
  for(const s of [25,20,15,10,5,2.5,1.25]){ while(side>=s-1e-9){ list.push(s); side-=s; } }
  return {list, rest:Math.round(side*100)/100};
}
function plateSVG(list){
  const cy=30; let x=40; const plates=[];
  for(const p of list){ const s=PL[p]; plates.push(`<rect x="${x}" y="${cy-s.h/2}" width="${s.w}" height="${s.h}" rx="2" fill="${s.c}" stroke="var(--plate-edge)"/>`); x+=s.w+1.5; }
  const end=Math.max(x+12, 120);
  return `<svg viewBox="0 0 ${end+2} 60" aria-hidden="true"><rect x="0" y="${cy-2}" width="34" height="4" rx="1" fill="var(--steel)"/><rect x="36" y="${cy-4}" width="${end-36}" height="8" rx="2" fill="var(--steel)"/><rect x="31" y="${cy-8}" width="7" height="16" rx="1.5" fill="var(--steel)"/>${plates.join('')}</svg>`;
}
function platesHTML(ex, forSet){
  const meta=exById(ex.exId); if(!meta.bar) return '';
  const set = forSet || ex.sets.find(s=>!s.done) || ex.sets[ex.sets.length-1];
  const w = set?num(set.w):0; const bar=num(S.settings.bar)||20;
  if(!w) return `<div class="plates"><span class="pl-text muted">Escribe un peso y verás cómo cargar la barra.</span></div>`;
  const lo=loadOut(w,bar);
  if(!lo) return `<div class="plates"><span class="pl-text"><b>${fmt(w)} kg</b><span class="muted">Es menos que la barra de ${fmt(bar)} kg.</span></span></div>`;
  const txt = lo.list.length ? lo.list.map(fmt).join(' + ') : 'Solo la barra';
  const extra = lo.rest>0 ? ` <span class="muted">(faltan ${fmt(lo.rest)} kg por lado)</span>` : '';
  return `<div class="plates">${plateSVG(lo.list)}<span class="pl-text"><b>${fmt(w)} kg</b>Por lado: ${txt}${extra}</span></div>`;
}

/* ---------- Render ---------- */
function render(){
  document.querySelectorAll('.tab').forEach(t=>{ t.setAttribute('aria-current', t.dataset.tab===S.tab?'page':'false');  });
  const m=$('#main');
  if(S.loadError){ m.innerHTML=`<div class="empty" style="margin-top:24px"><p>No se pudieron cargar tus datos.</p><button class="btn btn-primary" data-act="retry">Reintentar</button></div>`; return; }
  if(!S.loaded){ m.innerHTML='<div class="loading">Cargando tus datos…</div>'; updateChrome(); return; }
  const v = {train:viewTrain, routines:viewRoutines, library:viewLibrary, history:viewHistory, progress:viewProgress}[S.tab];
  m.innerHTML = v();
  if(S.tab==='progress') afterProgress();
  updateChrome(); setSync();
}

function titleRow(t){ return `<div class="title-row"><h1 class="view-title">${t}</h1><span class="sync" id="sync" aria-live="polite"></span><button class="icon-btn gear" data-act="settings" aria-label="Ajustes">${ICON.gear}</button></div>`; }

/* Train */
function viewTrain(){
  if(S.active) return viewWorkout();
  const weekStart = mondayOf(Date.now());
  const thisWeek = S.sessions.filter(s=>s.date>=weekStart).length;
  let h = `${titleRow('Entrenar')}<p class="view-sub">${thisWeek? `Llevas ${thisWeek} ${thisWeek===1?'entreno':'entrenos'} esta semana.` : 'Elige una rutina para empezar.'}</p>`;
  if(!S.routines.length){
    h += `<div class="empty"><p>Todavía no tienes rutinas. Crea una con tus ejercicios o empieza un entreno libre y ve añadiéndolos sobre la marcha.</p><div class="row-gap"><button class="btn btn-primary" data-act="routine-new">Crear rutina</button><button class="btn btn-quiet" data-act="start">Entreno libre</button></div></div>`;
    return h;
  }
  const lastByRoutine={}; for(const s of S.sessions){ if(s.routineId && (!lastByRoutine[s.routineId]||lastByRoutine[s.routineId]<s.date)) lastByRoutine[s.routineId]=s.date; }
  const ordered = S.routines.slice().sort((a,b)=>(lastByRoutine[a.id]||0)-(lastByRoutine[b.id]||0));
  h += `<div class="rlist">`+ordered.map(r=>`
    <button class="ritem" data-act="start" data-id="${r.id}">
      <span class="stack" aria-hidden="true">${r.items.slice(0,8).map(it=>`<i style="--g:${GROUP[exById(it.exId).group]?.color}"></i>`).join('')}</span>
      <span class="rbody"><h3>${esc(r.name)}</h3><div class="rnames">${r.items.map(it=>esc(exById(it.exId).name)).join(', ')||'Sin ejercicios'}</div><div class="rmeta">${lastByRoutine[r.id]?'Última vez '+ago(lastByRoutine[r.id]):'Sin hacer todavía'}</div></span>
      <span class="go">Empezar</span>
    </button>`).join('')+`</div>`;
  h += `<div class="row-gap" style="margin-top:14px"><button class="btn btn-quiet" data-act="start">Entreno libre</button></div>`;
  return h;
}

function viewWorkout(){
  ensureKeys();
  const a=S.active, f=F();
  const total=a.exercises.reduce((n,e)=>n+e.sets.length,0), done=a.exercises.reduce((n,e)=>n+e.sets.filter(s=>s.done).length,0);
  let h = `<div class="wk-top"><h1 class="view-title">${esc(a.name)}</h1><p class="view-sub">Empezado a las ${dTime.format(a.start)}${total?`, ${done} de ${total} series hechas`:''}.${!done&&total?' Pulsa «Empezar ejercicio» para ir serie a serie.':''}</p></div>`;
  if(!a.exercises.length) h += `<div class="empty"><p>Añade el primer ejercicio para empezar a registrar series.</p></div>`;
  a.exercises.forEach((ex,ei)=>{
    const meta=exById(ex.exId); const last=lastPerf(ex.exId); const fc=!!(f&&f.k===ex.k); const cardio=isCardio(meta), u=unitOf(meta), W=word(meta);
    const doneN=ex.sets.filter(s=>s.done).length, all=doneN===ex.sets.length;
    const cta = fc ? (f.phase==='rest'?'Volver al descanso':`Volver ${cardio?'al':'a la'} ${W} ${Math.min(f.si,ex.sets.length-1)+1}`) : all ? (cardio?'Hacer otro bloque':'Hacer otra serie') : doneN ? `Continuar con ${cardio?'el':'la'} ${W} ${firstUndone(ex)+1}` : 'Empezar ejercicio';
    const info=[]; if(ex.target) info.push(cardio?`Objetivo ${esc(ex.target)} min`:`Objetivo ${ex.sets.length} × ${esc(ex.target)}`); if(last) info.push('Última vez '+ago(last.date));
    h += `<article class="ex${fc?' focus':''}" style="--g:${GROUP[meta.group]?.color}">
      <header class="ex-head"><button class="ex-title" data-act="lib-open" data-id="${ex.exId}"><h3>${esc(meta.name)}</h3>${info.length?`<p class="muted small">${info.join('. ')}</p>`:''}</button>
        <button class="icon-btn more" data-act="ex-menu" data-ei="${ei}" aria-label="Opciones de ${esc(meta.name)}">${ICON.more}</button></header>
      <div class="sets" role="table">
        <div class="set set-h" role="row"><span style="text-align:center">#</span><span>Anterior</span>${cardio?`<span>Tiempo</span><span>${u}</span>`:'<span>kg</span><span>Reps</span>'}<span class="sr">Estado</span></div>
        ${ex.sets.map((s,si)=>{ const p=last&&last.sets[si]; const cur=fc&&f.phase==='set'&&Math.min(f.si,ex.sets.length-1)===si; return `<div class="set${s.done?' done':''}${cur?' current':''}" role="row">
          <span class="set-n num">${si+1}</span>
          ${p?`<button class="prev num" data-act="use-prev" data-ei="${ei}" data-si="${si}" aria-label="Copiar ${esc(setTxt(p,meta))}">${cardio?tTxt(p.t):`${fmt(p.w)} × ${p.r}`}</button>`:`<span class="prev">—</span>`}
          ${cardio?`<button class="cell num ${s.t===''?'empty':''}" data-act="cell" data-ei="${ei}" data-si="${si}" aria-label="Editar ${W} ${si+1}">${s.t===''?'tiempo':tTxt(s.t)}</button>
          ${u?`<button class="cell num ${s.d===''?'empty':''}" data-act="cell" data-ei="${ei}" data-si="${si}" aria-label="Editar ${W} ${si+1}">${s.d===''?u:esc(s.d)}</button>`:'<span></span>'}`
          :`<button class="cell num ${s.w===''?'empty':''}" data-act="cell" data-ei="${ei}" data-si="${si}" aria-label="Editar serie ${si+1}">${s.w===''?'kg':esc(s.w)}</button>
          <button class="cell num ${s.r===''?'empty':''}" data-act="cell" data-ei="${ei}" data-si="${si}" aria-label="Editar serie ${si+1}">${s.r===''?'reps':esc(s.r)}</button>`}
          <span class="st-ic" aria-label="${s.done?'Hecha':'Pendiente'}">${s.done?ICON.check:''}</span>
        </div>`;}).join('')}
      </div>
      <button class="btn btn-text add-set" data-act="set-add" data-ei="${ei}">${ICON.plus}${cardio?'Añadir bloque':'Añadir serie'}</button>
      <div class="ex-rest"><span>Descanso entre ${cardio?'bloques':'series'}${ex.rest==null?'<small>Por defecto, de ajustes</small>':''}</span>
        <div class="rest-ctl"><button data-act="exrest" data-ei="${ei}" data-d="-15" aria-label="15 segundos menos">−15</button><b class="num">${clock(restFor(ex))}</b><button data-act="exrest" data-ei="${ei}" data-d="15" aria-label="15 segundos más">+15</button></div></div>
      <button class="btn ${all&&!fc?'btn-quiet':'btn-primary'} btn-block big ex-cta" data-act="ex-start" data-ei="${ei}">${ICON.play}${cta}</button>
    </article>`;
  });
  h += `<div class="wk-actions"><button class="btn btn-quiet btn-block big" data-act="ex-add">${ICON.plus}Añadir ejercicio</button><button class="btn btn-danger" data-act="discard">Descartar entreno</button></div>`;
  return h;
}

/* Set editor sheet: big steppers, no keyboard needed */
function openSetSheet(ei,si){ S.setEdit={ei,si}; openModal(setSheet()); }
function stepperHTML(label,f,val,main,mainLbl,fine,fineLbl,mode,ph){
  return `<div class="stepper"><span class="st-label">${label}</span>
    <div class="st-row"><button class="st-btn" data-act="st" data-f="${f}" data-d="${-main}" aria-label="Restar ${mainLbl}"><b>−</b><small>${mainLbl}</small></button>
    <input class="st-val num" id="st-${f}" data-in="st-${f}" inputmode="${mode}" autocomplete="off" value="${esc(val)}" placeholder="${ph}" aria-label="${label}">
    <button class="st-btn" data-act="st" data-f="${f}" data-d="${main}" aria-label="Sumar ${mainLbl}"><b>+</b><small>${mainLbl}</small></button></div>
    ${fine?`<div class="st-fine">${fine.map((d,i)=>`<button class="chip" data-act="st" data-f="${f}" data-d="${d}">${d>0?'+':'−'}${fineLbl[i]}</button>`).join('')}</div>`:''}</div>`;
}
function setSheet(){
  const {ei,si}=S.setEdit; const ex=S.active.exercises[ei]; const s=ex.sets[si]; if(!s) return '';
  const m=exById(ex.exId); const last=lastPerf(ex.exId); const p=last&&last.sets[si];
  let body;
  if(isCardio(m)){
    const u=unitOf(m), ds=distSteps(m);
    body = stepperHTML('Tiempo (minutos o mm:ss)','t',tTxt(s.t),60,'1 min',[-300,-10,10,300],['5 min','10 s','10 s','5 min'],'decimal','min')
      + (u? stepperHTML(`Distancia (${u})`,'d',s.d,ds.main,`${fmt(ds.main)} ${u}`,ds.fine,ds.fine.map(d=>fmt(Math.abs(d))),'decimal','0') : '');
  } else {
    const step=['manc','kb'].includes(m.equip)?1:2.5; const fine=step===1?[-2,-.5,.5,2]:[-5,-1.25,1.25,5];
    body = stepperHTML('Peso (kg)','w',s.w,step,fmt(step),fine,fine.map(d=>fmt(Math.abs(d))),'decimal','0')
      + stepperHTML(`Repeticiones${ex.target?` (objetivo ${esc(ex.target)})`:''}`,'r',s.r,1,'1',null,null,'numeric','0');
  }
  return `<div class="sheet-head"><div><h2>${cap(word(m))} ${si+1} de ${ex.sets.length}</h2><p class="muted small" style="margin:2px 0 0">${esc(m.name)}</p></div><button class="icon-btn" data-act="modal-close" aria-label="Cerrar">${ICON.x}</button></div>
  <div class="sheet-body">
    ${p?`<button class="copy-prev" data-act="st-copy"><span>La última vez <b class="num">${isCardio(m)?setTxt(p,m):`${fmt(p.w)} kg × ${p.r}`}</b></span><span class="link">Copiar</span></button>`:''}
    ${body}
    ${syncNote(ex,si)}<div id="st-plates">${platesHTML(ex,s)}</div>
    <div class="sheet-actions">
      <button class="btn btn-primary btn-block big" data-act="modal-close">Listo</button>
      <button class="btn btn-quiet btn-block" data-act="st-done">${s.done?'Marcar como pendiente':'Marcar como hecha'}</button>
      ${ex.sets.length>1?`<button class="btn btn-danger" data-act="st-del">Eliminar ${word(m)}</button>`:''}
    </div>
  </div>`;
}
function stSet(){ const {ei,si}=S.setEdit; return S.active.exercises[ei].sets[si]; }
function stRefresh(fields){ const {ei,si}=S.setEdit; if(fields) syncSets(S.active.exercises[ei], si, fields); const pl=$('#st-plates'); if(pl) pl.innerHTML=platesHTML(S.active.exercises[ei],stSet()); saveActive(); render(); }

/* Bottom chrome: workout bar, "workout in progress" pill, wake lock */
let wakeLock=null;
async function keepAwake(on){
  try{
    if(on && !wakeLock && 'wakeLock' in navigator && document.visibilityState==='visible'){ wakeLock=await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release',()=>{ wakeLock=null; }); }
    else if(!on && wakeLock){ const w=wakeLock; wakeLock=null; await w.release(); }
  }catch(e){}
}
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='visible') keepAwake(!!S.active); });
function updateChrome(){
  const inW = !!(S.loaded && S.active && S.tab==='train');
  document.body.classList.toggle('in-workout', inW);
  document.body.classList.toggle('has-active', !!(S.loaded && S.active && !inW));
  const wb=$('#wkbar'), pl=$('#pill');
  const ton = S.active ? activeTonnage() : 0; if(!S.active) S.lastTon=null;
  if(inW){ wb.hidden=false; wb.innerHTML=`<div class="wkbar-in"><button class="icon-btn min" data-act="wk-min" aria-label="Minimizar entreno">${ICON.down}</button><div class="wk-time"><span id="elapsed" class="num"></span><small>${esc(S.active.name)}</small></div><div class="wk-ton${ton>(S.lastTon??ton)?' bump':''}" aria-live="polite"><span class="num">${fmtInt(ton)}</span><small>kg levantados</small></div><button class="btn btn-primary" data-act="finish">Terminar</button></div>`; S.lastTon=ton; }
  else { wb.hidden=true; wb.innerHTML=''; }
  if(S.loaded && S.active && !inW){ pl.hidden=false; pl.innerHTML=`<button class="pill" data-act="tab" data-tab="train"><span class="pulse"></span><span>Entreno en curso</span><span id="pill-time" class="num"></span><span class="pill-go">Volver</span></button>`; }
  else { pl.hidden=true; pl.innerHTML=''; }
  updateTimes(); keepAwake(!!S.active);
}
function activeTonnage(){ let t=0; for(const e of S.active.exercises) for(const s of e.sets) if(s.done) t+=num(s.w)*num(s.r); return t; }
function updateTimes(){ if(!S.active) return; const t=clock((Date.now()-S.active.start)/1000); const e=$('#elapsed'); if(e) e.textContent=t; const p=$('#pill-time'); if(p) p.textContent=t; }

/* Drag a sheet down to close it */
let drag=null;
document.addEventListener('touchstart',e=>{ const h=e.target.closest('.sheet .grab, .sheet .sheet-head'); if(!h) return; const sh=h.closest('.sheet'); drag={sh,y0:e.touches[0].clientY,dy:0}; sh.style.transition='none'; },{passive:true});
document.addEventListener('touchmove',e=>{ if(!drag) return; drag.dy=Math.max(0,e.touches[0].clientY-drag.y0); drag.sh.style.transform=`translateY(${drag.dy}px)`; },{passive:true});
document.addEventListener('touchend',()=>{ if(!drag) return; const d=drag; drag=null; d.sh.style.transition='transform .2s ease-out'; if(d.dy>90){ d.sh.style.transform='translateY(110%)'; setTimeout(closeModal,190); } else d.sh.style.transform=''; });

function menuSheet(title, items){
  return `<div class="sheet-head"><h2>${esc(title)}</h2><button class="icon-btn" data-act="modal-close" aria-label="Cerrar">${ICON.x}</button></div><div class="sheet-body menu">${items.filter(Boolean).map(([act,label,attrs,danger])=>`<button class="menu-item${danger?' danger':''}" data-act="${act}" ${attrs}>${label}</button>`).join('')}</div>`;
}

/* ---------- Cardio helpers: time + distance instead of kg + reps ---------- */
const isCardio = m => !!m && m.kind==='cardio';
const fieldsOf = m => isCardio(m)?['t','d']:['w','r'];
const unitOf = m => (m && m.dist) || '';
const word = m => isCardio(m)?'bloque':'serie';
function parseTime(v){
  if(v===''||v==null) return ''; if(typeof v==='number') return v;
  const s=String(v).trim().replace(',','.'); if(!s) return '';
  if(s.includes(':')){ const p=s.split(':').map(x=>parseFloat(x)||0); return Math.round(p.length>=3? p[0]*3600+p[1]*60+p[2] : p[0]*60+p[1]); }
  const m=parseFloat(s); return isFinite(m)? Math.round(m*60) : '';
}
const tTxt = t => (t===''||t==null)?'':clock(num(t));
function setTxt(s,m){
  if(isCardio(m)){ const a=[]; if(num(s.t)) a.push(clock(num(s.t))); if(unitOf(m)&&num(s.d)) a.push(fmt(num(s.d))+' '+unitOf(m)); return a.join(', ')||'—'; }
  return `${fmt(num(s.w))} × ${num(s.r)}`;
}
function fromPrev(s,p,m){ if(isCardio(m)){ s.t=p.t||''; s.d=p.d?fmtIn(p.d):''; } else { s.w=fmtIn(p.w); s.r=String(p.r); } }
function blankFrom(l,m){ return isCardio(m)? {t:l?l.t:'', d:l?l.d:'', done:false} : {w:l?l.w:'', r:l?l.r:'', done:false}; }
function stepField(s,k,d){ if(k==='r') s.r=String(Math.max(0,Math.round(num(s.r)+d))); else if(k==='t') s.t=Math.max(0,Math.round(num(s.t)+d)); else s[k]=fmtIn(Math.max(0,num(s[k])+d)); }
const fieldVal = (s,k)=> k==='t'? tTxt(s.t) : (s[k]??'');
function distSteps(m){ return unitOf(m)==='m' ? {main:100, fine:[-500,-25,25,500]} : {main:.5, fine:[-1,-.1,.1,1]}; }
function swElapsed(f){ const sw=f&&f.sw; if(!sw) return 0; return sw.acc + (sw.run? (Date.now()-sw.start)/1000 : 0); }
function fmtU(v,u){ return u==='kg'? fmt(Math.round(v*2)/2)+' kg' : u==='min'? clock(v*60) : fmt(Math.round(v*100)/100)+' '+u; }

/* Editing set 1 copies its value to the other pending sets (unless you changed one of them by hand) */
function syncSets(ex, si, fields){
  const s=ex.sets[si]; if(!s) return;
  if(si>0){ s.own=true; return; }
  ex.sets.forEach((x,j)=>{ if(j>0 && !x.done && !x.own) fields.forEach(f=>{ x[f]=s[f]; }); });
}
function syncNote(ex, si){ return si===0 && ex.sets.length>1 ? '<p class="muted small sync-note">Lo que pongas en la serie 1 se copia al resto de series pendientes.</p>' : ''; }
/* A new exercise starts from what you did last time: same number of sets, kg and reps */
function buildExercise(exId, nSets=3, target=''){
  const last=lastPerf(exId); const sets=[];
  const tr = parseInt(target,10);
  const meta=exById(exId);
  if(last) nSets = Math.max(1, last.planned || last.sets.length); else if(isCardio(meta) && !target) nSets=1;
  for(let i=0;i<nSets;i++){
    const ls = last ? (last.sets[i]||last.sets[last.sets.length-1]) : null;
    if(isCardio(meta)) sets.push({t: ls?(ls.t||''):(parseTime(target)||''), d: ls&&ls.d?fmtIn(ls.d):'', done:false});
    else sets.push({w: ls?fmtIn(ls.w):'', r: ls?String(ls.r):(isFinite(tr)?String(tr):''), done:false});
  }
  return {k:uid(), exId, target:target||'', rest:(last&&last.rest!=null)?last.rest:null, sets};
}
function startWorkout(rid){
  const r = rid ? S.routines.find(x=>x.id===rid) : null;
  S.active = {id:uid(), start:Date.now(), routineId:r?r.id:null, name:r?r.name:'Entreno libre', exercises: r? r.items.map(it=>buildExercise(it.exId, Math.max(1,parseInt(it.sets,10)||3), it.reps)) : []};
  saveActive(); S.tab='train'; render(); startTickers(); window.scrollTo(0,0);
}
async function finishWorkout(){
  const a=S.active;
  const exercises = a.exercises.map(e=>({exId:e.exId, planned:e.sets.length, ...(e.rest!=null?{rest:e.rest}:{}), sets:e.sets.filter(s=>s.done).map(s=>isCardio(exById(e.exId))?{t:Math.round(num(s.t)), d:num(s.d)}:{w:num(s.w), r:Math.round(num(s.r))})})).filter(e=>e.sets.length);
  if(!exercises.length){
    const ok = await ask('No has marcado ninguna serie como hecha', 'Si terminas ahora, el entreno no se guardará. Marca las series con la casilla de la derecha.', 'Descartar entreno', true, 'Seguir entrenando');
    if(ok){ S.active=null; saveActive(); stopRest(); render(); }
    return;
  }
  const s = {id:a.id, date:a.start, end:Date.now(), name:a.name, routineId:a.routineId, exercises};
  const prs=[];
  for(const e of exercises){ const prev=exBest(e.exId, s.date); if(prev.best<=0) continue;
    let best=0, top=null; for(const st of e.sets){ const v=e1rm(st.w,st.r); if(v>best){best=v; top=st;} }
    if(best>prev.best+0.01){ prs.push({exId:e.exId, top}); e.pr=true; } }
  S.sessions.push(s); S.active=null; saveActive(); stopRest();
  Store.putSession(s);
  render();
  openModal(`<div class="sheet-head"><h2>Entreno guardado</h2></div><div class="sheet-body">
    <div class="stats"><div class="stat"><b class="num">${durTxt(s.end-s.date)}</b><span>Duración</span></div><div class="stat"><b class="num">${setsCount(s)}</b><span>Series</span></div><div class="stat"><b class="num">${fmtInt(volume(s))}</b><span>kg movidos</span></div></div>
    ${prs.length?`<p style="margin:16px 0 4px;font-weight:700">Nuevas marcas</p><ul class="summary-list">${prs.map(p=>`<li>${esc(exById(p.exId).name)}<span class="pr-tag">Récord</span><div class="muted small num">${fmt(p.top.w)} kg × ${p.top.r}, 1RM estimado ${fmt(Math.round(e1rm(p.top.w,p.top.r)*2)/2)} kg</div></li>`).join('')}</ul>`:''}
    <button class="btn btn-primary btn-block" data-act="modal-close">Cerrar</button></div>`);
}

/* Routines */
function viewRoutines(){
  if(S.editing) return viewEditor();
  let h=`${titleRow('Rutinas')}<p class="view-sub">Plantillas con tus ejercicios, series y repeticiones objetivo.</p>`;
  if(!S.routines.length) h+=`<div class="empty"><p>Una rutina es la lista de ejercicios de un día, por ejemplo «Empuje» o «Pierna». Crea la primera.</p><button class="btn btn-primary" data-act="routine-new">Crear rutina</button></div>`;
  else{
    h+=`<div class="rlist">`+S.routines.map(r=>`<button class="ritem" data-act="routine-open" data-id="${r.id}">
      <span class="stack" aria-hidden="true">${r.items.slice(0,8).map(it=>`<i style="--g:${GROUP[exById(it.exId).group]?.color}"></i>`).join('')}</span>
      <span class="rbody"><h3>${esc(r.name)}</h3><div class="rnames">${r.items.map(it=>`${esc(exById(it.exId).name)} ${isCardio(exById(it.exId))?esc(it.reps)+' min':it.sets+'×'+esc(it.reps)}`).join(', ')||'Sin ejercicios'}</div></span>
      <span class="go">Editar</span></button>`).join('')+`</div>
      <div style="margin-top:14px"><button class="btn btn-quiet" data-act="routine-new">${ICON.plus}Nueva rutina</button></div>`;
  }
  return h;
}
function viewEditor(){
  const r=S.editing;
  let h=`<button class="back" data-act="routine-back">${ICON.back}Rutinas</button>
  <label class="field" style="margin-top:14px"><span>Nombre</span><input class="text-in name-in" data-in="r-name" value="${esc(r.name)}" placeholder="Ej. Torso A" autocomplete="off"></label>
  <p class="muted small" style="margin:0 0 10px">Series y repeticiones objetivo. Las repeticiones admiten rangos, como 8-12.</p>
  <div class="ritems">`;
  r.items.forEach((it,i)=>{ const m=exById(it.exId);
    h+=`<div class="ri" style="--g:${GROUP[m.group]?.color}">
      <div class="ri-name">${esc(m.name)}</div>
      <div class="ri-nums"><input class="num" inputmode="numeric" data-in="ri-sets" data-i="${i}" value="${esc(it.sets)}" aria-label="Series"><span class="muted">${isCardio(m)?(String(it.sets)==='1'?'bloque de':'bloques de'):'series de'}</span><input class="num reps" data-in="ri-reps" data-i="${i}" value="${esc(it.reps)}" aria-label="${isCardio(m)?'Minutos':'Repeticiones'}"><span class="muted">${isCardio(m)?'min':'reps'}</span></div>
      <div class="ri-tools"><button class="icon-btn" data-act="ri-menu" data-i="${i}" aria-label="Opciones de ${esc(m.name)}">${ICON.more}</button></div>
    </div>`; });
  h+=`</div><button class="btn btn-quiet btn-block" data-act="ri-add">${ICON.plus}Añadir ejercicio</button>
  <div class="wk-actions"><button class="btn btn-primary btn-block" data-act="routine-save">Guardar rutina</button>${r.isNew?'':`<button class="btn btn-danger" data-act="routine-delete">Eliminar rutina</button>`}</div>`;
  return h;
}

/* History */
function viewHistory(){
  let h=titleRow('Historial');
  const ss=sortedSessions();
  if(!ss.length) return h+`<p class="view-sub">Aquí aparecerán tus entrenos terminados.</p><div class="empty"><p>Aún no has guardado ningún entreno.</p><button class="btn btn-primary" data-act="tab" data-tab="train">Ir a entrenar</button></div>`;
  h+=`<p class="view-sub">${ss.length} ${ss.length===1?'entreno':'entrenos'} en total.</p>`;
  let month=null, open=false;
  for(const s of ss){
    const m=dMonth.format(s.date);
    if(m!==month){ if(open) h+='</div>'; h+=`<h2 class="month">${cap(m)}</h2><div class="hlist">`; month=m; open=true; }
    const exp=S.openSession===s.id;
    h+=`<div class="hrow"><button class="hsum" data-act="hist-toggle" data-id="${s.id}" aria-expanded="${exp}">
      <span class="hday"><b class="num">${new Date(s.date).getDate()}</b><span>${dWeek.format(s.date)}</span></span>
      <span><h3>${esc(s.name)}${s.exercises.some(e=>e.pr)?'<span class="pr-tag">Récord</span>':''}</h3><span class="muted small">${s.exercises.map(e=>esc(exById(e.exId).name)).join(', ')}</span></span>
      <span class="hstat num">${durTxt((s.end||s.date)-s.date)}<br>${fmtInt(volume(s))} kg</span></button>
      ${exp?`<div class="hdetail"><ul>${s.exercises.map(e=>`<li><span>${esc(exById(e.exId).name)}${e.pr?'<span class="pr-tag">Récord</span>':''}</span><span class="sets num">${e.sets.map(x=>isCardio(exById(e.exId))?setTxt(x,exById(e.exId)):`${fmt(x.w)}×${x.r}`).join('   ')}</span></li>`).join('')}</ul>
      <p class="muted small" style="margin:0 0 6px">Empezado a las ${dTime.format(s.date)}</p><button class="btn btn-danger" data-act="hist-del" data-id="${s.id}">Borrar entreno</button></div>`:''}</div>`;
  }
  if(open) h+='</div>';
  return h;
}

/* Progress */
function mondayOf(t){ const d=new Date(sod(t)); const wd=(d.getDay()+6)%7; return d.getTime()-wd*DAY; }
function viewProgress(){
  let h=titleRow('Progreso');
  if(!S.sessions.length) return h+`<p class="view-sub">Tus gráficas aparecerán cuando guardes entrenos.</p><div class="empty"><p>Registra tu primer entreno y vuelve aquí para ver cómo evolucionan tus marcas.</p><button class="btn btn-primary" data-act="tab" data-tab="train">Ir a entrenar</button></div>`;
  // consistency grid
  const days=new Set(S.sessions.map(s=>dkey(s.date)));
  const start=mondayOf(Date.now())-11*7*DAY; const today=sod(Date.now());
  const cell=14, gap=3, lw=16; let cells=''; let count=0;
  for(let w=0;w<12;w++) for(let d=0;d<7;d++){
    const t=start+(w*7+d)*DAY; const on=days.has(dkey(t)); const fut=t>today; if(on) count++;
    cells+=`<rect x="${lw+w*(cell+gap)}" y="${d*(cell+gap)}" width="${cell}" height="${cell}" rx="3" fill="${on?'var(--accent)':'var(--bg)'}" ${fut?'opacity=".35"':''}><title>${dShort.format(t)}${on?': entreno':''}</title></rect>`;
  }
  const labels=['L','','X','','V','','D'].map((l,i)=>l?`<text x="0" y="${i*(cell+gap)+11}" font-size="10" fill="var(--muted)">${l}</text>`:'').join('');
  const gw=lw+12*(cell+gap);
  const wk=S.sessions.filter(s=>s.date>=mondayOf(Date.now())).length;
  h+=`<div class="panel" style="margin-top:14px"><div class="grid-legend"><div><span class="big num">${count}</span> <span class="muted">entrenos en 12 semanas</span></div><span class="muted small">Esta semana: ${wk}</span></div>
    <div class="scroll-x"><svg viewBox="0 0 ${gw} ${7*(cell+gap)}" width="${gw}" style="max-width:none" role="img" aria-label="Días entrenados en las últimas 12 semanas">${labels}${cells}</svg></div></div>`;
  // group sets last 7 days
  const since=Date.now()-7*DAY; const gc={}; GROUPS.forEach(g=>gc[g.id]=0);
  S.sessions.filter(s=>s.date>=since).forEach(s=>s.exercises.forEach(e=>{ gc[exById(e.exId).group]+=e.sets.length; }));
  const gmax=Math.max(1,...Object.values(gc));
  h+=`<h2 class="section-title">Series por grupo, últimos 7 días</h2><div class="panel gbars">${GROUPS.map(g=>`<div class="gbar" style="--g:${g.color}"><span>${g.name}</span><span class="track"><i style="width:${gc[g.id]/gmax*100}%"></i></span><span class="num" style="text-align:right">${gc[g.id]}</span></div>`).join('')}</div>`;
  // exercise progress
  const freq={}; S.sessions.forEach(s=>s.exercises.forEach(e=>{freq[e.exId]=(freq[e.exId]||0)+1;}));
  const exIds=Object.keys(freq).sort((a,b)=>freq[b]-freq[a]);
  if(!S.progEx||!freq[S.progEx]) S.progEx=exIds[0];
  h+=`<h2 class="section-title">Por ejercicio</h2><select class="select" data-ch="prog-ex" aria-label="Ejercicio">${exIds.map(id=>`<option value="${id}" ${id===S.progEx?'selected':''}>${esc(exById(id).name)} (${freq[id]})</option>`).join('')}</select><div id="prog-detail"></div>`;
  return h;
}
function afterProgress(){ const el=$('#prog-detail'); if(el&&S.progEx) el.innerHTML=progDetail(S.progEx); }
function progDetail(exId){
  if(isCardio(exById(exId))) return progCardio(exId);
  const pts=[]; let bestSet=null, bestE=0, bestW=0, bestVol=0;
  for(const s of S.sessions.slice().sort((a,b)=>a.date-b.date)){
    const e=s.exercises.find(x=>x.exId===exId); if(!e) continue;
    let se=0, sw=0, vol=0; for(const st of e.sets){ const v=e1rm(st.w,st.r); if(v>se) se=v; if(st.w>sw) sw=st.w; vol+=st.w*st.r; if(v>bestE){bestE=v; bestSet=st;} }
    if(sw>bestW) bestW=sw; if(vol>bestVol) bestVol=vol;
    pts.push({t:s.date, e:se, w:sw});
  }
  let h=`<div class="stats"><div class="stat"><b class="num">${bestE?fmt(Math.round(bestE*2)/2):'—'}</b><span>1RM estimado (kg)</span></div><div class="stat"><b class="num">${bestSet?`${fmt(bestSet.w)}×${bestSet.r}`:'—'}</b><span>Mejor serie</span></div><div class="stat"><b class="num">${fmtInt(bestVol)}</b><span>Más volumen en un día</span></div></div>`;
  if(pts.length<2) return h+`<div class="panel muted small">Registra este ejercicio en al menos dos entrenos para ver la curva.</div>`;
  h+=`<div class="panel chart">${chart(pts)}<div class="legend"><span><i style="background:var(--accent)"></i>1RM estimado</span><span><i style="background:var(--steel)"></i>Peso máximo</span></div></div>`;
  return h;
}
function chart(pts, unit='kg'){
  const W=420,H=220,L=40,R=10,T=16,B=26;
  const vals=pts.flatMap(p=>[p.e,p.w]).filter(v=>v>0);
  if(!vals.length) return '<p class="muted small">Sin pesos registrados en este ejercicio.</p>';
  let lo=Math.min(...vals), hi=Math.max(...vals); const pad=unit==='kg'?Math.max(2.5,(hi-lo)*.12):Math.max((hi-lo)*.15, hi*.05); lo=Math.max(0,lo-pad); hi=hi+pad;
  const t0=pts[0].t, t1=pts[pts.length-1].t, span=Math.max(1,t1-t0);
  const X=t=>L+(t-t0)/span*(W-L-R), Y=v=>T+(1-(v-lo)/(hi-lo))*(H-T-B);
  let g='';
  for(let i=0;i<=3;i++){ const v=lo+(hi-lo)*i/3; const y=Y(v); g+=`<line x1="${L}" x2="${W-R}" y1="${y}" y2="${y}" stroke="var(--line)"/><text x="${L-8}" y="${y+4}" text-anchor="end" font-size="12" fill="var(--muted)">${unit==='kg'||unit==='min'?fmt(Math.round(v)):fmt(Math.round(v*10)/10)}</text>`; }
  g+=`<text x="${L}" y="${H-6}" font-size="12" fill="var(--muted)">${dShort.format(t0)}</text><text x="${W-R}" y="${H-6}" text-anchor="end" font-size="12" fill="var(--muted)">${dShort.format(t1)}</text>`;
  const line=(k,c,dash)=>{ const p=pts.filter(q=>q[k]>0); return `<polyline fill="none" stroke="${c}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" ${dash?'stroke-dasharray="5 5"':''} points="${p.map(q=>`${X(q.t).toFixed(1)},${Y(q[k]).toFixed(1)}`).join(' ')}"/>`+p.map(q=>`<circle cx="${X(q.t).toFixed(1)}" cy="${Y(q[k]).toFixed(1)}" r="3.5" fill="${c}"><title>${dShort.format(q.t)}: ${fmtU(q[k],unit)}</title></circle>`).join(''); };
  const last=pts[pts.length-1];
  g+=line('w','var(--steel)',true)+line('e','var(--accent)',false);
  g+=`<text x="${Math.min(X(last.t),W-R)-6}" y="${Y(last.e)-10}" text-anchor="end" font-size="14" font-weight="700" fill="var(--ink)">${fmtU(last.e,unit)}</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolución">${g}</svg>`;
}

function progCardio(exId){
  const m=exById(exId), u=unitOf(m); const rows=[]; let totT=0, totD=0, longT=0, bestPace=Infinity;
  for(const s of S.sessions.slice().sort((a,b)=>a.date-b.date)){
    const e=s.exercises.find(x=>x.exId===exId); if(!e) continue;
    let tt=0, dd=0; for(const st of e.sets){ tt+=num(st.t); dd+=num(st.d); }
    totT+=tt; totD+=dd; if(tt>longT) longT=tt;
    if(u&&dd>0&&tt>0){ const pace=tt/(u==='km'?dd:dd/100); if(pace<bestPace) bestPace=pace; }
    rows.push({t:s.date, tt, dd});
  }
  const useDist = u && rows.some(r=>r.dd>0);
  const stat=(v,l)=>`<div class="stat"><b class="num">${v}</b><span>${l}</span></div>`;
  let h=`<div class="stats">${useDist
    ? stat(`${fmt(Math.round(totD*100)/100)} ${u}`,'Distancia total')+stat(isFinite(bestPace)?clock(bestPace)+(u==='km'?' /km':' /100 m'):'—','Mejor ritmo')+stat(clock(longT),'Sesión más larga')
    : stat(clock(totT),'Tiempo total')+stat(clock(longT),'Sesión más larga')+stat(rows.length,'Sesiones')}</div>`;
  const pts=rows.map(r=>({t:r.t, e: useDist? r.dd : r.tt/60, w:0})).filter(p=>p.e>0);
  if(pts.length<2) return h+`<div class="panel muted small">Registra este ejercicio en al menos dos entrenos para ver la curva.</div>`;
  return h+`<div class="panel chart">${chart(pts, useDist?u:'min')}<div class="legend"><span><i style="background:var(--accent)"></i>${useDist?'Distancia por sesión':'Tiempo por sesión'}</span></div></div>`;
}
/* ---------- Modal, ask, toast ---------- */
let modalClose=null;
function openModal(html, onClose, cls=''){ const m=$('#modal'); m.innerHTML=`<div class="backdrop" data-act="modal-close"></div><div class="sheet ${cls}" role="dialog" aria-modal="true"><div class="grab" aria-hidden="true"></div>${html}</div>`; m.hidden=false; document.body.classList.add('modal-open'); modalClose=onClose||null; const f=m.querySelector('[autofocus]'); if(f && !matchMedia('(pointer: coarse)').matches) setTimeout(()=>f.focus(),60); }
function closeModal(){ const m=$('#modal'); if(m.hidden) return; m.hidden=true; m.innerHTML=''; document.body.classList.remove('modal-open'); S.setEdit=null; const c=modalClose; modalClose=null; S.picker=null; if(c) c(); }
let askResolve=null;
function ask(title, body, okLabel, danger, cancelLabel='Cancelar'){
  return new Promise(res=>{
    askResolve=res;
    openModal(`<div class="sheet-head"><h2>${esc(title)}</h2></div><div class="sheet-body"><p style="margin:0 0 18px">${esc(body)}</p><div class="row-gap"><button class="btn ${danger?'btn-quiet':'btn-primary'}" data-act="ask-ok" style="${danger?'color:var(--danger)':''}">${esc(okLabel)}</button><button class="btn btn-quiet" data-act="ask-cancel">${esc(cancelLabel)}</button></div></div>`, ()=>{ if(askResolve){ const r=askResolve; askResolve=null; r(false);} });
  });
}
let toastT=null;
function toast(t){ const el=$('#toast'); el.textContent=t; el.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove('show'),3200); }

/* ---------- Exercise search, picker, library ---------- */
const _idx=new Map();
function exIndex(e){ let s=_idx.get(e); if(!s){ s=norm([e.name,e.en,e.muscle,EQUIP[e.equip],(GROUP[e.group]||{}).name].join(' ')); _idx.set(e,s); } return s; }
function filterEx(f){
  const toks=norm(f.q||'').split(/\s+/).filter(Boolean);
  return allEx().filter(e=>!e.hidden && (!f.group||e.group===f.group) && (!f.equip||e.equip===f.equip) && toks.every(t=>exIndex(e).includes(t)))
    .map(e=>{ const n=norm(e.name); const q=toks.join(' '); return [e, !q?0 : n.startsWith(q)?0 : n.includes(q)?1 : toks.every(t=>n.includes(t))?2 : 3]; })
    .sort((a,b)=>a[1]-b[1] || a[0].name.localeCompare(b[0].name,'es')).map(x=>x[0]);
}
function recentEx(n){
  const seen=new Set(), out=[];
  for(const s of sortedSessions()) for(const e of s.exercises){ if(!seen.has(e.exId)){ seen.add(e.exId); const x=exById(e.exId); if(!x.hidden&&x.group) out.push(x); } if(out.length>=n) return out; }
  return out;
}
function usageCount(){ const f={}; S.sessions.forEach(s=>s.exercises.forEach(e=>{ f[e.exId]=(f[e.exId]||0)+1; })); return f; }
function chip(act,v,on,label,color){ return `<button class="chip" data-act="${act}" data-v="${v}" aria-pressed="${on}"${color?` style="--g:${color}"`:''}>${color?'<i></i>':''}${esc(label)}</button>`; }
function filterChips(px,f){
  return `<div class="chips">${chip(px+'-group','',!f.group,'Todos')}${GROUPS.map(g=>chip(px+'-group',g.id,f.group===g.id,g.name,g.color)).join('')}</div>
  <div class="chips chips-eq">${chip(px+'-equip','',!f.equip,'Todo el material')}${Object.entries(EQUIP).map(([k,v])=>chip(px+'-equip',k,f.equip===k,v)).join('')}</div>`;
}
function exRow(e,act,extra=''){
  return `<button class="pitem" data-act="${act}" data-id="${e.id}" style="--g:${GROUP[e.group]?.color}"><i></i><span class="pn">${esc(e.name)}<small>${esc(e.muscle||'')}, ${esc((EQUIP[e.equip]||'').toLowerCase())}${e.builtin?'':', creado por ti'}</small></span>${extra}</button>`;
}

function openPicker(onPick){ S.picker={q:'', group:null, equip:null, onPick}; openModal(pickerShell(), null, 'tall'); }
function pickerShell(){
  return `<div class="sheet-head"><h2>Añadir ejercicio</h2><button class="icon-btn" data-act="modal-close" aria-label="Cerrar">${ICON.x}</button></div>
  <div class="sheet-body" style="padding-bottom:4px"><input class="text-in" data-in="picker-q" placeholder="Buscar: press, glúteo, polea, squat…" autocomplete="off" autofocus>
  <div id="pk-chips">${filterChips('pk',S.picker)}</div></div>
  <div class="sheet-body" id="pk-list" style="padding-top:0">${pickerList()}</div>`;
}
function pickerList(){
  const p=S.picker; if(!p) return '';
  const q=p.q.trim(); const list=filterEx(p); let h='';
  if(!q&&!p.group&&!p.equip){ const rec=recentEx(6); if(rec.length) h+=`<p class="plist-h">Usados recientemente</p><div class="plist">${rec.map(e=>exRow(e,'pk-pick')).join('')}</div><p class="plist-h">Todos (${list.length})</p>`; }
  else h+=`<p class="plist-h">${list.length} ${list.length===1?'resultado':'resultados'}</p>`;
  h+='<div class="plist">';
  h+=list.map(e=>exRow(e,'pk-pick')).join('');
  if(q && !allEx().some(e=>!e.hidden&&norm(e.name)===norm(q))) h+=`<button class="pitem create" data-act="pk-create">${ICON.plus.replace('<svg','<svg width="18" height="18"')}<span class="pn">Crear «${esc(q)}» como ejercicio nuevo</span></button>`;
  if(!list.length) h+=`<p class="muted" style="margin:14px 0">Ningún ejercicio coincide${q?'. Puedes crearlo con el botón de abajo.':' con estos filtros.'}</p>`;
  return h+'</div>';
}
function refreshPicker(){ const l=$('#pk-list'); if(l) l.innerHTML=pickerList(); const c=$('#pk-chips'); if(c) c.innerHTML=filterChips('pk',S.picker); }

/* Create a custom exercise */
function musclesOf(g){ return [...new Set(CATALOG.filter(e=>e.group===g).map(e=>e.muscle))]; }
function openCreateEx(name, group, onDone){
  const g=group||'pecho';
  S.creating={name:name||'', group:g, muscle:musclesOf(g)[0], equip:g==='cardio'?'maq':'manc', dist:'km', onDone};
  openModal(createSheet());
}
function createSheet(){
  const c=S.creating;
  return `<div class="sheet-head"><h2>Nuevo ejercicio</h2><button class="icon-btn" data-act="modal-close" aria-label="Cerrar">${ICON.x}</button></div><div class="sheet-body">
  <label class="field"><span>Nombre</span><input class="text-in" data-in="cx-name" value="${esc(c.name)}" autocomplete="off" ${c.name?'':'autofocus'}></label>
  <div class="field"><span>Grupo</span><div class="chips wrap">${GROUPS.map(g=>chip('cx-group',g.id,c.group===g.id,g.name,g.color)).join('')}</div></div>
  <label class="field"><span>Músculo principal</span><select class="select" data-ch="cx-muscle">${musclesOf(c.group).map(m=>`<option ${m===c.muscle?'selected':''}>${esc(m)}</option>`).join('')}</select></label>
  ${c.group==='cardio'?`<div class="field"><span>Distancia</span><div class="chips wrap">${[['km','En kilómetros'],['m','En metros'],['','Sin distancia']].map(([k,v])=>chip('cx-dist',k,c.dist===k,v)).join('')}</div><p class="muted small" style="margin:6px 0 0">Los ejercicios de cardio se registran con tiempo${c.dist?' y distancia':''}.</p></div>`:''}
  <div class="field"><span>Material</span><div class="chips wrap">${Object.entries(EQUIP).map(([k,v])=>chip('cx-equip',k,c.equip===k,v)).join('')}</div>${c.equip==='barra'?'<p class="muted small" style="margin:6px 0 0">Con barra olímpica verás el cálculo de discos al entrenar.</p>':''}</div>
  <div class="row-gap"><button class="btn btn-primary" data-act="cx-save">Crear ejercicio</button><button class="btn btn-quiet" data-act="modal-close">Cancelar</button></div></div>`;
}

/* Library view */
function viewLibrary(){
  const custom=S.library.filter(e=>!e.hidden).length;
  return `${titleRow('Ejercicios')}<p class="view-sub">${CATALOG.length} ejercicios en la base${custom?` y ${custom} ${custom===1?'creado':'creados'} por ti`:''}. Busca en español o en inglés.</p>
  <input class="text-in" data-in="lib-q" value="${esc(S.lib.q)}" placeholder="Buscar por nombre, músculo o material" autocomplete="off">
  <div id="lib-chips">${filterChips('lib',S.lib)}</div>
  <div class="lib-head"><span></span><button class="btn btn-text" data-act="lib-create">${ICON.plus}Crear ejercicio</button></div>
  <div id="lib-list" class="lib-list">${libList()}</div>`;
}
function libList(){
  const f=S.lib; const list=filterEx(f); const use=usageCount();
  const row=e=>exRow(e,'lib-open', use[e.id]?`<span class="pf">${use[e.id]} ${use[e.id]===1?'vez':'veces'}</span>`:'');
  if(!list.length) return `<div class="empty"><p>Ningún ejercicio coincide con la búsqueda.</p>${f.q.trim()?`<button class="btn btn-primary" data-act="lib-create">Crear «${esc(f.q.trim())}»</button>`:''}</div>`;
  if(f.group || f.q.trim()) return `<p class="plist-h">${list.length} ${list.length===1?'resultado':'resultados'}</p><div class="plist">${list.map(row).join('')}</div>`;
  return GROUPS.map(g=>{ const l=list.filter(e=>e.group===g.id); return l.length?`<h2 class="month">${g.name}<span>${l.length}</span></h2><div class="plist">${l.map(row).join('')}</div>`:''; }).join('');
}
function refreshLib(){ const l=$('#lib-list'); if(l) l.innerHTML=libList(); const c=$('#lib-chips'); if(c) c.innerHTML=filterChips('lib',S.lib); }

function openExDetail(id){
  const e=exById(id); const g=GROUP[e.group]||{};
  const done=sortedSessions().filter(s=>s.exercises.some(x=>x.exId===id));
  const how=HOW[id];
  let h=`<div class="sheet-head"><h2>${esc(e.name)}</h2><button class="icon-btn" data-act="modal-close" aria-label="Cerrar">${ICON.x}</button></div><div class="sheet-body">
  <div class="tags"><span class="tag" style="--g:${g.color}"><i></i>${esc(g.name||'')}</span>${e.muscle?`<span class="tag">${esc(e.muscle)}</span>`:''}<span class="tag">${esc(EQUIP[e.equip]||'')}</span>${e.en?`<span class="tag">${esc(e.en)}</span>`:''}</div>`;
  if(how&&e.builtin) h+=`<h3 class="how-title">Cómo se hace</h3><ol class="how">${['Posición','Movimiento','Clave'].map((l,i)=>`<li><b>${l}</b><span>${esc(how[i])}</span></li>`).join('')}</ol><h3 class="how-title">Tu historial</h3>`;
  if(done.length) h+=`<p style="margin:0">Lo has hecho ${done.length} ${done.length===1?'vez':'veces'}, la última ${ago(done[0].date)}.</p>${progDetail(id)}`;
  else h+=`<p class="muted" style="margin:0 0 16px">Todavía no lo has registrado en ningún entreno.</p>`;
  h+=`<div class="row-gap" style="margin-top:14px">`;
  if(S.active) h+=`<button class="btn btn-primary" data-act="ex-to-active" data-id="${id}">Añadir al entreno actual</button>`;
  if(done.length) h+=`<button class="btn btn-quiet" data-act="ex-progress" data-id="${id}">Ver en Progreso</button>`;
  if(!e.builtin && !e.hidden) h+=`<button class="btn btn-danger" data-act="ex-hide" data-id="${id}">Eliminar ejercicio</button>`;
  h+=`</div></div>`;
  openModal(h);
}

/* ---------- Settings ---------- */
let downloads=null;
function openSettings(){
  const st=S.settings;
  openModal(`<div class="sheet-head"><h2>Ajustes</h2><button class="icon-btn" data-act="modal-close" aria-label="Cerrar">${ICON.x}</button></div><div class="sheet-body">
    <div class="field"><span>Peso de la barra</span><div class="seg">${[20,15,10].map(b=>`<button data-act="set-bar" data-v="${b}" aria-pressed="${num(st.bar)===b}">${b} kg</button>`).join('')}</div></div>
    <div class="field"><span>Descanso por defecto entre series</span><div class="seg">${[60,90,120,180].map(b=>`<button data-act="set-rest" data-v="${b}" aria-pressed="${num(st.rest)===b}">${b<120?b+' s':(b/60)+' min'}</button>`).join('')}</div></div>
    <div class="field"><span>Tus datos</span><p style="margin:0 0 12px" class="small">${S.mode==='db'?'Se guardan en tu cuenta y solo tú puedes verlos, aunque compartas el enlace de esta página.':'Se guardan solo en este navegador. Exporta una copia de vez en cuando para no perderlos.'}</p>
      <div class="row-gap"><button class="btn btn-quiet" data-act="export">Exportar copia</button><label class="btn btn-quiet" style="cursor:pointer">Importar copia<input type="file" accept=".json,application/json" data-ch="import" hidden></label></div></div>
    <p class="muted small" style="margin:8px 0 0">El 1RM estimado usa la fórmula de Epley: peso × (1 + reps / 30).</p>
  </div>`);
}
async function doExport(){
  const data={app:'serie', version:1, exported:Date.now(), library:S.library, routines:S.routines, sessions:S.sessions, settings:S.settings};
  const filename=`serie-copia-${new Date().toISOString().slice(0,10)}.json`, text=JSON.stringify(data,null,1);
  if(downloads){
    try{ await downloads.save({filename, data:text}); toast('Copia exportada.'); }
    catch(e){ if(e&&e.code!=='declined') toast('No se pudo exportar la copia.'); }
    return;
  }
  try{
    const url=URL.createObjectURL(new Blob([text],{type:'application/json'}));
    const a=document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),2000); toast('Copia exportada.');
  }catch(e){ toast('No se pudo exportar la copia.'); }
}
async function doImport(file){
  let d; try{ d=JSON.parse(await file.text()); }catch(e){ toast('El archivo no es una copia válida.'); return; }
  if(!d||d.app!=='serie'||!Array.isArray(d.sessions)){ toast('El archivo no es una copia de Serie.'); return; }
  closeModal();
  const ok=await ask('Importar copia', `Se añadirán ${d.sessions.length} entrenos y ${(d.routines||[]).length} rutinas a los que ya tienes. Los que coincidan se reemplazarán.`, 'Importar', false);
  if(!ok) return;
  const merge=(cur,inc)=>{ const m=new Map(cur.map(x=>[x.id,x])); (inc||[]).forEach(x=>{ if(x&&x.id) m.set(x.id,x); }); return [...m.values()]; };
  S.library=merge(S.library,d.library); S.routines=merge(S.routines,d.routines);
  const before=new Map(S.sessions.map(x=>[x.id,x])); const incoming=d.sessions.filter(x=>x&&x.id&&typeof x.date==='number'&&Array.isArray(x.exercises));
  S.sessions=merge(S.sessions,incoming); saveLibrary(); saveRoutines();
  render(); toast('Importando…');
  if(S.mode==='db'){ for(const s of incoming){ try{ await Store.sessCol().doc(s.id).set(s); }catch(e){ reportErr(e); break; } } }
  else lsSet('sessions',S.sessions);
  toast('Copia importada.');
}

/* ---------- Timers & set-by-set mode ---------- */
let tick=null;
function startTickers(){ if(tick) return; tick=setInterval(()=>{ updateTimes(); tickFocus(); if(!S.active){ clearInterval(tick); tick=null; } },250); }
function stopRest(){ if(S.active) S.active.focus=null; renderFocus(); }
function vib(p){ try{ navigator.vibrate&&navigator.vibrate(p); }catch(e){} }
function ensureKeys(){ if(S.active) S.active.exercises.forEach(e=>{ if(!e.k) e.k=uid(); }); }
function F(){ return S.active ? S.active.focus : null; }
function fIdx(k){ return S.active.exercises.findIndex(e=>e.k===k); }
function restFor(ex){ return ex && ex.rest!=null ? ex.rest : (num(S.settings.rest)||90); }
function firstUndone(ex){ return ex.sets.findIndex(s=>!s.done); }
function nextAfter(ei, si){
  const ex=S.active.exercises[ei];
  for(let j=si+1;j<ex.sets.length;j++) if(!ex.sets[j].done) return {k:ex.k, si:j};
  for(let i=ei+1;i<S.active.exercises.length;i++){ const e=S.active.exercises[i]; const j=firstUndone(e); if(j>=0) return {k:e.k, si:j}; }
  return null;
}
function focusCtx(){
  const f=F(); if(!f) return null; const ei=fIdx(f.k); if(ei<0) return null;
  const ex=S.active.exercises[ei]; if(!ex.sets.length) return null; const si=Math.min(f.si, ex.sets.length-1);
  return {f, ei, ex, si, s:ex.sets[si], m:exById(ex.exId)};
}
function startExercise(ei){
  ensureKeys();
  const ex=S.active.exercises[ei]; let si=firstUndone(ex);
  if(si<0){ const l=ex.sets[ex.sets.length-1]; ex.sets.push(blankFrom(l,exById(ex.exId))); si=ex.sets.length-1; }
  S.active.focus={k:ex.k, si, phase:'set', open:true};
  saveActive(); render(); renderFocus(); startTickers();
}
function finishSet(){
  const c=focusCtx(); if(!c) return;
  const {f,ei,ex,si,s}=c;
  if(f.sw){ s.t=Math.round(swElapsed(f)); delete f.sw; }
  s.done=true; if(!isCardio(c.m)&&s.r===''&&ex.target){ const t=parseInt(ex.target,10); if(isFinite(t)) s.r=String(t); }
  vib(30);
  const nx=nextAfter(ei,si);
  if(!nx){
    S.active.focus=null; saveActive(); renderFocus(); render();
    toast(S.active.exercises.every(e=>e.sets.every(x=>x.done)) ? 'Todo hecho. Pulsa Terminar para guardar el entreno.' : 'Ejercicio completado.');
    return;
  }
  if(nx.k===ex.k){ const ns=ex.sets[nx.si]; fieldsOf(c.m).forEach(k=>{ if(ns[k]===''||ns[k]==null) ns[k]=s[k]; }); }
  const total=restFor(ex);
  Object.assign(f,{phase:'rest', restTotal:total, restEnd:Date.now()+total*1000, next:nx});
  saveActive(); render(); renderFocus();
}
function goNext(auto){
  const f=F(); if(!f||!f.next) return;
  const nx=f.next;
  if(fIdx(nx.k)<0){ S.active.focus=null; }
  else S.active.focus={k:nx.k, si:nx.si, phase:'set', open:f.open};
  if(auto) vib([200,100,200]);
  saveActive(); render(); renderFocus();
}
function adjRest(d){
  const f=F(); if(!f||f.phase!=='rest') return;
  f.restEnd=Math.max(Date.now()+1000, f.restEnd+d*1000);
  f.restTotal=Math.max(f.restTotal,(f.restEnd-Date.now())/1000);
  saveActive(); tickFocus();
}
function renderFocus(){
  const box=$('#focus'), bar=$('#restbar'); if(!box) return;
  const c=focusCtx(); if(S.active && S.active.focus && !c) S.active.focus=null;
  const open=!!(c && c.f.open);
  document.body.classList.toggle('focus-open', open);
  if(open){ box.hidden=false; box.innerHTML=`<div class="f-back" data-act="f-hide"></div><div class="f-sheet" role="dialog" aria-modal="true" aria-label="${c.f.phase==='rest'?'Descanso':'Serie en curso'}">${c.f.phase==='rest'?focusRest(c):focusSet(c)}</div>`; }
  else { box.hidden=true; box.innerHTML=''; }
  if(c && !open){ bar.hidden=false; bar.innerHTML=miniHTML(c); } else { bar.hidden=true; bar.innerHTML=''; }
  tickFocus();
}
function tile(label,f,val,step,prev,mode,ph='0'){
  return `<div class="tile"><span class="tile-l">${label}</span>
    <input class="tile-v num" id="f-${f}" data-in="f-${f}" inputmode="${mode}" autocomplete="off" value="${esc(val)}" placeholder="${ph}" aria-label="${label}">
    <span class="tile-p">${prev!=null?`Anterior: ${prev}`:'&nbsp;'}</span>
    <div class="tile-b"><button data-act="f-step" data-f="${f}" data-d="${-step}" aria-label="Restar">−</button><button data-act="f-step" data-f="${f}" data-d="${step}" aria-label="Sumar">+</button></div></div>`;
}
function focusSet(c){
  const {ex,si,s,m,f}=c; const last=lastPerf(ex.exId); const p=last&&last.sets[si];
  const cardio=isCardio(m), single=cardio&&ex.sets.length===1;
  const dots=ex.sets.map((x,j)=>`<i class="${x.done?'on':''}${j===si?' cur':''}"></i>`).join('');
  const head = single
    ? `<p class="f-ex">Cardio</p><h2 class="f-title long">${esc(m.name)}</h2>`
    : `<p class="f-ex">${esc(m.name)}</p><h2 class="f-title">${cap(word(m))} ${si+1}<span> de ${ex.sets.length}</span></h2><div class="f-dots" aria-hidden="true">${dots}</div>`;
  const goal = ex.target ? `<p class="muted small" style="margin:8px 0 0">Objetivo: ${esc(ex.target)} ${cardio?'min':'repeticiones'}</p>` : '';
  let body;
  if(cardio){
    const u=unitOf(m), ds=distSteps(m);
    const timeTile = f.sw
      ? `<div class="tile"><span class="tile-l">Tiempo</span><div class="tile-v num" id="f-tdisp" role="timer">${clock(swElapsed(f))}</div><span class="tile-p">${f.sw.run?'Cronómetro en marcha':'Cronómetro en pausa'}</span>
         <div class="tile-b"><button data-act="f-step" data-f="t" data-d="-60" aria-label="Restar un minuto">−</button><button data-act="f-step" data-f="t" data-d="60" aria-label="Sumar un minuto">+</button></div></div>`
      : tile('Tiempo','t',tTxt(s.t),60,p&&p.t?clock(p.t):null,'decimal','min');
    const distTile = u ? tile(`Distancia (${u})`,'d',s.d,ds.main,p&&p.d?fmt(p.d):null,'decimal') : '';
    const run=f.sw&&f.sw.run;
    body = `<div class="f-tiles${u?'':' one'}">${timeTile}${distTile}</div>
      <div class="sw-row"><button class="btn btn-block big sw-btn${run?' on':''}" data-act="sw-toggle">${run?ICON.pause:ICON.play}${run?'Pausar cronómetro':f.sw?'Reanudar cronómetro':'Iniciar cronómetro'}</button>
      ${f.sw&&!run?'<button class="btn btn-text" data-act="sw-reset">Poner el cronómetro a cero</button>':''}</div>
      <p class="muted small sync-note">${f.sw?'Al acabar se guarda el tiempo del cronómetro.':'Escribe los minutos (por ejemplo 25 o 25:30) o usa el cronómetro.'}</p>
      ${single?'':syncNote(ex,si)}`;
  } else {
    const step=['manc','kb'].includes(m.equip)?1:2.5;
    body = `<div class="f-tiles">${tile('Kg','w',s.w,step,p?fmt(p.w):null,'decimal')}${tile('Repeticiones','r',s.r,1,p?String(p.r):null,'numeric')}</div>
      ${syncNote(ex,si)}<div id="f-plates">${platesHTML(ex,s)}</div>`;
  }
  const cta = cardio ? (single?'Cardio acabado':'Bloque acabado') : 'Serie acabada';
  return `<div class="f-top"><button class="f-hide" data-act="f-hide">${ICON.down}Ocultar</button><span class="f-meta">Descanso: ${clock(restFor(ex))}</span>${HOW[ex.exId]&&m.builtin?`<button class="f-tech" data-act="lib-open" data-id="${ex.exId}">${ICON.info}Técnica</button>`:''}</div>
  <div class="f-head">${head}${goal}</div>
  ${body}
  <div class="f-foot"><button class="btn btn-primary btn-block f-cta" data-act="f-done">${cta}</button></div>`;
}
function focusRest(c){
  const f=c.f, nx=f.next, nex=S.active.exercises[fIdx(nx.k)], ns=nex.sets[nx.si], nm=exById(nex.exId), newEx=nx.k!==f.k;
  const vals=isCardio(nm) ? (fieldsOf(nm).some(k=>ns[k]!==''&&ns[k]!=null)?setTxt(ns,nm):'') : [ns.w!==''?esc(ns.w)+' kg':'', ns.r!==''?esc(ns.r)+' reps':''].filter(Boolean).join(' × ');
  return `<div class="f-top"><button class="f-hide" data-act="f-hide">${ICON.down}Ocultar</button></div>
  <div class="f-head"><p class="f-ex">${esc(c.m.name)}: ${isCardio(c.m)?'bloque '+(c.si+1)+' hecho':'serie '+(c.si+1)+' hecha'}</p><h2 class="f-title">Descanso</h2></div>
  <div class="f-ring"><svg viewBox="0 0 220 220" aria-hidden="true"><circle cx="110" cy="110" r="100" class="ring-bg"/><circle cx="110" cy="110" r="100" class="ring-fg" id="f-ring" transform="rotate(-90 110 110)" stroke-dasharray="628.3"/></svg><span class="f-time num" id="f-time" role="timer"></span></div>
  <div class="f-adj"><button class="btn btn-quiet" data-act="f-adj" data-v="-15">−15 s</button><button class="btn btn-quiet" data-act="f-adj" data-v="15">+15 s</button></div>
  <div class="f-next"><span class="muted small">${newEx?'Siguiente ejercicio':'A continuación'}</span><b>${newEx?esc(nm.name)+', '+word(nm):cap(word(nm))} ${nx.si+1} de ${nex.sets.length}</b>${vals?`<span class="muted small num">${vals}</span>`:''}</div>
  <div class="f-foot"><button class="btn btn-primary btn-block f-cta" data-act="f-next">Empezar siguiente serie</button><p class="muted small f-auto">Si no la empiezas tú, empezará sola al acabar el descanso.</p></div>`;
}
function miniHTML(c){
  if(c.f.phase==='rest') return `<div class="rest"><button class="mini-main" data-act="f-open"><span class="rt num" id="mini-time"></span><span class="rl">Descanso<small>Toca para abrir</small></span></button><button data-act="f-adj" data-v="15">+15</button><button data-act="f-next">Siguiente</button><span class="fill" id="mini-fill"></span></div>`;
  return `<div class="rest set"><button class="mini-main" data-act="f-open">${c.f.sw?'<span class="rt num" id="mini-sw"></span>':''}<span class="rl">${esc(c.m.name)}<small>${cap(word(c.m))} ${c.si+1} de ${c.ex.sets.length}</small></span></button><button data-act="f-open">Abrir</button><button data-act="f-stop" aria-label="Salir del modo serie">${ICON.x}</button></div>`;
}
function tickFocus(){
  const f=F(); if(!f) return;
  if(f.phase==='set'){ if(f.sw){ const v=clock(swElapsed(f)); const a=$('#f-tdisp'); if(a) a.textContent=v; const ms=$('#mini-sw'); if(ms) ms.textContent=v; } return; }
  const left=(f.restEnd-Date.now())/1000;
  if(left<=0){ goNext(true); return; }
  const t=clock(Math.ceil(left)), pct=Math.max(0,Math.min(1,left/f.restTotal));
  const a=$('#f-time'); if(a) a.textContent=t;
  const r=$('#f-ring'); if(r){ r.style.strokeDashoffset=String(628.3*(1-pct)); r.classList.toggle('soon', left<=5); }
  const m=$('#mini-time'); if(m) m.textContent=t;
  const mf=$('#mini-fill'); if(mf) mf.style.width=(pct*100)+'%';
}
function fRefresh(c, fields){ if(fields) syncSets(c.ex, c.si, fields); const pl=$('#f-plates'); if(pl) pl.innerHTML=platesHTML(c.ex,c.s); saveActive(); render(); }

/* ---------- Actions ---------- */
const A = {
  tab(el){ if(el.dataset.tab!=='train') S.lastTab=el.dataset.tab; if(S.tab===el.dataset.tab&&S.editing){ S.editing=null; } S.tab=el.dataset.tab; render(); window.scrollTo(0,0); },
  retry(){ boot(); },
  settings(){ openSettings(); },
  'modal-close'(){ closeModal(); },
  'ask-ok'(){ const r=askResolve; askResolve=null; closeModal(); r&&r(true); },
  'ask-cancel'(){ closeModal(); },
  start(el){ if(S.active){ S.tab='train'; render(); return; } startWorkout(el.dataset.id||null); },
  finish(){ finishWorkout(); },
  async discard(){ if(await ask('Descartar entreno','Se perderán las series que has registrado en este entreno.','Descartar',true)){ S.active=null; saveActive(); stopRest(); render(); } },
  'use-prev'(el){ const ei=+el.dataset.ei, si=+el.dataset.si; const last=lastPerf(S.active.exercises[ei].exId); const p=last&&last.sets[si]; if(!p) return; const s=S.active.exercises[ei].sets[si]; { const m_=exById(S.active.exercises[ei].exId); fromPrev(s,p,m_); syncSets(S.active.exercises[ei], si, fieldsOf(m_)); } saveActive(); render(); },
  'set-add'(el){ const ex=S.active.exercises[+el.dataset.ei]; const l=ex.sets[ex.sets.length-1]; ex.sets.push(blankFrom(l,exById(ex.exId))); saveActive(); render(); },
  'set-del'(el){ const ex=S.active.exercises[+el.dataset.ei]; if(ex.sets.length>1) ex.sets.pop(); saveActive(); render(); },
  'ex-up'(el){ closeModal(); move(S.active.exercises,+el.dataset.ei,-1); saveActive(); render(); },
  'ex-down'(el){ closeModal(); move(S.active.exercises,+el.dataset.ei,1); saveActive(); render(); },
  async 'ex-del'(el){ closeModal(); const ei=+el.dataset.ei; const ex=S.active.exercises[ei]; if(ex.sets.some(s=>s.done) && !(await ask('Quitar ejercicio',`Tiene series marcadas como hechas. Se quitarán de este entreno.`,'Quitar',true))) return; const f=F(); if(f&&(f.k===ex.k||(f.next&&f.next.k===ex.k))) S.active.focus=null; S.active.exercises.splice(ei,1); saveActive(); render(); renderFocus(); },
  'ex-add'(){ openPicker(id=>{ S.active.exercises.push(buildExercise(id,3,'')); saveActive(); render(); setTimeout(()=>window.scrollTo({top:document.body.scrollHeight}),30); }); },
  'ex-start'(el){ const ei=+el.dataset.ei; ensureKeys(); const f=F(); if(f&&f.k===S.active.exercises[ei].k){ f.open=true; saveActive(); renderFocus(); return; } startExercise(ei); },
  'f-hide'(){ const f=F(); if(f){ f.open=false; saveActive(); renderFocus(); } },
  'f-open'(){ const f=F(); if(f){ f.open=true; saveActive(); renderFocus(); } },
  'f-stop'(){ S.active.focus=null; saveActive(); renderFocus(); render(); },
  'f-done'(){ finishSet(); },
  'f-next'(){ goNext(false); },
  'f-adj'(el){ adjRest(num(el.dataset.v)); },
  'f-step'(el){ const c=focusCtx(); if(!c) return; const k=el.dataset.f, d=num(el.dataset.d);
    if(k==='t'&&c.f.sw){ c.f.sw.acc=Math.max(0,c.f.sw.acc+d); saveActive(); tickFocus(); return; }
    stepField(c.s,k,d); const i=$('#f-'+k); if(i) i.value=fieldVal(c.s,k); fRefresh(c,[k]); },
  'sw-toggle'(){ const c=focusCtx(); if(!c) return; const f=c.f; if(!f.sw) f.sw={acc:0,run:false};
    if(f.sw.run){ f.sw.acc+=(Date.now()-f.sw.start)/1000; f.sw.run=false; c.s.t=Math.round(f.sw.acc); } else { f.sw.start=Date.now(); f.sw.run=true; }
    saveActive(); render(); renderFocus(); },
  'sw-reset'(){ const c=focusCtx(); if(!c) return; delete c.f.sw; saveActive(); renderFocus(); },
  exrest(el){ const ex=S.active.exercises[+el.dataset.ei]; ex.rest=Math.min(600,Math.max(15,restFor(ex)+num(el.dataset.d))); saveActive(); render(); },
  'wk-min'(){ S.tab=S.lastTab||'progress'; render(); window.scrollTo(0,0); },
  'ex-menu'(el){ const ei=+el.dataset.ei; const ex=S.active.exercises[ei]; const n=S.active.exercises.length;
    openModal(menuSheet(exById(ex.exId).name,[['lib-open','Ver ficha y progreso',`data-id="${ex.exId}"`], ei>0&&['ex-up','Mover arriba',`data-ei="${ei}"`], ei<n-1&&['ex-down','Mover abajo',`data-ei="${ei}"`], ['ex-del','Quitar del entreno',`data-ei="${ei}"`,true]])); },
  'ri-menu'(el){ const i=+el.dataset.i; const n=S.editing.items.length;
    openModal(menuSheet(exById(S.editing.items[i].exId).name,[i>0&&['ri-up','Mover arriba',`data-i="${i}"`], i<n-1&&['ri-down','Mover abajo',`data-i="${i}"`], ['ri-del','Quitar de la rutina',`data-i="${i}"`,true]])); },
  cell(el){ openSetSheet(+el.dataset.ei,+el.dataset.si); },
  st(el){ const s=stSet(); const f=el.dataset.f, d=num(el.dataset.d);
    stepField(s,f,d); const i=$('#st-'+f); if(i) i.value=fieldVal(s,f);
    stRefresh([f]); },
  'st-copy'(){ const {ei,si}=S.setEdit; const last=lastPerf(S.active.exercises[ei].exId); const p=last&&last.sets[si]; if(!p) return; const s=stSet(); { const m_=exById(S.active.exercises[ei].exId); fromPrev(s,p,m_); syncSets(S.active.exercises[ei], si, fieldsOf(m_)); } saveActive(); render(); openModal(setSheet()); },
  'st-done'(){ const {ei}=S.setEdit; const ex=S.active.exercises[ei]; const s=stSet(); s.done=!s.done;
    if(s.done){ if(s.r===''&&ex.target){ const t=parseInt(ex.target,10); if(isFinite(t)) s.r=String(t);} }
    closeModal(); saveActive(); render(); },
  'st-del'(){ const {ei,si}=S.setEdit; const ex=S.active.exercises[ei]; if(ex.sets.length<2) return; ex.sets.splice(si,1); const f=F(); if(f&&f.k===ex.k&&f.si>=si&&f.si>0) f.si--; closeModal(); saveActive(); render(); renderFocus(); },
  'routine-new'(){ S.tab='routines'; S.editing={id:uid(), name:'', items:[], isNew:true}; S.editOrig=JSON.stringify(S.editing); render(); window.scrollTo(0,0); setTimeout(()=>$('[data-in="r-name"]')?.focus(),40); },
  'routine-open'(el){ const r=S.routines.find(x=>x.id===el.dataset.id); S.editing=clone(r); S.editOrig=JSON.stringify(S.editing); render(); window.scrollTo(0,0); },
  async 'routine-back'(){ if(JSON.stringify(S.editing)!==S.editOrig && !(await ask('Salir sin guardar','Los cambios de esta rutina se perderán.','Salir sin guardar',true))) return; S.editing=null; render(); },
  'routine-save'(){ const r=S.editing; r.name=r.name.trim()||'Rutina sin nombre'; const out={id:r.id,name:r.name,items:r.items.map(it=>({exId:it.exId,sets:Math.max(1,parseInt(it.sets,10)||3),reps:String(it.reps||'').trim()||'10'}))};
    const i=S.routines.findIndex(x=>x.id===r.id); if(i>=0) S.routines[i]=out; else S.routines.push(out); saveRoutines(); S.editing=null; render(); toast('Rutina guardada.'); },
  async 'routine-delete'(){ if(!(await ask('Eliminar rutina',`«${S.editing.name||'Esta rutina'}» se eliminará. Tus entrenos ya hechos se conservan.`,'Eliminar',true))) return; S.routines=S.routines.filter(x=>x.id!==S.editing.id); saveRoutines(); S.editing=null; render(); },
  'ri-up'(el){ closeModal(); move(S.editing.items,+el.dataset.i,-1); render(); },
  'ri-down'(el){ closeModal(); move(S.editing.items,+el.dataset.i,1); render(); },
  'ri-del'(el){ closeModal(); S.editing.items.splice(+el.dataset.i,1); render(); },
  'ri-add'(){ openPicker(id=>{ S.editing.items.push(isCardio(exById(id))?{exId:id, sets:1, reps:'30'}:{exId:id, sets:3, reps:'8-12'}); render(); }); },
  'hist-toggle'(el){ S.openSession = S.openSession===el.dataset.id?null:el.dataset.id; render(); },
  async 'hist-del'(el){ const id=el.dataset.id; if(!(await ask('Borrar entreno','Este entreno desaparecerá del historial y de las gráficas.','Borrar',true))) return; S.sessions=S.sessions.filter(s=>s.id!==id); Store.dropSession(id); S.openSession=null; render(); },
  'pk-group'(el){ S.picker.group=el.dataset.v||null; refreshPicker(); },
  'pk-equip'(el){ S.picker.equip=el.dataset.v||null; refreshPicker(); },
  'pk-pick'(el){ const cb=S.picker.onPick; closeModal(); cb(el.dataset.id); },
  'pk-create'(){ const p=S.picker; const cb=p.onPick; openCreateEx(p.q.trim(), p.group, id=>cb(id)); },
  'lib-group'(el){ S.lib.group=el.dataset.v||null; refreshLib(); },
  'lib-equip'(el){ S.lib.equip=el.dataset.v||null; refreshLib(); },
  'lib-open'(el){ openExDetail(el.dataset.id); },
  'lib-create'(){ openCreateEx(S.lib.q.trim(), S.lib.group, ()=>{ render(); toast('Ejercicio creado.'); }); },
  'cx-dist'(el){ S.creating.dist=el.dataset.v; openModal(createSheet()); },
  'cx-group'(el){ S.creating.group=el.dataset.v; S.creating.muscle=musclesOf(el.dataset.v)[0]; openModal(createSheet()); },
  'cx-equip'(el){ S.creating.equip=el.dataset.v; openModal(createSheet()); },
  'cx-save'(){ const c=S.creating; const name=c.name.trim(); if(!name){ toast('Escribe un nombre para el ejercicio.'); return; }
    if(allEx().some(e=>!e.hidden&&norm(e.name)===norm(name))){ toast(`Ya existe «${name}».`); return; }
    const ex={id:'c-'+uid(), name, group:c.group, muscle:c.muscle, equip:c.equip, bar:c.equip==='barra', ...(c.group==='cardio'?{kind:'cardio', dist:c.dist}:{})}; S.library.push(ex); saveLibrary();
    const cb=c.onDone; S.creating=null; closeModal(); if(cb) cb(ex.id); },
  'ex-to-active'(el){ if(!S.active) return; S.active.exercises.push(buildExercise(el.dataset.id,3,'')); saveActive(); closeModal(); S.tab='train'; render(); setTimeout(()=>window.scrollTo({top:document.body.scrollHeight}),30); },
  'ex-progress'(el){ S.progEx=el.dataset.id; closeModal(); S.tab='progress'; render(); window.scrollTo(0,0); },
  async 'ex-hide'(el){ const e=S.library.find(x=>x.id===el.dataset.id); if(!e) return;
    if(!(await ask('Eliminar ejercicio',`«${e.name}» dejará de aparecer en la lista. Tus entrenos y rutinas que lo usan se conservan.`,'Eliminar',true))) return;
    e.hidden=true; saveLibrary(); render(); },
  'set-bar'(el){ S.settings.bar=num(el.dataset.v); saveSettings(); openSettings(); if(S.active) render(); },
  'set-rest'(el){ S.settings.rest=num(el.dataset.v); saveSettings(); openSettings(); },
  export(){ doExport(); }
};
function move(arr,i,d){ const j=i+d; if(j<0||j>=arr.length) return; [arr[i],arr[j]]=[arr[j],arr[i]]; }

const INPUT = {
  'set-w'(el){ const ei=+el.dataset.ei; S.active.exercises[ei].sets[+el.dataset.si].w=el.value; const pl=$('#pl-'+ei); if(pl) pl.innerHTML=platesHTML(S.active.exercises[ei]); saveActive(); },
  'set-r'(el){ S.active.exercises[+el.dataset.ei].sets[+el.dataset.si].r=el.value; saveActive(); },
  'f-t'(el){ const c=focusCtx(); if(c){ c.s.t=parseTime(el.value); fRefresh(c,['t']); } },
  'f-d'(el){ const c=focusCtx(); if(c){ c.s.d=el.value; fRefresh(c,['d']); } },
  'st-t'(el){ stSet().t=parseTime(el.value); stRefresh(['t']); },
  'st-d'(el){ stSet().d=el.value; stRefresh(['d']); },
  'f-w'(el){ const c=focusCtx(); if(c){ c.s.w=el.value; fRefresh(c,['w']); } },
  'f-r'(el){ const c=focusCtx(); if(c){ c.s.r=el.value; fRefresh(c,['r']); } },
  'st-w'(el){ stSet().w=el.value; stRefresh(['w']); },
  'st-r'(el){ stSet().r=el.value; stRefresh(['r']); },
  'r-name'(el){ S.editing.name=el.value; },
  'ri-sets'(el){ S.editing.items[+el.dataset.i].sets=el.value; },
  'ri-reps'(el){ S.editing.items[+el.dataset.i].reps=el.value; },
  'picker-q'(el){ S.picker.q=el.value; const l=$('#pk-list'); if(l) l.innerHTML=pickerList(); },
  'cx-name'(el){ S.creating.name=el.value; },
  'lib-q'(el){ S.lib.q=el.value; const l=$('#lib-list'); if(l) l.innerHTML=libList(); }
};
const CHANGE = {
  'prog-ex'(el){ S.progEx=el.value; afterProgress(); },
  'cx-muscle'(el){ S.creating.muscle=el.value; },
  'import'(el){ const f=el.files&&el.files[0]; if(f) doImport(f); }
};
document.addEventListener('click',e=>{ const el=e.target.closest('[data-act]'); if(!el) return; const f=A[el.dataset.act]; if(f){ e.preventDefault(); f(el,e); } });
document.addEventListener('input',e=>{ const el=e.target.closest('[data-in]'); if(el&&INPUT[el.dataset.in]) INPUT[el.dataset.in](el,e); });
document.addEventListener('change',e=>{ const el=e.target.closest('[data-ch]'); if(el&&CHANGE[el.dataset.ch]) CHANGE[el.dataset.ch](el,e); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ if(!$('#modal').hidden) closeModal(); else if(F()&&F().open) A['f-hide'](); } if(e.key==='Enter'&&e.target.matches('.tile-v')) e.target.blur(); if(e.key==='Enter'&&e.target.id==='st-w'){ e.preventDefault(); $('#st-r')?.focus(); } else if(e.key==='Enter'&&e.target.matches('.st-val, .ri-nums input')){ e.target.blur(); } });

/* ---------- Boot ---------- */
function hydrate(d){
  S.library = ((d.library&&Array.isArray(d.library.list))?d.library.list:[]).map(e=>Object.assign({equip:e.bar?'barra':'otro', muscle:(GROUP[e.group]||{}).name||''}, e, {bar: e.equip? e.equip==='barra' : !!e.bar})).map(e=>e.group==='cardio'&&!e.kind?Object.assign(e,{kind:'cardio',dist:e.dist??'km'}):e);
  S.routines = (d.routines&&Array.isArray(d.routines.list))?d.routines.list:[];
  S.settings = Object.assign({bar:20, rest:90}, d.settings||{});
  S.active = d.active&&d.active.w ? d.active.w : null;
  S.sessions = d.sessions ? (Array.isArray(d.sessions)?d.sessions:(d.sessions.list||[])) : [];
}
async function boot(){
  S.loadError=false; S.loaded=false; render();
  let d; try{ d=await Store.init(); }catch(e){ S.loadError=true; render(); return; }
  hydrate(d); S.loaded=true; ensureKeys(); render(); renderFocus(); if(S.active) startTickers();
  if(window.claude && typeof window.claude.use==='function'){ try{ downloads=await window.claude.use('downloads'); }catch(e){ downloads=null; } }
}
boot();

/* Web normal (fuera de Claude): funciona sin conexión y pide al navegador que no borre los datos */
if(!window.claude){
  if('serviceWorker' in navigator && location.protocol.startsWith('http')) window.addEventListener('load',()=>{ navigator.serviceWorker.register('sw.js').catch(()=>{}); });
  if(navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(()=>{});
}
