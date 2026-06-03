const metodologia = {
  id: "metodologia",
  title: "Metodologia Studiilor de Impact",
  icon: "📋",
  color: "#e67e22",
  questions: [
    {
      id: 1,
      question: "Conceptul de dezvoltare durabila se refera la:",
      options: [
        "un tip de dezvoltare care urmareste satisfacerea nevoilor prezentului fara a compromite capacitatea generatiilor viitoare de a-si satisface propriile nevoi",
        "un model de dezvoltare in care societatea nu isi acopera cercerea de consum prin extinderea potentialului productiv",
        "un tip de dezvoltare orientat spre nevoile viitorului, fara a limita posibilitatea generatiilor actuale de a-si acoperi propriile necesitati"
      ],
      correct: [0]
    },
    {
      id: 2,
      question: "Cerintele esentiale pentru asigurarea unei dezvoltari durabile includ:",
      options: [
        "redimensionarea cresterii economice, reducerea saraciei si controlul dinamicii demografice",
        "conservarea si valorificarea durabila a resurselor naturale, gestionarea riscurilor si implicarea structurilor de guvernanta in deciziile privind protectia mediului",
        "orientarea exclusiva catre cresterea economica, indiferent de impactul social si de mediu"
      ],
      correct: [0, 1]
    },
    {
      id: 3,
      question: "Respectarea principiului dezvoltarii durabile presupune mentinerea unui echilibru permanent intre:",
      options: [
        "dimensiunea economica a dezvoltarii",
        "dimensiunea sociala a dezvoltarii",
        "dimensiunea ecologica a dezvoltarii"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 4,
      question: "Procesele industriale si, in particular cele chimice sunt:",
      options: [
        "activitati care genereaza emisii si desturi cu impact predominant negativ asupra mediului inconjurator",
        "surse de emisii si desturi care, printr-o gestionare adecvata, pot contribui la reducerea impactului asupra mediului si la optimizarea performantei ecologice",
        "activitati economice a caror caracteristica principala este generarea de poluantilor, indiferent de tehnologiile utilizate"
      ],
      correct: [1]
    },
    {
      id: 5,
      question: "Gestionarea activitatilor industriale si agricole cu potential ridicat de poluare este asigurata prin:",
      options: [
        "Directiva 2008/1/CE a Parlamentului European si a Consiliului din 15 ianuarie 2008, privind prevenirea si controlul integrat al poluarii",
        "sistemul de Prevenire si Control Integrat Poluarii (IPPC), aplicat instalatiilor cu impact semnificativ asupra mediului",
        "aplicarea exclusiva a masurilor voluntare adoptate de operatorii economici, fara un cadru legislativ obligatoriu"
      ],
      correct: [0, 1]
    },
    {
      id: 6,
      question: "Economia circulara reprezinta:",
      options: [
        "un model de dezvoltare orientat spre satisfacerea nevoilor prezentului fara a afecta capacitatea generatiilor viitoare de a-si acoperi propriile necesitati",
        "un ansamblu de reglementari ale Uniunii Europene privind gestionarea activitatilor industriale si agricole",
        "un model de productie si consum care promoveaza utilizarea in comun, inchirierea, reutilizarea, repararea, reconditionarea si reciclarea materialelor si produselor existente pentru a le prelungi durata de viata"
      ],
      correct: [2]
    },
    {
      id: 7,
      question: "Printre dezideratele prevenirii poluarii si productiei curate (Cleaner Production, CP) se regasesc:",
      options: [
        "prevenirea sau reducerea poluarii direct la sursa",
        "transformarea poluarii prevenibile in forme care pot fi eliminate automat fara evaluarea impactului asupra mediului",
        "tratarea, in conditii de siguranta pentru mediu, a poluarii care nu poate fi nici prevenita, nici transferata"
      ],
      correct: [0, 2]
    },
    {
      id: 8,
      question: "Unul dintre instrumentele cele mai eficiente pentru asigurarea dezvoltarii durabile este:",
      options: [
        "evaluarea graduala a nivelului de poluare a mediului, fara integrarea efectelor cumulative",
        "evaluarea impactului asupra mediului (EIM), ca instrument fundamental pentru anticiparea si gestionarea efectelor activitatilor asupra mediului",
        "aplicarea exclusiva a principiilor productiei curate, independent de cadrul legislativ si de analiza impactului asupra mediului"
      ],
      correct: [1]
    },
    {
      id: 9,
      question: "Evaluarea Impactului asupra Mediului (EIM) este straus legata de:",
      options: [
        "masurile de control al dinamicii demografice",
        "reglementarea si autorizarea activitatilor cu impact semnificativ asupra mediului",
        "reglementarea activitatilor care au un impact nesemnificativ asupra mediului"
      ],
      correct: [1]
    },
    {
      id: 10,
      question: "Studiul de impact asupra mediului are ca obiectiv principal:",
      options: [
        "investigarea stiintifica a efectelor potentiale ale unei activitati viitoare asupra mediului si formularea de recomandari pentru reducerea impactului negativ",
        "stabilirea procedurilor administrative si a competentelor institutionale pentru emiterea avizelor de mediu aferente planurilor si programelor",
        "reglementarea proceselor de evaluare a impactului in context transfrontfalier si a modalitatilor de participare publica in cazul proiectelor cu efecte transfronttaliere"
      ],
      correct: [0]
    },
    {
      id: 11,
      question: "Legislatia din Romania utilizeaza, ca element central al proceduri de evaluate a impactului asupra mediului:",
      options: [
        "raportul privind prevenirea poluarii si productia curata",
        "evaluarea starii de sanatate a populatiei",
        "raportul privind impactul asupra mediului"
      ],
      correct: [2]
    },
    {
      id: 12,
      question: "Avizul de mediu este emis pe baza:",
      options: [
        "raportului de mediu",
        "raportului privind impactul asupra mediului",
        "bilantului de mediu"
      ],
      correct: [0]
    },
    {
      id: 13,
      question: "Acordul de mediu este emis pe baza:",
      options: [
        "raportului privind impactul asupra mediului",
        "raportului de mediu",
        "bilantului de mediu"
      ],
      correct: [0]
    },
    {
      id: 14,
      question: "Autorizatia de mediu este emisà pe baza:",
      options: [
        "raportului de mediu",
        "bilantului de mediu",
        "raportului privind impactul asupra mediului"
      ],
      correct: [1]
    },
    {
      id: 15,
      question: "Autorizatia integrata de mediu este emisà pe baza:",
      options: [
        "raportului privind impactul asupra mediului",
        "bilantului de mediu",
        "raportului de amplasament"
      ],
      correct: [1]
    },
    {
      id: 16,
      question: "In Romania, bilantul de mediu constituie documentatia tehnica fundamentala utilizata in procesul de emitere a autorizatiei de mediu pentru activitatile existente.",
      options: [
        "adevarat",
        "fals",
        "partial adevarat"
      ],
      correct: [0]
    },
    {
      id: 17,
      question: "Bilantul de mediu (BM) reprezinta:",
      options: [
        "un proces structurat utilizat pentru a evalua probabilitatea aparitiei unor efecte adverse asupra sanatatii umane ca urmare a expunerii la poluanti din mediul inconjurator",
        "o procedura prin care se obtin informatii privind cauzele si consecintele efectelor negative cumulate, trecute, prezente si anticipate, ale unei activitati existente asupra mediului",
        "o analiza stiintifica a efectelor potentiale ale unei activitati viitoare asupra mediului, in vederea formularii de masuri de reducere a impactului negativ"
      ],
      correct: [1]
    },
    {
      id: 18,
      question: "Bilantul de mediu poate fi realizat la urmatoarele niveluri:",
      options: [
        "nivel 0",
        "nivel I",
        "nivel II"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 19,
      question: "Bilanturi de mediu sunt solicitate cu precadere in situatiile care implica transferul dreptului de proprietate asupra unei activitati sau instalatii.",
      options: [
        "adevarat",
        "fals",
        "partial adevarat"
      ],
      correct: [0]
    },
    {
      id: 20,
      question: "Termenul estimarea riscului se refera la:",
      options: [
        "procesul de analiza si cuantificare a riscului asociat unei expuneri sau activitati",
        "documentele care rezulta din acest proces",
        "ambele variante sunt false"
      ],
      correct: [0, 1]
    },
    {
      id: 21,
      question: "Riscul reprezintă probabilitatea aparitiei unui efect negativ intr-un interval de timp determinat si este frecvent exprimat prin relatia:",
      options: [
        "Risc = Pericol x Toxicitate",
        "Risc = Pericol x Gravitate",
        "Risc = Pericol x Expunere"
      ],
      correct: [2]
    },
    {
      id: 22,
      question: "Etapele estimarii riscului sunt:",
      options: [
        "identificarea hazardului si estimarea raportului doza-raspuns",
        "estimarea expunerii si caracterizarea riscului",
        "realizarea directa a caracterizării riscului fara parcurgerea etapelor anterioare"
      ],
      correct: [0, 1]
    },
    {
      id: 23,
      question: "Poluarea potențial semnificativă se referă la:",
      options: [
        "concentratii de poluanti care depasesc pragurile de alerta prevazute in reglementarile privind evaluarea poluarii mediului",
        "concentratii de poluanti care depasesc pragurile de interventie stabilite prin reglementarile privind evaluarea poluarii mediului",
        "concentratii de poluanti in aer, apă, sol sau in emisii/evacuări care indica door necesitatea unei monitorizari suplimentare, fara a implica depășirea unor praguri reglementate"
      ],
      correct: [0]
    },
    {
      id: 24,
      question: "Evaluarea impactului asupra mediului se aplica pentru:",
      options: [
        "proiecte ale unor activitati considerate cu impact nesemnificativ asupra mediului",
        "proiecte ale activitatilor care pot genera atat impact semnificativ, cat si impact nesemnificativ asupra mediului, in functie de rezultatele etapei de incadrare",
        "exclusiv proiecte ale activitatilor cu impact semnificativ asupra mediului"
      ],
      correct: [1]
    },
    {
      id: 25,
      question: "Evaluarea impactului asupra mediului:",
      options: [
        "este un proces prin care sunt identificate, descrise si analizate, conform legislatiei in vigoare, efectele directe, indirecte, cumulative, sinergice, principale si secundare ale unui proiect asupra sanaatatii populatiei si asupra mediului",
        "vizeaza efectele asupra mediului generate de activitati antropice, inclusiv cele care pot amplifica procese naturale de poluare",
        "reprezinta exclusiv o etapă procedurală din procesul de autorizare, fără a implica analiza efectelor asupra mediului"
      ],
      correct: [0, 1]
    },
    {
      id: 26,
      question: "Scopul evaluării impactului asupra mediului este:",
      options: [
        "să identifice măsuri de reducere a efectelor pozitive asupra apelor și solurilor",
        "să furnizeze factorii de decizie informatii despre consecintele pe care un proiect sau o politica propusă le are asupra mediului",
        "să nu promoveze o atitudine prietenoapă față de mediu și dezvoltarea durabila"
      ],
      correct: [1]
    },
    {
      id: 27,
      question: "Intr-o evaluare a impactului asupra mediului, receptorii pot fi:",
      options: [
        "mediile receptoare, precum apa, aerul si solul",
        "fiintele vii care traiesc in aceste medii (oameni, flora, fauna)",
        "elementele mediului amenajat, precum structuri, cladiri sau monumente"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 28,
      question: "Efectele directe asupra calitatii mediului sunt definite ca fiind:",
      options: [
        "efecte generate de o actiune care se produce in acelasi timp si in acelasi loc cu impactul observat",
        "efecte care apar ulterior in timp si spatiu, dar pot fi previzionate in mod rational",
        "efecte care apar mai tarziu in timp, insă in acelasi loc in care s-a produs actiunea"
      ],
      correct: [0]
    },
    {
      id: 29,
      question: "Efectele indirecte asupra calitatii mediului sunt definite ca fiind:",
      options: [
        "efecte generate de actiuni care se produc simultan si in acelasi loc cu impactul observat",
        "efecte care sunt in mod rational previzibile, dar nu se manifesta imediat in locul si momentul producerii actiunii",
        "efecte care sunt provocate de o actiune si apar ulterior in timp si spatiu, ca rezultat al unor procese intermediare"
      ],
      correct: [1, 2]
    },
    {
      id: 30,
      question: "Etapele procedurale ale evaluarii impactului asupra mediului sunt:",
      options: [
        "etapa de incadrare a proiectului",
        "etapa de definire a domeniului evaluarii si de elaborare a raportului privind impactul asupra mediului",
        "etapa de analiza a calitatii raportului privind impactul asupra mediului"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 31,
      question: "Studiile de evaluate a impactului se desfasoara de obicei in:",
      options: [
        "trei faze",
        "patru faze",
        "cinci faze"
      ],
      correct: [0]
    },
    {
      id: 32,
      question: "Incadrarea unui proiect in procedura EIM implica trei elemente principale:",
      options: [
        "existenta unor informatii suficiente privind proiectul",
        "identificarea posibilitatii ca proiectul sa genereze efecte asupra mediului",
        "estimarea semnificatiilor potentialelor impacturi"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 33,
      question: "Procedura de screening (incadrare) a proiectului este:",
      options: [
        "o etapa aplicata exclusiv proiectelor cu impact minor, fara relevanța pentru proiectele cu impact semnificativ",
        "prima decizie esentiala din procesul EIM, avand rolul de a stabili daca proiectul necesita sau nu realizarea unui studiu de evaluate a impactului asupra mediului",
        "o analiza preliminara a impactului potential si a semnificatiei acestuia, necesara datorita numarului mare de proiecte care pot intra sub incidenta EIM"
      ],
      correct: [1, 2]
    },
    {
      id: 34,
      question: "Screening-ul bazat pe discernamantul sau opinia expertului presupune:",
      options: [
        "o abordare complet standardizata, aplicata identic tuturor proiectelor",
        "aplicarea exclusiva a criteriilor cantitative, fara implicarea judecatii profesionale",
        "o abordare flexibila, adaptata caracteristicilor specifice ale proiectului si contextului sau"
      ],
      correct: [2]
    },
    {
      id: 35,
      question: "In practica, expertii pot ajusta domeniul evaluarii chiar in timp ce finalizează analiza de incadrare, mai ales in proiectele complexe:",
      options: [
        "adevarat",
        "fals",
        "partial adevarat"
      ],
      correct: [0]
    },
    {
      id: 36,
      question: "Scoping-ul (definirea domeniului evaluarii) este definit ca fiind:",
      options: [
        "prima decizie importantă din procesul EIM, care stabileste daca proiectul necesita sau nu studiu de impact",
        "o etapa critica la inceputul EIM, care identifică aspectele esentiale ce trebuie analizate in studiul de impact si elimina elementele cu relevanța redusa",
        "o etapă finală a EIM, prin care se determina semnificatia impacturilor asupra mediului"
      ],
      correct: [1]
    },
    {
      id: 37,
      question: "In practica, autoritatela competenta valideaza domeniul evaluarii, iar dezvoltatorul furnizează informatiile necesare; ambele parti contribuie la finalizarea scoping-ului.",
      options: [
        "adevarat",
        "fals",
        "partial adevarat"
      ],
      correct: [0]
    },
    {
      id: 38,
      question: "In termenul de 30 zile de la comunicarea deciziei etapei de incadrare a proiectului, autoritatea competenta pentru protectia mediului desfasoară etapa de definire a domeniului evaluarii:",
      options: [
        "adevarat",
        "partial adevarat",
        "fals"
      ],
      correct: [2]
    },
    {
      id: 39,
      question: "OG 91/2002 pentru modificarea si completarea Legii protectiei mediului nr. 137/1995, stipuleaza:",
      options: [
        "obligativitatea evaluării impactului asupra mediului in faza initiala a proiectelor cu impact nesemnificativ asupra mediului",
        "obligativitatea evaluării impactului asupra mediului in faza finală a proiectelor cu impact nesemnificativ asupra mediului",
        "obligativitatea evaluării impactului asupra mediului in faza initiala a proiectelor cu impact semnificativ asupra mediului"
      ],
      correct: [2]
    },
    {
      id: 40,
      question: "Sunt considerate principii de bună practica in EIM urmatoarele considerente:",
      options: [
        "EIM trebuie să se concentreze pe efectele nesemnificative asupra mediului, luand in considerare aspectele fara relevanță",
        "EIM trebuie să se concentreze pe efectele semnificative asupra mediului, luand in considerare aspectele relevante",
        "EIM trebuie să fie un procedeu dificil, inchis, cu acces limitat la documentatie"
      ],
      correct: [1]
    },
    {
      id: 41,
      question: "Etapa de realizare a raportului la studiul de evaluate are in vedere:",
      options: [
        "determinarea si evaluarea stării initiale de calitate a mediului in care urmeaza să se amplaseze proiectul",
        "continuarea identificării impactului, aprofundarea intelergerii naturii impactului, analiza extensiva a marimii, extinderii efectelor impactului",
        "ambele raspunsuri sunt gresite"
      ],
      correct: [0, 1]
    },
    {
      id: 42,
      question: "Activitatea de realizare a studiului de evaluate a impactului asupra mediului se finalizeaza prin elaborarea Raportului la studiul de evaluate a impactului asupra mediului care se intocmeste de catre:",
      options: [
        "o persoana juridica",
        "o persoana fizica independenta de titularul proiectului",
        "o persoana fizica dependenta de titularul proiectului"
      ],
      correct: [0, 1]
    },
    {
      id: 43,
      question: "In cadrul raportului la studiul de evaluate a impactului asupra mediului, evaluarea impactului potential este structurata pe:",
      options: [
        "componente de mediu",
        "indicatori de calitate ai apelor uzate",
        "caracteristici fizico-chimice ale apelor si solurilor"
      ],
      correct: [0]
    },
    {
      id: 44,
      question: "Pentru elaborarea acordului de mediu, autoritatea responsabila trebuie să aibă in vedere urmatoarele aspecte relevante pentru proiectul de dezvoltare:",
      options: [
        "evaluarea impactului social",
        "evaluarea impactului economic si urban",
        "evaluarea amplasamentului"
      ],
      correct: [0, 1]
    },
    {
      id: 45,
      question: "Activitătile sunt clasificate dupa impactul asupra mediului pe care il genereaza asfel:",
      options: [
        "activitati cu impact semnificativ asupra mediului",
        "activitati cu impact nesemnificativ asupra mediului",
        "activitati cu impact redus asupra mediului"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 46,
      question: "Diagnosticarea stării actuale a calitatii mediului, in contextul unei dezvoltări socio-economice programate si planificate, poate fi abordată in functie de:",
      options: [
        "fizionomia mediului - descrierea structurii, configuratiei si caracteristicilor vizibile ale mediului",
        "fiziologia mediului - analiza proceselor, fluxurilor si functionarii sistemelor de mediu",
        "socio-psihologia mediului - perceptia, utilizarea si relatia comunitatilor umane cu mediul"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 47,
      question: "Valorile principale ale evaluării impactului asupra mediului sunt:",
      options: [
        "durabilitatea, ca valoare secundară, neesentiala procesului de evaluate",
        "conformarea, prin respectarea legislatiei si a standardelor de protectie a mediului",
        "utilitatea, prin furnizarea de informatii relevante si credibile pentru factorii de decizie"
      ],
      correct: [1, 2]
    },
    {
      id: 48,
      question: "Printre obiectivele evaluării impactului asupra mediului se numără:",
      options: [
        "promovarea dezvoltării durabile prin integrarea criteriilor de mediu in procesul decizional",
        "minimizarea generării de deseuri si reducerea presiunilor asupra mediului",
        "conservarea resurselor naturale prin utilizarea lor eficienta si responsabila"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 49,
      question: "Procesul de evaluate a impactului asupra mediului trebuie aplicat:",
      options: [
        "cât mai devreme in procesul de luare a deciziilor",
        "acelor proiecte de dezvoltare cu efecte nesemnificative asupra mediului",
        "cât mai târziu in procesul de luare a deciziilor"
      ],
      correct: [0]
    },
    {
      id: 50,
      question: "Evaluarea impactului asupra mediului poate fi clasificată in functie de gradul de formalizare al procesului:",
      options: [
        "evaluate formala, realizată in cadrul procedurilor legale, cu etape, documentatie si standarde bine definite",
        "evaluate informala, utilizată ca instrument de sprijin in planificare, fara caracter obligatoriu si fara proceduri strict reglementate",
        "evaluate arbitrară, fara criterii metodologice clare"
      ],
      correct: [0, 1]
    },
    {
      id: 51,
      question: "Indicatorii ecologici utilizati in procedura EIM pot fi:",
      options: [
        "indicatori grupati pe factori de mediu",
        "indicatori grupati pe factori fizici si chimici",
        "indicatori grupati pe factori biologici"
      ],
      correct: [0]
    },
    {
      id: 52,
      question: "Indicatorii grupati pe factori de mediu utilizati in procesul de evaluate a impactului asupra mediului sunt:",
      options: [
        "apa, aer, sol",
        "biodiversitate",
        "sanatate umană"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 53,
      question: "Indicatorii grupati pe subsisteme/ecosisteme utilizati in procesul de evaluate a impactului asupra mediului sunt:",
      options: [
        "apă, aer, sol, biodiversitate si sanatate umana",
        "m³ de masă lemnoadă, m² de spatiu verde/locuit",
        "subsisteme/ecosisteme acvatice, terestre, silvice, urbane"
      ],
      correct: [2]
    },
    {
      id: 54,
      question: "Indicatorii primari/de bază cu caracter general sau specifici utilizati in procesul de evaluate a impactului asupra mediului sunt:",
      options: [
        "indicatori organoleptici",
        "indicatori fizico-chimici",
        "indicatori bio-bacteriologici sau radioactivi"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 55,
      question: "Limitările procesului de evaluate a impactului asupra mediului sunt:",
      options: [
        "EIM este un proces administrativ care identifică potentialele efecte asupra mediului generate de un proiect, prezentand factorii de decizie atat avantajele, cât si dezavantajele acestuia",
        "efectele adverse asupra mediului prezise de EIM pot conduce la impunerea unor conditii mai stricte sau chiar la abandonarea propunerii",
        "evaluarea impactului asupra mediului elimina complet orice incertitudine asociata proiectelor si garanteaza rezultate exacte si definitive"
      ],
      correct: [0, 1]
    },
    {
      id: 56,
      question: "Pentru elaborarea unui acord de mediu pentru o dezvoltare propusă, autoritatea responsabila trebuie să ia in considerare urmatoarele:",
      options: [
        "existenta unui acord prealabil informal, fara necesitatea analizării conditiilor de mediu",
        "natura si particularitatile mediului din zona afectata, inclusiv sensibilitatile si vulnerabilitatile locale",
        "prevedirile legislative, normative si de planificare relevante pentru proiectul propus"
      ],
      correct: [1, 2]
    },
    {
      id: 57,
      question: "European Environment Agency (EEA) utilizeaza trei seturi principale de indicatori de mediu:",
      options: [
        "indicatori ai stării mediului, care descriu conditiile actuale ale componentelor de mediu",
        "indicatori de stres, care reflecta presiunile exercitate asupra mediului de activitatile umane",
        "indicatori de presiune, utilizati pentru a evalua intensitatea si natura impacturilor antropice"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 58,
      question: "Metoda de evaluate a semnificatiei impacturilor asupra mediului prin utilizarea listelor de control vizează acordarea unor note de evaluare asfel:",
      options: [
        "răspunsurile de tip A (Da) = 2; răspunsurile de tip B (Nu) = 1",
        "răspunsurile de tip C (Nu este cazul/neaplicabil) = 0",
        "răspunsurile de tip A (Da) = 1; răspunsurile de tip B (Nu) = 2; răspunsurile de tip C (Nu este cazul/neaplicabil) = 0"
      ],
      correct: [0, 1]
    },
    {
      id: 59,
      question: "Metodele ad hoc:",
      options: [
        "se limiteaza la sugerarea arealelor de manifestare a impactelor potentiale",
        "o serie de impacte pot fi omise, ceea ce le limiteaza din valoare",
        "ambele variante sunt gresite"
      ],
      correct: [0, 1]
    },
    {
      id: 60,
      question: "Listele de control utilizate in procesul de evaluate a impactului asupra mediului:",
      options: [
        "listele de control surprind in mod exhaustiv toate impacturile posibile, fara riscul de omitere",
        "sunt bazate pe realizarea unei liste structurate a factorilor care trebuie luati in considerare in evaluate",
        "se bazeaza pe judecati emise a priori, reflectand experienta si expertiza evaluatorilor"
      ],
      correct: [1, 2]
    },
    {
      id: 61,
      question: "In analiza EIM sunt valabile urmatoarele tipuri de liste de control:",
      options: [
        "liste de gradare si de evaluate, utilizate pentru aprecierea comparativa a intensitatii si semnificatiei impacturilor",
        "liste simple si descriptive, care inventariaza si caracterizeaza factorii de mediu si tipurile de impact",
        "liste de control exclusiv financiare, care urmaresc doar costurile economice ale proiectului, fara referire la mediu"
      ],
      correct: [0, 1]
    },
    {
      id: 62,
      question: "Sistemele expert:",
      options: [
        "nu ofera un potential de informatii si date despre impacturi si evaluarea acestora",
        "sunt sisteme bazate pe cunoastere (software) aplicate in analiza impacturilor, planificarea, evaluarea si managementul mediului",
        "sistemele expert functioneaza exclusiv pe baza unor algoritmi simpli, fara a utiliza baze de cunostinte sau reguli specializate"
      ],
      correct: [1]
    },
    {
      id: 63,
      question: "Problemele care trebuie luate in considerare in procesul de EIM sunt:",
      options: [
        "substratul geologic al amplasamentului (structura si litologia) si istoricul evenimentelor naturale extreme",
        "analiza exclusiva a costurilor economice ale proiectului, fara a lua in considerare caracteristicile mediului sau contextul amplasamentului",
        "descrierea locatiei proiectului de dezvoltare, a scării de realizare, a design-ului si a tipului acestuia (industrial, comercial rezidential)"
      ],
      correct: [0, 2]
    },
    {
      id: 64,
      question: "Calitatea mediului se poate defini ca:",
      options: [
        "o modalitate primara de comunicare a mesajelor, avand un grad mare de generalizare si reprezentativitate a informatiei de mediu",
        "o necesitate biologica primara ce vizeaza potentialul de valorificare a resurselor",
        "un ansamblu conventional de caracteristici fizice, chimice, biologice si de alta natura, care permit incadrarea acestuia intr-o anumita categorie sau pozitionarea pe o scara ierarhica"
      ],
      correct: [2]
    },
    {
      id: 65,
      question: "In evaluarile de impact asupra mediului, metoda indicelui de poluare globala (Ipg) permite:",
      options: [
        "compararea stării mediului la un moment dat cu starea inregistrata intr-un moment anterior sau cu starea posibila intr-un viitor oarecare, in diferite conditii de dezvoltare",
        "identificarea cantitatii de poluanti eliberate in mediu",
        "punerea in evidenta a indicatorilor de calitate a mediului"
      ],
      correct: [0]
    },
    {
      id: 66,
      question: "Aspectele de mediu ce se analizează prin metoda MERI (metoda matricei de evaluate rapida a impactului asupra mediului) se clasifică in următoarele clase:",
      options: [
        "socio-ecologice (SE) si economico-operationale, care reflectă interactiunile dintre activitatile umane, comunitati si functionarea proiectului",
        "fizico-chimice (FC) si biologico-ecologice (BE), care surprind caracteristicile naturale ale mediului si dinamica ecosistemelor",
        "aspecte strict administrative, fara legatura cu caracteristicile mediului sau cu evaluarea impacturilor"
      ],
      correct: [0, 1]
    },
    {
      id: 67,
      question: "Sistemele expert:",
      options: [
        "ofera un mare potential de informatii si date despre impacturi si evaluarea acestora si sunt valorificate in auditul si managementul mediului",
        "sunt sisteme bazate pe cunoastere (software) aplicate in analiza impacturilor, planificarea, evaluarea si managementul mediului",
        "presupun metode specifice care vizeaza realizarea de modele matematice"
      ],
      correct: [0, 1]
    },
    {
      id: 68,
      question: "Metodele multicriteriale:",
      options: [
        "identifica atributele particulare ale optiunilor de dezvoltare antropica",
        "evalueaza si compara diferitele alternative de dezvoltare ale unei activitati antropice",
        "depind de opinia subiectiva a expertilor si evaluatorilor"
      ],
      correct: [0, 1, 2]
    },
    {
      id: 69,
      question: "Matricea Leopold poate fi utilizată pentru a masura si interpreta impacturile prin clasificarea acestora in functie de:",
      options: [
        "magnitudine",
        "importanta",
        "frecventa si gravitate"
      ],
      correct: [0, 1]
    },
    {
      id: 70,
      question: "In contextul evaluării impactului asupra mediului, poluantii persistenti sunt definiti ca:",
      options: [
        "substante care au efecte benefice asupra ecosistemelor datorita bioacumularii in sedimente si organisme",
        "substante care se degradeaza foarte lent, persista in mediu pe perioade indelungate, se pot bioacumula si pot genera impacturi semnificative, fiind dificil de eliminat chiar si dupa aplicarea masurilor de prevenire si atenuare evaluate in cadrul EIM",
        "substante care contribuie pozitiv la stabilitatea mediului prin acumulare in componentele naturale"
      ],
      correct: [1]
    }
  ]
};

export default metodologia;
