"use strict";(self["webpackChunkmax_vue"]=self["webpackChunkmax_vue"]||[]).push([[210],{8210:function(t,e,i){i.r(e),i.d(e,{default:function(){return Z}});var s=i(3396),a=i(9242),l=i(7139);const p=t=>((0,s.dD)("data-v-672122fe"),t=t(),(0,s.Cn)(),t),o={class:"wrapper"},m={class:"app-max-main"},c={class:"app-max-symp"},n=p((()=>(0,s._)("h3",{class:"app-max-label"},"Выберите свои симптомы",-1))),v={class:"app-max-form"},_=["onClick"],y={class:"app-max-diagnostic"},d=p((()=>(0,s._)("h3",{class:"app-max-label"},"Похожие диагнозы",-1))),u={key:0,class:"app-max-diagnos"},x=["onClick"],h={key:1};function g(t,e,i,p,g,b){const r=(0,s.up)("AppMax");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(a.uT,{name:"fade"},{default:(0,s.w5)((()=>[t.objElement?((0,s.wg)(),(0,s.j4)(r,{key:0,onClose:b.closed,sym:t.objElement},null,8,["onClose","sym"])):(0,s.kq)("",!0)])),_:1}),(0,s._)("div",o,[(0,s._)("div",m,[(0,s._)("div",c,[n,(0,s._)("div",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.symptomsList,(t=>((0,s.wg)(),(0,s.iD)("p",{class:(0,l.C_)(["app-max-form-text",{"app-max-form-text--active":!0===t.active}]),key:t,onClick:(0,a.iM)((e=>b.addSymp(t)),["prevent"])},(0,l.zw)(t.title),11,_)))),128))])]),(0,s._)("div",y,[d,t.diagnosis?((0,s.wg)(),(0,s.iD)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.diagnosis,(t=>((0,s.wg)(),(0,s.iD)("p",{class:"app-max-diagnostext",key:t,onClick:e=>b.itemClick(t)},(0,l.zw)(t),9,x)))),128))])):((0,s.wg)(),(0,s.iD)("p",h,"Пусто"))])])])],64)}i(560);const b=t=>((0,s.dD)("data-v-20dab9a7"),t=t(),(0,s.Cn)(),t),r={class:"app-max-component"},f={class:"app-max-component-close"},w={class:"app-max-component-main-title"},k={class:"app-max-component-span"},D=b((()=>(0,s._)("h2",{class:"app-max-component-title"},[(0,s._)("span",{class:"app-max-component-span"},"Симптомы:")],-1))),C={key:0,class:"app-max-component-box"},A={class:"app-max-component-title"},S={class:"app-max-component-span"},j={class:"app-max-component-text"},z={class:"app-max-component-title"},E={class:"app-max-component-span"},L={class:"app-max-component-text"};function M(t,e,i,p,o,m){return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",f,[(0,s._)("a",{href:"#",class:"app-max-component-link",onClick:e[0]||(e[0]=(0,a.iM)((e=>t.$emit("close",null)),["prevent"]))},"Закрыть")]),(0,s._)("h1",w,[(0,s.Uk)("Диагноз: "),(0,s._)("span",k,(0,l.zw)(i.sym.diagnosis.toUpperCase()),1)]),D,t.sympList?((0,s.wg)(),(0,s.iD)("div",C,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.sym.symptoms,(e=>((0,s.wg)(),(0,s.iD)("p",{key:e},(0,l.zw)(t.sympList[e].title),1)))),128))])):(0,s.kq)("",!0),(0,s._)("h2",A,[(0,s._)("span",S,(0,l.zw)(i.sym.help.about_title),1)]),(0,s._)("p",j,(0,l.zw)(i.sym.help.about_text),1),(0,s._)("h2",z,[(0,s._)("span",E,(0,l.zw)(i.sym.help.symp_title),1)]),(0,s._)("p",L,(0,l.zw)(i.sym.help.symp_text),1)])}var H={name:"AppMax",data:()=>({sympList:[{title:"Боли в груди",active:!1},{title:"Температура",active:!1},{title:"Кашель",active:!1},{title:"Озноб",active:!1},{title:"Слабость",active:!1},{title:"Недомогание",active:!1},{title:"Головные боли",active:!1},{title:"Ломота в теле",active:!1},{title:"Утомляемость",active:!1},{title:"боли в мышцах и суставах",active:!1},{title:"Тошнота",active:!1},{title:"Боли в животе",active:!1},{title:"Сухость во рту",active:!1},{title:"Обложенный язык",active:!1},{title:"Отсутсвие аппетита",active:!1},{title:"Боль в правой нижней части живота",active:!1},{title:"Рвота",active:!1},{title:"Нарушение стула",active:!1},{title:"Заложенность носа",active:!1},{title:"Слезотечение",active:!1},{title:"Зуд",active:!1},{title:"Чихание",active:!1},{title:"Затруднение дыхания",active:!1},{title:"Покраснение",active:!1},{title:"Головокружение",active:!1},{title:"Холодные руки",active:!1},{title:"Холодные ноги",active:!1},{title:"Учащенное сердцебиение",active:!1},{title:"Одышка",active:!1},{title:"Cвистящие хрипы",active:!1},{title:"Хрипы",active:!1},{title:"Чувство сдавленности в грудной клетке",active:!1},{title:"Насморк",active:!1},{title:"Боли в глазах",active:!1},{title:"Ринорея",active:!1},{title:"Боли в горле",active:!1},{title:"Потеря сознания",active:!1},{title:"Редкий пульс",active:!1},{title:"Спутанность сознания",active:!1},{title:"Боль в боку",active:!1},{title:"Сухой кашель",active:!1},{title:"Кашель с мокротой",active:!1},{title:"Нарушение речи",active:!1},{title:"Нарушение мимики",active:!1},{title:"Онемение лица",active:!1},{title:"Нарушение ориентации",active:!1},{title:"Нарушение слуха",active:!1},{title:"Нарушение зрения",active:!1}]}),props:{sym:{type:Object,required:!0}}},Y=i(89);const q=(0,Y.Z)(H,[["render",M],["__scopeId","data-v-20dab9a7"]]);var I=q,K={name:"App",components:{AppMax:I},data:()=>({objElement:null,symptomsList:[{title:"Боли в груди",active:!1},{title:"Температура",active:!1},{title:"Кашель",active:!1},{title:"Озноб",active:!1},{title:"Слабость",active:!1},{title:"Недомогание",active:!1},{title:"Головные боли",active:!1},{title:"Ломота в теле",active:!1},{title:"Утомляемость",active:!1},{title:"боли в мышцах и суставах",active:!1},{title:"Тошнота",active:!1},{title:"Боли в животе",active:!1},{title:"Сухость во рту",active:!1},{title:"Обложенный язык",active:!1},{title:"Отсутсвие аппетита",active:!1},{title:"Боль в правой нижней части живота",active:!1},{title:"Рвота",active:!1},{title:"Нарушение стула",active:!1},{title:"Заложенность носа",active:!1},{title:"Слезотечение",active:!1},{title:"Зуд",active:!1},{title:"Чихание",active:!1},{title:"Затруднение дыхания",active:!1},{title:"Покраснение",active:!1},{title:"Головокружение",active:!1},{title:"Холодные руки",active:!1},{title:"Холодные ноги",active:!1},{title:"Учащенное сердцебиение",active:!1},{title:"Одышка",active:!1},{title:"Cвистящие хрипы",active:!1},{title:"Хрипы",active:!1},{title:"Чувство сдавленности в грудной клетке",active:!1},{title:"Насморк",active:!1},{title:"Боли в глазах",active:!1},{title:"Ринорея",active:!1},{title:"Боли в горле",active:!1},{title:"Потеря сознания",active:!1},{title:"Редкий пульс",active:!1},{title:"Спутанность сознания",active:!1},{title:"Боль в боку",active:!1},{title:"Сухой кашель",active:!1},{title:"Кашель с мокротой",active:!1},{title:"Нарушение речи",active:!1},{title:"Нарушение мимики",active:!1},{title:"Онемение лица",active:!1},{title:"Нарушение ориентации",active:!1},{title:"Нарушение слуха",active:!1},{title:"Нарушение зрения",active:!1}],symptomsAndDiagnosis:[{symptoms:[0,1,3,4,2,5],diagnosis:"бронхит",help:{about_title:"Что такое бронхит?",about_text:"Бронхит – воспалительное заболевание бронхиального дерева. Отек и большое количество слизи в дыхательных путях на фоне воспаления затрудняют поступление воздуха к легким. В отличие от пневмонии, патологический процесс локализуется в бронхах и не затрагивает альвеолы. Главный симптом заболевания – кашель с выделением мокроты или без нее. ",symp_title:"Лечение бронхита",symp_text:"Терапия воспаления бронхов – комплексная, зависит от особенностей, степени тяжести болезни и сопутствующих факторов, которые усугубляют состояние здоровья человека. Независимо от возраста пациента, пульмонолог порекомендует ему постельный или полупостельный режим, отдых, полноценное, сбалансированное питание, обильное питье, пребывание в комнате с влажным прохладным воздухом."}},{symptoms:[1,6,3,7,4,8,9],diagnosis:"ангина",help:{about_title:"Что такое ангина?",about_text:"Ангина, или острый тонзиллит – острое заболевание инфекционной природы, характеризующееся воспалением преимущественно небных, реже – иных миндалин, сопровождающееся ярко выраженным синдромом интоксикации. Возникает внезапно, значительно снижает качество жизни пациента, а при отсутствии корректного лечения приводит к развитию серьезных системных осложнений. Избежать негативных последствий болезни поможет своевременное обращение к врачу за точным диагнозом и рекомендациями по терапии.",symp_title:"Лечение ангины",symp_text:"Основу лечения классической бактериальной (гнойной) ангины и у взрослых, и у детей составляют антибиотики. В начале заболевания врач выбирает препарат широкого спектра действия – воздействующий на максимально возможное число микроорганизмов, которые могли бы вызвать данное заболевание. Впоследствии этот антибиотик с учетом данных бактериологического исследования может быть заменен иным препаратом – тем, к которому наиболее чувствителен данный конкретный микроорганизм. Препарат должен быть использован в рабочих, эффективных дозах полным курсом (в зависимости от особенностей клинического случая – от 7 до 14 дней)."}},{symptoms:[16,10,11,12,13,14,15],diagnosis:"аппендицит",help:{about_title:"Что такое аппендицит?",about_text:"Аппендицит – это воспаление червеобразного отростка слепой кишки. Орган влияет на эндокринную регуляцию, работу иммунитета и поддержание нормальной микрофлоры кишечника, однако не считается жизненно важным. Воспаление аппендикса прогрессирует быстро и ведет к серьезным последствиям, которые угрожают жизни пациента. При аппендиците объем медицинской помощи, как правило, заключается в удалении отростка. Патологическое состояние развивается одинаково часто у мужчин и женщин всех возрастов. Риск заболеть аппендицитом сохраняется до преклонного возраста. Согласно статистике, аппендицит является наиболее часто встречаемым заболеванием пищеварительного тракта, которое требует хирургического лечения. ",symp_title:"Лечение аппендицита",symp_text:"В 99% случаях операция носит экстренный характер. Острое воспаление червеобразного отростка требует как можно более раннего его удаления. Операции проводят открытым способом (брюшную полость вскрывают с помощью скальпеля) или с использованием лапароскопического оборудования. Если воспалительный процесс нарушил целостность стенки отростка, и развился разлитой перитонит, проводят срединную лапаротомию, удаление отростка, тщательный осмотр брюшной полости, санацию, дренирование. В послеоперационном периоде назначают антибиотики и обезболивающие средства. При хронической форме воспаления (встречается редко) возможно лечение консервативными способами (слабительными, спазмолитическими, антибактериальными препаратами). Червеобразный отросток удаляют позже, в ходе плановой операции."}},{symptoms:[11,10,16,17,4,5,5,1],diagnosis:"отравление",help:{about_title:"Что такое отравление?",about_text:"Пищевое отравление – нарушение нормальной жизнедеятельности организма, возникающее вследствие употребления пораженной инфекцией пищи или других ядовитых веществ. Начинается заболевание достаточно быстро. Уже через 2-4 часа после еды наблюдаются первые симптомы: тошнота, чувство слабости, позднее – обильная рвота, понос. Нередко возникает повышение температуры, головная боль. Особенно чувствительны к пищевым отравлениям дети, лица пожилого возраста и больные желудочно-кишечными заболеваниями. У них отравление нередко протекает в более тяжелой форме. Если у Вас наблюдаются подобные симптомы, советуем записаться на прием к врачу. Своевременная консультация предупредит негативные последствия для вашего здоровья.",symp_title:"Лечение отравления",symp_text:"При возникновении отравления, прежде всего, необходимо определить его причину, поскольку лечение зависит от природы отравления. Наиболее действенным методом является промывание желудка, для чего больному следует пить большое количество жидкости (чистой воды или в виде раствора перманганата или питьевой соды). Периодически следует вызывать рвоту – это поможет вывести токсины из организма.  Следует помнить, что состояние больного может ухудшаться по прошествии 10-12 часов после момента отравления, что может быть связано с наличием побочных осложняющих эффектов. В таком случае необходимо незамедлительно обратиться к врачу."}},{symptoms:[18,2,19,10,16,20,21,22,23,17],diagnosis:"аллергия",help:{about_title:"Что такое аллергия?",about_text:"Аллергия – хроническое заболевание, возникающее вследствие неадекватной реакции организма на попадание в него потенциально безопасных веществ. Развивается при повторном контакте с таким веществом, проявляясь все ярче и ярче с каждой последующей встречей. При отсутствии лечения приводит к осложнениям, ухудшает общее состояние пациента, снижает качество его жизни. Избежать этого поможет своевременная явка на консультацию к аллергологу и соблюдение данных специалистом рекомендаций.",symp_title:"Лечение аллергии",symp_text:"Основа лечения аллергии у взрослых и детей – прекращение контакта с аллергеном и элиминация (выведение) его из организма. Пациенту рекомендуется отказаться от употребления провоцирующего реакцию продукта, не использовать косметику и средства бытовой химии, которые содержат вызывающие аллергию вещества, при поллинозе – если это возможно, сменить место жительства на регион, в котором отсутствует «опасное» растение. Чтобы подавить аллергическую реакцию и устранить ее проявления, используют антигистаминные средства, препараты глюкокортикоидов местно (в нос) или системно (в форме таблеток или инъекций коротким курсом), бронхорасширяющие средства, сорбенты. Если аллерген известен, в период ремиссии может быть использован эффективный метод лечения – аллерген-специфическая иммунотерапия. Суть ее заключается в постепенном снижении чувствительности организма к данному веществу. Для этого его с определенной периодичностью вводят подкожно или сублингвально – под язык, в малой концентрации, постепенно ее повышая. Такое лечение позволяет на длительный срок устранить симптомы аллергии, особенно широко применяется при сезонной аллергии – поллинозе."}},{symptoms:[6,24,4,25,26,27,28],diagnosis:"анемия",help:{about_title:"Что такое анемия?",about_text:" Анемия – патологическое состояние, характеризующееся уменьшением количества эритроцитов и гемоглобина крови (пороговым является уровень железосодержащего белка (гемоглобина) в крови менее 120 г/л). Может быть самостоятельным заболеванием или сопровождать течение иных болезней, осложнять их. Протекает с неспецифической симптоматикой – нельзя на основании проявления с уверенностью сказать, что это именно анемия, необходимо провести обследования для уточнения диагноза. На поздних стадиях заболевание ухудшает состояние больного и утяжеляет основной патологический процесс, который лег в его основу. Поэтому важно своевременно диагностировать анемию и выявить ее причины. Это позволит пациенту вовремя начать лечение и избежать осложнений. Врачи-гематологи сети медицинских центров «СМ-Клиника» ежедневно консультируют людей с признаками анемии. Обладая современным знаниями и опытом работы, они диагностируют болезнь, которая привела к изменениям в анализе крови, и рекомендуют пациентам схему терапии.",symp_title:"Лечение анемии",symp_text:" К сожалению, ЖДА давно перешла в разряд бытовых проблем с организмом, поэтому многие пациенты не обращают на нее внимания. Врачи «СМ-Клиника» рекомендуют начинать лечение как можно раньше. Особенно важно придерживаться рекомендаций пациентам из группы риска: женщинам в период беременности и кормления грудью, а также детям. Специалисты «СМ-Клиника» категорически против шаблонного подхода к лечению анемии у женщин и мужчин – они назначают терапию каждому пациенту индивидуально, основываясь на конкретной клинической ситуации. Опыт работы и высокая квалификация наших врачей позволяют выбрать эффективные пути терапии данного заболевания. "}},{symptoms:[29,30,28,2,31],diagnosis:"бронхиальная астма",help:{about_title:"Что такое бронхиальная астма?",about_text:"Бронхиальная астма – аллергическое заболевание, характеризующееся повторяющимися приступами удушья вследствие спазма бронхов и отёка их слизистой оболочки или длительным кашлем. Несмотря на четкое определение болезни, достаточно яркие симптомы и большие возможности методов исследования, бронхиальную астму зачастую диагностируют как различные формы бронхита и, как следствие этого, неэффективно и неадекватно лечат курсами антибиотиков и противокашлевых препаратов. Специалисты сети медицинских центров «СМ-Клиника» обладают немалым опытом диагностики бронхиальной астмы и владеют информацией относительно современных подходов в ее лечении. Обратившись к нам, вы попадете в руки профессионалов.",symp_title:"Лечение бронхиальной астмы",symp_text:"Принципы лечения бронхиальной астмы варьируются в зависимости от тяжести течения и периода болезни. В первую очередь, требуется прекращение или уменьшение контакта с аллергенами: воздухоочистители, кондиционеры, увлажнители воздуха, борьба с пылевыми клещами, тараканами, специальные чехлы для постельных принадлежностей, отказ от ковров, содержания домашних животных, гипоаллергенная диета и прочие мероприятия. Медикаментозная терапия определяется степенью тяжести заболевания, назначается с учетом осложнений основного заболевания и наличием сопутствующей патологии."}},{symptoms:[6,10],diagnosis:"мигрень",help:{about_title:"Что такое мигрень?",about_text:"Мигрень – это вид головной боли, который характеризуется периодически повторяющимися приступами пульсирующей головной боли, нередко с односторонней локализацией и достаточной интенсивностью, что затрудняет повседневную активность человека.",symp_title:"Лечение мигрени",symp_text:"Обратитесь к врачу"}},{symptoms:[32,2,1,21,34,9,35,14,33,6,0],diagnosis:"ОРВИ",help:{about_title:"Что такое ОРВИ?",about_text:"ОРВИ является аббревиатурой полного названия «острые респираторные вирусные инфекции». В них входит целый ряд заболеваний дыхательных путей, провоцируемых попаданием вирусов в организм. Источниками инфекции являются зараженные люди. Человек имеет высокую восприимчивость к вирусам, вследствие чего болезнь распространяется активно и может провоцировать эпидемические вспышки, в том числе и мирового масштаба. Несвоевременное проведение лечебных мероприятий может завершиться осложнениями ОРВИ как со стороны органов дыхательной системы, так и других систем организма. Возбудителей ОРВИ – многочисленная армия. Болеть человек может в течение всего года, однако наиболее часто болезнь вспыхивает осенью и зимой. Поэтому именно в этот период нужны профилактические и даже карантинные меры. ОРВИ (разговорный термин «простуда») входит в число острых респираторных заболеваний (ОРЗ) дыхательной системы инфекционного характера. Поскольку существует огромное количество разных вирусов, их штаммов, то у тех, кто переболел, не формируется стойкая иммунная защита против недуга. Мутация вирусов является причиной того, что человек может болеть не один раз на протяжении года. ",symp_title:"Лечение ОРВИ",symp_text:"Обратитесь к врачу"}},{symptoms:[1,6,10],diagnosis:"грипп",help:{about_title:"Что такое грипп?",about_text:"Грипп – это острое заболевание респираторного тракта, которое вызывается соответствующим вирусом. Инфекции подвержены люди всех возрастов.",symp_title:"Лечение гриппа",symp_text:"Легкие и средней степени тяжести гриппозные инфекции могут и должны лечиться в условиях дома, только при тяжелых формах или при развитии осложнений требуется госпитализация. Лечение легких и среднетяжелых форм гриппа проводится в домашних условиях, тяжелых и осложненных – в стационаре. В период лихорадки больного человеку рекомендуется больше времени проводить в постели, употреблять большие объемы жидкости с высоким содержанием витаминов (особенно важны в этот период витамины С и Р). Учитывая, что вирус гриппа может сопровождаться геморрагическим синдромом, для купирования лихорадки рациональнее использовать парацетамол (нестероиды могут привести к кровотечениям) Лечение тяжелых форм гриппа предполагает обязательное применение этиотропных средств вместе с симптоматической и патогенетической. Высокоэффективен специфический гамма-глобулин. Этиотропная терапия может проводиться 2 классами препаратов: нейраминидазные ингибиторы и блокаторы M2. В многокомпонентном лечении также могут использоваться препараты интерферона, которые способны активировать иммунную систему для уничтожения причинного вируса."}},{symptoms:[36,37,0,38,8],diagnosis:"АВ блокады сердца",help:{about_title:"Что такое АВ блокады сердца?",about_text:"частичное или полное прерывание проведения импульса от предсердий к желудочкам. Наиболее частой причиной является идиопатический фиброз или склероз проводящей системы сердца.",symp_title:"Лечение АВ блокады сердца",symp_text:"Обратитесь к врачу"}},{symptoms:[39,40,41,8,6,1,10,16],diagnosis:"пневмония",help:{about_title:"Что такое пневмония?",about_text:"Пневмония — острое инфекционно-воспалительное заболевание легких, вызванное бактериями, вирусами, простейшими или спорами грибов. Может возникать как самостоятельная патология или осложнять течение иных проблем со здоровьем (гриппа, иммунодефицитов, острых воспалительных процессов любой локализации, новообразований и прочих). Значительно снижает качество жизни человека и при отсутствии своевременно начатой терапии может приводить к ряду серьезных осложнений. Избежать плохого прогноза помогут специалисты медицинского холдинга «СМ-Клиника». В короткий срок они проведут информативное обследование, выставят верный диагноз и назначат терапию, принимая которую вы вскоре почувствуете себя лучше.",symp_title:"Лечение пневмонии",symp_text:"В лечении острой пневмонии врачи-пульмонологи сети медицинских центров «СМ-Клиника» придерживаются индивидуального подхода к каждому пациенту с учетом международных рекомендаций по терапии данной патологии. Срок лечения зависит от типа болезни, тяжести ее течения и других факторов. Пациенты с тяжелыми формами патологии подлежат госпитализации в стационар. Лечение пневмонии у взрослых и детей начинается сразу после постановки диагноза. Основу его составляют антибиотики. Выбирая антибактериальные препараты, специалист оценивает степень тяжести пневмонии, общую бактериальную нагрузку, наличие сопутствующей патологии, противопоказаний к действующему веществу и аллергологический анамнез пациента. В начале терапии пациенту назначают препараты максимально широкого спектра действия с учетом возможного возбудителя болезни. После того, как возбудитель будет верифицирован в лаборатории, возможна коррекция терапии – замена антибактериального препарата на более эффективный в данном случае. «СМ-Клиника» оснащена современным медицинским оборудованием, которое помогает проводить комплексные мероприятия по лечению пневмонии, такие как респираторная поддержка и экстракорпоральная мембранная оксигенация. Пациенту также могут быть назначены жаропонижающие, отхаркивающие средства, иммуномодуляторы, иммуноглобулины, глюкокортикостероиды."}},{symptoms:[42,44,43,45,46,47],diagnosis:"инсульт",help:{about_title:"Что такое инсульт?",about_text:"Патологическое состояние, характеризующееся острым нарушением кровоснабжения головного мозга и повреждением тканей органа, называют инсультом. Диагностикой и лечением этого заболевания занимаются неврологи.",symp_title:"Лечение инсульта",symp_text:"Обратитесь к врачу"}},{symptoms:[11,1,10,16,4,6,47],diagnosis:"диарея",help:{about_title:"Что такое диарея?",about_text:"Диарея (понос) — это патологическое состояние, при котором у человека появляется неоформленный или жидкий учащенный стул. Количество опорожнений кишечника может варьировать в широких пределах. Состояние часто сопровождается болью в животе, метеоризмом. Оно может быть следствием кишечных инфекций, воспалительных процессов в кишечнике, неврологических нарушений. Патология требует врачебного наблюдения и коррекции в амбулаторных или стационарных условиях.",symp_title:"Лечение диареи",symp_text:"Наибольшую опасность при острой диарее представляет потеря жидкости, поэтому в первую очередь проводится восстановление водного и электролитного баланса.При легких формах заболевания возможно восполнение потерянной жидкости при пероральном приеме. Наиболее эффективно применение растворов солевых растворов, которые представляют собой сбалансированную смесь цитрата натрия, хлорида натрия, хлорида калия и глюкозы. При отсутствии данных препаратов рекомендуется обильное питье негазированной минеральной воды, морсы, компот из сухофруктов и т п. При тяжелом течении, большой потере жидкости необходимо парентеральное (в виде капельниц) введение препаратов.Для снятия симптомов диареи применяются противодиарейные препараты, для уменьшения интоксикации используются энтеросорбенты.Если диарея носит инфекционный характер, пациенту назначаются антибиотики широкого спектра действия. После получения результатов посева лечение может быть скорректировано. Для восстановления флоры кишечника и уменьшения побочного эффекта от приема антибактериальных препаратов назначают пробиотики.Лечение хронической диареи проводится только после обследования, в зависимости от причины, вызвавшей заболевание. Во время поноса необходимо соблюдать диету. Пища должна быть легкоусвояемой, не раздражающей слизистую желудка. Необходимо исключить свеклу, редис, редьку, виноград, сливы, бобовые, фруктовые соки, соусы, специи, алкоголь, кофе, молоко, черный хлеб. Рекомендуются сухари из белого хлеба, отварной рис, фрикадельки или котлеты, приготовленные на пару из нежирного мяса, яблочное пюре, бананы."}},{symptoms:[0,11,10,16,40,14,8,17],diagnosis:"гастрит",help:{about_title:"Что такое гастрит?",about_text:"Гастрит представляет собой заболевание желудка, проявляющееся воспалением и дистрофией слизистой (внутренней) оболочки органа. Воспалительный процесс сопровождается нарушением пищеварения и появлением разнообразных симптомов, вроде боли в животе, изжоги, тошноты и рвоты. Без лечения гастрит может осложниться дефектами слизистых оболочек желудочно-кишечного тракта (язвами), недостаточным поступлением питательных веществ и разрывом стенки желудка с образованием тяжелого воспаления. Заболевание часто не проявляется какими-либо симптомами, поэтому достоверно выявить воспалительно-дистрофические изменения в органе можно только с помощью инструментальной и лабораторной диагностики. Гастрит представляет собой заболевание желудка, проявляющееся воспалением и дистрофией слизистой (внутренней) оболочки органа. Воспалительный процесс сопровождается нарушением пищеварения и появлением разнообразных симптомов, вроде боли в животе, изжоги, тошноты и рвоты. Без лечения гастрит может осложниться дефектами слизистых оболочек желудочно-кишечного тракта (язвами), недостаточным поступлением питательных веществ и разрывом стенки желудка с образованием тяжелого воспаления. Заболевание часто не проявляется какими-либо симптомами, поэтому достоверно выявить воспалительно-дистрофические изменения в органе можно только с помощью инструментальной и лабораторной диагностики. Гастрит представляет собой заболевание желудка, проявляющееся воспалением и дистрофией слизистой (внутренней) оболочки органа. Воспалительный процесс сопровождается нарушением пищеварения и появлением разнообразных симптомов, вроде боли в животе, изжоги, тошноты и рвоты. Без лечения гастрит может осложниться дефектами слизистых оболочек желудочно-кишечного тракта (язвами), недостаточным поступлением питательных веществ и разрывом стенки желудка с образованием тяжелого воспаления. Заболевание часто не проявляется какими-либо симптомами, поэтому достоверно выявить воспалительно-дистрофические изменения в органе можно только с помощью инструментальной и лабораторной диагностики. Гастрит представляет собой заболевание желудка, проявляющееся воспалением и дистрофией слизистой (внутренней) оболочки органа. Воспалительный процесс сопровождается нарушением пищеварения и появлением разнообразных симптомов, вроде боли в животе, изжоги, тошноты и рвоты. Без лечения гастрит может осложниться дефектами слизистых оболочек желудочно-кишечного тракта (язвами), недостаточным поступлением питательных веществ и разрывом стенки желудка с образованием тяжелого воспаления. Заболевание часто не проявляется какими-либо симптомами, поэтому достоверно выявить воспалительно-дистрофические изменения в органе можно только с помощью инструментальной и лабораторной диагностики. Гастрит представляет собой заболевание желудка, проявляющееся воспалением и дистрофией слизистой (внутренней) оболочки органа. Воспалительный процесс сопровождается нарушением пищеварения и появлением разнообразных симптомов, вроде боли в животе, изжоги, тошноты и рвоты. Без лечения гастрит может осложниться дефектами слизистых оболочек желудочно-кишечного тракта (язвами), недостаточным поступлением питательных веществ и разрывом стенки желудка с образованием тяжелого воспаления. Заболевание часто не проявляется какими-либо симптомами, поэтому достоверно выявить воспалительно-дистрофические изменения в органе можно только с помощью инструментальной и лабораторной диагностики. Гастрит представляет собой заболевание желудка, проявляющееся воспалением и дистрофией слизистой (внутренней) оболочки органа. Воспалительный процесс сопровождается нарушением пищеварения и появлением разнообразных симптомов, вроде боли в животе, изжоги, тошноты и рвоты. Без лечения гастрит может осложниться дефектами слизистых оболочек желудочно-кишечного тракта (язвами), недостаточным поступлением питательных веществ и разрывом стенки желудка с образованием тяжелого воспаления. Заболевание часто не проявляется какими-либо симптомами, поэтому достоверно выявить воспалительно-дистрофические изменения в органе можно только с помощью инструментальной и лабораторной диагностики. Гастрит представляет собой заболевание желудка, проявляющееся воспалением и дистрофией слизистой (внутренней) оболочки органа. Воспалительный процесс сопровождается нарушением пищеварения и появлением разнообразных симптомов, вроде боли в животе, изжоги, тошноты и рвоты. Без лечения гастрит может осложниться дефектами слизистых оболочек желудочно-кишечного тракта (язвами), недостаточным поступлением питательных веществ и разрывом стенки желудка с образованием тяжелого воспаления. Заболевание часто не проявляется какими-либо симптомами, поэтому достоверно выявить воспалительно-дистрофические изменения в органе можно только с помощью инструментальной и лабораторной диагностики. Гастрит представляет собой заболевание желудка, проявляющееся воспалением и дистрофией слизистой (внутренней) оболочки органа. Воспалительный процесс сопровождается нарушением пищеварения и появлением разнообразных симптомов, вроде боли в животе, изжоги, тошноты и рвоты. Без лечения гастрит может осложниться дефектами слизистых оболочек желудочно-кишечного тракта (язвами), недостаточным поступлением питательных веществ и разрывом стенки желудка с образованием тяжелого воспаления. Заболевание часто не проявляется какими-либо симптомами, поэтому достоверно выявить воспалительно-дистрофические изменения в органе можно только с помощью инструментальной и лабораторной диагностики. ",symp_title:"Лечение гастрита",symp_text:"Схема лечения гастрита у взрослых зависит от формы заболевания, его стадии, выраженности симптомов, особенностей поражения желудка, кислотности и т.п. В целом, медикаментозное лечение можно разделить на несколько блоков. Лечение инфекции. После подтверждения инфекционной формы гастрита врач назначает пациенту антибиотики, противогрибковые или противопаразитарные средства. При выявлении хеликобактера гастроэнтеролог проводит лечение противомикробными препаратами, уничтожающими бактерии. Перечисленные лекарства используются в комбинации с симптоматической терапией для достижения лучших результатов лечения; Лечение острой формы гастрита с помощью адсорбентов, поглощающих вредные вещества и выводящие их из организма, промывания желудка и внутривенного введения лекарств. При аутоиммунной природе воспаления гастроэнтеролог назначает кортикостероиды. Нормализация выделения соляной кислоты. В зависимости от формы гастрита пациенту требуется усиление или уменьшение выделения кислоты, поэтому гастроэнтеролог нашей клиники подбирает лекарства только после диагностики. Торможение секреции соляной кислоты производится с помощью ингибиторов протонной помпы и блокаторов Н2-рецепторов клеток желудка. Для улучшения секреции врач назначает пациенту препараты соляной кислоты; Гастроэнтерологи нашей клиники контролируют медикаментозное лечение на каждом этапе для исключения опасных осложнений гастрита и контроля функций пищеварительной системы."}}],userSymptoms:[],diagnosis:[]}),watch:{userSymptoms(){this.findDiagnosis()}},methods:{addSymp(t){t.active=!t.active,this.userSymptoms.includes(t)?this.userSymptoms=this.userSymptoms.filter((e=>e!==t)):this.userSymptoms.push(t),console.log(this.userSymptoms,"dadssadasd"),this.findDiagnosis()},closed(){this.objElement=null},itemClick(t){let e=-1;e=this.symptomsAndDiagnosis.findIndex((e=>e.diagnosis===t)),this.objElement=this.symptomsAndDiagnosis[e],console.log(this.objElement)},findDiagnosis(){let t=this.userSymptoms,e=0,i=[];for(let s=0;s<this.symptomsAndDiagnosis.length;s++){const a=this.symptomsAndDiagnosis[s];let l=0;for(let e=0;e<a.symptoms.length;e++)t.includes(this.symptomsList[a.symptoms[e]])&&l++;l>e?(e=l,i=[s]):l===e&&i.push(s)}if(i.length>0){const t=[];for(let e of i)t.push(this.symptomsAndDiagnosis[e].diagnosis);this.diagnosis=t}else this.diagnosis="Диагноз не найден"}}};const U=(0,Y.Z)(K,[["render",g],["__scopeId","data-v-672122fe"]]);var Z=U}}]);
//# sourceMappingURL=210.96e2d60e.js.map