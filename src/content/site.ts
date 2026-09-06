import { APP_STORE_URL, SUPPORT_EMAIL, SUPPORT_EMPTY_STATE } from '../lib/config';

const supportPath = '/support/';
const supportMailto = SUPPORT_EMAIL ? `mailto:${SUPPORT_EMAIL}?subject=Replay%20Rally` : '';
const faqHelpAnswer = `Through the support page at ${supportPath}. A short clip of the footage that gave the detector trouble helps enormously${
  SUPPORT_EMAIL ? `, or email ${SUPPORT_EMAIL}` : ''
}.`;
const faqHelpMarkdown = `Through the support page at [${supportPath}](${supportPath}). A short clip of the footage that gave the detector trouble helps enormously${
  SUPPORT_EMAIL ? `, or email [${SUPPORT_EMAIL}](${supportMailto})` : ''
}.`;

export const appStoreCtaText = {
  available: 'Download on the App Store',
  availableShort: 'App Store',
  comingSoon: 'Coming soon to the App Store',
  comingSoonShort: 'Coming soon',
} as const;

export const pageMeta = {
  home: {
    path: '/',
    label: 'Home',
    title: 'Replay Rally — Skip to the good parts of your pickleball videos',
    description:
      'Replay Rally is a $9.99 iPhone app that finds every rally in a pickleball video on-device in seconds, so you can jump point to point, watch in slow motion, and export a highlight reel with the dead time removed.',
    llmsDescription: 'Product overview, features, price, privacy, and common questions.',
  },
  howItWorks: {
    path: '/how-it-works/',
    label: 'How it works',
    title: 'How on-device rally detection works',
    description:
      'Replay Rally detects pickleball rallies from the sound of paddle contact using on-device signal processing. Here’s what it listens for, how accurate it is, how calibration works, and exactly what the optional AI coaching sends.',
    llmsDescription: 'How on-device audio detection, calibration, export, and optional AI coaching work.',
  },
  faq: {
    path: '/faq/',
    label: 'FAQ',
    title: 'FAQ — pickleball video review on iPhone',
    description:
      'Answers about Replay Rally: what it costs, what it uploads (nothing), supported phones and videos, accuracy, calibration, the optional OpenAI coaching, and refunds.',
    llmsDescription: 'Answers about price, privacy, compatibility, detection, exports, AI coaching, and support.',
  },
  support: {
    path: '/support/',
    label: 'Support',
    title: 'Support',
    description:
      'Get help with Replay Rally for iPhone: contact, troubleshooting missed or extra rallies, calibration, export, and the optional OpenAI key.',
    llmsDescription: 'Contact information and fixes for common detection, export, and OpenAI issues.',
  },
  privacy: {
    path: '/privacy/',
    label: 'Privacy',
    title: 'Privacy policy',
    description:
      'Replay Rally collects no personal data. Videos stay on your iPhone; the optional AI coaching sends frames to OpenAI only under your own key when you start an analysis.',
    llmsDescription: 'Privacy policy covering on-device video processing and optional OpenAI requests.',
  },
  press: {
    path: '/press/',
    label: 'Press',
    title: 'Press kit',
    description:
      'Boilerplate, screenshots, and app icon for Replay Rally, the $9.99 iPhone app that finds pickleball rallies on-device.',
    llmsDescription: 'Press boilerplate, product facts, downloadable screenshots, icon, and usage terms.',
  },
} as const;

export const screenMedia = {
  rallyTimeline: {
    file: 'rally-timeline.png',
    alt: 'Replay Rally on iPhone showing a pickleball court, the rally bar reading Rally 16 of 90 · 7 shots, and the jog wheel with a yellow rally band and shot dots.',
    caption: 'Every rally is a band on the wheel; every shot is a dot.',
    width: 1260,
    height: 2736,
  },
  clipMenu: {
    file: 'clip-menu.png',
    alt: 'The Clip menu in Replay Rally with All rallies (no dead time), Last 15 seconds, Last 10 seconds, and Rally options.',
    caption: 'One tap saves the rally — or the whole game without the waiting.',
    width: 1260,
    height: 2736,
  },
  findingRallies: {
    file: 'finding-rallies.png',
    alt: 'Replay Rally mid-detection, showing Finding rallies… above the jog wheel while a player swings on court.',
    caption: 'Detection runs on the phone and takes seconds.',
    width: 1260,
    height: 2736,
  },
  scrub: {
    file: 'scrub.png',
    alt: 'Scrubbing in Replay Rally: the controls fade, leaving the time readout 4:30.9 and the jog wheel, while a player lunges for a low ball.',
    caption: 'Drag the wheel and everything else gets out of the way.',
    width: 1260,
    height: 2736,
  },
  slowMotion: {
    file: 'slow-motion.png',
    alt: 'Replay Rally playing at ¼× speed with the speed picker, rally bar, and jog wheel visible below the court.',
    caption: '¼×, ½×, 1×, 1.5× — pitch-corrected, full resolution.',
    width: 1260,
    height: 2736,
  },
  landscape: {
    file: 'landscape.png',
    alt: 'Replay Rally in landscape: a full-screen pickleball court with a thin control strip along the bottom and the Clip button in the side gutter.',
    caption: 'Landscape keeps every control out of the lower half of the frame.',
    width: 2736,
    height: 1260,
  },
} as const;

export const pressFrames = [
  { file: '01-skip-to-the-good-parts.png', caption: 'Skip to the good parts.', width: 1320, height: 2868 },
  { file: '02-minus-the-dead-time.png', caption: 'Your whole game, minus the dead time.', width: 1320, height: 2868 },
  { file: '03-found-in-seconds.png', caption: 'Every rally, found in seconds.', width: 1320, height: 2868 },
  { file: '04-feel-every-shot.png', caption: 'Scrub with your thumb. Feel every shot.', width: 1320, height: 2868 },
  { file: '05-stays-sharp.png', caption: 'Slow motion that stays sharp.', width: 1320, height: 2868 },
  { file: '06-built-for-court-footage.png', caption: 'Built for court footage.', width: 2868, height: 1320 },
] as const;

export const home = {
  eyebrow: 'REPLAY RALLY FOR IPHONE · $9.99 ONE TIME',
  heading: { before: 'Skip to the ', band: 'good parts.', after: '' },
  directAnswer:
    'Replay Rally is an iPhone app for reviewing pickleball videos. Open any game recording from Photos and it finds every rally on your phone in seconds — no upload, no account — so you can jump point to point, slow the fast ones down, and save a highlight reel with the standing-around cut out.',
  secondaryCta: 'See how it works →',
  proofs: [
    {
      value: '10:06 → 6:31',
      label: 'Ten minutes of open play became a 6½-minute reel of 60 rallies',
    },
    {
      value: '90',
      label: 'Rallies found in one 18:58 game, in seconds, with nothing uploaded',
    },
  ],
  featuresHeading: 'What Replay Rally does',
  features: [
    {
      eyebrow: 'ON-DEVICE DETECTION',
      heading: { before: 'It finds every rally by ', band: 'listening', after: ' for the paddle.' },
      body:
        'Replay Rally detects rallies from the sound of paddle contact — the pop that lives between 1 and 8 kHz — using signal processing that runs entirely on your iPhone. An hour of footage takes seconds. Your video never leaves the phone.',
      screen: 'findingRallies',
    },
    {
      eyebrow: 'RALLY TIMELINE',
      heading: { before: 'Jump ', band: 'point to point.', after: '' },
      body:
        'Every rally shows up as a yellow band on a frame-accurate jog wheel, with a dot for every shot. Tap the chevrons to move between rallies like chapters, or drag the wheel to scrub with your thumb — you’ll feel a haptic tick on every paddle strike.',
      screen: 'rallyTimeline',
    },
    {
      eyebrow: 'PLAYBACK',
      heading: { before: 'Slow motion that ', band: 'stays sharp.', after: '' },
      body:
        'Play at ¼×, ½×, 1×, or 1.5× with pitch-corrected audio, in the original resolution — nothing is transcoded. Pinch to zoom up to 8× and follow the ball. Double-tap either side of the video to skip five seconds.',
      screen: 'slowMotion',
    },
    {
      eyebrow: 'EXPORT',
      heading: { before: 'Your whole game, ', band: 'minus the dead time.', after: '' },
      body:
        'One tap saves the rally you just watched to Photos, full quality, near-instant. Or export every rally stitched into a single reel with the dead time removed — a 10-minute session becomes a 6-minute highlight video.',
      screen: 'clipMenu',
    },
  ],
  howHeading: 'How it works',
  steps: [
    {
      title: 'Pick a video.',
      body: 'Choose any pickleball recording from your Photos library. Replay Rally reads only the video you pick, never your library.',
    },
    {
      title: 'Rallies appear in seconds.',
      body: 'The detector listens for paddle strikes and marks every rally on the jog wheel.',
    },
    {
      title: 'Review.',
      body: 'Tap between rallies, slow the fast exchanges down, zoom in on the kitchen.',
    },
    {
      title: 'Save the good parts.',
      body: 'Clip a single rally or export the whole game as one dead-time-free reel to Photos.',
    },
  ],
  howLink: 'Read how rally detection works →',
  audienceHeading: 'Who it’s for',
  audiences: [
    {
      title: 'Made for',
      body: 'Rec players who film open play or league games on a phone or tripod and want to review them without scrubbing. Coaches and partners breaking down points together. Anyone who has ever fast-forwarded through 40 minutes of camcorder footage looking for one rally.',
    },
    {
      title: 'Not for',
      body: 'Live scoring or line calls. Ball tracking or shot-speed overlays. Sports other than pickleball — the detector is tuned to the sound of a pickleball paddle.',
    },
  ],
  priceHeading: 'Price',
  price: '$9.99',
  priceEyebrow: 'ONE-TIME PURCHASE',
  priceBody:
    'Replay Rally costs $9.99 once on the App Store. There is no subscription, no account, and no in-app purchase. Every feature above works offline, forever.',
  aiHeading: 'Optional AI coaching, bring your own key',
  aiBody:
    'If you add your own OpenAI API key in Settings, Replay Rally can also analyze a rally — how the point ended, what went wrong, what to work on, each a tappable timestamp — or produce a whole-game report ranking your costliest patterns with drills. You pay OpenAI directly, usually cents per game, and the app shows the estimated cost before every run. Nothing is sent until you tap Analyze.',
  privacyHeading: 'Private by design',
  privacyFacts: [
    'No account, no analytics, no servers — the developer never sees your footage.',
    'Add-only Photos access: Replay Rally can save clips but cannot read your library.',
    'The only network connection the app can make is the optional OpenAI call, under your own key, when you start an analysis.',
  ],
  privacyLink: 'Privacy policy →',
  questionsHeading: 'Questions',
  questions: [
    {
      question: 'Does Replay Rally upload my video?',
      answer:
        'No. Rally detection, playback, marking, calibration, and export all run on your iPhone. The optional AI coaching sends still frames to OpenAI only when you tap Analyze with your own API key.',
    },
    {
      question: 'What if it misses a rally or picks up the next court?',
      answer:
        'Mark the rally by hand with two taps — at the serve and when the ball is dead. Marked rallies also teach the detector: Settings → Calibrate → “Fit detector to my labels” retunes it to your court, on device.',
    },
    {
      question: 'What phones and videos does it support?',
      answer:
        'Any iPhone running iOS 17 or later, and any video that plays in the Photos app — including footage imported from a GoPro, DJI, or camera. iPad support is planned.',
    },
    { question: 'Is it a subscription?', answer: 'No. $9.99 once.' },
  ],
  questionsLink: 'All questions →',
  finalHeading: { before: 'Stop scrolling. ', band: 'Start replaying.', after: '' },
  finalNote: 'iPhone · iOS 17 or later · $9.99 one time',
} as const;

export const howItWorks = {
  eyebrow: 'HOW IT WORKS',
  heading: { before: 'It finds rallies by ', band: 'listening,', after: ' not watching.' },
  directAnswer:
    'Replay Rally finds rallies by analyzing the audio track of your video for the distinctive pop of a pickleball paddle, then grouping those strikes into points. The analysis runs on your iPhone in seconds and nothing is uploaded.',
  sections: {
    audio: {
      heading: 'Why audio instead of video?',
      paragraphs: [
        'A pickleball paddle strike is one of the most recognizable sounds in sport: a short, sharp pop with most of its energy between 1 and 8 kHz. Finding that sound is far cheaper than tracking a ball across 30 frames per second, which is why Replay Rally can process an hour of footage in seconds on a phone, with no cloud, no model download, and no battery drain. It also means the camera angle doesn’t matter — behind the baseline, on a fence, at floor level — as long as the microphone can hear the court.',
      ],
    },
    detector: {
      heading: 'What does the detector actually do?',
      steps: [
        {
          title: 'Onset detection.',
          body: 'It computes spectral flux — how quickly the sound spectrum changes — restricted to the 1–8 kHz band, so it responds to paddle pops and mostly ignores voices, shoes, and HVAC.',
        },
        {
          title: 'Adaptive threshold.',
          body: 'Strikes are kept when they stand well above a rolling median of the surrounding sound, which lets the same detector work in a quiet park and a loud gym.',
        },
        {
          title: 'Clustering into rallies.',
          body: 'Strikes that fall within a rally’s rhythm are joined into one point; gaps longer than a point can plausibly pause split them.',
        },
        {
          title: 'Rejecting what isn’t your rally.',
          body: 'Strikes from an adjacent court are quieter and cluster at a different amplitude, so they’re separated out. Pre-serve dribbling — the fast, regular bounce before a serve — is recognized by its tempo and dropped.',
        },
      ],
      after:
        'The result is a list of rallies with a timestamp for every shot, which is what draws the bands and dots on the jog wheel and drives the haptic tick on each strike.',
    },
    accuracy: {
      heading: 'How accurate is it?',
      paragraphs: [
        'On a court with one game and a phone within earshot, Replay Rally finds almost every rally with edges within a few tenths of a second of the serve and the ball going dead. The hard case is a busy rec center with games on both sides and a far-away phone: some quiet, far-side points can be missed and occasional strikes from the next court can be picked up. Both have a fix.',
      ],
    },
    calibration: {
      heading: 'How does calibration work?',
      paragraphs: [
        'Mark any rally by hand — tap Mark at the serve, tap again when the ball is dead. That both adds the rally to the timeline and records a label. In Settings → Calibrate, “Why was nothing detected here?” shows which stage discarded a point (too quiet, below the local median, classified as far court), and “Fit detector to my labels” searches the detector’s parameters across every video you’ve labelled and shows a before/after table — rallies found, false positives, start and end error — before you apply it. It runs on your phone and costs nothing.',
      ],
    },
    highlight: {
      heading: 'How to make a pickleball highlight reel on iPhone',
      steps: [
        'Open Replay Rally and choose a game video from Photos.',
        'Wait a few seconds while the rallies are found; they appear as yellow bands on the wheel.',
        'Optionally delete any false rally with the trash button, or trim an edge by holding it on the wheel and dragging.',
        'Long-press the Clip button and choose “All rallies (no dead time)”. The reel is saved to Photos with the standing-around removed.',
      ],
    },
    ai: {
      heading: 'What does the optional AI coaching send?',
      paragraphs: [
        'Only if you add your own OpenAI API key, and only when you tap Analyze or run a game report. For a single rally the app samples up to 48 still frames, weighted toward the moments of paddle contact, and sends them with the shot timeline to OpenAI’s API directly from your phone. A game report does the same for each rally (32 frames each) and then one text-only pass to summarize. The estimated cost is shown before every run — typically cents — and results are cached on your phone so reopening a rally is free. The developer has no server in the middle and never sees the request.',
      ],
    },
  },
  ctaHeading: 'See it on your own footage.',
} as const;

export const faq = {
  eyebrow: 'FAQ',
  heading: { before: 'Questions, ', band: 'answered.', after: '' },
  directAnswer:
    'Replay Rally is a $9.99 iPhone app that finds rallies in pickleball videos on-device. Below are the questions people ask before and after buying it.',
  items: [
    {
      question: 'What is Replay Rally?',
      answer:
        'Replay Rally is an iPhone app for reviewing pickleball videos. It automatically finds every rally in a recording, lets you jump between points, watch in slow motion, and export individual rallies or a full highlight reel with the dead time removed.',
    },
    {
      question: 'How much does it cost?',
      answer: '$9.99, once, on the App Store. No subscription, no account, no in-app purchases.',
    },
    {
      question: 'Does Replay Rally upload my video anywhere?',
      answer:
        'No. Rally detection, playback, marking, calibration, and export all run on your iPhone. The only network call the app can make is to OpenAI, and only if you add your own API key and tap Analyze.',
    },
    {
      question: 'Which iPhones and videos are supported?',
      answer:
        'Any iPhone on iOS 17 or later. Any video that plays in the Photos app works, including footage imported from a GoPro, DJI, or dedicated camera. The original file is used as-is — no transcoding, no quality loss.',
    },
    {
      question: 'Is there an iPad or Android version?',
      answer: 'Not yet. Version 1 is iPhone only; iPad support is planned. There is no Android version.',
    },
    {
      question: 'How long does detection take?',
      answer:
        'Seconds. The detector analyzes the audio track rather than every video frame, so an hour of footage takes only a few seconds on a modern iPhone.',
    },
    {
      question: 'How accurate is rally detection?',
      answer:
        'On a court with one game and a phone within earshot it finds almost every rally. Busy rec centers with games on adjacent courts are the hard case — some far-side points can be missed and the next court can occasionally be picked up. Marking a few rallies by hand and running “Fit detector to my labels” in Settings → Calibrate fixes both for your court.',
    },
    {
      question: 'What if it misses a rally?',
      answer:
        'Tap Mark at the serve and again when the ball is dead. The rally is added to the timeline immediately and also becomes a training label for calibration.',
    },
    {
      question: 'Can I fix a rally that starts or ends at the wrong time?',
      answer:
        'Yes. Hold your finger on the rally’s edge on the jog wheel until it latches, then drag to trim it. The new length shows live while you drag.',
    },
    {
      question: 'What does “All rallies (no dead time)” do?',
      answer:
        'It stitches every rally in order into one video with the time between points removed and saves it to your Photos library. A 10-minute session typically becomes a 6-minute reel. The export is passthrough — full original quality, no re-encoding — so it takes seconds.',
    },
    {
      question: 'Does Replay Rally need access to my photo library?',
      answer:
        'Only add-only access, which lets it save clips. It cannot read, browse, or scan your library. The video you open is handed over by the system picker one file at a time.',
    },
    {
      question: 'What is the AI coaching, and do I need it?',
      answer:
        'It’s optional. With your own OpenAI API key in Settings, Analyze breaks down a rally (how the point ended, what went wrong, what went right, one thing to work on) with tappable timestamps, and a game report ranks your costliest patterns across a whole game with drills. Everything else in the app works without it.',
    },
    {
      question: 'How much does the AI coaching cost?',
      answer:
        'You’re billed by OpenAI, not by Replay Rally. A single rally analysis usually costs a few cents and a full game report typically less than a dollar on the Standard tier; the app shows the estimated cost before every run and caches results so you’re never billed twice for the same rally.',
    },
    {
      question: 'Does it work for tennis, padel, or table tennis?',
      answer: 'No. The detector is tuned to the sound of a pickleball paddle. Other racket sports aren’t supported.',
    },
    {
      question: 'Can I get a refund?',
      answer: 'Purchases are handled by Apple. Request a refund at reportaproblem.apple.com within 14 days of purchase.',
    },
    {
      question: 'How do I get help?',
      answer: faqHelpAnswer,
      markdownAnswer: faqHelpMarkdown,
      answerParts: [
        'Through the support page at ',
        { label: supportPath, url: supportPath },
        '. A short clip of the footage that gave the detector trouble helps enormously',
        ...(SUPPORT_EMAIL
          ? ([', or email ', { label: SUPPORT_EMAIL, url: supportMailto }] as const)
          : []),
        '.',
      ],
    },
  ],
} as const;

export const support = {
  eyebrow: 'SUPPORT',
  heading: { before: 'We’ll get you ', band: 'back on court.', after: '' },
  directAnswer:
    'Replay Rally is made by one developer, and support requests go straight to the person who wrote the detector.',
  contact: {
    heading: 'Contact',
    body: SUPPORT_EMAIL || SUPPORT_EMPTY_STATE,
  },
  troubleshootingHeading: 'Troubleshooting',
  items: [
    {
      question: 'It missed a rally.',
      answer:
        'Tap Mark at the serve and again when the ball is dead. Then open Settings → Calibrate and run “Fit detector to my labels” so future videos from that court do better.',
    },
    {
      question: 'It found rallies from the court next to mine.',
      answer:
        'Delete them with the trash button on the rally bar, mark two or three real rallies, and run the fit in Settings → Calibrate. The fit learns the loudness difference between your court and the neighbors’.',
    },
    {
      question: 'Detection found nothing at all.',
      answer:
        'Check that the video has an audio track and that the phone wasn’t muted or in a case that blocks the microphone. Open Settings → Calibrate and use “Why was nothing detected here?” at a rally you can see — it tells you which stage discarded the sound.',
    },
    {
      question: 'The export didn’t appear in Photos.',
      answer:
        'The first export asks for add-only Photos permission; if it was declined, enable it in iPhone Settings → Privacy & Security → Photos → Replay Rally → “Add Photos Only”.',
    },
    {
      question: 'Analyze opens Settings instead of analyzing.',
      answer:
        'That means no OpenAI API key is saved. Paste a key from platform.openai.com into Settings; it’s stored only in your iPhone’s Keychain.',
    },
    {
      question: 'The app says an OpenAI request failed.',
      answer:
        'Check that the key is valid and has billing enabled at platform.openai.com. The error text from OpenAI is shown in the app.',
    },
  ],
  links: 'FAQ and Privacy.',
} as const;

export const privacy = {
  eyebrow: 'PRIVACY POLICY · EFFECTIVE SEPTEMBER 3, 2026',
  heading: { before: 'Your footage ', band: 'stays on your phone.', after: '' },
  directAnswer:
    'Replay Rally does not collect, store, or transmit your personal data. There are no accounts, no analytics, no advertising, and no servers operated by the developer.',
  sections: [
    {
      heading: 'Your videos',
      body: 'Videos you open stay on your device. Rally detection, playback, marking, calibration, and clip export run entirely on your iPhone. Clips are saved to your photo library using add-only access; the app cannot read or browse your library.',
    },
    {
      heading: 'Optional AI features',
      body: 'If you choose to add your own OpenAI API key, tapping Analyze or running a Game Report sends still frames from the selected rally and shot-timing data directly from your device to OpenAI’s API under your key, governed by OpenAI’s privacy policy. Nothing is sent until you explicitly start an analysis, and the app shows an estimated cost before each one. Your key is stored only in the iOS Keychain on your device and is never sent anywhere other than OpenAI.',
    },
    {
      heading: 'Data retention',
      body: 'Analysis results are cached on your device so you aren’t billed twice for the same rally. Deleting the app deletes them. The developer never receives them.',
    },
    {
      heading: 'This website',
      body: 'This site is static, sets no cookies, loads nothing from third parties, and runs no analytics.',
    },
    {
      heading: 'Changes',
      body: 'If this policy changes, the new version will be posted at this address with a new effective date.',
    },
    { heading: 'Contact', body: SUPPORT_EMAIL || 'Contact: see the support page.' },
  ],
} as const;

export const press = {
  eyebrow: 'PRESS KIT',
  heading: { before: 'Everything you need to ', band: 'write about it.', after: '' },
  directAnswer:
    'Replay Rally is a $9.99 iPhone app that finds every rally in a pickleball video on-device in seconds and exports highlight reels with the dead time removed. It launched in September 2026 and is made by an independent developer who plays recreational pickleball.',
  boilerplateHeading: 'Boilerplate',
  boilerplate: [
    {
      label: 'One line',
      body: 'Replay Rally finds every rally in your pickleball videos on your iPhone, in seconds, so you can skip to the good parts.',
    },
    {
      label: 'Short',
      body: 'Replay Rally is an iPhone app for reviewing pickleball videos. It detects rallies from the sound of paddle contact — entirely on-device, no upload — then lets players jump point to point, watch in slow motion at full resolution, and export single rallies or a dead-time-free highlight reel to Photos. It costs $9.99 once. Optional AI coaching works with the user’s own OpenAI key.',
    },
    {
      label: 'Maker',
      body: 'Replay Rally is built by an independent developer and recreational pickleball player who got tired of scrubbing through camcorder footage at 2× looking for one good point.',
    },
  ],
  factsHeading: 'Facts',
  facts: [
    ['Platform', 'iPhone, iOS 17 or later'],
    ['Price', '$9.99 one-time'],
    ['Category', 'Sports'],
    ['Launch', 'September 2026'],
    ['Detection', 'on-device audio signal processing'],
    ['Network use', 'none, except optional OpenAI calls under the user’s own key'],
    ['Developer', 'Independent'],
    ['Contact', SUPPORT_EMAIL || 'via the support page'],
  ],
  screenshotsHeading: 'Screenshots',
  screenshotsNote: 'Real footage, real detections — nothing in these images is mocked.',
  iconHeading: 'App icon',
  usageHeading: 'Usage',
  usageBody: 'Screenshots and the icon may be used in coverage of Replay Rally without permission. Please don’t alter the icon.',
} as const;

export const llmsFacts = [
  'Replay Rally is an iPhone app (iOS 17+) for reviewing pickleball videos; $9.99 one-time on the App Store; no subscription, no account.',
  'Finds rallies from the audio of paddle contact (1–8 kHz), on-device, in seconds; nothing is uploaded.',
  'Features: rally timeline with per-shot dots, frame-accurate jog wheel with haptics, ¼×–1.5× playback at original resolution, 8× zoom, one-tap rally clips, and “All rallies (no dead time)” highlight-reel export to Photos.',
  'Manual marking and on-device calibration fix missed or extra rallies.',
  'Optional AI coaching uses the user’s own OpenAI API key; the app’s only network call; cost estimate shown before every run.',
  'Privacy: no analytics, no servers, add-only Photos access.',
] as const;

export type PageKey = keyof typeof pageMeta;
export type ScreenKey = keyof typeof screenMedia;

const joinHeading = (heading: { before: string; band: string; after: string }) =>
  `${heading.before}${heading.band}${heading.after}`;

const numbered = (items: readonly { title: string; body: string }[]) =>
  items.map((item, index) => `${index + 1}. **${item.title}** ${item.body}`).join('\n');

const qaMarkdown = (
  items: readonly { question: string; answer: string; markdownAnswer?: string }[],
) => items.map((item) => `### ${item.question}\n\n${item.markdownAnswer ?? item.answer}`).join('\n\n');

const ctaMarkdown = () =>
  APP_STORE_URL
    ? `[${appStoreCtaText.available}](${APP_STORE_URL})`
    : appStoreCtaText.comingSoon;

export function pageMarkdown(key: PageKey): string {
  if (key === 'home') {
    return [
      `# ${joinHeading(home.heading)}`,
      home.eyebrow,
      home.directAnswer,
      `${ctaMarkdown()} · [${home.secondaryCta}](/how-it-works/)`,
      home.proofs.map((proof) => `- **${proof.value}** — ${proof.label}`).join('\n'),
      `## ${home.featuresHeading}`,
      home.features
        .map((feature) => {
          const media = screenMedia[feature.screen];
          return `### ${joinHeading(feature.heading)}\n\n${feature.eyebrow}\n\n${feature.body}\n\n*${media.caption}*`;
        })
        .join('\n\n'),
      `## ${home.howHeading}`,
      numbered(home.steps),
      `[${home.howLink}](/how-it-works/)`,
      `## ${home.audienceHeading}`,
      home.audiences.map((item) => `### ${item.title}\n\n${item.body}`).join('\n\n'),
      `## ${home.priceHeading}`,
      `**${home.price}**\n\n${home.priceEyebrow}\n\n${home.priceBody}`,
      `### ${home.aiHeading}`,
      home.aiBody,
      `## ${home.privacyHeading}`,
      home.privacyFacts.map((fact) => `- ${fact}`).join('\n'),
      `[${home.privacyLink}](/privacy/)`,
      `## ${home.questionsHeading}`,
      qaMarkdown(home.questions),
      `[${home.questionsLink}](/faq/)`,
      `## ${joinHeading(home.finalHeading)}`,
      ctaMarkdown(),
      home.finalNote,
    ].join('\n\n');
  }

  if (key === 'howItWorks') {
    const { sections } = howItWorks;
    return [
      `# ${joinHeading(howItWorks.heading)}`,
      howItWorks.eyebrow,
      howItWorks.directAnswer,
      `## ${sections.audio.heading}`,
      sections.audio.paragraphs.join('\n\n'),
      `## ${sections.detector.heading}`,
      numbered(sections.detector.steps),
      sections.detector.after,
      `## ${sections.accuracy.heading}`,
      sections.accuracy.paragraphs.join('\n\n'),
      `## ${sections.calibration.heading}`,
      sections.calibration.paragraphs.join('\n\n'),
      `## ${sections.highlight.heading}`,
      sections.highlight.steps.map((step, index) => `${index + 1}. ${step}`).join('\n'),
      `## ${sections.ai.heading}`,
      sections.ai.paragraphs.join('\n\n'),
      `## ${howItWorks.ctaHeading}`,
      ctaMarkdown(),
    ].join('\n\n');
  }

  if (key === 'faq') {
    return [`# ${joinHeading(faq.heading)}`, faq.eyebrow, faq.directAnswer, qaMarkdown(faq.items)].join('\n\n');
  }

  if (key === 'support') {
    return [
      `# ${joinHeading(support.heading)}`,
      support.eyebrow,
      support.directAnswer,
      `## ${support.contact.heading}`,
      SUPPORT_EMAIL ? `[${SUPPORT_EMAIL}](${supportMailto})` : support.contact.body,
      `## ${support.troubleshootingHeading}`,
      qaMarkdown(support.items),
      support.links,
    ].join('\n\n');
  }

  if (key === 'privacy') {
    return [
      `# ${joinHeading(privacy.heading)}`,
      privacy.eyebrow,
      privacy.directAnswer,
      privacy.sections
        .map((section) => {
          if (section.heading !== 'Contact') return `## ${section.heading}\n\n${section.body}`;
          const contact = SUPPORT_EMAIL
            ? `[${SUPPORT_EMAIL}](${supportMailto})`
            : 'Contact: see the [support page](/support/).';
          return `## ${section.heading}\n\n${contact}`;
        })
        .join('\n\n'),
    ].join('\n\n');
  }

  return [
    `# ${joinHeading(press.heading)}`,
    press.eyebrow,
    press.directAnswer,
    `## ${press.boilerplateHeading}`,
    press.boilerplate.map((item) => `### ${item.label}\n\n${item.body}`).join('\n\n'),
    `## ${press.factsHeading}`,
    press.facts
      .map(([term, value]) => {
        if (term !== 'Contact') return `- **${term}:** ${value}`;
        const contact = SUPPORT_EMAIL
          ? `[${SUPPORT_EMAIL}](${supportMailto})`
          : '[via the support page](/support/)';
        return `- **${term}:** ${contact}`;
      })
      .join('\n'),
    `## ${press.screenshotsHeading}`,
    pressFrames.map((frame) => `- [${frame.caption}](/press/${frame.file})`).join('\n'),
    press.screenshotsNote,
    `## ${press.iconHeading}`,
    '[Download PNG](/brand/icon-1024.png)',
    `## ${press.usageHeading}`,
    press.usageBody,
  ].join('\n\n');
}
