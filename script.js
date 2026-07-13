// script.js — behavior for the English Learning App
// No build step, no dependencies. Open index.html directly or serve via GitHub Pages.

const STORAGE_KEYS = {
  currentDay: "eft_currentDay",
  completedDays: "eft_completedDays",
  checklistPrefix: "eft_checklist_",
  notesPrefix: "eft_notes_"
};

let englishVoice = null;
let englishVoiceFemale = null;
let englishVoiceMale = null;

/* ---------- Text-to-speech ---------- */

function loadEnglishVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  const englishVoices = voices.filter(v => v.lang && v.lang.startsWith("en"));
  englishVoice =
    englishVoices.find(v => v.lang === "en-GB") ||
    englishVoices.find(v => v.lang === "en-US") ||
    englishVoices[0] ||
    null;
  // Best-effort gender match for dialogue speakers. Chrome labels voices
  // literally ("Google UK English Female/Male"), but Safari/macOS/iOS and
  // Windows use plain names (Samantha, Daniel, Zira, David...) with no
  // gender word at all — so we also match against a list of common voice
  // names across platforms. Still not guaranteed on every device; dialogue
  // speak buttons fall back to the single default voice when no match is
  // found.
  const FEMALE_NAME_HINTS = /female|samantha|victoria|karen|moira|tessa|fiona|kate|serena|susan|zira|hazel|allison|ava|kathy|shelley|catherine|joanna|kendra|salli|nicky|amy|emma|joanie|flo|princess/i;
  const MALE_NAME_HINTS = /\bmale\b|daniel|alex|fred|oliver|arthur|ralph|david|george|thomas|aaron|nathan|justin|eric|kevin|matthew|brian|guy(?!\w)|james|mark|gordon|rishi/i;
  englishVoiceFemale =
    englishVoices.find(v => FEMALE_NAME_HINTS.test(v.name)) || null;
  englishVoiceMale =
    englishVoices.find(v => MALE_NAME_HINTS.test(v.name) && !FEMALE_NAME_HINTS.test(v.name)) || null;
}

if (window.speechSynthesis) {
  loadEnglishVoice();
  window.speechSynthesis.onvoiceschanged = loadEnglishVoice;
}

// Removes HTML markup (e.g. the <mark> tags used for grammar highlights)
// so displayed text can safely be reused for speech and aria-labels.
function stripHtml(text) {
  return text.replace(/<[^>]*>/g, "");
}

function speak(text, voice) {
  if (!window.speechSynthesis) {
    alert("La synthèse vocale n'est pas disponible dans ce navigateur.");
    return;
  }
  window.speechSynthesis.cancel();
  const cleanText = stripHtml(text).replace(/\([^)]*\)/g, "").split("/")[0].trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "en-GB";
  utterance.voice = voice || englishVoice;
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

/* ---------- State ---------- */

function getCurrentDay() {
  return parseInt(localStorage.getItem(STORAGE_KEYS.currentDay) || "1", 10);
}

function getTotalDays() {
  return BLOCKS[BLOCKS.length - 1].range[1];
}

function setCurrentDay(day) {
  const clamped = Math.min(getTotalDays(), Math.max(1, day));
  localStorage.setItem(STORAGE_KEYS.currentDay, String(clamped));
  return clamped;
}

function getCompletedDays() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.completedDays) || "[]"));
  } catch (e) {
    return new Set();
  }
}

function saveCompletedDays(set) {
  localStorage.setItem(STORAGE_KEYS.completedDays, JSON.stringify(Array.from(set)));
}

function getChecklistState(day) {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.checklistPrefix + day) || "[]");
  } catch (e) {
    return [];
  }
}

function setChecklistState(day, arr) {
  localStorage.setItem(STORAGE_KEYS.checklistPrefix + day, JSON.stringify(arr));
}

function getNotes(day) {
  return localStorage.getItem(STORAGE_KEYS.notesPrefix + day) || "";
}

function setNotes(day, text) {
  localStorage.setItem(STORAGE_KEYS.notesPrefix + day, text);
}

function getBlockForDay(day) {
  return BLOCKS.find(b => day >= b.range[0] && day <= b.range[1]) || BLOCKS[BLOCKS.length - 1];
}

function computeStreak() {
  const completed = getCompletedDays();
  const today = getCurrentDay();
  let streak = 0;
  let d = today - 1;
  while (d >= 1 && completed.has(d)) {
    streak++;
    d--;
  }
  return streak;
}

/* ---------- Helpers ---------- */

// Look up a VOCAB entry by its French headword (exact match against the fr
// column across all categories). Returns [fr, en] or null if not found.
function findVocabEntry(frTerm) {
  for (const words of Object.values(VOCAB)) {
    const hit = words.find(([fr]) => fr === frTerm);
    if (hit) return hit;
  }
  return null;
}

// Days are being migrated from the old flat `vocabExamples` array to the
// richer `examples: { grammar, listening }` structure phase by phase. This
// reads whichever shape a given day happens to have, so days not yet
// migrated keep working exactly as before.
function getGrammarExamples(detail) {
  if (detail.examples && detail.examples.grammar) return detail.examples.grammar;
  return detail.vocabExamples || [];
}

function getListeningExamples(detail) {
  if (detail.examples && detail.examples.listening) return detail.examples.listening;
  return [];
}

function updateChecklistProgress(day) {
  const state = getChecklistState(day);
  const total = SESSION_TEMPLATE.length;
  const done = state.filter(Boolean).length;
  const el = document.getElementById("checklist-progress");
  el.textContent = `${done}/${total}`;
  el.classList.toggle("complete", done === total);
}

function renderSentenceList(container, sentences) {
  container.innerHTML = "";
  sentences.forEach(([fr, en]) => {
    const row = document.createElement("div");
    row.className = "example-sentence";
    const left = document.createElement("div");
    left.className = "example-sentence-text";
    left.innerHTML = `<span class="ex-fr">${fr}</span><span class="ex-en">${en}</span>`;
    const btn = document.createElement("button");
    btn.className = "speak-btn";
    btn.textContent = "🔊";
    btn.setAttribute("aria-label", `Écouter : ${fr}`);
    btn.onclick = () => speak(fr);
    row.appendChild(left);
    row.appendChild(btn);
    container.appendChild(row);
  });
}

/* ---------- Past-participle concept lesson (Days 21, 22...) ---------- */
// Renders a boxed, audio-enabled mini-lesson explaining what a past
// participle is: an infinitive→participle pair table (each word individually
// clickable), the passé composé rule, an optional helper+participle pair
// table, and correct/incorrect example contrasts. Fully self-contained: it
// injects its own styles once and creates its own container, so no HTML/CSS
// file needs to change. Renders nothing on days without a `participleLesson`.

function ensureParticipleStyles() {
  if (document.getElementById("participle-lesson-styles")) return;
  const style = document.createElement("style");
  style.id = "participle-lesson-styles";
  style.textContent = `
    .participle-lesson-box { margin: 1rem 0 1.5rem; padding: 1rem 1.1rem; border: 1px solid var(--grid-line, rgba(0,0,0,0.12)); border-radius: 10px; background: var(--paper-alt, rgba(0,0,0,0.025)); }
    .participle-lesson-box h4 { margin: 0 0 0.5rem; font-family: 'Inter', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--notice-gold, var(--accent, #D9AE45)); }
    .participle-lesson-box > p { margin: 0 0 0.75rem; color: var(--ink, inherit); opacity: 0.9; font-size: 13.5px; line-height: 1.55; }
    .pair-table-wrap { overflow-x: auto; margin: 0.5rem 0 1rem; }
    table.pair-table { width: 100%; border-collapse: collapse; font-size: 0.95em; }
    table.pair-table th { text-align: left; padding: 0.3rem 0.5rem; font-weight: 600; color: var(--ink-soft, inherit); opacity: 0.85; font-size: 0.8em; text-transform: uppercase; letter-spacing: 0.02em; }
    table.pair-table th .pair-th-en { display: block; text-transform: none; font-weight: 400; font-size: 0.85em; letter-spacing: normal; opacity: 0.85; margin-top: 0.1rem; }
    table.pair-table td { padding: 0.35rem 0.5rem; border-top: 1px solid var(--grid-line, rgba(0,0,0,0.07)); vertical-align: middle; color: var(--ink, inherit); }
    table.pair-table td.pair-word { font-weight: 500; }
    table.pair-table td.pair-word .pair-gloss { display: block; font-weight: 400; font-size: 0.8em; color: var(--ink-soft, inherit); opacity: 0.85; margin-top: 0.1rem; }
    table.pair-table button.speak-btn.small { padding: 0.1rem 0.4rem; font-size: 0.85em; }
    .participle-rule { font-weight: 600; margin: 0.85rem 0 0.5rem; color: var(--ink, inherit); }
    .participle-examples { margin-top: 0.6rem; display: flex; flex-direction: column; gap: 0.3rem; }
    .participle-example { display: flex; align-items: center; gap: 0.5rem; font-size: 13.5px; }
    .participle-example.correct { color: var(--stamp-green, #4f9c5c); }
    .participle-example.incorrect { color: var(--margin-red, #c0392b); opacity: 0.85; }
  `;
  document.head.appendChild(style);
}

function ensureParticipleLessonContainer() {
  let el = document.getElementById("participle-lesson");
  if (!el) {
    el = document.createElement("div");
    el.id = "participle-lesson";
    const tablesEl = document.getElementById("conjugation-tables");
    // Insert immediately AFTER the conjugation tables block, so the concept
    // box appears right under "avoir (conjugué) + participe passé", matching
    // the requested lesson order.
    tablesEl.parentNode.insertBefore(el, tablesEl.nextSibling);
  }
  return el;
}

function makeSpeakBtn(text, label) {
  const btn = document.createElement("button");
  btn.className = "speak-btn small";
  btn.textContent = "🔊";
  btn.setAttribute("aria-label", label || `Écouter : ${text}`);
  btn.onclick = () => speak(text);
  return btn;
}

function renderPairTable(pairs, col1Header, col2Header) {
  // col1Header/col2Header = { fr, en } — small English subtext under each
  // French column header. Each row is [word1, word2, glossEn?] — glossEn is
  // the English meaning of word1 (the infinitive or helper), shown as a
  // small muted line underneath it, e.g. "être" / "to be".
  const wrap = document.createElement("div");
  wrap.className = "pair-table-wrap";
  const table = document.createElement("table");
  table.className = "pair-table";

  const headRow = document.createElement("tr");
  [col1Header, null, col2Header, null].forEach(header => {
    const th = document.createElement("th");
    if (header) {
      th.innerHTML = `${header.fr}${header.en ? `<br><span class="pair-th-en">${header.en}</span>` : ""}`;
    }
    headRow.appendChild(th);
  });
  table.appendChild(headRow);

  pairs.forEach(([w1, w2, glossEn]) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.className = "pair-word";
    td1.innerHTML = `${w1}${glossEn ? `<br><span class="pair-gloss">${glossEn}</span>` : ""}`;
    const tdBtn1 = document.createElement("td");
    tdBtn1.appendChild(makeSpeakBtn(w1, `Écouter ${w1}`));

    const td2 = document.createElement("td");
    td2.className = "pair-word";
    td2.textContent = w2;
    const tdBtn2 = document.createElement("td");
    tdBtn2.appendChild(makeSpeakBtn(w2, `Écouter ${w2}`));

    tr.appendChild(td1);
    tr.appendChild(tdBtn1);
    tr.appendChild(td2);
    tr.appendChild(tdBtn2);
    table.appendChild(tr);
  });

  wrap.appendChild(table);
  return wrap;
}

function renderParticipleLesson(container, lesson) {
  container.innerHTML = "";
  const box = document.createElement("div");
  box.className = "participle-lesson-box";

  const h = document.createElement("h4");
  h.textContent = "Qu'est-ce qu'un participe passé ?";
  box.appendChild(h);

  const p = document.createElement("p");
  p.textContent = lesson.intro;
  box.appendChild(p);

  box.appendChild(renderPairTable(lesson.pairs, { fr: "Infinitif", en: "infinitive" }, { fr: "Participe passé", en: "past participle" }));

  if (lesson.helperExamples && lesson.helperExamples.length) {
    const ruleP = document.createElement("p");
    ruleP.className = "participle-rule";
    ruleP.textContent = lesson.rule || "Passé composé = avoir (conjugué) + participe passé";
    box.appendChild(ruleP);
    box.appendChild(renderPairTable(lesson.helperExamples, { fr: "Auxiliaire", en: "helper" }, { fr: "Participe passé", en: "past participle" }));
  }

  if (lesson.examplePairs && lesson.examplePairs.length) {
    const exWrap = document.createElement("div");
    exWrap.className = "participle-examples";
    lesson.examplePairs.forEach(([correct, incorrect]) => {
      const okRow = document.createElement("div");
      okRow.className = "participle-example correct";
      const okSpan = document.createElement("span");
      okSpan.textContent = `✅ ${correct}`;
      okRow.appendChild(okSpan);
      okRow.appendChild(makeSpeakBtn(correct, `Écouter : ${correct}`));
      exWrap.appendChild(okRow);

      const badRow = document.createElement("div");
      badRow.className = "participle-example incorrect";
      badRow.textContent = `❌ ${incorrect}`;
      exWrap.appendChild(badRow);
    });
    box.appendChild(exWrap);
  }

  container.appendChild(box);
}

function ensureBilingualStyles() {
  if (document.getElementById("bilingual-line-styles")) return;
  const style = document.createElement("style");
  style.id = "bilingual-line-styles";
  style.textContent = `
    .bilingual-en { margin: 0.3rem 0 0; font-style: italic; opacity: 0.75; font-size: 0.92em; color: var(--ink-soft, inherit); }
  `;
  document.head.appendChild(style);
}

// Inserts/updates a muted italic English line directly after `afterEl`,
// reusing a stable id so re-renders update it in place instead of
// duplicating. Removes the line entirely when `enText` is falsy.
function setBilingualLine(id, afterEl, enText) {
  ensureBilingualStyles();
  let el = document.getElementById(id);
  if (!enText) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("p");
    el.id = id;
    el.className = "bilingual-en";
    afterEl.insertAdjacentElement("afterend", el);
  }
  el.textContent = enText;
}

function renderToday() {
  const day = getCurrentDay();
  const block = getBlockForDay(day);
  const detail = DAY_DETAILS[day] || { grammar: block.grammar, vocab: block.vocabFocus, vocabWords: [], tables: [], prompt: block.prompts[0] };

  // Mission instructions render primarily in French — French is the
  // learner's native/explanatory language here. When a day also defines
  // promptEn, a muted English line appears underneath so Pierrot can read
  // the mission in both languages without needing to translate himself.
  const isStoryDay = !!(detail.chapters && detail.chapters.length);

  document.getElementById("day-stamp").textContent = `Jour ${day}`;
  document.getElementById("block-title").textContent = `${block.title} (jours ${block.range[0]}–${block.range[1]})`;
  setBilingualLine(
    "block-title-en",
    document.getElementById("block-title"),
    block.titleEn ? `${block.titleEn} (days ${block.range[0]}–${block.range[1]})` : null
  );
  document.getElementById("block-grammar").textContent = detail.grammar;
  document.getElementById("today-prompt").textContent = detail.prompt;
  document.getElementById("prompt-label").textContent = "🎤 Mission du jour";
  setBilingualLine("today-prompt-en", document.getElementById("today-prompt"), detail.promptEn);

  const speakPromptBtn = document.getElementById("speak-prompt");
  if (speakPromptBtn) speakPromptBtn.style.display = "none";

  document.getElementById("streak-number").textContent = computeStreak();
  document.getElementById("jump-input").value = day;
  document.getElementById("today-main").style.setProperty("--block-color", block.color || "#2c5f8a");

  // Section order: on teaching days, show the grammar/examples first so the
  // learner has the tool before being asked to produce something with it.
  // On review days, the learner already knows the material, so the prompt
  // (retrieval practice) comes first and reference tables stay below it.
  const promptSection = document.getElementById("prompt-section");
  const learningSection = document.getElementById("learning-section");
  const container = promptSection.parentNode;
  const isReviewDay = REVIEW_DAYS.includes(day);
  if (isReviewDay) {
    container.insertBefore(promptSection, learningSection);
  } else {
    container.insertBefore(learningSection, promptSection);
  }

  // Grammar example sentences — one per sentence, using only grammar taught
  // up to this day, each with its own TTS button.
  const grammarExamples = getGrammarExamples(detail);
  const examplesEl = document.getElementById("today-vocab-examples");
  const examplesHeading = document.getElementById("today-vocab-examples-heading");
  renderSentenceList(examplesEl, grammarExamples);
  examplesHeading.style.display = grammarExamples.length ? "" : "none";

  // Mini dialogue — a short natural back-and-forth using today's grammar,
  // rendered as alternating speaker bubbles (first speaker on the left,
  // second on the right). Alternation is by line order, not by matching a
  // literal "A" string, so speaker labels can be real names (e.g. "Hettia"
  // / "Pierrot") and still alternate sides correctly.
  const dialogueEl = document.getElementById("today-dialogue");
  const dialogueHeading = document.getElementById("today-dialogue-heading");
  dialogueEl.innerHTML = "";
  const dialogue = detail.dialogue || [];
  dialogue.forEach(([speaker, fr, en], i) => {
    const line = document.createElement("div");
    line.className = `dialogue-line speaker-${i % 2 === 0 ? "a" : "b"}`;
    const bubble = document.createElement("div");
    bubble.className = "dialogue-bubble";
    const label = document.createElement("span");
    label.className = "dialogue-speaker";
    label.textContent = speaker;
    const text = document.createElement("div");
    text.className = "dialogue-text";
    text.innerHTML = `<span class="ex-fr">${fr}</span><span class="ex-en">${en}</span>`;
    const btn = document.createElement("button");
    btn.className = "speak-btn small";
    btn.textContent = "🔊";
    btn.setAttribute("aria-label", `Écouter : ${stripHtml(fr)}`);
    btn.onclick = () => {
      const speakerVoice =
        speaker === "Hettia" ? englishVoiceFemale :
        speaker === "Pierrot" ? englishVoiceMale :
        null;
      speak(fr, speakerVoice);
    };
    bubble.appendChild(label);
    bubble.appendChild(text);
    bubble.appendChild(btn);
    line.appendChild(bubble);
    dialogueEl.appendChild(line);
  });
  dialogueHeading.style.display = dialogue.length ? "" : "none";

  // Listening practice — a short curated set meant to be played and repeated
  // twice out loud, separate from the grammar drill above.
  const listeningExamples = getListeningExamples(detail);
  const listeningEl = document.getElementById("today-listening");
  const listeningHeading = document.getElementById("today-listening-heading");
  renderSentenceList(listeningEl, listeningExamples);
  listeningHeading.style.display = listeningExamples.length ? "" : "none";

  // "Did you notice?" — a short cultural/grammatical insight for the day,
  // shown only when one is defined. Runs in French for this app (French is
  // the learner's native/explanatory language; English is the target being
  // practiced), stored directly in didYouNotice.
  const noticeEl = document.getElementById("today-notice");
  if (detail.didYouNotice) {
    noticeEl.innerHTML = `<p class="notice-label"></p><p class="notice-text"></p>`;
    noticeEl.querySelector(".notice-label").textContent = "💡 Le sais-tu ?";
    noticeEl.querySelector(".notice-text").textContent = detail.didYouNotice;
    setBilingualLine("today-notice-en", noticeEl.querySelector(".notice-text"), detail.didYouNoticeEn);
    noticeEl.style.display = "";
  } else {
    noticeEl.innerHTML = "";
    noticeEl.style.display = "none";
  }

  // "Common mistake for French speakers" — a single targeted correction per
  // day (detail.mistake = { wrong, right, note }), shown only when defined.
  const mistakeEl = document.getElementById("today-mistake");
  if (mistakeEl) {
    if (detail.mistake) {
      mistakeEl.innerHTML = `
        <p class="notice-label">⚠️ Erreur fréquente d'un francophone</p>
        <p class="notice-text"><span class="mistake-wrong">❌ ${detail.mistake.wrong}</span> → <span class="mistake-right">✅ ${detail.mistake.right}</span></p>
        <p class="notice-text" id="today-mistake-note">${detail.mistake.note}</p>
      `;
      setBilingualLine("today-mistake-note-en", mistakeEl.querySelector("#today-mistake-note"), detail.mistake.noteEn);
      mistakeEl.style.display = "";
    } else {
      mistakeEl.innerHTML = "";
      mistakeEl.style.display = "none";
    }
  }

  // Chapter banner (Days 56–57) — links out to the capstone story pages,
  // which run on their own self-contained engine (engine.js/engine.css).
  // A day can list several chapters (detail.chapters, an array) so multiple
  // story links can be consolidated onto a single day.
  const bannerEl = document.getElementById("chapter-banner");
  if (bannerEl) {
    bannerEl.innerHTML = "";
    const chapters = detail.chapters || (detail.chapter ? [detail.chapter] : []);
    chapters.forEach(ch => {
      const banner = document.createElement("div");
      banner.className = "chapter-banner";
      if (ch.file) {
        banner.innerHTML = `
          <div class="chapter-banner-label">📖 Histoire — Chapitre ${ch.n}</div>
          <div class="chapter-banner-title">${ch.title}</div>
          <a class="chapter-banner-btn" href="${ch.file}" target="_blank">Lire le chapitre ${ch.n} →</a>
        `;
      } else {
        banner.innerHTML = `
          <div class="chapter-banner-label">📖 Histoire — Chapitre ${ch.n}</div>
          <div class="chapter-banner-title chapter-coming">${ch.title}</div>
        `;
        banner.classList.add("chapter-banner--soon");
      }
      bannerEl.appendChild(banner);
    });
  }

  // Conjugation tables — collapsible <details>, closed by default on heavy
  // review days so the page doesn't open as a wall of grids.
  const tablesEl = document.getElementById("conjugation-tables");
  tablesEl.innerHTML = "";
  (detail.tables || []).forEach(table => {
    const details = document.createElement("details");
    details.className = "conj-table";
    if (!isReviewDay) details.setAttribute("open", "");

    const summary = document.createElement("summary");
    summary.textContent = table.title;
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "conj-table-body";

    const tableEl = document.createElement("table");
    // Rows are normally [pronoun, form] and the two get concatenated for
    // speech (e.g. "I" + "am" -> "I am"). Some tables use the second column
    // for a French grammar explanation instead of an actual conjugated form
    // (e.g. politeFormulas, imperativeForms) — those rows carry an explicit
    // 3rd element, speakOverride, which is spoken as-is instead, so the
    // explanation never gets read aloud.
    table.rows.forEach(([pronoun, form, speakOverride]) => {
      const tr = document.createElement("tr");
      const tdP = document.createElement("td");
      tdP.className = "conj-pronoun";
      tdP.textContent = pronoun;
      const tdF = document.createElement("td");
      tdF.className = "conj-form";
      tdF.textContent = form;
      const tdBtn = document.createElement("td");
      const btn = document.createElement("button");
      btn.className = "speak-btn";
      btn.textContent = "🔊";
      btn.setAttribute("aria-label", speakOverride ? `Écouter : ${speakOverride}` : `Écouter ${pronoun} ${form}`);
      btn.onclick = () => {
        if (speakOverride) {
          speak(speakOverride);
          return;
        }
        const cleanPronoun = pronoun.split("/")[0].replace(/[()→]/g, "").trim();
        let phrase;
        if (!cleanPronoun) phrase = form;
        else if (cleanPronoun.endsWith("'")) phrase = cleanPronoun + form;
        else phrase = `${cleanPronoun} ${form}`;
        speak(phrase);
      };
      tdBtn.appendChild(btn);
      tr.appendChild(tdP);
      tr.appendChild(tdF);
      tr.appendChild(tdBtn);
      tableEl.appendChild(tr);
    });
    body.appendChild(tableEl);

    if (table.note) {
      const note = document.createElement("p");
      note.className = "conj-note";
      note.textContent = table.note;
      body.appendChild(note);
    }

    details.appendChild(body);
    tablesEl.appendChild(details);
  });

  // Past-participle concept lesson — only rendered on days that define one
  // (currently 21, 22). Self-contained: creates/finds its own container and
  // injects its own styles, so no HTML changes are required elsewhere.
  ensureParticipleStyles();
  const participleEl = ensureParticipleLessonContainer();
  if (detail.participleLesson) {
    renderParticipleLesson(participleEl, detail.participleLesson);
    participleEl.style.display = "";
  } else {
    participleEl.innerHTML = "";
    participleEl.style.display = "none";
  }

  // Story-capstone days (currently 69–70) test comprehension/fluency rather
  // than working through a graded session — no checklist/heading, and the
  // notes box asks for a story summary instead of free notes.
  const notesEl = document.getElementById("day-notes");
  notesEl.value = getNotes(day);
  notesEl.oninput = () => setNotes(day, notesEl.value);
  notesEl.placeholder = isStoryDay
    ? "Résume l'histoire avec tes propres mots, ou note les leçons que tu retiens..."
    : "Écris ta réponse à la question du jour, ou prends des notes ici...";

  const notesHeadingFr = document.getElementById("notes-heading-fr");
  const notesHeadingEn = document.getElementById("notes-heading-en");
  if (notesHeadingFr && notesHeadingEn) {
    if (isStoryDay) {
      notesHeadingFr.textContent = "Résumé de l'histoire";
      notesHeadingEn.textContent = "Story summary";
    } else {
      notesHeadingFr.textContent = "Tes notes / ta réponse du jour";
      notesHeadingEn.textContent = "Your notes / today's answer";
    }
  }

  const sessionHeadingEl = document.getElementById("session-heading");
  if (sessionHeadingEl) sessionHeadingEl.style.display = isStoryDay ? "none" : "";

  // "Message from Hettia" — a personal note, available any time on the
  // current day (not gated behind completion; see MESSAGES comment in
  // data.js for why). Collapses back to hidden on every day change so a
  // message revealed on one day doesn't stay open when jumping to another.
  const noteBtn = document.getElementById("hettia-note-btn");
  const noteText = document.getElementById("hettia-note-text");
  noteText.hidden = true;
  noteText.textContent = "";
  noteBtn.onclick = () => {
    if (noteText.hidden) {
      noteText.textContent = MESSAGES[day] || DEFAULT_MESSAGE;
      noteText.hidden = false;
    } else {
      noteText.hidden = true;
    }
  };

  const checklistEl = document.getElementById("session-checklist");
  const checklistProgressEl = document.getElementById("checklist-progress");

  if (isStoryDay) {
    checklistEl.innerHTML = "";
    checklistEl.style.display = "none";
    if (checklistProgressEl) checklistProgressEl.style.display = "none";
  } else {
    checklistEl.style.display = "";
    if (checklistProgressEl) checklistProgressEl.style.display = "";
    const savedState = getChecklistState(day);
    checklistEl.innerHTML = "";
    SESSION_TEMPLATE.forEach(([fr, en], i) => {
      const li = document.createElement("li");
      if (savedState[i]) li.classList.add("step-done");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = !!savedState[i];
      checkbox.addEventListener("change", () => {
        const state = getChecklistState(day);
        state[i] = checkbox.checked;
        setChecklistState(day, state);
        li.classList.toggle("step-done", checkbox.checked);
        updateChecklistProgress(day);
      });
      const textWrap = document.createElement("span");
      textWrap.className = "checklist-text";
      const frSpan = document.createElement("span");
      frSpan.className = "checklist-fr";
      frSpan.textContent = fr;
      const enSpan = document.createElement("span");
      enSpan.className = "checklist-en";
      enSpan.textContent = en;
      textWrap.appendChild(frSpan);
      textWrap.appendChild(enSpan);
      li.appendChild(checkbox);
      li.appendChild(textWrap);
      checklistEl.appendChild(li);
    });
    updateChecklistProgress(day);
  }

  document.getElementById("speak-prompt").onclick = () => speak(detail.prompt);
}

/* ---------- Rendering: Vocabulary ---------- */

function renderVocab() {
  const container = document.getElementById("vocab-list");
  container.innerHTML = "";
  Object.entries(VOCAB).forEach(([category, words]) => {
    const block = document.createElement("div");
    block.className = "category-block";
    const h3 = document.createElement("h3");
    h3.textContent = category;
    block.appendChild(h3);

    words.forEach(([fr, en]) => {
      const row = document.createElement("div");
      row.className = "word-row";
      const left = document.createElement("div");
      left.className = "word-left";
      left.innerHTML = `<span class="word-fr">${fr}</span><span class="word-en">${en}</span>`;
      const btn = document.createElement("button");
      btn.className = "speak-btn";
      btn.textContent = "🔊";
      btn.setAttribute("aria-label", `Écouter ${fr}`);
      btn.onclick = () => speak(fr);
      row.appendChild(left);
      row.appendChild(btn);
      block.appendChild(row);
    });
    container.appendChild(block);
  });
}

/* ---------- Rendering: Phrases ---------- */

function renderPhrases() {
  const container = document.getElementById("phrases-list");
  container.innerHTML = "";
  CHUNKS.forEach(([fr, en]) => {
    const row = document.createElement("div");
    row.className = "word-row";
    const left = document.createElement("div");
    left.className = "word-left";
    left.innerHTML = `<span class="word-fr">${fr}</span><span class="word-en">${en}</span>`;
    const btn = document.createElement("button");
    btn.className = "speak-btn";
    btn.textContent = "🔊";
    btn.setAttribute("aria-label", `Écouter ${fr}`);
    btn.onclick = () => speak(fr);
    row.appendChild(left);
    row.appendChild(btn);
    container.appendChild(row);
  });
}

/* ---------- Rendering: Pronunciation ---------- */

function renderPronunciation() {
  const container = document.getElementById("pronunciation-list");
  container.innerHTML = "";
  PRONUNCIATION_PATTERNS.forEach(pattern => {
    const card = document.createElement("div");
    card.className = "pattern-card";
    const h4 = document.createElement("h4");
    h4.textContent = pattern.name;
    const p = document.createElement("p");
    p.textContent = pattern.hint;
    const examplesWrap = document.createElement("div");
    examplesWrap.className = "pattern-examples";
    pattern.examples.forEach(([fr, hint]) => {
      const chip = document.createElement("div");
      chip.className = "example-chip";
      const span = document.createElement("span");
      span.textContent = `${fr} — ${hint}`;
      const btn = document.createElement("button");
      btn.textContent = "🔊";
      btn.setAttribute("aria-label", `Écouter ${fr}`);
      btn.onclick = () => speak(fr);
      chip.appendChild(span);
      chip.appendChild(btn);
      examplesWrap.appendChild(chip);
    });
    card.appendChild(h4);
    card.appendChild(p);
    card.appendChild(examplesWrap);
    container.appendChild(card);
  });
}

/* ---------- Rendering: Progress ---------- */

function renderProgress() {
  const grid = document.getElementById("grid-60");
  grid.innerHTML = "";
  const completed = getCompletedDays();
  const current = getCurrentDay();

  for (let d = 1; d <= getTotalDays(); d++) {
    const cell = document.createElement("div");
    cell.className = "day-cell";
    if (completed.has(d)) cell.classList.add("done");
    if (d === current) cell.classList.add("current");
    cell.textContent = d;
    cell.title = getBlockForDay(d).title;
    cell.onclick = () => {
      const set = getCompletedDays();
      if (set.has(d)) set.delete(d); else set.add(d);
      saveCompletedDays(set);
      renderProgress();
      renderToday();
    };
    grid.appendChild(cell);
  }
}

/* ---------- Controls ---------- */

document.getElementById("complete-day-btn").addEventListener("click", () => {
  const day = getCurrentDay();
  const set = getCompletedDays();
  set.add(day);
  saveCompletedDays(set);
  setCurrentDay(day + 1);
  renderToday();
  renderProgress();
});

document.getElementById("jump-btn").addEventListener("click", () => {
  const val = parseInt(document.getElementById("jump-input").value, 10) || 1;
  setCurrentDay(val);
  renderToday();
  renderProgress();
});

document.getElementById("reset-btn").addEventListener("click", () => {
  if (!confirm("Réinitialiser toute la progression ? Cette action est irréversible.")) return;
  Object.keys(localStorage)
    .filter(k => k.startsWith("eft_"))
    .forEach(k => localStorage.removeItem(k));
  renderToday();
  renderProgress();
});

/* ---------- Tabs ---------- */

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

/* ---------- Init ---------- */

renderToday();
renderVocab();
renderPhrases();
renderPronunciation();
renderProgress();
