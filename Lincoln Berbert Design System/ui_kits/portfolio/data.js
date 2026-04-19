// Project data — shared across screens
window.PROJECTS = [
  {
    id: 'extinction',
    num: '01',
    title: 'A real-time generative score for a film about extinction.',
    discipline: 'Music · Physical AI',
    year: '2025 —',
    role: 'Direction, system design, score',
    collaborators: 'Studio Oma · A. Chen · M. Reyes',
    hero: 'linear-gradient(145deg,#1A1A18 0%,#3F3E3B 60%,#6E6B65 100%)',
    summary: "A generative orchestral engine that scores a 74-minute documentary in real time, responding to cuts, light, and biometric data from the room.",
    essay: [
      "The film is about the sixth extinction, but it does not argue. It observes. The score, then, could not argue either — it had to observe alongside.",
      "We built a model that ingests six streams: shot duration, mean luminance of the frame, cut frequency, a low-frequency biometric channel from the room, a predicted-emotion score, and a hand-conducted intention vector from the director.",
      "The output is not a fixed score. It is a set of continuous gradients across a 78-piece ensemble library, realized once per screening. No two audiences hear the same film."
    ],
    chapters: ['Premise', 'System', 'Composition', 'Screenings'],
  },
  {
    id: 'atlas',
    num: '02',
    title: 'Atlas of a country that never existed.',
    discipline: 'Worldbuilding · Design',
    year: '2024',
    role: 'Author, cartography, editorial design',
    collaborators: 'With J. Okafor & R. Vasquez',
    hero: 'linear-gradient(145deg,#D9D5CC 0%,#EBE8E2 50%,#A8A49A 100%)',
    summary: "A 312-page atlas of a fictional republic, rendered with the precision of a national survey.",
    essay: [
      "The premise: what if a country existed just outside our record, and we were its cartographers?",
      "We invented four centuries of history, three language families, a constitution, 11 administrative regions, and the weather patterns that shape all of them.",
      "The final book is indistinguishable from a real national atlas — until you start reading the place names."
    ],
    chapters: ['Premise', 'Geography', 'History', 'Typography', 'Excerpts'],
  },
  {
    id: 'swarm',
    num: '03',
    title: 'A swarm of small robots that listens before it moves.',
    discipline: 'Physical AI',
    year: '2023 — 2024',
    role: 'Co-founder, systems',
    collaborators: 'With MIT Media Lab · Nara Collective',
    hero: 'linear-gradient(145deg,#D84B20 0%,#B83C16 40%,#6E6B65 100%)',
    summary: "A distributed perception system for 12 embodied agents. The swarm does not plan; it waits, then reacts.",
    essay: [
      "Most robotics research is about making one machine smarter. We were interested in the opposite problem: what if twelve machines together could do less?",
      "The agents share a single auditory field. Decisions are consensus, not command.",
      "It moves slowly. That was the point."
    ],
    chapters: ['Motivation', 'Architecture', 'Field tests', 'What we learned'],
  },
  {
    id: 'sibyl',
    num: '04',
    title: 'Sibyl — a long-form audio instrument.',
    discipline: 'Music · Design',
    year: '2024',
    role: 'Interaction design, sound',
    collaborators: 'Solo',
    hero: 'linear-gradient(145deg,#F4F2EE 0%,#D9D5CC 50%,#6E6B65 100%)',
    summary: "A single-knob instrument. Turning it slowly traverses 40 minutes of unfolding texture.",
    essay: [
      "I wanted an instrument that rewarded patience. Sibyl has one control. Turning it quickly does nothing interesting. Turning it across ten minutes is a composition.",
      "The underlying engine is a state-space model conditioned on the knob's derivative. It plays what has not happened yet."
    ],
    chapters: ['Idea', 'The knob', 'Under the hood'],
  },
  {
    id: 'quiet',
    num: '05',
    title: 'Quiet — a reading client for long essays.',
    discipline: 'Design',
    year: '2023',
    role: 'Solo',
    collaborators: '—',
    hero: 'linear-gradient(145deg,#FBFAF7 0%,#EBE8E2 100%)',
    summary: "A small MacOS app for reading essays over 6,000 words. No feeds. No progress bars.",
    essay: [
      "Most reading software is optimized for finishing. Quiet is optimized for staying.",
      "There are no highlights, no sharing, no progress indicators. When you leave, it forgets where you were. You have to remember."
    ],
    chapters: ['Rationale', 'Design', 'Download'],
  },
  {
    id: 'signal',
    num: '06',
    title: 'Field recordings from a permafrost site.',
    discipline: 'Music',
    year: '2022',
    role: 'Field recording, composition',
    collaborators: 'With Dr. A. Halldórsson',
    hero: 'linear-gradient(145deg,#0B0B0A 0%,#1A1A18 50%,#3F3E3B 100%)',
    summary: "Eleven hours of recordings from a research site in Svalbard, condensed into a 42-minute piece.",
    essay: [
      "The permafrost is loud if you listen long enough. It cracks, shifts, and occasionally sings.",
      "The composition does not process the recordings. It only selects from them."
    ],
    chapters: ['Context', 'Listening', 'Track list'],
  },
];
