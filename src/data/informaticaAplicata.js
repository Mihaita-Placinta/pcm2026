const biochimie = {
  id: "biochimie",
  title: "Biochimie",
  icon: "🧬",
  description: "Monoglucide, lipide, peptide, proteine și vitamine",
  color: "#e74c3c",
  questions: [
    {
      id: 1,
      question: "Monoglucidele se pot clasifica după (răspuns multiplu):",
      options: [
        "numărul de atomi de carbon din moleculă",
        "natura grupei carbonil",
        "natura grupei OH"
      ],
      correct: [0, 1],
      explanation: "Monoglucidele se clasifică după numărul atomilor de carbon și după natura grupei carbonil."
    },
    {
      id: 2,
      question: "După natura grupării carbonil, monoglucidele se clasifică în:",
      options: [
        "aldoze şi cetoze",
        "saturate şi nesaturate",
        "pentoze şi hexoze"
      ],
      correct: [0],
      explanation: "Monoglucidele se împart în aldoze și cetoze în funcție de natura grupării carbonil."
    },
    {
      id: 3,
      question: "Monoglucidele sunt substanțe cu funcțiuni mixte alcătuite din:",
      options: [
        "o grupare hidroxil și mai multe grupări carbonil",
        "o grupare carboxil și mai multe grupări hidroxil",
        "o grupare carbonil și mai multe grupări hidroxil"
      ],
      correct: [2],
      explanation: "Monoglucidele conțin o grupare carbonil și mai multe grupări hidroxil."
    },
    {
      id: 4,
      question: "Glucoza, fructoza, manoza și galactoza aparțin grupei:",
      options: [
        "triozelor",
        "pentozelor",
        "hexozelor"
      ],
      correct: [2],
      explanation: "Aceste monoglucide conțin 6 atomi de carbon și fac parte din grupa hexozelor."
    },
    {
      id: 5,
      question: "Hexozele sunt:",
      options: [
        "monoglucide care conțin în moleculă 6 atomi de carbon",
        "oligoglucide formate din 6 monoglucide",
        "poliglucide"
      ],
      correct: [0],
      explanation: "Hexozele sunt monoglucide cu 6 atomi de carbon în moleculă."
    },
    {
      id: 6,
      question: "Din clasa poliglucidelor face parte:",
      options: [
        "fructoza",
        "celuloza",
        "zaharoza"
      ],
      correct: [1],
      explanation: "Celuloza este o poliglucidă (polizaharidă)."
    },
    {
      id: 7,
      question: "Monoglucidele cu structură neramificată care pot fi reprezentate sub formă liniară, ciclică plană și ciclică spațială sunt (răspuns multiplu):",
      options: [
        "apioza",
        "glucoza",
        "fructoza"
      ],
      correct: [1, 2],
      explanation: "Glucoza și fructoza pot exista în formă liniară și în forme ciclice."
    },
        {
      id: 8,
      question: "Ciclizarea monoglucidelor poate conduce la obţinerea unor cicluri stabile formate din (răspuns multiplu):",
      options: [
        "7 atomi",
        "6 atomi",
        "5 atomi"
      ],
      correct: [1, 2],
      explanation: "Prin ciclizare se formează cicluri stabile cu 5 atomi (furanozice) sau 6 atomi (piranozice)."
    },
    {
      id: 9,
      question: "Hidroxilul glicozidic (semiacetalic) format prin ciclizarea monoglucidelor este:",
      options: [
        "la fel de reactiv ca şi ceilalţi hidroxili din moleculă",
        "mai reactiv decât ceilalţi hidroxili din moleculă",
        "mai puţin reactiv faţă de ceilalţi hidroxili din moleculă"
      ],
      correct: [1],
      explanation: "Hidroxilul glicozidic este mai reactiv decât ceilalţi hidroxili din moleculă."
    },
    {
      id: 10,
      question: "Monoglucidele prezintă izomerie (răspuns multiplu):",
      options: [
        "de compensaţie funcţională",
        "de catenă",
        "optică"
      ],
      correct: [0, 2],
      explanation: "Monoglucidele prezintă izomerie de compensaţie funcţională (aldoze-cetoze) şi izomerie optică."
    },
    {
      id: 11,
      question: "Următoarele glucide prezintă izomerie optică deoarece conţin unul sau mai mulţi atomi de carbon asimetrici (răspuns multiplu):",
      options: [
        "dihidroxiacetona",
        "aldehida glicerică",
        "glucoza"
      ],
      correct: [1, 2],
      explanation: "Aldehida glicerică şi glucoza conţin atomi de carbon asimetrici. Dihidroxiacetona nu are centru chiral."
    },
    {
      id: 12,
      question: "Următoarele glucide sunt epimere (răspuns multiplu):",
      options: [
        "glucoza şi manoza",
        "glucoza şi galactoza",
        "glucoza şi fructoza"
      ],
      correct: [0, 1],
      explanation: "Glucoza şi manoza sunt epimere la C2, iar glucoza şi galactoza sunt epimere la C4."
    },
    {
      id: 13,
      question: "Fenomenul stabilirii echilibrului între cei doi anomeri α şi β în soluţie se numeşte:",
      options: [
        "activitate optică",
        "mutarotaţie",
        "proces redox"
      ],
      correct: [1],
      explanation: "Mutarotaţia reprezintă interconversia anomerilor α şi β până la atingerea echilibrului."
    }
  ]
};

export default biochimie;