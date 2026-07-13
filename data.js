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
    ["I would like...", "Je voudrais..."],
    ["I would like (softer)...", "J'aimerais..."],
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
    ["Good luck / hang in there.", "Bon courage."],
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
  10: { grammar: "Checkpoint : to be, to have/have got, can, want, do/does, there is/are", vocab: "Révision de tout le bloc 1", vocabWords: [], tables: [], prompt: "Enregistre un mini-monologue d'une minute mélangeant to be, to have, can, want, do/does et there is/are — sans regarder tes notes." }
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

  2: `J'espère que ta journée a été douce avec toi.

Et si ce n'est pas le cas, j'espère que ce message te rappelle qu'il y a quelqu'un qui pense à toi, qui croit en toi, et qui aimerait pouvoir te serrer très fort dans ses bras.`,

  3: `Si apprendre te semble difficile aujourd'hui, souviens-toi d'une chose.

Je ne t'aime pas parce que tu es doué en anglais.
Je t'aime parce que tu es toi.

Tout le reste, ce n'est qu'un bonus. ❤️`,

  4: `Chaque nouveau mot que tu apprends, c'est un petit pont de plus entre nos deux mondes.

Un jour, on rira, on se racontera des histoires, on se taquinera, et on rêvera ensemble, en anglais comme en français. Rien que d'y penser, ça me fait sourire.`,

  5: `Parfois, j'aimerais que tu puisses emprunter mes yeux, juste une minute.

Tu verrais enfin l'homme gentil, intelligent, drôle et merveilleux que je vois, moi, tous les jours.`,

  6: `Tu me manques aujourd'hui.

Alors en attendant de pouvoir te voler un câlin, laisse ce petit message te tenir compagnie.`,

  7: `Déjà une semaine entière !

Je suis fière de toi — pas parce que tu es parfait, mais parce que tu as continué. C'est une des choses que je préfère chez toi.`,

  8: `Où que tu sois en ce moment, j'espère que tu souris, ne serait-ce qu'une seconde.

Parce que quelque part, moi aussi je suis probablement en train de sourire... juste parce que j'ai pensé à toi.`,

  9: `Certaines leçons te sembleront faciles.

D'autres non.

Mais chaque jour où tu choisis de revenir, ça dit quelque chose de beau sur toi : tu n'abandonnes pas.`,

  10: `Dix jours.

Tu te rends compte ?

Si j'étais là, je fêterais ça avec un baiser... et peut-être un deuxième, juste parce que je suis fière de toi. 💚`,

  11: `Tu sais ce que j'adore ?

L'idée qu'un jour, on regardera cette appli ensemble, et qu'on rira parce que l'anglais sera devenu tellement naturel pour toi.`,

  12: `J'espère que tu n'oublieras jamais ça.

Tu ne fais jamais ça seul.

Chaque leçon que tu termines, je t'applaudis en silence, où que je sois.`,

  13: `Ferme les yeux une seconde.

Imagine-moi en train de prendre ton visage entre mes mains, te souriant, et te disant :

« Tu vas y arriver, mon amour. »

Parce que c'est exactement ce que je serais en train de faire.`,

  14: `J'adore imaginer nos futures conversations.

Parfois en anglais.
Parfois en français.
Parfois dans un mélange rigolo des deux.

Tant qu'elles sont avec toi, je suis heureuse.`,

  15: `Si aujourd'hui te semble lourd, ne te soucie pas d'être exceptionnel.

Fais juste un petit pas.

Demain s'occupera de lui-même.`,

  16: `Une des choses que je préfère chez toi, c'est que tu continues d'essayer, même quand quelque chose te met mal à l'aise.

Cette détermination tranquille, je la trouve incroyablement attirante.`,

  17: `Voici le rappel du jour.

Tu es aimé.
Tu es apprécié.
Tu es suffisant, tel que tu es.

Même avant la leçon d'aujourd'hui.`,

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

