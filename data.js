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
  thereIsAre: { title: "there is / there are", rows: [["there is (singulier)", "there's", "there is"], ["there are (pluriel)", "there're — rare à l'écrit, on dit plutôt « there are »", "there are"]], note: "Pas d'équivalent en un seul mot en français — « there is/are » correspond à « il y a »." },

  // --- Bloc 2 : présent maîtrise & present continuous ---
  toKnowPresent: { title: "to know (présent simple)", rows: [["I", "know"], ["you", "know"], ["he / she / it", "knows"], ["we", "know"], ["you (pluriel)", "know"], ["they", "know"]], note: "Seule la 3e personne du singulier prend un -s : knows." },
  toComePresent: { title: "to come (présent simple)", rows: [["I", "come"], ["you", "come"], ["he / she / it", "comes"], ["we", "come"], ["you (pluriel)", "come"], ["they", "come"]] },
  toSeePresent: { title: "to see (présent simple)", rows: [["I", "see"], ["you", "see"], ["he / she / it", "sees"], ["we", "see"], ["you (pluriel)", "see"], ["they", "see"]] },
  toTakePresent: { title: "to take (présent simple)", rows: [["I", "take"], ["you", "take"], ["he / she / it", "takes"], ["we", "take"], ["you (pluriel)", "take"], ["they", "take"]] },
  toSayPresent: { title: "to say (présent simple)", rows: [["I", "say"], ["you", "say"], ["he / she / it", "says"], ["we", "say"], ["you (pluriel)", "say"], ["they", "say"]], note: "Attention à la prononciation de « says » — /sɛz/, pas /seɪz/ comme le reste de la conjugaison." },
  toPutPresent: { title: "to put (présent simple)", rows: [["I", "put"], ["you", "put"], ["he / she / it", "puts"], ["we", "put"], ["you (pluriel)", "put"], ["they", "put"]], note: "« put » ne change jamais de forme, même au passé (put → put → put)." },
  needHaveTo: { title: "need to / have to (obligation)", rows: [["I / you / we / they", "need to / have to"], ["he / she / it", "needs to / has to"]], note: "« need to » et « have to » veulent presque dire la même chose. « have to » est un peu plus fort, comme une règle ; « need to » sonne plus personnel." },
  presentContinuous: { title: "present continuous : to be + verbe-ing", rows: [["I", "am doing"], ["you", "are doing"], ["he / she / it", "is doing"], ["we", "are doing"], ["you (pluriel)", "are doing"], ["they", "are doing"]], note: "Deux pièces, comme le passé composé français : « to be » conjugué + verbe en -ing. Utilisé pour une action en train de se passer maintenant." },

  // --- Bloc 3 : past simple ---
  pastSimpleRegular: { title: "past simple — verbes réguliers (+ -ed)", rows: [["I / you / he / she / it / we / they", "verbe + -ed (même forme pour tout le monde !)", "I talked"]], note: "Contrairement au français, le past simple ne change JAMAIS selon la personne. talk → talked, pour « je », « tu », « il », tout le monde." },
  wasWere: { title: "was / were — passé de « to be »", rows: [["I", "was"], ["you", "were"], ["he / she / it", "was"], ["we", "were"], ["you (pluriel)", "were"], ["they", "were"]], note: "« to be » est le seul verbe encore irrégulier même au passé le plus simple : was pour le singulier, were pour le pluriel (et you)." },
  pastSimpleDidQuestions: { title: "did — questions et négations au passé", rows: [["I / you / he / she / it / we / they", "did (question) / didn't (négation)"]], note: "Comme « do/does » au présent, « did » est un outil grammatical : il porte le passé, donc le verbe qui suit reste à l'infinitif sans « to ». Did you go? — jamais « Did you went? »." },

  // --- Bloc 4 : going to, impératif, just + past ---
  goingTo: { title: "going to — futur proche (plan déjà décidé)", rows: [["I", "am going to"], ["you", "are going to"], ["he / she / it", "is going to"], ["we", "are going to"], ["you (pluriel)", "are going to"], ["they", "are going to"]], note: "« to be » conjugué + going to + verbe à l'infinitif. Comme « aller + infinitif » en français : I am going to eat = Je vais manger." },
  imperativeForms: { title: "impératif — forme de base et « let's »", rows: [["ordre / demande directe", "verbe seul, sans sujet : Come here. Wait. Tell me.", "Come here."], ["forme négative", "Don't + verbe : Don't worry.", "Don't worry."], ["« nous » inclusif", "Let's + verbe : Let's go. Let's eat.", "Let's go."]], note: "L'impératif anglais est le plus simple des trois langues : toujours la base du verbe, sans terminaison — pas de distinction tu/vous comme en français." },
  justPast: { title: "just + past simple — action très récente", rows: [["I / you / he / she / it / we / they", "just + verbe au past simple : I just finished.", "I just finished."]], note: "Équivalent de « venir de » + infinitif en français : I just ate = Je viens de manger." },

  // --- Bloc 5 : formules d'adoucissement ---
  politeFormulas: { title: "formules de politesse", rows: [["I would like / I'd like", "demande adoucie — équivalent de « je voudrais »", "I would like"], ["Could you...?", "demande polie — équivalent de « tu pourrais »", "Could you...?"], ["Would you mind...?", "très poli — littéralement « ça te dérangerait de... ? », suivi d'un verbe en -ing", "Would you mind...?"], ["It would be...", "équivalent de « ça serait... »", "It would be..."]], note: "« would » est la clé de la politesse en anglais, tout comme le conditionnel en français." },

  // --- Bloc 7 : past continuous ---
  pastContinuous: { title: "past continuous : was/were + verbe-ing", rows: [["I", "was doing"], ["you", "were doing"], ["he / she / it", "was doing"], ["we", "were doing"], ["you (pluriel)", "were doing"], ["they", "were doing"]], note: "Formé avec was/were (comme l'imparfait de être) + verbe en -ing. Utilisé pour décrire une scène, une action en cours, ou une action interrompue." },
  usedTo: { title: "used to — habitude passée révolue", rows: [["I / you / he / she / it / we / they", "used to + verbe à l'infinitif : I used to live in Lagos.", "I used to live in Lagos."]], note: "Équivalent le plus proche de l'imparfait français pour une habitude : « used to » ne change jamais de forme, quel que soit le sujet." }
};

// SESSION_TEMPLATE — the 4 fixed steps of every day's session checklist.
// [English headline (short, bold via .checklist-fr), French gloss with
// timing]. Mirrors the French app's own template directly translated —
// English leads because it's the target-language activity name, same
// convention as VOCAB/CHUNKS below; French carries the fuller instruction.
const SESSION_TEMPLATE = [
  ["Review", "Rappel rapide du vocabulaire et des phrases d'exemple d'aujourd'hui (3–5 min)"],
  ["Listen & repeat", "Écoute chaque phrase d'exemple deux fois, puis répète-la à voix haute (7–8 min)"],
  ["Speaking practice", "Réponds à la mission du jour à voix haute — enregistré, ou avec une vraie personne (8–10 min)"],
  ["Reading or writing", "Relis le contenu du jour, ou écris 3–4 phrases avec la structure du jour (3–5 min)"]
];

// REVIEW_DAYS — taken directly from the French app (same block/day
// structure). The end-of-block checkpoint days; renderToday() puts the
// mission before the grammar reference on these, since the learner is
// retrieving, not learning something new.
const REVIEW_DAYS = [10, 20, 35, 50];

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
    titleEn: "Going to, the imperative & just + past",
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


// VOCAB — reference word bank for the Vocabulaire tab, organized by
// function (not raw frequency). Ported directly from the French app's real
// VOCAB (221 words) and flipped to [English, French] — English leads
// because it's the content being learned and spoken (speak() always uses
// en-GB, so position 0 must be English). Category names stay French: they're
// UI/organizational labels, not spoken content, matching the app's
// French-for-chrome convention. One exception: "Pronoms & déterminants" was
// hand-rebuilt rather than mechanically flipped, since French tu/vous,
// gendered le/la/les, and il/elle-for-things don't map 1:1 onto English
// pronouns — a literal flip produced entries like "you (formal/plural)" as
// a vocab word, which isn't real English to learn.
const VOCAB = {
  "Pronoms & déterminants": [
    ["I", "je"],
    ["you", "tu / vous"],
    ["he", "il"],
    ["she", "elle"],
    ["it", "il / elle (chose)"],
    ["we", "nous / on"],
    ["they", "ils / elles"],
    ["me", "moi"],
    ["him", "lui"],
    ["her", "elle / la (complément)"],
    ["us", "nous"],
    ["them", "eux / elles"],
    ["my", "mon / ma / mes"],
    ["your", "ton / ta / tes / votre"],
    ["his", "son / sa / ses (à lui)"],
    ["her", "son / sa / ses (à elle)"],
    ["our", "notre / nos"],
    ["their", "leur / leurs"],
    ["this", "ce / cette / ceci"],
    ["that", "ce / cette / cela"],
    ["these", "ces (proche)"],
    ["those", "ces (loin)"],
    ["who", "qui"],
    ["what", "que / quoi"],
    ["which", "lequel / laquelle"],
  ],
  "Verbes essentiels": [
    ["to be", "être"],
    ["to have", "avoir"],
    ["to do/make", "faire"],
    ["to go", "aller"],
    ["to be able to", "pouvoir"],
    ["to want", "vouloir"],
    ["to have to", "devoir"],
    ["to know (facts)", "savoir"],
    ["to see", "voir"],
    ["to take", "prendre"],
    ["to put", "mettre"],
    ["to say", "dire"],
    ["to come", "venir"],
    ["to be necessary", "falloir"],
    ["to like/love", "aimer"],
    ["to speak", "parler"],
    ["to think", "penser"],
    ["to believe", "croire"],
    ["to find/think", "trouver"],
    ["to give", "donner"],
    ["to ask", "demander"],
    ["to stay", "rester"],
    ["to pass/spend time", "passer"],
    ["to arrive", "arriver"],
    ["to go out", "sortir"],
    ["to leave", "partir"],
    ["to understand", "comprendre"],
    ["to know (people/places)", "connaître"],
    ["to feel/smell", "sentir"],
    ["to eat", "manger"],
    ["to drink", "boire"],
    ["to sleep", "dormir"],
    ["to work", "travailler"],
    ["to live (somewhere)", "habiter"],
    ["to listen", "écouter"],
    ["to watch/look", "regarder"],
    ["to wait", "attendre"],
    ["to try", "essayer"],
    ["to forget", "oublier"],
    ["to explain", "expliquer"],
  ],
  "Connecteurs & questions": [
    ["and", "et"],
    ["or", "ou"],
    ["but", "mais"],
    ["so", "donc"],
    ["because", "parce que"],
    ["so/then", "alors"],
    ["also", "aussi"],
    ["then", "puis"],
    ["next", "ensuite"],
    ["like/as", "comme"],
    ["if", "si"],
    ["when", "quand"],
    ["why", "pourquoi"],
    ["how", "comment"],
    ["how much", "combien"],
    ["which one", "lequel"],
    ["[question marker]", "est-ce que"],
  ],
  "Temps & quantité": [
    ["today", "aujourd'hui"],
    ["yesterday", "hier"],
    ["tomorrow", "demain"],
    ["now", "maintenant"],
    ["soon", "bientôt"],
    ["always", "toujours"],
    ["never", "jamais"],
    ["often", "souvent"],
    ["sometimes", "parfois"],
    ["already", "déjà"],
    ["still/again", "encore"],
    ["right away", "tout de suite"],
    ["a lot", "beaucoup"],
    ["a little", "un peu"],
    ["enough", "assez"],
    ["too much", "trop"],
    ["little", "peu"],
    ["more", "plus"],
    ["less", "moins"],
    ["all", "tout/tous/toute/toutes"],
    ["nothing", "rien"],
  ],
  "Famille & relation": [
    ["family", "famille"],
    ["mom", "maman"],
    ["dad", "papa"],
    ["brother", "frère"],
    ["sister", "sœur"],
    ["son", "fils"],
    ["daughter", "fille"],
    ["husband", "mari"],
    ["wife", "femme"],
    ["boyfriend/girlfriend", "copain/copine"],
    ["father-in-law/mother-in-law", "beau-père/belle-mère"],
    ["brother-in-law/sister-in-law", "beau-frère/belle-sœur"],
    ["grandparents", "grands-parents"],
    ["grandfather/grandmother", "grand-père/grand-mère"],
    ["child", "enfant"],
    ["baby", "bébé"],
    ["uncle/aunt", "oncle/tante"],
    ["cousin", "cousin/cousine"],
    ["love", "amour"],
    ["heart", "cœur"],
    ["together", "ensemble"],
    ["I miss you", "tu me manques"],
    ["to kiss/hug", "embrasser"],
    ["hug/cuddle", "câlin"],
    ["to support", "soutenir"],
    ["to share", "partager"],
    ["trust", "confiance"],
    ["argument", "dispute"],
    ["to make up", "se réconcilier"],
  ],
  "Émotions & opinions": [
    ["happy/glad", "content(e)"],
    ["happy", "heureux/heureuse"],
    ["sad", "triste"],
    ["angry", "fâché(e)"],
    ["worried", "inquiet/inquiète"],
    ["tired", "fatigué(e)"],
    ["stressed", "stressé(e)"],
    ["surprised", "surpris(e)"],
    ["proud", "fier/fière"],
    ["embarrassed", "gêné(e)"],
    ["to think that", "penser que"],
    ["to believe that", "croire que"],
    ["to find that", "trouver que"],
    ["to feel like", "avoir envie de"],
    ["to need", "avoir besoin de"],
    ["to be afraid of", "avoir peur de"],
    ["to look forward to", "avoir hâte de"],
    ["to hope", "espérer"],
    ["sorry", "désolé(e)"],
    ["to apologize", "s'excuser"],
    ["agreed/okay", "d'accord"],
    ["disagree", "pas d'accord"],
    ["sure", "sûr(e)"],
    ["maybe", "peut-être"],
    ["really", "vraiment"],
    ["honestly", "franchement"],
    ["honestly", "honnêtement"],
  ],
  "Vie quotidienne & maison": [
    ["house", "maison"],
    ["apartment", "appartement"],
    ["bedroom", "chambre"],
    ["kitchen", "cuisine"],
    ["living room", "salon"],
    ["work", "travail"],
    ["car", "voiture"],
    ["phone", "téléphone"],
    ["money", "argent"],
    ["time/weather", "temps"],
    ["day/week/weekend", "jour/semaine/week-end"],
    ["morning/evening/night", "matin/soir/nuit"],
    ["meal/dinner/lunch", "repas/dîner/déjeuner"],
    ["groceries", "courses"],
    ["to go grocery shopping", "faire les courses"],
    ["to tidy", "ranger"],
    ["to clean", "nettoyer"],
    ["to come home", "rentrer"],
    ["trip/vacation", "voyage/vacances"],
    ["appointment/date", "rendez-vous"],
    ["project/plan", "projet"],
    ["problem", "problème"],
    ["solution", "solution"],
  ],
  "Nourriture & social": [
    ["to eat", "manger"],
    ["to drink", "boire"],
    ["coffee", "café"],
    ["water", "eau"],
    ["restaurant", "restaurant"],
    ["to invite", "inviter"],
    ["party", "fête"],
    ["birthday", "anniversaire"],
    ["gift", "cadeau"],
    ["to grab a drink", "boire un verre"],
    ["to cook", "cuisiner"],
    ["recipe", "recette"],
    ["dish", "plat"],
    ["dessert", "dessert"],
    ["cheers", "santé"],
    ["enjoy your meal", "bon appétit"],
    ["to toast", "trinquer"],
    ["to share a meal", "partager un repas"],
  ],
  "Descripteurs": [
    ["good", "bon/bonne"],
    ["bad", "mauvais(e)"],
    ["big/tall", "grand(e)"],
    ["small", "petit(e)"],
    ["beautiful", "beau/belle"],
    ["kind", "gentil(le)"],
    ["funny", "drôle"],
    ["nice", "sympa"],
    ["hard/easy", "difficile/facile"],
    ["important", "important(e)"],
    ["different", "différent(e)"],
    ["same", "pareil(le)"],
    ["new", "nouveau/nouvelle"],
    ["old", "vieux/vieille"],
    ["young", "jeune"],
    ["interesting", "intéressant(e)"],
    ["boring", "ennuyeux/ennuyeuse"],
    ["busy", "occupé(e)"],
    ["free", "libre"],
    ["ready", "prêt(e)"],
    ["normal", "normal(e)"],
    ["weird", "bizarre"],
    ["great", "génial(e)"],
  ]
};

// CHUNKS — conversational formulas for the Phrases tab, learned as fixed
// blocks rather than conjugated piece by piece. Ported directly from the
// French app's real CHUNKS (40 phrases) and flipped to [English, French].
const CHUNKS = [
    ["I would like (s'utilise pour faire une demande polie ou exprimer ce que l'on souhaite obtenir)...", "Je voudrais..."],
    ["I would love to (s'utilise pour exprimer un souhait, une envie ou un désir.)...", "J'aimerais..."],
    ["Can you...", "Est-ce que tu peux..."],
    ["Could you...", "Est-ce que tu pourrais..."],
    ["What do you think about it?", "Qu'est-ce que tu en penses ?"],
    ["What do you want to do?", "Qu'est-ce que tu veux faire ?"],
    ["Are you up for...?", "Ça te dit de... ?"],
    ["It depends.", "Ça dépend."],
    ["I don't know.", "Je ne sais pas."],
    ["I'm sorry.", "Je suis désolé(e)."],
    ["You're right.", "Tu as raison."],
    ["You're wrong.", "Tu as tort."],
    ["I need to...", "Il faut que je..."],
    ["You need to...", "Il faut que tu..."],
    ["I just...", "Je viens de..."],
    ["I'm going to...", "Je vais..."],
    ["We'll see.", "On verra."],
    ["So much the better.", "Tant mieux."],
    ["Too bad / oh well.", "Tant pis."],
    ["How's it going?", "Ça va ?"],
    ["How did it go?", "Comment ça s'est passé ?"],
    ["What happened?", "Qu'est-ce qui s'est passé ?"],
    ["I miss you.", "Tu me manques."],
    ["I care about you.", "Je tiens à toi."],
    ["We can talk about it.", "On peut en parler."],
    ["I understand what you mean.", "Je comprends ce que tu veux dire."],
    ["It's not a big deal.", "Ce n'est pas grave."],
    ["Let me explain.", "Laisse-moi t'expliquer."],
    ["I'm proud of you.", "Je suis fier/fière de toi."],
    ["Congratulations!", "Félicitations !"],
    ["Good luck", "Bon courage."],
    ["Take care of yourself.", "Prends soin de toi."],
    ["See you soon (later today).", "À tout à l'heure."],
    ["When are we seeing each other?", "On se voit quand ?"],
    ["What are we eating tonight?", "Qu'est-ce qu'on mange ce soir ?"],
    ["Did you sleep well?", "Tu as bien dormi ?"],
    ["How was your day?", "Comment s'est passée ta journée ?"],
    ["I need...", "J'ai besoin de..."],
    ["It annoys me.", "Ça m'énerve."],
    ["It makes me happy.", "Ça me fait plaisir."],
];

// PRONUNCIATION_PATTERNS — recurring sound patterns that trip up French
// speakers, for the Prononciation tab. Each pattern applies broadly, not
// just to its example words. examples: [English word/phrase, hint/French note].
const PRONUNCIATION_PATTERNS = [
  {
    name: "Le son « th »",
    hint: "N'existe pas en français. La langue touche légèrement les dents — ce n'est ni un « s/z » ni un « f/v », même si c'est la tentation naturelle.",
    examples: [
      ["think", "voisé/non-voisé : comparer à « sink »"],
      ["this", "« th » voisé, comme un « z » soufflé"],
      ["three", "à ne pas dire « free »"]
    ]
  },
  {
    name: "Le « h » qui s'entend",
    hint: "En français, le h est toujours muet. En anglais, il faut souffler de l'air au début du mot — sinon « hair » sonne comme « air ».",
    examples: [
      ["house", "souffler avant le son « aou »"],
      ["happy", "souffler avant « appy »"],
      ["hello", "souffler avant « ello »"]
    ]
  },
  {
    name: "Voyelles courtes vs longues",
    hint: "L'anglais distingue des paires de voyelles où seule la durée (et un peu la qualité) change le sens du mot.",
    examples: [
      ["ship / sheep", "court « i » vs long « i: »"],
      ["full / fool", "court « u » vs long « u: »"],
      ["live / leave", "court « i » vs long « i: »"]
    ]
  },
  {
    name: "L'accent tonique",
    hint: "En français, l'accent tombe souvent en fin de mot. En anglais, une syllabe précise porte l'accent — se tromper rend le mot difficile à comprendre, même bien prononcé.",
    examples: [
      ["PHO-to-graph", "accent sur la 1ère syllabe"],
      ["pho-TO-gra-pher", "l'accent se déplace avec le suffixe"],
      ["com-fort-a-ble", "3 syllabes à l'oral, pas 4"]
    ]
  },
  {
    name: "Les terminaisons -ed",
    hint: "Le -ed du passé se prononce de trois façons différentes selon le son qui précède — jamais « euhd » comme on pourrait le croire.",
    examples: [
      ["worked", "/t/ après un son sourd"],
      ["played", "/d/ après un son voisé"],
      ["wanted", "/ɪd/ après « t » ou « d »"]
    ]
  },
  {
    name: "Le « r » anglais",
    hint: "Le « r » anglais ne se prononce pas au fond de la gorge comme en français — la langue recule sans toucher le palais, un peu comme un « r » avalé.",
    examples: [
      ["red", "langue en arrière, lèvres arrondies"],
      ["very", "r plus doux qu'en français"],
      ["car", "r à peine audible en anglais britannique"]
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
  10: { grammar: "Checkpoint : to be, to have/have got, can, want, do/does, there is/are", vocab: "Révision de tout le bloc 1", vocabWords: [], tables: [], prompt: "Enregistre un mini-monologue d'une minute mélangeant to be, to have, can, want, do/does et there is/are — sans regarder tes notes." },
  11: { grammar: "to know — présent simple (I know, you know, he/she knows...)", vocab: "Savoir : know, a lot, nothing, the answer", vocabWords: ["know", "a lot", "nothing", "the answer"], vocabExamples: [["I know the answer.", "Je connais/sais la réponse."], ["She knows a lot about music.", "Elle en sait beaucoup sur la musique."], ["We don't know.", "Nous ne savons pas."], ["Do you know him?", "Le connais-tu ?"]], didYouNotice: "En français, « savoir » et « connaître » sont deux verbes différents. En anglais, « to know » couvre les deux sens : know the answer (savoir) et know him (connaître).", tables: [CONJUGATIONS.toKnowPresent], prompt: "Dis trois choses que tu sais et une chose que tu ne sais pas, avec « to know »." },
  12: { grammar: "to come — présent simple (I come, you come, he/she comes...)", vocab: "Venir : come, from, here, tomorrow", vocabWords: ["come", "from", "here", "tomorrow"], vocabExamples: [["I come from Nigeria.", "Je viens du Nigeria."], ["He comes here every day.", "Il vient ici tous les jours."], ["Are you coming tomorrow?", "Viens-tu demain ?"]], mistake: { wrong: "I am coming from Nigeria. (pour dire ton origine)", right: "I come from Nigeria.", note: "Pour l'origine (fixe, permanente), on utilise le présent simple « I come from », pas le present continuous — celui-ci sert seulement pour un déplacement en cours." }, tables: [CONJUGATIONS.toComePresent], prompt: "Dis d'où tu viens, et où quelqu'un de ta famille vient, avec « to come from »." },
  13: { grammar: "to see — présent simple (I see, you see, he/she sees...)", vocab: "Voir : see, often, sometimes, well", vocabWords: ["see", "often", "sometimes", "well"], vocabExamples: [["I see him often.", "Je le vois souvent."], ["She sees her family sometimes.", "Elle voit sa famille parfois."], ["I don't see well.", "Je ne vois pas bien."]], tables: [CONJUGATIONS.toSeePresent], prompt: "Dis qui tu vois souvent et qui tu vois rarement, avec « to see »." },
  14: { grammar: "to take — présent simple (I take, you take, he/she takes...)", vocab: "Prendre : take, time, a shower, the bus", vocabWords: ["take", "time", "a shower", "the bus"], vocabExamples: [["I take the bus every morning.", "Je prends le bus tous les matins."], ["It takes time.", "Ça prend du temps."], ["He takes a shower at night.", "Il prend une douche le soir."]], didYouNotice: "« it takes time » est une expression figée très fréquente — littéralement « ça prend du temps », exactement comme en français.", tables: [CONJUGATIONS.toTakePresent], prompt: "Décris ta routine du matin en utilisant « to take » au moins deux fois." },
  15: { grammar: "Révision : know, come, see, take", vocab: "Révision libre", vocabWords: [], vocabExamples: [["I take my time when I see something new.", "Je prends mon temps quand je vois quelque chose de nouveau."], ["I know where he comes from.", "Je sais d'où il vient."]], tables: [CONJUGATIONS.toKnowPresent, CONJUGATIONS.toComePresent, CONJUGATIONS.toSeePresent, CONJUGATIONS.toTakePresent], prompt: "Mélange know, come, see et take dans quatre phrases sur toi et ta famille." },
  16: { grammar: "to say / to put — présent simple", vocab: "Dire, mettre : say, put, always, the truth", vocabWords: ["say", "put", "always", "the truth"], vocabExamples: [["He always says the truth.", "Il dit toujours la vérité."], ["I put the keys on the table.", "Je mets les clés sur la table."], ["What did she say?", "Qu'a-t-elle dit ?"]], mistake: { wrong: "He says me that...", right: "He tells me that... / He says that...", note: "« say » ne prend jamais de personne directement après (say me — faux). Pour préciser à qui, on utilise « tell » : tell me, tell her." }, tables: [CONJUGATIONS.toSayPresent, CONJUGATIONS.toPutPresent], prompt: "Dis ce que tu dis souvent (I always say...) et où tu mets tes affaires (I put... on/in...)." },
  17: { grammar: "need to / have to — obligation", vocab: "Obligation : need to, have to, work, study", vocabWords: ["need to", "have to", "work", "study"], vocabExamples: [["I need to study.", "J'ai besoin d'étudier."], ["She has to work tomorrow.", "Elle doit travailler demain."], ["We don't need to hurry.", "Nous n'avons pas besoin de nous dépêcher."]], tables: [CONJUGATIONS.needHaveTo], prompt: "Dis trois choses que tu dois faire cette semaine, avec need to ou have to." },
  18: { grammar: "Present continuous — formation (to be + verbe-ing)", vocab: "Actions en cours : right now, at the moment", vocabWords: ["right now", "at the moment", "-ing"], vocabExamples: [["I am learning English.", "J'apprends l'anglais (en ce moment)."], ["She is cooking right now.", "Elle est en train de cuisiner."], ["They are working at the moment.", "Ils travaillent en ce moment."]], didYouNotice: "Le present continuous est la vraie traduction de « être en train de » — une action qui se déroule maintenant, pas une habitude. C'est très différent du présent simple, qui décrit ce qui est toujours vrai.", mistake: { wrong: "I learn English right now.", right: "I am learning English right now.", note: "Avec « right now » ou « at the moment », il faut le present continuous, jamais le présent simple — c'est l'erreur la plus fréquente pour un francophone, car le présent simple français couvre les deux sens." }, tables: [CONJUGATIONS.presentContinuous], prompt: "Dis trois choses que tu es en train de faire en ce moment, avec le present continuous." },
  19: { grammar: "Present continuous — usage & chunks conversationnels", vocab: "Révision : expressions de conversation courante (I think..., Maybe..., Really?)", vocabWords: [], vocabExamples: [["What are you doing?", "Qu'est-ce que tu fais (en ce moment) ?"], ["I think it's a good idea.", "Je pense que c'est une bonne idée."], ["Maybe you're right.", "Peut-être que tu as raison."]], didYouNotice: "Ces petites expressions (chunks) sont ce qui rend une conversation fluide — elles ne s'apprennent pas mot par mot, mais comme des blocs entiers, tout prêts à l'emploi.", tables: [CONJUGATIONS.presentContinuous], prompt: "Utilise le present continuous pour décrire ce que fait quelqu'un autour de toi, puis ajoute au moins deux chunks conversationnels." },
  20: { grammar: "Checkpoint : know, come, see, take, say, put, need to/have to, present continuous", vocab: "Révision de tout le bloc 2", vocabWords: [], tables: [], prompt: "Record a one-minute mini-monologue mixing know, come, see, take, say, put, need to/have to, and the present continuous — sans regarder tes notes." },
  21: { grammar: "Past simple — verbes réguliers (+ -ed), forme affirmative", vocab: "Maison : house, apartment, room, kitchen, living room", vocabWords: ["house", "apartment", "room", "kitchen", "living room"], vocabExamples: [["I talked with my sister in the kitchen.", "J'ai parlé avec ma sœur dans la cuisine."], ["We worked in the living room.", "Nous avons travaillé dans le salon."], ["She cooked dinner yesterday.", "Elle a cuisiné le dîner hier."], ["They lived in that house.", "Ils ont habité dans cette maison."]], didYouNotice: "Contrairement au passé composé français (deux mots : avoir + participe), le past simple anglais tient en UN seul mot : talk → talked. Plus court, mais il ne change jamais selon la personne.", tables: [CONJUGATIONS.pastSimpleRegular], prompt: "Raconte ce que tu as fait hier avec des verbes réguliers en -ed : « I talked... », « I worked... »." },
  22: { grammar: "Past simple — verbes irréguliers fréquents (went, ate, saw, had, did, said)", vocab: "Vie quotidienne : work, phone, money, time", vocabWords: ["work", "phone", "money", "time"], vocabExamples: [["I went to work.", "Je suis allé(e) au travail."], ["She ate breakfast at home.", "Elle a mangé le petit-déjeuner à la maison."], ["We had a good time.", "Nous avons passé un bon moment."], ["He said nothing.", "Il n'a rien dit."]], mistake: { wrong: "I goed to work.", right: "I went to work.", note: "Les verbes irréguliers ne suivent pas la règle -ed — il faut les apprendre par cœur, un par un, exactement comme les participes passés irréguliers en français (été, fait, pris...)." }, tables: [], prompt: "Raconte ta journée d'hier avec au moins trois verbes irréguliers : went, ate, had, said, saw, did." },
  23: { grammar: "Révision : poser des questions au past simple (did)", vocab: "jour, semaine, week-end, matin, soir, nuit", vocabWords: ["day", "week", "weekend", "morning", "evening", "night"], vocabExamples: [["Did you sleep well?", "As-tu bien dormi ?"], ["What did you do this morning?", "Qu'as-tu fait ce matin ?"], ["Did she call you last night?", "T'a-t-elle appelé hier soir ?"]], didYouNotice: "Pour une question au passé, « did » porte tout le passé — le verbe qui suit reste à sa forme de base, jamais au passé deux fois (Did you went — faux).", tables: [CONJUGATIONS.pastSimpleDidQuestions], prompt: "Pose trois questions à quelqu'un sur sa semaine avec « did », puis réponds pour toi-même." },
  24: { grammar: "was / were — passé de « to be »", vocab: "repas, dîner, déjeuner, courses", vocabWords: ["meal", "dinner", "lunch", "groceries"], vocabExamples: [["I was tired yesterday.", "J'étais fatigué(e) hier."], ["The dinner was delicious.", "Le dîner était délicieux."], ["We were at the market this morning.", "Nous étions au marché ce matin."], ["Were you at home last night?", "Étais-tu à la maison hier soir ?"]], tables: [CONJUGATIONS.wasWere], prompt: "Décris où tu étais et comment tu te sentais hier, avec was/were." },
  25: { grammar: "Past simple — négation (didn't + verbe de base)", vocab: "ranger, nettoyer, rentrer", vocabWords: ["tidy up", "clean", "come home"], vocabExamples: [["I didn't clean the kitchen.", "Je n'ai pas nettoyé la cuisine."], ["She didn't come home early.", "Elle n'est pas rentrée tôt."], ["We didn't tidy up.", "Nous n'avons pas rangé."]], mistake: { wrong: "I didn't cleaned the kitchen.", right: "I didn't clean the kitchen.", note: "Comme pour les questions, « didn't » porte déjà le passé — le verbe reste à la forme de base, sans -ed après « didn't »." }, tables: [CONJUGATIONS.pastSimpleDidQuestions], prompt: "Dis trois choses que tu n'as pas faites hier, avec « didn't »." },
  26: { grammar: "Révision : was/were + négation au passé", vocab: "voyage, vacances, rendez-vous, projet", vocabWords: ["trip", "vacation", "appointment", "plan"], vocabExamples: [["We weren't ready for the trip.", "Nous n'étions pas prêts pour le voyage."], ["I didn't have an appointment.", "Je n'avais pas de rendez-vous."]], tables: [CONJUGATIONS.wasWere, CONJUGATIONS.pastSimpleDidQuestions], prompt: "Mélange was/were et didn't dans trois phrases sur un voyage ou un projet récent." },
  27: { grammar: "Past simple — plus de verbes irréguliers (bought, thought, felt, left, wrote, told)", vocab: "problème, solution", vocabWords: ["problem", "solution"], vocabExamples: [["I bought some milk.", "J'ai acheté du lait."], ["She felt tired.", "Elle s'est sentie fatiguée."], ["He left early.", "Il est parti tôt."], ["I told her the solution.", "Je lui ai dit la solution."]], tables: [], prompt: "Utilise au moins trois de ces verbes irréguliers dans des phrases sur un problème récent : bought, thought, felt, left, wrote, told." },
  28: { grammar: "Marqueurs temporels et connecteurs de récit (yesterday, last week, then, after that, next)", vocab: "Révision vie quotidienne", vocabWords: ["yesterday", "last week", "then", "after that", "next"], vocabExamples: [["Yesterday, I woke up early.", "Hier, je me suis réveillé(e) tôt."], ["Then, I made breakfast.", "Puis, j'ai préparé le petit-déjeuner."], ["After that, I went to work.", "Après ça, je suis allé(e) au travail."]], didYouNotice: "Ces connecteurs sont ce qui transforme une liste de phrases en une vraie histoire — exactement comme « puis, ensuite, alors » en français.", tables: [], prompt: "Raconte ta matinée d'hier avec au moins trois connecteurs : yesterday, then, after that, next." },
  29: { grammar: "Mélange : past simple régulier + irrégulier + was/were", vocab: "Révision vie quotidienne", vocabWords: [], vocabExamples: [["Yesterday was a busy day. I woke up, had breakfast, and went to work.", "Hier était une journée chargée. Je me suis réveillé(e), j'ai pris le petit-déjeuner, et je suis allé(e) au travail."]], tables: [CONJUGATIONS.pastSimpleRegular, CONJUGATIONS.wasWere], prompt: "Raconte hier en mélangeant verbes réguliers, irréguliers et was/were dans au moins cinq phrases." },
  30: { grammar: "Révision libre du bloc", vocab: "Révision libre", vocabWords: [], tables: [], prompt: "Choisis cinq mots du bloc 3 que tu ne maîtrises pas encore et fais une phrase au past simple avec chacun." },
  31: { grammar: "Révision libre du bloc", vocab: "Révision libre", vocabWords: [], tables: [], prompt: "Relis les phrases des jours 21 à 29 à voix haute, deux fois chacune." },
  32: { grammar: "Jour de parole : raconte ta journée d'hier en détail", vocab: "Révision libre", vocabWords: [], tables: [], prompt: "Talk about what you did yesterday in detail, at least six sentences, using regular and irregular past simple verbs." },
  33: { grammar: "Jour de parole : raconte un événement familial récent", vocab: "Révision libre", vocabWords: [], tables: [], prompt: "Talk about a recent family event, using was/were and at least four past simple verbs." },
  34: { grammar: "Révision des points faibles identifiés", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.pastSimpleDidQuestions, CONJUGATIONS.wasWere], prompt: "Reprends ce qui te bloque encore avec le past simple, et répète-le trois fois." },
  35: { grammar: "Checkpoint du bloc : monologue de 2 minutes entièrement au past simple", vocab: "Révision de tout le bloc 3", vocabWords: [], tables: [], prompt: "Record a two-minute monologue entirely in the past simple — talk about your week." },
  36: { grammar: "going to — futur proche, forme affirmative", vocab: "manger, boire, café, eau", vocabWords: ["eat", "drink", "coffee", "water"], vocabExamples: [["I am going to eat.", "Je vais manger."], ["She is going to drink some water.", "Elle va boire de l'eau."], ["We are going to have coffee.", "Nous allons prendre un café."]], didYouNotice: "« going to » sert pour un plan déjà décidé — exactement comme « aller + infinitif » en français. Ce n'est pas un vrai futur simple, c'est une intention déjà là dans ta tête avant de parler.", tables: [CONJUGATIONS.goingTo], prompt: "Dis trois choses que tu vas faire aujourd'hui, avec « going to »." },
  37: { grammar: "going to — pratique : parler de cette semaine", vocab: "restaurant, invite, fête, anniversaire, cadeau", vocabWords: ["restaurant", "invite", "party", "birthday", "gift"], vocabExamples: [["We are going to have a party.", "Nous allons faire une fête."], ["I am going to invite my friends.", "Je vais inviter mes amis."], ["Are you going to buy a gift?", "Vas-tu acheter un cadeau ?"]], tables: [CONJUGATIONS.goingTo], prompt: "Dis trois choses que tu vas faire cette semaine, avec « going to »." },
  38: { grammar: "Révision going to — questions et négation", vocab: "Révision nourriture & social", vocabWords: [], vocabExamples: [["I'm not going to work tomorrow.", "Je ne vais pas travailler demain."], ["What are you going to do this weekend?", "Qu'est-ce que tu vas faire ce week-end ?"]], tables: [CONJUGATIONS.goingTo], prompt: "Pose trois questions avec « going to » à quelqu'un sur son week-end." },
  39: { grammar: "Impératif — forme de base (Come here, Wait, Tell me, Do it)", vocab: "avoir un verre, cuisiner, recette, plat, dessert", vocabWords: ["have a drink", "cook", "recipe", "dish", "dessert"], vocabExamples: [["Come here!", "Viens ici !"], ["Wait a minute.", "Attends une minute."], ["Tell me the recipe.", "Dis-moi la recette."], ["Don't forget the dessert.", "N'oublie pas le dessert."]], didYouNotice: "L'impératif anglais ne change jamais, contrairement au français qui distingue « viens » (tu) de « venez » (vous) — en anglais, c'est toujours la même forme, quel que soit à qui tu parles.", tables: [CONJUGATIONS.imperativeForms], prompt: "Donne trois ordres ou demandes que tu ferais vraiment à la maison, avec l'impératif." },
  40: { grammar: "Impératif — forme « let's » (inclusif)", vocab: "santé, bon appétit, trinquer, partager un repas", vocabWords: ["cheers", "enjoy your meal", "toast", "share a meal"], vocabExamples: [["Let's eat!", "Mangeons !"], ["Let's go!", "Allons-y !"], ["Let's share this meal.", "Partageons ce repas."]], didYouNotice: "« Let's » = « let us », littéralement « laisse-nous » — c'est l'équivalent du « nous » de l'impératif français (allons-y, mangeons).", tables: [CONJUGATIONS.imperativeForms], prompt: "Propose trois activités à faire ensemble avec « Let's... »." },
  41: { grammar: "Révision impératif (forme de base + let's)", vocab: "Révision nourriture & social", vocabWords: [], tables: [CONJUGATIONS.imperativeForms], prompt: "Mélange l'impératif direct et « let's » dans quatre phrases sur un repas partagé." },
  42: { grammar: "just + past simple — action très récente, introduction", vocab: "Révision : appointment, plan", vocabWords: ["just", "already"], vocabExamples: [["I just finished my work.", "Je viens de finir mon travail."], ["She just called me.", "Elle vient de m'appeler."], ["We just arrived.", "Nous venons d'arriver."]], didYouNotice: "« just » + past simple est l'équivalent exact de « venir de » + infinitif en français — l'action vient tout juste de se terminer.", tables: [CONJUGATIONS.justPast], prompt: "Dis trois choses que tu viens juste de faire, avec « just »." },
  43: { grammar: "just + past simple — pratique", vocab: "Révision libre", vocabWords: [], vocabExamples: [["I just ate.", "Je viens de manger."], ["Did you just wake up?", "Viens-tu de te réveiller ?"]], tables: [CONJUGATIONS.justPast], prompt: "Utilise « just » dans une petite conversation imaginée — une personne demande, l'autre répond." },
  44: { grammar: "Révision : just + going to ensemble", vocab: "Révision libre", vocabWords: [], vocabExamples: [["I just finished dinner, so I'm going to relax.", "Je viens de finir le dîner, donc je vais me détendre."]], tables: [CONJUGATIONS.justPast, CONJUGATIONS.goingTo], prompt: "Fais trois phrases qui mélangent « just » (ce que tu viens de faire) et « going to » (ce que tu vas faire ensuite)." },
  45: { grammar: "Mélange : projets + actions récentes + demandes", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.goingTo, CONJUGATIONS.imperativeForms, CONJUGATIONS.justPast], prompt: "Fais cinq phrases qui mélangent going to, l'impératif et just + past." },
  46: { grammar: "Jour de parole : fais des projets pour le week-end à voix haute", vocab: "Révision libre", vocabWords: [], tables: [], prompt: "Say your plans for the weekend out loud, at least five sentences, using going to." },
  47: { grammar: "Jour de parole : 5 vraies demandes que tu dirais à la maison", vocab: "Révision libre", vocabWords: [], tables: [], prompt: "Give five real requests you'd actually make at home, using the imperative." },
  48: { grammar: "Révision des points faibles", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.goingTo, CONJUGATIONS.imperativeForms], prompt: "Reprends ce qui te bloque encore entre going to, l'impératif et just + past, et répète-le trois fois." },
  49: { grammar: "Intègre tout le bloc dans un dialogue court", vocab: "Révision libre", vocabWords: [], tables: [], prompt: "Write and say a short dialogue (5-6 lines) mixing going to, the imperative, and just + past." },
  50: { grammar: "Checkpoint du bloc : going to, impératif, just + past — les trois outils d'une vraie conversation sur un projet", vocab: "Révision de tout le bloc 4", vocabWords: ["just", "going to", "let's", "can you...please?"], examples: { grammar: [["I'm going to call my sister tonight.", "Je vais appeler ma sœur ce soir."], ["Don't worry.", "Ne t'inquiète pas."], ["I just woke up.", "Je viens de me réveiller."], ["Are you going to work tomorrow?", "Est-ce que tu vas travailler demain ?"], ["Wait for me!", "Attends-moi !"]], listening: [["I just finished.", "Je viens de finir."], ["What are we going to do this weekend?", "On va faire quoi ce week-end ?"], ["Let's go together.", "Allons-y ensemble."], ["Can you check the times, please?", "Peux-tu vérifier les horaires, s'il te plaît ?"]] }, dialogue: [["Hettia", "I <mark class=\"grammar-highlight\">just</mark> finished cleaning the kitchen.", "Je viens de finir de nettoyer la cuisine."], ["Pierrot", "Perfect — I'm <mark class=\"grammar-highlight\">going to</mark> visit my sister on Saturday.", "Parfait — je vais rendre visite à ma sœur samedi."], ["Hettia", "Nice! Are you <mark class=\"grammar-highlight\">going to</mark> stay for lunch?", "Chouette ! Tu vas rester déjeuner ?"], ["Pierrot", "Yes — <mark class=\"grammar-highlight\">let's</mark> go together, if you'd like.", "Oui — allons-y ensemble, si tu veux."], ["Hettia", "I'd love that. <mark class=\"grammar-highlight\">Can you check</mark> the train times, please?", "Avec plaisir. Peux-tu vérifier les horaires de train, s'il te plaît ?"], ["Pierrot", "Sure — give me a minute, I <mark class=\"grammar-highlight\">just</mark> found one at ten o'clock.", "Bien sûr — donne-moi une minute, je viens d'en trouver un à dix heures."]], didYouNotice: "En anglais, tu peux enchaîner les trois formes du bloc dans une seule conversation naturelle sans les confondre : ce qui vient de se passer (just), ce qui va se passer (going to), et une demande immédiate (l'impératif). C'est exactement comme ça qu'un anglophone organise une conversation sur un projet — regarde le dialogue du jour.", didYouNoticeEn: "In English, you can chain all three forms in one natural conversation about a plan without mixing them up: what just happened (just), what's about to happen (going to), and an immediate request (the imperative). That's exactly how an English speaker structures a conversation about a plan — look at today's dialogue.", mistake: { wrong: "I'm going eat with you.", right: "I'm going to eat with you.", note: "Ne saute jamais le « to » après going, même à l'oral rapide — à l'oral familier il se réduit à « gonna » (I'm gonna eat), mais il ne disparaît jamais complètement.", noteEn: "Never drop the « to » after going, even in fast speech — in casual spoken English it shrinks to « gonna » (I'm gonna eat), but it never disappears completely." }, tables: [CONJUGATIONS.goingTo, CONJUGATIONS.imperativeForms, CONJUGATIONS.justPast], prompt: "Enregistre un mini-dialogue de deux minutes avec Hettia (ou imagine les deux voix) qui mélange going to, l'impératif et just + past — inspire-toi du dialogue du jour, mais invente ta propre situation.", promptEn: "Record a two-minute mini-dialogue with Hettia (or imagine both voices) mixing going to, the imperative, and just + past — take inspiration from today's dialogue, but invent your own situation." },
  51: { grammar: "I would like / I'd like — demande adoucie", vocab: "Révision émotions & opinions", vocabWords: ["I would like", "I'd like"], vocabExamples: [["I would like a coffee, please.", "Je voudrais un café, s'il te plaît."], ["I'd like to talk to you.", "J'aimerais te parler."], ["We would like to visit you soon.", "Nous voudrions vous rendre visite bientôt."]], didYouNotice: "« I would like » est directement l'équivalent de « je voudrais » — plus doux et plus poli que « I want ».", tables: [CONJUGATIONS.politeFormulas], prompt: "Fais deux demandes adoucies avec « I would like / I'd like »." },
  52: { grammar: "Could you...? / Would you mind...? — demande polie", vocab: "Révision émotions & opinions", vocabWords: ["Could you", "Would you mind"], vocabExamples: [["Could you help me, please?", "Pourrais-tu m'aider, s'il te plaît ?"], ["Would you mind closing the door?", "Ça te dérangerait de fermer la porte ?"], ["Could you say that again?", "Pourrais-tu répéter ça ?"]], mistake: { wrong: "Would you mind to close the door?", right: "Would you mind closing the door?", note: "Après « would you mind », le verbe est toujours en -ing, jamais à l'infinitif — c'est une exception importante à retenir." }, tables: [CONJUGATIONS.politeFormulas], prompt: "Fais deux demandes polies avec « Could you » et une avec « Would you mind »." },
  53: { grammar: "It would be... — révision des formules d'adoucissement", vocab: "d'accord, pas d'accord, sûr(e), peut-être", vocabWords: ["agree", "disagree", "sure", "maybe"], vocabExamples: [["It would be great to see you.", "Ça serait génial de te voir."], ["It would be easier this way.", "Ça serait plus facile comme ça."]], tables: [CONJUGATIONS.politeFormulas], prompt: "Fais deux phrases avec « It would be... », puis mélange les trois formules du bloc dans une phrase." },
  54: { grammar: "Désaccord & réparation : I don't agree, but... / It's okay / We can talk about it", vocab: "Révision libre", vocabWords: ["I don't agree, but...", "It's okay", "We can talk about it"], vocabExamples: [["I don't agree, but I understand.", "Je ne suis pas d'accord, mais je comprends."], ["It's okay, don't worry.", "Ce n'est pas grave, ne t'inquiète pas."], ["We can talk about it later.", "On peut en parler plus tard."]], didYouNotice: "Ces trois phrases figées sont ce qui permet de désamorcer un désaccord sans conflit — apprends-les comme des blocs entiers, pas mot par mot.", tables: [], prompt: "Pratique un désaccord doux avec « I don't agree, but... »." },
  55: { grammar: "Checkpoint du bloc : adoucis 3 demandes réelles + 1 désaccord", vocab: "Révision de tout le bloc 5", vocabWords: [], tables: [CONJUGATIONS.politeFormulas], prompt: "Soften three real requests and express one real disagreement, using this block's polite formulas." },
  56: { grammar: "Bilan (1/2) — monologue intégrant présent, present continuous, past simple, going to + révision ciblée des points faibles", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Record a two-minute monologue combining present simple, present continuous, past simple, and going to. Then listen back to your Day 20 recording — what's changed since then? Go back over the points that still trip you up." },
  57: { grammar: "Bilan (2/2) — vraie conversation de 10+ minutes, sans français pendant les 5 premières minutes", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Have a real conversation, ten minutes or more, with no French for the first five minutes." },
  58: { grammar: "Past continuous — formation (was/were + verbe-ing)", vocab: "Souvenirs : childhood, back then, at that time", vocabWords: ["childhood", "back then", "at that time"], vocabExamples: [["I was watching TV.", "Je regardais la télé."], ["They were sleeping.", "Ils dormaient."], ["We were living in Lagos back then.", "Nous habitions à Lagos à cette époque."]], didYouNotice: "Le past continuous se forme comme le present continuous, mais avec was/were à la place de am/is/are — c'est l'outil le plus proche de l'imparfait français pour décrire une scène.", tables: [CONJUGATIONS.pastContinuous], prompt: "Dis trois choses que tu étais en train de faire à un moment précis d'hier, avec le past continuous." },
  59: { grammar: "Past continuous — décrire une scène du passé", vocab: "Météo : it was sunny/cold/hot, it was raining", vocabWords: ["it was sunny", "it was cold", "it was hot", "it was raining"], vocabExamples: [["It was raining, so we stayed home.", "Il pleuvait, alors nous sommes resté(e)s à la maison."], ["The sun was shining and everyone was smiling.", "Le soleil brillait et tout le monde souriait."], ["It was quiet, everyone was still sleeping.", "C'était calme, tout le monde dormait encore."]], tables: [CONJUGATIONS.pastContinuous, CONJUGATIONS.wasWere], prompt: "Décris une scène du passé : le temps qu'il faisait, où tu étais, ce que tu étais en train de faire — tout au past continuous." },
  60: { grammar: "used to — habitude passée révolue", vocab: "Habitudes : usually, every day, all the time", vocabWords: ["usually", "every day", "all the time"], vocabExamples: [["I used to live in Lagos.", "J'habitais à Lagos (avant)."], ["We used to see each other every Sunday.", "On se voyait chaque dimanche (avant)."], ["You used to take the same route.", "Tu prenais toujours le même chemin (avant)."]], didYouNotice: "« used to » ne décrit pas une action précise mais une habitude qui n'existe plus aujourd'hui — c'est l'équivalent le plus proche de l'imparfait français pour parler d'habitudes.", mistake: { wrong: "I used to living in Lagos.", right: "I used to live in Lagos.", note: "Après « used to », le verbe reste toujours à l'infinitif sans « to » (la base), jamais en -ing — contrairement au present/past continuous." }, tables: [CONJUGATIONS.usedTo], prompt: "Dis trois choses que tu faisais souvent avant, avec « used to »." },
  61: { grammar: "Révision : formation + used to vs past continuous", vocab: "Révision libre", vocabWords: [], vocabExamples: [["I used to play outside every day.", "Je jouais dehors tous les jours (avant)."], ["I was playing outside when it started to rain.", "J'étais en train de jouer dehors quand il a commencé à pleuvoir."]], didYouNotice: "« used to » = une habitude générale et répétée ; le past continuous = une action précise en train de se dérouler à un moment donné. Les deux se traduisent par l'imparfait en français, mais ils ne s'utilisent pas de la même façon en anglais.", tables: [CONJUGATIONS.pastContinuous, CONJUGATIONS.usedTo], prompt: "Fais trois paires de phrases : une avec used to (habitude), une avec le past continuous (moment précis), sur le même thème." },
  62: { grammar: "Past continuous — action interrompue (I was doing X when Y happened)", vocab: "quand, pendant que", vocabWords: ["when", "while"], vocabExamples: [["I was sleeping when the phone rang.", "Je dormais quand le téléphone a sonné."], ["We were eating when you arrived.", "Nous mangions quand tu es arrivé(e)."], ["He was doing his homework while his sister was watching TV.", "Il faisait ses devoirs pendant que sa sœur regardait la télé."]], didYouNotice: "C'est le cœur du récit en anglais, comme en français : le past continuous plante le décor (ce qui était déjà en train de se passer), et le past simple apporte l'événement qui interrompt ou fait avancer l'histoire. Les deux travaillent toujours ensemble.", tables: [CONJUGATIONS.pastContinuous], prompt: "Raconte une interruption : « I was doing X when Y happened. » Fais-en trois." },
  63: { grammar: "Contraste intensif : past simple vs past continuous vs used to", vocab: "Révision libre", vocabWords: [], vocabExamples: [["Yesterday, I ate at noon. (single event)", "Hier, j'ai mangé à midi. (événement ponctuel)"], ["I used to always eat at noon. (habit)", "Avant, je mangeais toujours à midi. (habitude)"], ["I was reading when you called. (backdrop + event)", "Je lisais quand tu as appelé. (toile de fond + événement)"]], tables: [CONJUGATIONS.pastSimpleRegular, CONJUGATIONS.pastContinuous, CONJUGATIONS.usedTo], prompt: "Pour chaque phrase, choisis past simple, past continuous ou used to et justifie ton choix à voix haute — invente cinq exemples." },
  64: { grammar: "Pronunciation — le son « th » (think vs sink, this vs zis)", vocab: "Sons difficiles pour un francophone", vocabWords: ["think", "this", "that", "three", "the"], vocabExamples: [["Think about it.", "Penses-y."], ["This is my house.", "C'est ma maison."], ["I have three brothers.", "J'ai trois frères."]], didYouNotice: "Le son « th » n'existe pas en français — la langue doit toucher légèrement les dents de devant. Deux versions existent : sourde (think) et sonore (this) — les deux sont invisibles à l'écrit mais très différentes à l'oral.", tables: [], prompt: "Répète à voix haute dix fois : think, this, that, three, the — en faisant attention à la position de la langue." },
  65: { grammar: "Pronunciation — le son « h » et la liaison anglaise (connected speech)", vocab: "Sons difficiles pour un francophone", vocabWords: ["house", "happy", "here", "hello"], vocabExamples: [["I am happy to be here.", "Je suis heureux/heureuse d'être ici."], ["He is at home.", "Il est chez lui."]], didYouNotice: "En français, le « h » est presque toujours muet. En anglais, il faut souffler légèrement pour le prononcer (house, happy, hello) — sinon « hair » devient « air », et le sens change complètement. À l'oral rapide, les mots se collent aussi entre eux (connected speech) : « what are you doing » sonne presque comme un seul mot.", tables: [], prompt: "Répète à voix haute dix fois : house, happy, here, hello — en soufflant bien le « h » à chaque fois." },
  66: { grammar: "Jour de parole : raconte un souvenir d'enfance", vocab: "Révision libre", vocabWords: [], tables: [], prompt: "Tell a childhood memory, mixing past continuous (description, habits), used to, and past simple (what happened) — one minute minimum." },
  67: { grammar: "Révision des points faibles identifiés", vocab: "Révision libre", vocabWords: [], tables: [CONJUGATIONS.pastContinuous, CONJUGATIONS.usedTo], prompt: "Reprends ce qui te bloque encore entre past simple, past continuous et used to, et répète-le trois fois." },
  68: { grammar: "Checkpoint du bloc : monologue de 3 minutes avec narration complète (past continuous + past simple + used to)", vocab: "Révision de tout le bloc 7", vocabWords: [], tables: [], prompt: "Record a three-minute monologue telling a complete story — set the scene with the past continuous or used to, move the action forward with the past simple." },
  69: { grammar: "Bilan final (1/2) — test de compréhension : lecture des chapitres de l'histoire", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Summarize the story in your own words: what happens in each chapter?", chapters: [
    { n: 1, file: null, title: "à venir" }
  ] },
  70: { grammar: "Bilan final (2/2) — test de fluidité : conversation et monologue final", vocab: "Révision générale", vocabWords: [], tables: [], prompt: "Have a real conversation, ten minutes or more, about the story, with no French. Then record a final monologue — compare it to your very first day." }
};

// MESSAGES — a personal note from Hettia to Pierrot for each day, shown via
// the "💌 Message from Hettia" button just above the complete-day button.
// Available any time he's viewing that day (deliberately NOT gated behind
// marking the day complete — the complete button already advances to the
// next day on click, which would hide that day's message before he could
// ever open it). Keyed by day number. Days 1–20 are Hettie's real messages,
// translated to French, with line breaks preserved on purpose (see
// white-space: pre-line on .hettia-note-text in style.css) — some of these
// land on short standalone lines deliberately. Days without an entry fall
// back to DEFAULT_MESSAGE, so nothing breaks with partial content, same
// pattern as DAY_DETAILS.
const MESSAGES = {
  1: `Bienvenue, mon amour. 💚

Merci d'avoir dit oui à cette petite aventure avec moi. Chaque leçon que tu termines, c'est un pas de plus vers un avenir où on pourra partager encore plus de nous-mêmes. Je t'aime, et je suis tellement heureuse que tu sois là.`,

  2: `J'espère qu'il y aura un jour où tu ne douteras plus jamais de l'amour que j'ai pour toi.

En attendant, je te le rappellerai autant de fois qu'il le faudra.

Je t'aime profondément..`,

  3: `Tu as apporté tellement de paix dans mon cœur.

J'espère qu'un jour tu réaliseras à quel point ta présence rend ma vie plus belle. ❤️`,

  4: `J'aime la personne que tu es aujourd'hui.

Et j'aime aussi la personne que tu es encore en train de devenir.

J'aurai toujours envie de marcher à tes côtés.`,

  5: `Tu n'as jamais besoin d'être parfait pour mériter mon amour.

Tu l'as déjà.

Et rien de ce que tu réussiras ou manqueras ne pourra changer cela.
.`,

  6: `J'espère que cette application t'apprendra l'anglais.

Mais j'espère surtout qu'elle te rappellera chaque jour combien tu es aimé.`,

  7: `Déjà une semaine entière !

Je suis fière de toi — pas parce que tu es parfait, mais parce que tu as continué. C'est une des choses que je préfère chez toi.`,

  8: `Tu me donnes envie d'aimer mieux.

D'être plus patiente.

Plus douce.

Plus courageuse.

Merci de faire ressortir cette version de moi.`,

  9: `Je suis fière de toi.
Pas seulement pour les choses que tu accomplis.

Mais pour la façon dont tu choisis d'avancer, même quand la vie est compliquée.

C'est une qualité que j'admire profondément.`,

  10: `Dix jours.

Tu te rends compte ?

Si j'étais là, je fêterais ça avec un baiser... et peut-être un deuxième, juste parce que je suis fière de toi. 💚`,

  11: `Merci d'être l'homme qui me donne envie de croire encore plus en l'amour.

Je ne considère jamais ton amour comme un acquis.

C'est un cadeau que je chérirai toujours.`,

  12: `J'espère que tu n'oublieras jamais ça.

Tu ne fais jamais ça seul.

Chaque leçon que tu termines, je t'applaudis en silence, où que je sois.`,

  13: `Ferme les yeux une seconde.

Imagine-moi en train de prendre ton visage entre mes mains, te souriant, et te disant :

« Tu vas y arriver, mon amour. »

Parce que c'est exactement ce que je serais en train de faire.`,

  14: `J'espère qu'un jour tu verras en toi tout ce que moi je vois déjà.

Parce que je vois un homme bon.

Un homme courageux.

Un homme profondément aimable.`,

  15: `Tu as une douceur qui me touche profondément.

J'espère que la vie ne te l'enlèvera jamais.

Parce que c'est une des plus belles choses chez toi.`,

  16: `Je ne peux pas te promettre que la vie sera toujours facile.

Mais je peux te promettre une chose.

Je choisirai toujours de marcher à tes côtés.`,

  17: `Je me demande parfois ce que j'ai fait pour avoir la chance de te rencontrer.

Puis je souris.

Parce qu'au fond, peu importe la réponse.

L'important, c'est que tu sois là.`,

  18: `La distance, c'est étrange.

Ça veut dire que je ne peux pas te tenir la main aujourd'hui...

Mais ça ne m'empêchera jamais de t'aimer, ni d'être fière de toi.`,

  19: `Tu es presque à vingt jours.

Ce n'est pas de la chance.

C'est de la constance.

Et cette constance, c'est une des raisons pour lesquelles je crois que tu peux accomplir tout ce que tu te mets en tête.`,

  20: `Vingt jours ensemble.

Je suis incroyablement fière de toi.

Merci de me faire confiance, de partager ce chemin avec moi, et de me faire une place dans ta vie.

J'ai hâte au jour où je n'aurai plus besoin de t'envoyer des petits messages par une appli, parce que je serai juste à côté de toi, à célébrer chaque petite victoire avec toi.

D'ici là...

Sache que tu es profondément aimé.
Toujours. 💚`,
};

const DEFAULT_MESSAGE = "Je suis fière de toi. Un jour à la fois, mon amour. 💚";

