// data.js — curriculum data for the English Learning App
// Mirrors the structure of the French app: BLOCKS (grammar arc) + DAY_DETAILS (per-day content).
// Direction is flipped from the French app: English is the target language being practiced
// (spoken aloud, primary in examples), French is the native/explanatory language (missions,
// notices, grammar labels). See CONJUGATIONS below for reusable verb tables.

const CONJUGATIONS = {
  toBePresent: { title: "to be (présent simple)", rows: [["I", "am"], ["you", "are"], ["he / she / it", "is"], ["we", "are"], ["you (pluriel)", "are"], ["they", "are"]], note: "« to be » est irrégulier — il faut l'apprendre par cœur, comme « être » en français." },
  toHavePresent: { title: "to have (présent simple)", rows: [["I", "have"], ["you", "have"], ["he / she / it", "has"], ["we", "have"], ["you (pluriel)", "have"], ["they", "have"]], note: "Seule la 3e personne du singulier change : has (pas « haves »)." },
  toHaveGot: { title: "to have got (forme britannique, même sens que have)", rows: [["I", "have got / I've got"], ["you", "have got / you've got"], ["he / she / it", "has got / he's got"], ["we", "have got / we've got"], ["you (pluriel)", "have got / you've got"], ["they", "have got / they've got"]], note: "« have got » et « have » veulent dire la même chose. À l'oral (surtout en anglais britannique), « have got » est très fréquent." },
  canModal: { title: "can (modal — ne change jamais)", rows: [["I", "can"], ["you", "can"], ["he / she / it", "can"], ["we", "can"], ["you (pluriel)", "can"], ["they", "can"]], note: "Les modaux comme « can » ne prennent jamais de -s à la 3e personne, contrairement aux verbes normaux (he can, jamais « he cans »)." },
  wantPresent: { title: "to want (présent simple)", rows: [["I", "want"], ["you", "want"], ["he / she / it", "wants"], ["we", "want"], ["you (pluriel)", "want"], ["they", "want"]] },
  doDoesQuestions: { title: "do / does (pour les questions et négations)", rows: [["I / you / we / they", "do"], ["he / she / it", "does"]], note: "« do/does » n'a pas de sens propre ici — c'est un outil grammatical pour construire les questions et négations avec les verbes ordinaires (I don't like, Does he like...?)." },
  thereIsAre: { title: "there is / there are", rows: [["there is (singulier)", "there's"], ["there are (pluriel)", "there're — rare à l'écrit, on dit plutôt « there are »"]], note: "Pas d'équivalent en un seul mot en français — « there is/are » correspond à « il y a »." }
};

const BLOCKS = [
  {
    range: [1, 10],
    color: "#5B8DB8",
    title: "Présent — fondations",
    grammar: "to be, to have / have got, can, want, do/does (questions et négations), there is/are",
    vocabFocus: "Pronoms sujets, famille, besoins de base, existence (there is/are)",
    prompts: [
      "Talk about yourself and your family using 'to be' — use at least three different forms.",
      "Say what you have and what you can do.",
      "Describe what there is in your house or your town."
    ]
  },
  {
    range: [11, 20],
    color: "#5B8DB8",
    title: "Présent — maîtrise & present continuous",
    grammar: "to know, to come, to see, to take, to say, to put, need to/have to, chunks conversationnels, present continuous (I'm doing)",
    vocabFocus: "Verbes courants, expressions de conversation courante",
    prompts: [
      "Record a one-minute mini-monologue mixing everything from Block 1.",
      "Say what you're doing right now, using the present continuous.",
      "Use at least three conversational chunks in a row (I think..., Maybe..., Really?)."
    ]
  },
  {
    range: [21, 35],
    color: "#c0392b",
    title: "Past simple — raconter ce qui s'est passé",
    grammar: "Past simple — verbes réguliers (-ed), verbes irréguliers fréquents, was/were, questions et négations au passé",
    vocabFocus: "Vocabulaire du quotidien passé, marqueurs temporels (yesterday, last week)",
    prompts: [
      "Talk about what you did yesterday using regular -ed verbs.",
      "Talk about where you went and what happened, using irregular past verbs.",
      "Ask someone what they did today, then answer for yourself."
    ]
  },
  {
    range: [36, 50],
    color: "#2E8B8B",
    title: "Going to, impératif & just + past",
    grammar: "going to (futur proche), impératif (commandes/demandes), just + past (je viens de...)",
    vocabFocus: "Projets, demandes du quotidien, actions récentes",
    prompts: [
      "Say three things you're going to do this week.",
      "Give three requests you'd really make at home, using the imperative.",
      "Say what you just did, using 'just' + past."
    ]
  },
  {
    range: [51, 55],
    color: "#8e6bb0",
    title: "Formules d'adoucissement",
    grammar: "I would like, could you, it would be, formules de politesse",
    vocabFocus: "Politesse, négociation douce, désaccord respectueux",
    prompts: [
      "Use 'I would like' and 'could you' in two softened requests.",
      "Practice a polite disagreement: 'I don't agree, but...'"
    ]
  },
  {
    range: [56, 57],
    color: "#c0392b",
    title: "Bilan intermédiaire",
    grammar: "Aucune nouvelle structure — intégration du présent, present continuous, past simple, going to, impératif, formules de politesse",
    vocabFocus: "Tout le vocabulaire des blocs précédents",
    prompts: [
      "Record a two-minute monologue mixing present, present continuous, past simple, going to, and one polite formula.",
      "Have a real conversation, ten minutes or more, with no French for the first five minutes."
    ]
  },
  {
    range: [58, 68],
    color: "#2E8B8B",
    title: "Past continuous — décrire, comparer, raconter",
    grammar: "Past continuous (was/were + -ing), usages : description, action interrompue (was doing X when Y happened), used to pour les habitudes passées, pronunciation (th, h, voyelles longues/courtes, connected speech)",
    vocabFocus: "Souvenirs, description au passé, sons difficiles pour un francophone",
    prompts: [
      "Describe a scene from the past using the past continuous.",
      "Tell an interruption: 'I was doing X when Y happened.'",
      "Practice the 'th' sound: think vs. sink, this vs. zis."
    ]
  },
  {
    range: [69, 70],
    color: "#8e44ad",
    title: "Bilan final — l'histoire de Pierrot et Hettia",
    grammar: "Aucune nouvelle structure — test de compréhension (lecture des chapitres) et de fluidité (conversation finale) après le cours complet",
    vocabFocus: "Tout le vocabulaire du cours",
    prompts: [
      "Read the chapters and summarize the story in your own words.",
      "Have a real conversation, ten minutes or more, about the story, with no French.",
      "Record a final monologue — compare it to your very first day."
    ]
  }
];

const DAY_DETAILS = {
  1: { grammar: "to be — forme affirmative (I am, you are, he/she/it is...)", vocab: "Pronoms sujets : I, you, he, she, it, we, they", vocabWords: ["I", "you", "he", "she", "it", "we", "they"], vocabExamples: [["I am happy.", "Je suis heureux/heureuse."], ["You are kind.", "Tu es gentil(le)."], ["He is here.", "Il est ici."], ["We are ready.", "Nous sommes prêts."]], didYouNotice: "« to be » ne change presque jamais — seulement am / are / is. En français, être change beaucoup plus. Ce sera une des rares fois où l'anglais est plus simple que le français !", mistake: { wrong: "I have 30 years.", right: "I am 30 years old.", note: "En anglais, on EST un âge (to be), on ne l'a pas (to have), contrairement au français « avoir X ans »." }, tables: [CONJUGATIONS.toBePresent], prompt: "Parle de toi et de ta famille avec « to be » — utilise au moins trois formes différentes (I am, you are, he/she is...)." },
  2: { grammar: "to be — négation et questions (I am not, Are you...?, Is he...?)", vocab: "Négation et inversion", vocabWords: ["not", "Are you...?", "Is he/she...?"], vocabExamples: [["I am not tired.", "Je ne suis pas fatigué(e)."], ["Are you ready?", "Es-tu prêt(e) ?"], ["Is she French?", "Est-elle française ?"], ["We are not late.", "Nous ne sommes pas en retard."]], didYouNotice: "Pour poser une question avec « to be », on inverse simplement le sujet et le verbe : « You are » devient « Are you? ». Pas besoin d'un mot supplémentaire, contrairement au « est-ce que » français.", tables: [CONJUGATIONS.toBePresent], prompt: "Pose trois questions avec « to be » à quelqu'un, et réponds à la forme négative si la réponse est non." },
  3: { grammar: "to have — présent simple (I have, you have, he/she has...)", vocab: "Possession : famille, objets", vocabWords: ["a brother", "a sister", "a car", "a house"], vocabExamples: [["I have a sister.", "J'ai une sœur."], ["He has a car.", "Il a une voiture."], ["We have a big family.", "Nous avons une grande famille."], ["They have two children.", "Ils ont deux enfants."]], mistake: { wrong: "She has 25 years.", right: "She is 25 years old.", note: "Même piège qu'au Jour 1 : l'âge se dit avec « to be », jamais avec « to have »." }, tables: [CONJUGATIONS.toHavePresent], prompt: "Dis trois choses que tu as et trois choses que ta famille a, avec « to have »." },
  4: { grammar: "to have got — forme alternative de have, très fréquente à l'oral", vocab: "Révision : possession", vocabWords: ["I've got", "he's got", "we've got"], vocabExamples: [["I've got a new phone.", "J'ai un nouveau téléphone."], ["He's got two sisters.", "Il a deux sœurs."], ["Have you got a car?", "As-tu une voiture ?"]], didYouNotice: "« have got » et « have » veulent dire exactement la même chose. Tu entendras les deux constamment — reconnais-les, mais commence par utiliser la forme simple « I have », plus facile à construire.", tables: [CONJUGATIONS.toHaveGot], prompt: "Reprends trois phrases du Jour 3 et redis-les avec « have got » à la place de « have »." },
  5: { grammar: "can — capacité et permission (I can, I can't, Can you...?)", vocab: "Capacités", vocabWords: ["can", "can't", "swim", "cook", "drive"], vocabExamples: [["I can swim.", "Je sais nager."], ["I can't cook.", "Je ne sais pas cuisiner."], ["Can you drive?", "Sais-tu conduire ?"], ["She can speak English.", "Elle sait parler anglais."]], didYouNotice: "« can » ne prend jamais de -s, même à la 3e personne : « he can », jamais « he cans ». C'est un modal — ils ont tous cette règle (will, must, should...).", tables: [CONJUGATIONS.canModal], prompt: "Dis trois choses que tu sais faire et une chose que tu ne sais pas faire, avec « can »." },
  6: { grammar: "want + to + infinitif (I want to...)", vocab: "Envies, objectifs", vocabWords: ["want to", "learn", "travel", "visit"], vocabExamples: [["I want to learn English.", "Je veux apprendre l'anglais."], ["She wants to travel.", "Elle veut voyager."], ["Do you want to visit Paris?", "Veux-tu visiter Paris ?"]], tables: [CONJUGATIONS.wantPresent], prompt: "Dis trois choses que tu veux faire, avec « I want to... »." },
  7: { grammar: "do / does — questions et négations avec les verbes ordinaires", vocab: "Verbes du quotidien : like, work, live", vocabWords: ["like", "work", "live", "don't", "doesn't"], vocabExamples: [["I don't like coffee.", "Je n'aime pas le café."], ["Does he work here?", "Est-ce qu'il travaille ici ?"], ["We don't live in Paris.", "Nous n'habitons pas à Paris."]], didYouNotice: "« do/does » n'a aucun sens propre dans ces phrases — c'est juste un outil grammatical obligatoire pour les questions et négations avec les verbes ordinaires (pas avec to be, to have, ou les modaux).", tables: [CONJUGATIONS.doDoesQuestions], prompt: "Pose trois questions avec do/does à quelqu'un sur ses goûts ou son travail." },
  8: { grammar: "there is / there are — dire qu'une chose existe (forme affirmative)", vocab: "Lieux, objets du quotidien", vocabWords: ["there is", "there are", "a supermarket", "two people"], vocabExamples: [["There is a supermarket near here.", "Il y a un supermarché près d'ici."], ["There are two people in the room.", "Il y a deux personnes dans la pièce."], ["There is some milk in the fridge.", "Il y a du lait dans le frigo."]], didYouNotice: "« there is/are » sert à dire qu'une chose existe quelque part — l'équivalent de « il y a » en français, mais ce n'est pas un verbe unique : « is/are » change selon le singulier ou le pluriel.", tables: [CONJUGATIONS.thereIsAre], prompt: "Décris ce qu'il y a dans ta maison ou dans ta ville, avec « there is / there are »." },
  9: { grammar: "there is / there are — négation et questions (Is there...? Are there...? There isn't/aren't)", vocab: "Révision : lieux, objets", vocabWords: ["Is there...?", "Are there...?", "there isn't", "there aren't"], vocabExamples: [["Is there a bus?", "Y a-t-il un bus ?"], ["There isn't any milk.", "Il n'y a pas de lait."], ["Are there any shops nearby?", "Y a-t-il des magasins à proximité ?"]], tables: [CONJUGATIONS.thereIsAre], prompt: "Pose trois questions avec « Is there...? » ou « Are there...? » sur ta ville ou ta maison." },
  10: { grammar: "Checkpoint : to be, to have/have got, can, want, do/does, there is/are", vocab: "Révision de tout le bloc 1", vocabWords: [], tables: [], prompt: "Enregistre un mini-monologue d'une minute mélangeant to be, to have, can, want, do/does et there is/are — sans regarder tes notes." }
};
