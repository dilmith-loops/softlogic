/**
 * CHECKHUB - Breast Cancer Awareness & Early Detection Interactive Application
 * Built with Vanilla JavaScript
 */

// ==========================================================================
// VIDEO DATABASE (Bait titles paired with lifesaving clinical knowledge)
// ==========================================================================
const VIDEO_DATABASE = [
  {
    id: "vid-1",
    youtubeId: "8c2z6FDeAf8",
    title: "Hands-On Action: Complete Shower Technique In 4K",
    category: "self-exam",
    duration: "03:45",
    durationSec: 225,
    views: "2,491,200",
    viewsCount: 2491200,
    rating: 99.4,
    date: "2 days ago",
    author: "Dr. Angela Reed, M.D.",
    authorTitle: "Breast Surgical Oncologist",
    authorVerified: true,
    description: "In this comprehensive guide, Dr. Reed demonstrates the circular palpation technique you can do while showering. Lathering with soap dramatically reduces friction, allowing your fingertips to detect minute tissue thickening and lumps that are harder to feel when dry.",
    keyPoints: [
      "Use pads of 3 middle fingers (not tips) with overlapping circular dime-sized motions.",
      "Check with light pressure (near skin surface), medium (glandular layer), and deep pressure (chest wall).",
      "Sweep from the collarbone down to the bottom of the ribs, and armpit across to the breastbone.",
      "Shower monthly: around day 7 to 10 after your period starts when tissue is least swollen."
    ],
    animationType: "shower-circles",
    accentColor: "#ff9000",
    icon: "🚿",
    badge: "ESSENTIAL ROUTINE"
  },
  {
    id: "vid-2",
    youtubeId: "2GjPWEtvJSA",
    title: "Two Round Objects You Should Be Looking At In The Mirror",
    category: "symptoms",
    duration: "04:20",
    durationSec: 260,
    views: "3,812,400",
    viewsCount: 3812400,
    rating: 99.8,
    date: "1 week ago",
    author: "Prof. Catherine Vance",
    authorTitle: "Chief of Radiology & Mammography",
    authorVerified: true,
    description: "Visual inspection in front of a mirror is step #1 of any clinical self-check. Many early tumors present visible skin retractions, dimpling (similar to the skin of an orange), or subtle nipple direction changes before they can even be felt by touch.",
    keyPoints: [
      "Look with arms relaxed at your sides, then hands placed firmly on hips pushing shoulders forward.",
      "Inspect for any new asymmetry, swelling, bulging, or skin puckering.",
      "Raise both arms overhead: check if both breasts lift together smoothly or if an area tugs inward.",
      "Examine nipples for sudden retraction, inversion, scaling, or spontaneous fluid discharge."
    ],
    animationType: "mirror-inspection",
    accentColor: "#ff9000",
    icon: "🪞",
    badge: "STEP 1 FOUNDATION"
  },
  {
    id: "vid-3",
    youtubeId: "7ef2RF_9U4c",
    title: "Caught Touching Themselves: Doctor Explains Proper Technique",
    category: "self-exam",
    duration: "05:12",
    durationSec: 312,
    views: "1,940,000",
    viewsCount: 1940000,
    rating: 98.9,
    date: "3 days ago",
    author: "Dr. Marcus Chen, F.A.C.S.",
    authorTitle: "Clinical Oncology Specialist",
    authorVerified: true,
    description: "Most people press haphazardly and miss the critical upper-outer quadrant where 50% of all breast cancers originate. Dr. Chen reviews the three proven palpation patterns: Vertical Strips, Circular Spiral, and Wedge Pattern.",
    keyPoints: [
      "The Vertical Strip pattern is clinically proven to leave fewer missed zones.",
      "Start in the armpit and move downward in a straight line until below the breast, then shift over slightly and move upward.",
      "Pay extra attention to the 'Tail of Spence' extending into the underarm.",
      "Never pick your fingers up completely; slide them smoothly to avoid gaps."
    ],
    animationType: "grid-palpation",
    accentColor: "#ff9000",
    icon: "🩺",
    badge: "DOCTOR APPROVED"
  },
  {
    id: "vid-4",
    youtubeId: "2GjPWEtvJSA",
    title: "Hot & Heavy: 5 Warning Signs You Absolutely Cannot Ignore",
    category: "symptoms",
    duration: "06:15",
    durationSec: 375,
    views: "4,150,800",
    viewsCount: 4150800,
    rating: 99.1,
    date: "2 weeks ago",
    author: "Dr. Elena Rostova",
    authorTitle: "Preventative Medicine Director",
    authorVerified: true,
    description: "While 80% of investigated lumps are benign cysts or fibroadenomas, these 5 red flags demand immediate doctor evaluation: a rigid painless lump with irregular borders, skin dimpling, bloody discharge, newly inverted nipple, and persistent lymph node swelling.",
    keyPoints: [
      "Rigid mass: Feels hard like a lemon seed or pebble, non-tender, and anchored to tissue.",
      "Peau d'orange: Skin pores enlarge and mimic citrus peel due to blocked lymphatic drainage.",
      "Unilateral bloody or clear discharge without squeezing the nipple.",
      "Inflammatory signs: Warmth, rapid swelling, and pink/purple redness covering over a third of the breast."
    ],
    animationType: "warning-zones",
    accentColor: "#e07f00",
    icon: "⚠️",
    badge: "CRITICAL KNOWLEDGE"
  },
  {
    id: "vid-5",
    youtubeId: "8c2z6FDeAf8",
    title: "Men Do It Too: The Taboo Nobody Ever Talks About",
    category: "male-cancer",
    duration: "04:50",
    durationSec: 290,
    views: "1,120,400",
    viewsCount: 1120400,
    rating: 98.7,
    date: "5 days ago",
    author: "Robert Miller & Dr. Adams",
    authorTitle: "Survivor & Urologic/Male Oncology Lead",
    authorVerified: true,
    description: "Every man has breast tissue behind the nipple and areola. Around 2,800 men are diagnosed with invasive breast cancer every year in the US alone. Because men do not suspect it, diagnoses often occur in late stages. Learn the male check in under 60 seconds.",
    keyPoints: [
      "Symptoms in men most commonly appear as a firm, painless lump right beneath the nipple.",
      "Men with BRCA2 genetic mutations or Klinefelter syndrome have higher risk.",
      "Check for nipple inversion, crusting, or discharge.",
      "Early detection brings male breast cancer survival rates up to 96%."
    ],
    animationType: "male-anatomy",
    accentColor: "#3b82f6",
    icon: "👨",
    badge: "MEN'S HEALTH"
  },
  {
    id: "vid-6",
    youtubeId: "7ef2RF_9U4c",
    title: "First Time Experience: What Really Happens At A Mammogram",
    category: "mammogram",
    duration: "07:30",
    durationSec: 450,
    views: "1,530,000",
    viewsCount: 1530000,
    rating: 97.9,
    date: "1 month ago",
    author: "Hannah Jacobs, RT(R)(M)",
    authorTitle: "Lead Mammography Technologist",
    authorVerified: true,
    description: "Nervous about your first mammogram? We demystify the compression plates, radiation levels, timing tips to reduce discomfort, and 3D Tomosynthesis. Compression lasts only 10 to 15 seconds per view and can detect microcalcifications years before they are palpable.",
    keyPoints: [
      "Schedule your mammogram for the week right after your period when breasts are least sensitive.",
      "Avoid deodorants, antiperspirants, powders, or lotions on the day of the exam (they can mimic calcifications).",
      "Modern 3D Tomosynthesis captures cross-sectional slices with very low radiation.",
      "General guideline: Annual or biennial mammograms starting at age 40 (or earlier with family history)."
    ],
    animationType: "mammogram-scan",
    accentColor: "#10b981",
    icon: "🏥",
    badge: "CLINICAL GUIDE"
  },
  {
    id: "vid-7",
    youtubeId: "7ef2RF_9U4c",
    title: "Deep Tissue Examination: Lying Down Position",
    category: "self-exam",
    duration: "03:10",
    durationSec: 190,
    views: "890,200",
    viewsCount: 890200,
    rating: 98.6,
    date: "3 weeks ago",
    author: "Dr. Angela Reed, M.D.",
    authorTitle: "Breast Surgical Oncologist",
    authorVerified: true,
    description: "Why lying down is essential: When standing, breast tissue falls toward the lower pole. When lying down, it flattens evenly against the ribcage wall, making deep nodules against the pectoralis muscle detectable that would otherwise remain hidden.",
    keyPoints: [
      "Place a small pillow or folded towel under your right shoulder, placing right hand behind head.",
      "Use your left hand pads in a lawnmower or circular pattern with firm pressure.",
      "Switch sides and repeat with right hand on left breast.",
      "Gently compress the nipple between thumb and index finger to test for fluid discharge."
    ],
    animationType: "lying-palpation",
    accentColor: "#ff9000",
    icon: "🛏️",
    badge: "POSITIONING"
  },
  {
    id: "vid-8",
    youtubeId: "2GjPWEtvJSA",
    title: "Myths Busted: Underwire Bras, Deodorant & Other Dangerous Lies",
    category: "myths",
    duration: "05:40",
    durationSec: 340,
    views: "2,760,000",
    viewsCount: 2760000,
    rating: 99.5,
    date: "2 weeks ago",
    author: "Dr. Sarah Jenkins",
    authorTitle: "Epidemiologist & Health Researcher",
    authorVerified: true,
    description: "Does underwire block lymph flow? Does aluminum in antiperspirant cause tumors? Can a breast injury cause cancer? Dr. Jenkins breaks down the peer-reviewed science that definitively debunked these persistent viral myths.",
    keyPoints: [
      "Underwire bras do NOT cause breast cancer; rigorous epidemiological trials found zero association.",
      "Antiperspirants and deodorants have no verified causal link to breast carcinogenesis.",
      "Trauma or physical bruising to the breast does not produce tumors (though it can bring existing lumps to attention).",
      "Real proven risk factors: Age, genetic mutations (BRCA1/2), high breast density, alcohol intake, and family history."
    ],
    animationType: "myths-facts",
    accentColor: "#ff9000",
    icon: "💡",
    badge: "SCIENCE FIRST"
  },
  {
    id: "vid-9",
    youtubeId: "8c2z6FDeAf8",
    title: "Hard vs Soft: How To Feel The Difference On Glandular Tissue",
    category: "self-exam",
    duration: "04:05",
    durationSec: 245,
    views: "3,210,000",
    viewsCount: 3210000,
    rating: 99.2,
    date: "4 days ago",
    author: "Dr. Angela Reed, M.D.",
    authorTitle: "Breast Health Specialist",
    authorVerified: true,
    description: "Healthy breasts naturally have lumps and texture, frequently described as feeling like peas in a soft beanbag or oatmeal. This video teaches tactile calibration: distinguishing benign hormonal lumpiness from an abnormal fixed nodule.",
    keyPoints: [
      "Normal tissue: Uniform, soft, pliable, symmetrical between left and right sides.",
      "Benign cyst: Smooth, spherical, often mobile under fingers like a grape.",
      "Suspicious mass: Hard like a frozen pea or stone, uneven edges, painless, fixed to tissue.",
      "When in doubt, compare identical quadrants on both breasts. Asymmetry is what calls for evaluation."
    ],
    animationType: "tactile-calibration",
    accentColor: "#ff9000",
    icon: "🧬",
    badge: "TACTILE TEST"
  },
  {
    id: "vid-10",
    youtubeId: "2GjPWEtvJSA",
    title: "Under Pressure: Nipple Retraction & Discharge Warning",
    category: "symptoms",
    duration: "04:45",
    durationSec: 285,
    views: "1,670,000",
    viewsCount: 1670000,
    rating: 98.1,
    date: "1 week ago",
    author: "Dr. Michael Sterling",
    authorTitle: "Pathologist & Oncology Consultant",
    authorVerified: true,
    description: "A deep dive into ductal papillomas, Paget's disease of the breast, and ductal carcinoma. Learn why unilateral spontaneous bloody discharge or an inverted nipple that cannot be pulled out warrants an immediate ductogram or biopsy.",
    keyPoints: [
      "Spontaneous discharge: Leaking without physical squeezing is the main indicator of concern.",
      "Color code: Clear or bloody discharge is more suspicious than milky, green, or yellow secretions.",
      "Paget's disease: Often mistaken for eczema, presenting as redness, flaking, or ulceration on the nipple.",
      "Sudden inversion: If a nipple that was previously erect turns inwards, retroareolar tissue must be evaluated."
    ],
    animationType: "nipple-anatomy",
    accentColor: "#e07f00",
    icon: "🔍",
    badge: "SYMPTOM ALERT"
  },
  {
    id: "vid-11",
    youtubeId: "8c2z6FDeAf8",
    title: "Morning Routine: 3 Minutes That Could Save Your Life",
    category: "self-exam",
    duration: "02:55",
    durationSec: 175,
    views: "5,300,100",
    viewsCount: 5300100,
    rating: 99.9,
    date: "6 days ago",
    author: "Maya Lin (Stage 1 Survivor) & Dr. Reed",
    authorTitle: "Patient Advocate & Surgeon",
    authorVerified: true,
    description: "Maya found a tiny 1.2cm lump during her routine morning shower. Because she caught it at Stage 1, she required minimal treatment and has been cancer-free for 7 years. In this video, she walks through her monthly 3-minute habit.",
    keyPoints: [
      "Set a recurring monthly alarm on your phone (e.g. the 10th of every month).",
      "Do not obsess or check every single day (hormonal daily fluctuations can create false panic).",
      "Once a month is the sweet spot for accurate baseline tracking.",
      "Over 80% of breast cancers are discovered by individuals themselves or their partners!"
    ],
    animationType: "routine-clock",
    accentColor: "#ff9000",
    icon: "⏰",
    badge: "SURVIVOR STORY"
  },
  {
    id: "vid-12",
    youtubeId: "2GjPWEtvJSA",
    title: "Young & Active: Why It Doesn't Only Happen To Older People",
    category: "myths",
    duration: "08:15",
    durationSec: 495,
    views: "1,890,000",
    viewsCount: 1890000,
    rating: 98.4,
    date: "2 weeks ago",
    author: "Dr. Priya Nair, M.D.",
    authorTitle: "Young Women's Breast Health Clinic",
    authorVerified: true,
    description: "More than 26,000 women under 45 are diagnosed with breast cancer each year in North America. Breast cancer in younger women tends to be discovered at later stages due to assumption of immunity. Here is what every person in their 20s and 30s must know.",
    keyPoints: [
      "Dense breast tissue is common in younger individuals, making mammograms less sensitive; ultrasound/MRI may be required.",
      "Know your family tree: Maternal AND paternal history of breast or ovarian cancer matters.",
      "Genetic testing: Consider talking to a genetic counselor if multiple relatives had early-onset cancer.",
      "Advocate for yourself: If you feel a persistent lump and are told 'you are too young', request an ultrasound."
    ],
    animationType: "genetic-tree",
    accentColor: "#ff9000",
    icon: "🌱",
    badge: "UNDER 40 GUIDE"
  }
];

// Preloaded Realistic Community Comments
const INITIAL_COMMENTS = [
  {
    id: "c-1",
    author: "Dr. Elena Vance, M.D.",
    badge: "Oncologist",
    time: "2 hours ago",
    text: "As an oncologist who sees late-stage presentations every week, this campaign is GENIUS. Catching young people where their attention is and pivoting to self-exams will literally save lives. Please share this with your friends and sisters.",
    likes: 1420
  },
  {
    id: "c-2",
    author: "Marcus T.",
    badge: "Verified Viewer",
    time: "5 hours ago",
    text: "Came for the bait, stayed for the whole video. Sent the link to my girlfriend and mom immediately. Didn't even realize men could get breast cancer either until video #5. Eye opening.",
    likes: 835
  },
  {
    id: "c-3",
    author: "Sarah M.",
    badge: "4-Year Survivor",
    time: "1 day ago",
    text: "I found my lump in the shower in 2022 just like shown in this video. Caught it at Stage 1A with a 99% cure rate. If I hadn't known the circular soap palpation technique, I might not be here. Thank you CheckHub team ❤️",
    likes: 2190
  },
  {
    id: "c-4",
    author: "Alex Rivera",
    badge: "CheckHub Fan",
    time: "1 day ago",
    text: "Funniest and most wholesome bamboozle on the internet. 10/10 marketing for a good cause.",
    likes: 412
  }
];

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
let currentCategory = "all";
let currentSort = "trending";
let searchQuery = "";
let isCompactGrid = false;
let currentVideo = VIDEO_DATABASE[0];
let isPlaying = false;
let playbackTime = 0;
let playbackSpeed = 1.0;
let isMuted = false;
let animationFrameId = null;
let currentPressureDepth = "light";

// ==========================================================================
// DOM ELEMENT SELECTIONS
// ==========================================================================
const videoGridEl = document.getElementById("videoGrid");
const totalVideoCountEl = document.getElementById("totalVideoCount");
const visibleCounterEl = document.getElementById("visibleCounter");
const currentSectionTitleEl = document.getElementById("currentSectionTitle");
const sortSelectEl = document.getElementById("sortSelect");
const viewToggleBtn = document.getElementById("viewToggleBtn");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const searchSuggestions = document.getElementById("searchSuggestions");
const searchFilterBanner = document.getElementById("searchFilterBanner");
const filterQueryText = document.getElementById("filterQueryText");
const resetSearchFilter = document.getElementById("resetSearchFilter");

// Modals
const ageGateModal = document.getElementById("ageGateModal");
const btnEnterSite = document.getElementById("btnEnterSite");
const btnSkipToGuide = document.getElementById("btnSkipToGuide");

const videoModal = document.getElementById("videoModal");
const closeVideoModal = document.getElementById("closeVideoModal");
const playerRevealScreen = document.getElementById("playerRevealScreen");
const activePlayerBox = document.getElementById("activePlayerBox");
const btnContinueToVideo = document.getElementById("btnContinueToVideo");
const medicalCanvas = document.getElementById("medicalAnimationCanvas");

// Video Info Inside Modal
const modalVideoTitle = document.getElementById("modalVideoTitle");
const modalViews = document.getElementById("modalViews");
const modalDate = document.getElementById("modalDate");
const modalAuthor = document.getElementById("modalAuthor");
const modalDescription = document.getElementById("modalDescription");
const modalKeyPoints = document.getElementById("modalKeyPoints");
const modalLikes = document.getElementById("modalLikes");
const modalLikeBtn = document.getElementById("modalLikeBtn");
const modalDislikeBtn = document.getElementById("modalDislikeBtn");
const modalShareBtn = document.getElementById("modalShareBtn");
const modalSaveBtn = document.getElementById("modalSaveBtn");
const btnModalReminder = document.getElementById("btnModalReminder");
const btnModalShareTeaser = document.getElementById("btnModalShareTeaser");

// Comments
const commentsList = document.getElementById("commentsList");
const commentCountEl = document.getElementById("commentCount");
const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");

// Video Controls
const ctrlPlayPause = document.getElementById("ctrlPlayPause");
const ctrlRewind = document.getElementById("ctrlRewind");
const ctrlForward = document.getElementById("ctrlForward");
const ctrlSpeed = document.getElementById("ctrlSpeed");
const ctrlMute = document.getElementById("ctrlMute");
const ctrlFullscreen = document.getElementById("ctrlFullscreen");
const timeDisplay = document.getElementById("timeDisplay");
const progressBarContainer = document.getElementById("progressBarContainer");
const progressBarFill = document.getElementById("progressBarFill");

// Hero buttons
const heroPlayBtn = document.getElementById("heroPlayBtn");
const heroLearnBtn = document.getElementById("heroLearnBtn");

// Simulator Modal Elements
const simulatorModal = document.getElementById("simulatorModal");
const closeSimulatorModal = document.getElementById("closeSimulatorModal");
const openSimulatorBtn = document.getElementById("openSimulatorBtn");
const btnSelfCheckModal = document.getElementById("btnSelfCheckModal");
const touchSimulatorCanvas = document.getElementById("touchSimulatorCanvas");
const simulatorFeedback = document.getElementById("simulatorFeedback");
const simDepthLight = document.getElementById("simDepthLight");
const simDepthMedium = document.getElementById("simDepthMedium");
const simDepthDeep = document.getElementById("simDepthDeep");
const btnResetSim = document.getElementById("btnResetSim");

// Reminder Modal
const reminderModal = document.getElementById("reminderModal");
const closeReminderModal = document.getElementById("closeReminderModal");
const btnSetReminder = document.getElementById("btnSetReminder");
const btnDownloadCalendar = document.getElementById("btnDownloadCalendar");
const btnBrowserNotification = document.getElementById("btnBrowserNotification");
const reminderStatus = document.getElementById("reminderStatus");
const reminderDay = document.getElementById("reminderDay");
const reminderName = document.getElementById("reminderName");

// Share Modal
const shareModal = document.getElementById("shareModal");
const closeShareModal = document.getElementById("closeShareModal");
const btnShareCampaign = document.getElementById("btnShareCampaign");
const btnCopyShareUrl = document.getElementById("btnCopyShareUrl");
const shareUrlInput = document.getElementById("shareUrlInput");
const shareWhatsApp = document.getElementById("shareWhatsApp");
const shareTwitter = document.getElementById("shareTwitter");
const shareTelegram = document.getElementById("shareTelegram");

// ==========================================================================
// SVG THUMBNAIL GENERATOR (Stylized artistic & provocative medical graphic)
// ==========================================================================
function generateThumbnailSVG(video) {
  // Generates sleek vector graphic with glowing lines, clinical grid and badge
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 270" width="100%" height="100%">
      <defs>
        <linearGradient id="grad-${video.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#181822"/>
          <stop offset="60%" stop-color="#120814"/>
          <stop offset="100%" stop-color="#261400"/>
        </linearGradient>
        <radialGradient id="glow-${video.id}" cx="65%" cy="45%" r="55%">
          <stop offset="0%" stop-color="${video.accentColor}" stop-opacity="0.38"/>
          <stop offset="70%" stop-color="${video.accentColor}" stop-opacity="0.05"/>
          <stop offset="100%" stop-color="transparent"/>
        </radialGradient>
        <pattern id="grid-${video.id}" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
        </pattern>
      </defs>

      <!-- Background -->
      <rect width="480" height="270" fill="url(#grad-${video.id})"/>
      <rect width="480" height="270" fill="url(#grid-${video.id})"/>
      <rect width="480" height="270" fill="url(#glow-${video.id})"/>

      <!-- Stylized Anatomical Contour Lines -->
      <g stroke="${video.accentColor}" stroke-opacity="0.4" fill="none" stroke-width="1.5">
        <path d="M 120 220 C 140 140, 200 90, 260 120 C 310 145, 340 210, 370 230" stroke-dasharray="4,4"/>
        <path d="M 140 230 C 170 160, 220 110, 270 135 C 320 155, 350 220, 390 240"/>
        <circle cx="260" cy="120" r="14" stroke="${video.accentColor}" stroke-width="2" fill="rgba(255,144,0,0.15)"/>
        <circle cx="260" cy="120" r="3" fill="#ffffff"/>
        <!-- Palpation Radar Wave -->
        <circle cx="260" cy="120" r="32" stroke="${video.accentColor}" stroke-opacity="0.3" stroke-width="1"/>
        <circle cx="260" cy="120" r="54" stroke="${video.accentColor}" stroke-opacity="0.15" stroke-width="1"/>
      </g>

      <!-- Center Icon & Category Badge -->
      <g transform="translate(40, 50)">
        <rect width="42" height="42" rx="10" fill="rgba(255,144,0,0.18)" stroke="rgba(255,144,0,0.4)" stroke-width="1"/>
        <text x="21" y="27" font-size="20" text-anchor="middle" dominant-baseline="middle">${video.icon}</text>
      </g>

      <!-- Watermark Ribbon -->
      <text x="440" y="45" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold" fill="rgba(255,255,255,0.4)" text-anchor="end">
        99% SURVIVAL
      </text>

      <!-- Bottom Overlay Tag -->
      <g transform="translate(40, 215)">
        <rect width="130" height="22" rx="4" fill="rgba(0,0,0,0.75)" stroke="rgba(255,255,255,0.1)"/>
        <text x="65" y="15" font-family="'Inter', sans-serif" font-size="9" font-weight="bold" fill="#ffaa33" text-anchor="middle">
          ${video.badge}
        </text>
      </g>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// ==========================================================================
// RENDER VIDEO GRID
// ==========================================================================
function renderVideos() {
  let filtered = VIDEO_DATABASE.filter(vid => {
    // Category match
    const categoryMatch = (currentCategory === "all") || 
      (currentCategory === "top-rated" ? vid.rating >= 99 : vid.category === currentCategory);

    // Search query match
    if (!categoryMatch) return false;
    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase();
    return (
      vid.title.toLowerCase().includes(q) ||
      vid.description.toLowerCase().includes(q) ||
      vid.author.toLowerCase().includes(q) ||
      vid.keyPoints.some(pt => pt.toLowerCase().includes(q))
    );
  });

  // Sorting
  filtered.sort((a, b) => {
    if (currentSort === "trending") return b.viewsCount - a.viewsCount;
    if (currentSort === "rating") return b.rating - a.rating;
    if (currentSort === "duration") return a.durationSec - b.durationSec;
    if (currentSort === "newest") return b.id.localeCompare(a.id);
    return 0;
  });

  // Update counters
  totalVideoCountEl.textContent = VIDEO_DATABASE.length;
  visibleCounterEl.textContent = `Showing ${filtered.length} of ${VIDEO_DATABASE.length} checks`;

  if (filtered.length === 0) {
    videoGridEl.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; color: var(--text-muted); background: var(--bg-card); border-radius: 8px;">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">No awareness videos found</h3>
        <p>Try searching for "shower", "lump", "mirror", "mammogram", or clear your filter.</p>
        <button id="resetSearchEmptyBtn" style="margin-top: 1rem; color: var(--pink-primary); text-decoration: underline; font-weight: bold;">
          Reset Search Filter
        </button>
      </div>
    `;
    const resetEmpty = document.getElementById("resetSearchEmptyBtn");
    if (resetEmpty) {
      resetEmpty.addEventListener("click", clearSearch);
    }
    return;
  }

  videoGridEl.innerHTML = filtered.map(video => {
    const thumbUrl = generateThumbnailSVG(video);
    return `
      <div class="video-card" data-id="${video.id}" tabindex="0" role="button" aria-label="Play ${video.title}">
        <div class="thumbnail-container">
          <img src="${thumbUrl}" alt="${video.title}" class="thumbnail-svg" loading="lazy">
          <span class="duration-badge">${video.duration}</span>
          <span class="quality-pill-thumb">4K HD</span>
          <div class="hover-play-overlay">
            <div class="hover-play-icon">▶</div>
          </div>
        </div>
        <div class="card-details">
          <h3 class="card-title">${video.title}</h3>
          <div class="card-author">
            <span>${video.author}</span>
            ${video.authorVerified ? '<span class="author-check">✓</span>' : ''}
          </div>
          <div class="card-stats">
            <span>👁️ ${video.views}</span>
            <span class="rating">👍 ${video.rating}%</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach card click handlers with glitch animation transition
  document.querySelectorAll(".video-card").forEach(card => {
    card.addEventListener("click", () => {
      const vidId = card.getAttribute("data-id");
      triggerGlitchTransition(() => openVideo(vidId));
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const vidId = card.getAttribute("data-id");
        triggerGlitchTransition(() => openVideo(vidId));
      }
    });
  });
}

// ==========================================================================
// HEAVY PIXELATED GLITCH REALITY-DISTORTION ENGINE & SYNTHESIS
// ==========================================================================
let isGlitching = false;
let pixelGlitchAnimId = null;

function startPixelGlitchEngine() {
  const canvas = document.getElementById("pixelGlitchCanvas");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = [
    "#ff9000", // Neon Pink
    "#00ffff", // Electric Cyan
    "#ffffff", // White Flash
    "#ff0055", // Magenta
    "#ff9000", // Hub Orange
    "#00ff66", // Terminal Green
    "#0a0510", // Dark Corrupt
    "#1c0a24"  // Deep Purple
  ];

  const blockSizeOptions = [16, 24, 32, 48, 64, 80];

  function drawPixelGlitchFrame() {
    if (!isGlitching) return;

    // Semi-transparent clearing for motion trail persistence
    ctx.fillStyle = "rgba(6, 2, 8, 0.45)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 1. Draw 40-70 random chunky pixel macroblocks
    const blockCount = Math.floor(Math.random() * 35) + 35;
    for (let i = 0; i < blockCount; i++) {
      const bSize = blockSizeOptions[Math.floor(Math.random() * blockSizeOptions.length)];
      // Snap to discrete pixel grid coordinates for true 8-bit look
      const x = Math.floor(Math.random() * (canvas.width / bSize)) * bSize;
      const y = Math.floor(Math.random() * (canvas.height / bSize)) * bSize;
      const w = bSize * (Math.random() > 0.6 ? 2 : 1);
      const h = bSize;

      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.fillRect(x, y, w, h);
    }

    // 2. Draw horizontal corrupted raster lines
    const lineCount = Math.floor(Math.random() * 8) + 4;
    for (let j = 0; j < lineCount; j++) {
      const lineY = Math.floor(Math.random() * canvas.height);
      const lineH = Math.floor(Math.random() * 12) + 4;
      ctx.fillStyle = Math.random() > 0.5 ? "rgba(0, 255, 255, 0.7)" : "rgba(255, 144, 0, 0.8)";
      ctx.fillRect(0, lineY, canvas.width, lineH);

      // Random displaced pixel blocks inside raster line
      for (let k = 0; k < 5; k++) {
        const segX = Math.random() * canvas.width;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(segX, lineY, Math.random() * 60 + 20, lineH);
      }
    }

    // 3. Digital static grain noise patches
    for (let p = 0; p < 8; p++) {
      const patchX = Math.random() * canvas.width;
      const patchY = Math.random() * canvas.height;
      const patchW = Math.random() * 150 + 50;
      const patchH = Math.random() * 60 + 20;

      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      ctx.fillRect(patchX, patchY, patchW, patchH);

      // Inner noise dots
      ctx.fillStyle = Math.random() > 0.5 ? "#ff9000" : "#00ffff";
      for (let d = 0; d < 20; d++) {
        const dotX = patchX + Math.random() * patchW;
        const dotY = patchY + Math.random() * patchH;
        ctx.fillRect(dotX, dotY, 4, 4);
      }
    }

    pixelGlitchAnimId = requestAnimationFrame(drawPixelGlitchFrame);
  }

  pixelGlitchAnimId = requestAnimationFrame(drawPixelGlitchFrame);
}

function stopPixelGlitchEngine() {
  if (pixelGlitchAnimId) {
    cancelAnimationFrame(pixelGlitchAnimId);
    pixelGlitchAnimId = null;
  }
  const canvas = document.getElementById("pixelGlitchCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function playGlitchSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const duration = 1.7;

    // 1. Heavy White Noise Burst with multi-stage filter sweeps
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.8;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(3200, ctx.currentTime);
    noiseFilter.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.6);
    noiseFilter.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + 1.2);
    noiseFilter.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + duration);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.2, ctx.currentTime);
    noiseGain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.8);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    whiteNoise.start(ctx.currentTime);

    // 2. 8-Bit Cyber Square & Sawtooth Bitcrush Arpeggio
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = "square";

    // Stepped 8-bit frequencies across 1.7 seconds
    const pitches = [110, 880, 220, 1320, 160, 940, 260, 1760, 120, 520, 60];
    const stepTime = duration / pitches.length;
    pitches.forEach((freq, idx) => {
      osc.frequency.setValueAtTime(freq, ctx.currentTime + (idx * stepTime));
    });

    oscGain.gain.setValueAtTime(0.12, ctx.currentTime);
    oscGain.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 1.0);
    oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);

    // 3. Sub-Bass Tape Stop / Degauss Thud at the end
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = "sine";
    subOsc.frequency.setValueAtTime(140, ctx.currentTime + 1.2);
    subOsc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + duration);

    subGain.gain.setValueAtTime(0.0, ctx.currentTime);
    subGain.gain.setValueAtTime(0.3, ctx.currentTime + 1.2);
    subGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    subOsc.connect(subGain);
    subGain.connect(ctx.destination);
    subOsc.start(ctx.currentTime + 1.2);
    subOsc.stop(ctx.currentTime + duration);

  } catch (err) {
    // Audio context may require user gesture on some strict browsers
  }
}

function triggerGlitchTransition(onComplete) {
  if (isGlitching) return;
  isGlitching = true;

  const glitchOverlay = document.getElementById("glitchOverlay");
  const glitchFill = document.getElementById("glitchProgressFill");

  // Reset progress bar animation
  if (glitchFill) {
    glitchFill.style.animation = 'none';
    // Trigger DOM reflow to restart CSS animation
    void glitchFill.offsetWidth;
    glitchFill.style.animation = 'pixelProgressFill 1.7s steps(12) forwards';
  }

  playGlitchSound();
  startPixelGlitchEngine();

  // Apply heavy pixelated glitch shaking to body
  document.body.classList.add("glitching-screen");
  if (glitchOverlay) {
    glitchOverlay.classList.remove("hidden");
    glitchOverlay.classList.add("active");
  }

  // Enhanced Glitch duration: 1750ms (~1.75 seconds of heavy pixel breakdown)
  setTimeout(() => {
    stopPixelGlitchEngine();

    if (glitchOverlay) {
      glitchOverlay.classList.remove("active");
      setTimeout(() => glitchOverlay.classList.add("hidden"), 80);
    }
    document.body.classList.remove("glitching-screen");
    isGlitching = false;

    if (typeof onComplete === "function") {
      onComplete();
    }
  }, 1750);
}

// ==========================================================================
// VIDEO PLAYBACK MODAL & REVEAL
// ==========================================================================
function openVideo(videoId) {
  const vid = VIDEO_DATABASE.find(v => v.id === videoId) || VIDEO_DATABASE[0];
  currentVideo = vid;

  // Populate details
  modalVideoTitle.textContent = vid.title;
  modalViews.textContent = `👁️ ${vid.views} views`;
  modalDate.textContent = `Published: ${vid.date}`;
  modalAuthor.textContent = `${vid.author} - ${vid.authorTitle}`;
  modalDescription.textContent = vid.description;
  modalLikes.textContent = `${Math.floor(vid.viewsCount * 0.05 / 1000)}K`;

  // Populate Key Points
  modalKeyPoints.innerHTML = vid.keyPoints.map(point => `<li>${point}</li>`).join("");

  // Populate Comments
  renderComments();

  // Populate Recommended sidebar
  renderRelatedVideos(vid.id);

  // Play breast cancer awareness video straightaway in the native HTML5 player
  const videoPlayer = document.getElementById("html5VideoPlayer");
  if (videoPlayer) {
    const targetSrc = vid.videoSrc || "breast_cancer_awareness.mp4";
    const currentSrcAttr = videoPlayer.getAttribute("src") || "";
    if (currentSrcAttr !== targetSrc) {
      videoPlayer.setAttribute("src", targetSrc);
      videoPlayer.load();
    }
    videoPlayer.currentTime = 0;
    const playPromise = videoPlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // Fallback to muted autoplay if browser blocks audio autoplay
        videoPlayer.muted = true;
        videoPlayer.play().catch(e => console.warn(e));
      });
    }

    // Synchronize active stream switcher button state
    document.querySelectorAll(".btn-stream-switch").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-src") === targetSrc);
    });
  }

  // Open modal and ensure scrolled to top so player is front and center
  videoModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  const modalDialog = videoModal.querySelector(".video-modal-dialog");
  if (modalDialog) {
    modalDialog.scrollTop = 0;
  }
}

function renderRelatedVideos(currentId) {
  const relatedEl = document.getElementById("relatedVideos");
  if (!relatedEl) return;

  relatedEl.innerHTML = VIDEO_DATABASE.filter(v => v.id !== currentId).map(video => `
    <div class="related-card" data-id="${video.id}" tabindex="0" role="button" aria-label="Play ${video.title}">
      <div class="related-thumb">
        <img src="${generateThumbnailSVG(video)}" alt="${video.title}" loading="lazy">
        <span class="duration-badge">${video.duration}</span>
      </div>
      <div class="related-info">
        <div class="related-title">${video.title}</div>
        <div class="related-meta">${video.author}</div>
        <div class="related-meta">👁️ ${video.views} · 👍 ${video.rating}%</div>
      </div>
    </div>
  `).join("");

  relatedEl.querySelectorAll(".related-card").forEach(card => {
    const play = () => triggerGlitchTransition(() => openVideo(card.getAttribute("data-id")));
    card.addEventListener("click", play);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        play();
      }
    });
  });
}

function closeVideo() {
  const videoPlayer = document.getElementById("html5VideoPlayer");
  if (videoPlayer) {
    videoPlayer.pause();
  }
  videoModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// ==========================================================================
// ANIMATED CLINICAL SIMULATION CANVAS (What plays in the video player!)
// ==========================================================================
let animTime = 0;
function startMedicalAnimation() {
  stopMedicalAnimation();
  const canvas = medicalCanvas || document.getElementById("medicalAnimationCanvas");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const width = canvas.width;
  const height = canvas.height;

  function renderFrame() {
    if (!isPlaying) return;

    animTime += 0.03 * playbackSpeed;
    playbackTime += 0.03 * playbackSpeed;
    if (playbackTime > currentVideo.durationSec) {
      playbackTime = 0;
    }
    updateProgressUI();

    // Clear background
    ctx.fillStyle = "#0c0a10";
    ctx.fillRect(0, 0, width, height);

    // Grid backdrop
    ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw Simulated Anatomical Demonstration
    const centerX = width / 2;
    const centerY = height / 2 - 20;

    // Outer contour
    ctx.save();
    ctx.shadowBlur = 20;
    ctx.shadowColor = "rgba(255, 144, 0, 0.3)";
    ctx.strokeStyle = "#ff9000";
    ctx.lineWidth = 3;

    // Dual breast contour silhouette
    ctx.beginPath();
    ctx.arc(centerX - 120, centerY, 90, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX + 120, centerY, 90, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // Areolas & Nipples
    ctx.fillStyle = "rgba(255, 144, 0, 0.4)";
    ctx.beginPath();
    ctx.arc(centerX - 120, centerY, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerX + 120, centerY, 22, 0, Math.PI * 2);
    ctx.fill();

    // Animated Palpation Hand / Touch Points
    const phase = animTime % 12;
    let handX = centerX - 120;
    let handY = centerY;
    let promptText = "Step 1: Visual Inspection & Symmetry Check";

    if (phase < 4) {
      // Step 1: Perimeter Palpation in Circles
      const angle = animTime * 1.5;
      const radius = 60;
      handX = centerX - 120 + Math.cos(angle) * radius;
      handY = centerY + Math.sin(angle) * radius;
      promptText = "Step 1: Outer Perimeter Dime-Sized Circular Motion";
    } else if (phase < 8) {
      // Step 2: Inner Spiral & Upper-Outer Quadrant
      const angle = animTime * 2.2;
      const radius = 35 + Math.sin(animTime) * 15;
      handX = centerX - 120 + Math.cos(angle) * radius;
      handY = centerY + Math.sin(angle) * radius;
      promptText = "Step 2: Checking Upper-Outer Quadrant (Highest Incidence Zone)";
    } else {
      // Step 3: Axillary Underarm Lymph Nodes
      handX = centerX - 210 + Math.sin(animTime * 2) * 15;
      handY = centerY - 60 + Math.cos(animTime * 2) * 20;
      promptText = "Step 3: Palpating Axillary Lymph Nodes in the Underarm";
    }

    // Ripple effect at fingertip
    const pulseSize = (animTime * 30) % 35;
    ctx.strokeStyle = "rgba(255, 144, 0, " + (1 - pulseSize / 35) + ")";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(handX, handY, pulseSize, 0, Math.PI * 2);
    ctx.stroke();

    // Draw the 3 fingertip pads
    ctx.fillStyle = "#ffffff";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#ff9000";
    [-12, 0, 12].forEach(offset => {
      ctx.beginPath();
      ctx.arc(handX + offset, handY, 7, 0, Math.PI * 2);
      ctx.fill();
    });

    // Medical Telemetry HUD Overlay
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(10, 10, 16, 0.85)";
    ctx.fillRect(20, height - 70, width - 40, 50);
    ctx.strokeStyle = "rgba(255, 144, 0, 0.5)";
    ctx.strokeRect(20, height - 70, width - 40, 50);

    ctx.fillStyle = "#ffaa33";
    ctx.font = "bold 13px 'JetBrains Mono', monospace";
    ctx.fillText("● LIVE INSTRUCTION: " + promptText.toUpperCase(), 35, height - 44);

    ctx.fillStyle = "#a0a0b0";
    ctx.font = "12px 'Inter', sans-serif";
    ctx.fillText("Pressure: Light to Deep | Technique: Pads of 3 middle fingers | Rate: Smooth & Continuous", 35, height - 26);

    animationFrameId = requestAnimationFrame(renderFrame);
  }

  animationFrameId = requestAnimationFrame(renderFrame);
}

function stopMedicalAnimation() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

// Simple Web Audio API Synthesizer Chime for audio feedback
function playAudioChime() {
  if (isMuted) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const audioCtx = new AudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + 0.15); // E5
    osc.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.3); // G5

    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  } catch (err) {
    // Audio context may require user gesture on some browsers
  }
}

function updateProgressUI() {
  const percent = Math.min(100, (playbackTime / currentVideo.durationSec) * 100);
  progressBarFill.style.width = `${percent}%`;

  const curM = String(Math.floor(playbackTime / 60)).padStart(2, "0");
  const curS = String(Math.floor(playbackTime % 60)).padStart(2, "0");
  timeDisplay.textContent = `${curM}:${curS} / ${currentVideo.duration}`;
}

// ==========================================================================
// INTERACTIVE TOUCH SIMULATOR (Virtual Palpation Canvas)
// ==========================================================================
let simLumps = [
  { x: 380, y: 150, r: 16, type: "suspicious", title: "Irregular Hard Mass", depth: "deep" },
  { x: 220, y: 260, r: 18, type: "benign", title: "Smooth Mobile Fluid Cyst", depth: "medium" },
  { x: 300, y: 190, r: 10, type: "normal", title: "Normal Lobular Tissue", depth: "light" },
  { x: 190, y: 160, r: 24, type: "normal", title: "Normal Fibrocystic Texture", depth: "medium" }
];

let simCursor = { x: -100, y: -100, isDown: false };

function initTouchSimulator() {
  const canvas = touchSimulatorCanvas || document.getElementById("touchSimulatorCanvas");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  function drawSimulator() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Breast Quadrant Circle
    ctx.fillStyle = "rgba(35, 25, 40, 0.75)";
    ctx.beginPath();
    ctx.arc(cx, cy, 140, 0, Math.PI * 2);
    ctx.fill();

    // Quadrant Grid Lines
    ctx.strokeStyle = "rgba(255, 144, 0, 0.25)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    // Vertical line
    ctx.beginPath();
    ctx.moveTo(cx, cy - 140);
    ctx.lineTo(cx, cy + 140);
    ctx.stroke();

    // Horizontal line
    ctx.beginPath();
    ctx.moveTo(cx - 140, cy);
    ctx.lineTo(cx + 140, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    // Quadrant Labels
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.font = "10px 'JetBrains Mono', monospace";
    ctx.fillText("UPPER OUTER (50% CANCERS)", cx + 15, cy - 80);
    ctx.fillText("UPPER INNER", cx - 120, cy - 80);
    ctx.fillText("LOWER INNER", cx - 120, cy + 90);
    ctx.fillText("LOWER OUTER", cx + 15, cy + 90);

    // Nipple / Center
    ctx.fillStyle = "rgba(255, 144, 0, 0.6)";
    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, Math.PI * 2);
    ctx.fill();

    // Draw tissue lumps based on selected pressure depth
    simLumps.forEach(lump => {
      const isDepthActive = (currentPressureDepth === lump.depth) || (currentPressureDepth === "deep");
      const dist = Math.hypot(simCursor.x - lump.x, simCursor.y - lump.y);
      const isHovered = dist < lump.r + 15;

      ctx.save();
      if (lump.type === "suspicious") {
        ctx.fillStyle = isDepthActive ? "rgba(239, 68, 68, 0.7)" : "rgba(239, 68, 68, 0.15)";
        ctx.strokeStyle = "#ef4444";
      } else if (lump.type === "benign") {
        ctx.fillStyle = isDepthActive ? "rgba(16, 185, 129, 0.7)" : "rgba(16, 185, 129, 0.15)";
        ctx.strokeStyle = "#10b981";
      } else {
        ctx.fillStyle = isDepthActive ? "rgba(59, 130, 246, 0.6)" : "rgba(59, 130, 246, 0.1)";
        ctx.strokeStyle = "#3b82f6";
      }

      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(lump.x, lump.y, lump.r, 0, Math.PI * 2);
      ctx.fill();
      if (isDepthActive) ctx.stroke();
      ctx.restore();

      // Detection trigger if pressed down over nodule
      if (isHovered && simCursor.isDown) {
        if (isDepthActive) {
          if (lump.type === "suspicious") {
            simulatorFeedback.innerHTML = `⚠️ <strong style="color: #ef4444">SUSPICIOUS FINDING:</strong> Located hard, fixed mass in Upper-Outer Quadrant. Requires clinical ultrasound or mammogram!`;
          } else if (lump.type === "benign") {
            simulatorFeedback.innerHTML = `🟢 <strong style="color: #10b981">BENIGN FINDING:</strong> Smooth, rounded, mobile fluid pocket typical of a harmless simple cyst.`;
          } else {
            simulatorFeedback.innerHTML = `🔵 <strong style="color: #3b82f6">NORMAL BASELINE:</strong> Normal glandular breast lobule texture.`;
          }
        } else {
          simulatorFeedback.innerHTML = `🔍 You feel resistance deeper down! Switch pressure to <strong>${lump.depth.toUpperCase()}</strong> to palpate this layer.`;
        }
      }
    });

    // Draw Tactile Cursor Ripple
    if (simCursor.x > 0) {
      ctx.strokeStyle = simCursor.isDown ? "#ff9000" : "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = simCursor.isDown ? 3 : 1.5;
      ctx.beginPath();
      ctx.arc(simCursor.x, simCursor.y, simCursor.isDown ? 24 : 16, 0, Math.PI * 2);
      ctx.stroke();
    }

    requestAnimationFrame(drawSimulator);
  }

  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.x) * scaleX,
      y: (e.clientY - rect.y) * scaleY
    };
  }

  canvas.addEventListener("mousemove", (e) => {
    const coords = getCanvasCoords(e);
    simCursor.x = coords.x;
    simCursor.y = coords.y;
    if (!simCursor.isDown) {
      simulatorFeedback.innerHTML = `Palpating at <strong>${currentPressureDepth.toUpperCase()}</strong> depth. Click & hold to feel tissue resistance.`;
    }
  });

  canvas.addEventListener("mousedown", (e) => {
    simCursor.isDown = true;
    playAudioChime();
  });

  window.addEventListener("mouseup", () => {
    simCursor.isDown = false;
  });

  canvas.addEventListener("mouseleave", () => {
    simCursor.x = -100;
    simCursor.y = -100;
  });

  // Touch Support for mobile
  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const coords = getCanvasCoords(touch);
    simCursor.x = coords.x;
    simCursor.y = coords.y;
    simCursor.isDown = true;
  }, { passive: false });

  canvas.addEventListener("touchend", () => {
    simCursor.isDown = false;
  });

  requestAnimationFrame(drawSimulator);
}

// ==========================================================================
// COMMENTS SECTION LOGIC
// ==========================================================================
let commentsData = [...INITIAL_COMMENTS];

function renderComments() {
  commentCountEl.textContent = commentsData.length;
  commentsList.innerHTML = commentsData.map(c => `
    <div class="comment-card" data-comment-id="${c.id}">
      <div class="comment-avatar">👤</div>
      <div class="comment-content">
        <div class="comment-author-row">
          <span class="comment-author">${c.author}</span>
          ${c.badge ? `<span class="comment-badge">${c.badge}</span>` : ''}
          <span class="comment-time">${c.time}</span>
        </div>
        <p class="comment-text">${c.text}</p>
        <div class="comment-actions">
          <button class="upvote-comment-btn" data-id="${c.id}">👍 <span>${c.likes}</span></button>
          <button class="reply-comment-btn">Reply</button>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".upvote-comment-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cid = btn.getAttribute("data-id");
      const target = commentsData.find(c => c.id === cid);
      if (target) {
        target.likes += 1;
        renderComments();
      }
    });
  });
}

function handleCommentSubmit(e) {
  e.preventDefault();
  const text = commentInput.value.trim();
  if (!text) return;

  const newComment = {
    id: `c-${Date.now()}`,
    author: "You (Awareness Supporter)",
    badge: "Champion",
    time: "Just now",
    text: text,
    likes: 1
  };

  commentsData.unshift(newComment);
  commentInput.value = "";
  renderComments();
}

// ==========================================================================
// CALENDAR REMINDER (.ICS File Generator)
// ==========================================================================
function downloadICSFile(dayOfMonth, eventTitle) {
  const now = new Date();
  let targetYear = now.getFullYear();
  let targetMonth = now.getMonth();

  // If selected day already passed this month, schedule for next month
  if (now.getDate() > dayOfMonth) {
    targetMonth += 1;
    if (targetMonth > 11) {
      targetMonth = 0;
      targetYear += 1;
    }
  }

  const startDt = new Date(targetYear, targetMonth, dayOfMonth, 10, 0, 0);
  const endDt = new Date(targetYear, targetMonth, dayOfMonth, 10, 15, 0);

  const formatICSDate = (date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//CheckHub//Breast Cancer Awareness Routine//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${eventTitle}`,
    `DESCRIPTION:Take 3 minutes to perform your monthly breast self-examination. Check for lumps, skin dimpling, and nipple changes. Early detection saves lives! Learn more at https://ai.loopsintegrated.co/softlogic/`,
    `DTSTART:${formatICSDate(startDt)}`,
    `DTEND:${formatICSDate(endDt)}`,
    "RRULE:FREQ=MONTHLY;BYMONTHDAY=" + dayOfMonth,
    "STATUS:CONFIRMED",
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Time for your monthly 3-minute self-exam check!",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Breast_Self_Exam_Reminder.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  reminderStatus.textContent = `✓ .ICS calendar file downloaded! Open it to add recurring monthly checks to Google Calendar, Apple Calendar, or Outlook.`;
  reminderStatus.classList.remove("hidden");
}

function requestBrowserNotification() {
  if (!("Notification" in window)) {
    alert("Browser notifications are not supported in this browser. Please use the .ICS calendar file.");
    return;
  }

  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("CheckHub Monthly Reminder Activated!", {
        body: "You're all set! Consistency is key to early detection.",
        icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23ff9000%22/><text x=%2250%22 y=%2272%22 font-size=%2266%22 font-family=%22Arial%22 font-weight=%22bold%22 text-anchor=%22middle%22>C</text></svg>"
      });
      reminderStatus.textContent = "✓ Browser notification enabled! We sent a confirmation ping.";
      reminderStatus.classList.remove("hidden");
    } else {
      reminderStatus.textContent = "Notifications were not permitted. You can still use the .ICS Calendar download!";
      reminderStatus.classList.remove("hidden");
    }
  });
}

// ==========================================================================
// SEARCH & AUTO-SUGGESTIONS
// ==========================================================================
function handleSearchInput(e) {
  const val = e.target.value.trim();
  clearSearchBtn.classList.toggle("show", val.length > 0);

  if (val.length < 2) {
    searchSuggestions.classList.add("hidden");
    searchSuggestions.innerHTML = "";
    return;
  }

  const matches = VIDEO_DATABASE.filter(v => 
    v.title.toLowerCase().includes(val.toLowerCase()) ||
    v.category.toLowerCase().includes(val.toLowerCase())
  ).slice(0, 5);

  if (matches.length > 0) {
    searchSuggestions.innerHTML = matches.map(m => `
      <div class="suggestion-item" data-id="${m.id}">
        <span style="font-size: 1.2rem;">${m.icon}</span>
        <span class="item-title">${m.title}</span>
        <span class="item-badge">${m.duration}</span>
      </div>
    `).join("");
    searchSuggestions.classList.remove("hidden");

    searchSuggestions.querySelectorAll(".suggestion-item").forEach(item => {
      item.addEventListener("click", () => {
        const vidId = item.getAttribute("data-id");
        searchSuggestions.classList.add("hidden");
        triggerGlitchTransition(() => openVideo(vidId));
      });
    });
  } else {
    searchSuggestions.classList.add("hidden");
  }
}

function executeSearch() {
  searchQuery = searchInput.value.trim();
  searchSuggestions.classList.add("hidden");

  if (searchQuery) {
    searchFilterBanner.classList.remove("hidden");
    filterQueryText.textContent = `"${searchQuery}"`;
  } else {
    searchFilterBanner.classList.add("hidden");
  }

  renderVideos();
}

function clearSearch() {
  searchInput.value = "";
  searchQuery = "";
  clearSearchBtn.classList.remove("show");
  searchSuggestions.classList.add("hidden");
  searchFilterBanner.classList.add("hidden");
  renderVideos();
}

// ==========================================================================
// EVENT LISTENERS INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Check age gate state
  const dismissAgeGate = () => {
    sessionStorage.setItem("checkhub_age_verified", "true");
    document.body.classList.remove("age-gate-active");
    if (ageGateModal) {
      ageGateModal.classList.add("fade-out");
      setTimeout(() => {
        ageGateModal.style.display = "none";
      }, 350);
    }
  };

  const ageVerified = sessionStorage.getItem("checkhub_age_verified");
  if (ageVerified === "true" && ageGateModal) {
    document.body.classList.remove("age-gate-active");
    ageGateModal.classList.add("fade-out");
    ageGateModal.style.display = "none";
  } else if (ageGateModal) {
    document.body.classList.add("age-gate-active");
  }

  // Explicitly ensure video player is stopped on initial load
  const initialVideo = document.getElementById("html5VideoPlayer");
  if (initialVideo) {
    initialVideo.pause();
  }

  // Both age gate buttons open the video player with the same glitch transition as the cards
  const enterToVideo = () => {
    dismissAgeGate();
    triggerGlitchTransition(() => openVideo("vid-1"));
  };

  if (btnEnterSite) {
    btnEnterSite.addEventListener("click", enterToVideo);
  }

  if (btnSkipToGuide) {
    btnSkipToGuide.addEventListener("click", enterToVideo);
  }

  // Render video catalog
  renderVideos();
  initTouchSimulator();

  // Category navigation tabs
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-category");
      
      const titles = {
        "all": "Trending Breast Health Videos",
        "self-exam": "Self-Examination Guides & Techniques",
        "symptoms": "Warning Signs & Lump Detection",
        "mammogram": "Mammography & Clinical Checkups",
        "male-cancer": "Male Breast Health Awareness",
        "myths": "Debunking Myths vs Medical Facts",
        "top-rated": "Top Rated Doctor Recommendations"
      };
      currentSectionTitleEl.textContent = titles[currentCategory] || "Breast Health Videos";
      renderVideos();
    });
  });

  // Sorting
  sortSelectEl.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderVideos();
  });

  // View toggle
  viewToggleBtn.addEventListener("click", () => {
    isCompactGrid = !isCompactGrid;
    videoGridEl.classList.toggle("compact", isCompactGrid);
  });

  // Search listeners
  searchInput.addEventListener("input", handleSearchInput);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") executeSearch();
  });
  searchBtn.addEventListener("click", executeSearch);
  clearSearchBtn.addEventListener("click", clearSearch);
  resetSearchFilter.addEventListener("click", clearSearch);

  // Close search suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.classList.add("hidden");
    }
  });

  // Hero Play Button (if present)
  if (heroPlayBtn) {
    heroPlayBtn.addEventListener("click", () => {
      openVideo("vid-1");
    });
  }

  if (heroLearnBtn) {
    heroLearnBtn.addEventListener("click", () => {
      simulatorModal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }

  // Video Modal Handlers
  if (closeVideoModal) closeVideoModal.addEventListener("click", closeVideo);
  if (btnContinueToVideo) btnContinueToVideo.addEventListener("click", () => {});

  // Stream switcher button clicks
  document.querySelectorAll(".btn-stream-switch").forEach(btn => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-src");
      const videoPlayer = document.getElementById("html5VideoPlayer");
      if (videoPlayer && src) {
        document.querySelectorAll(".btn-stream-switch").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        videoPlayer.setAttribute("src", src);
        videoPlayer.load();
        videoPlayer.currentTime = 0;
        const playPromise = videoPlayer.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            videoPlayer.muted = true;
            videoPlayer.play().catch(e => console.warn(e));
          });
        }
      }
    });
  });

  // Video Controls (for custom fallback player)
  if (ctrlPlayPause) {
    ctrlPlayPause.addEventListener("click", () => {
      isPlaying = !isPlaying;
      ctrlPlayPause.textContent = isPlaying ? "⏸️" : "▶";
      if (isPlaying) startMedicalAnimation();
      else stopMedicalAnimation();
    });
  }

  if (ctrlRewind) {
    ctrlRewind.addEventListener("click", () => {
      playbackTime = Math.max(0, playbackTime - 10);
      updateProgressUI();
    });
  }

  if (ctrlForward) {
    ctrlForward.addEventListener("click", () => {
      playbackTime = Math.min(currentVideo.durationSec, playbackTime + 10);
      updateProgressUI();
    });
  }

  if (ctrlSpeed) {
    ctrlSpeed.addEventListener("click", () => {
      const speeds = [1.0, 1.25, 1.5, 2.0];
      const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
      playbackSpeed = speeds[nextIdx];
      ctrlSpeed.textContent = `${playbackSpeed}x`;
    });
  }

  if (ctrlMute) {
    ctrlMute.addEventListener("click", () => {
      isMuted = !isMuted;
      ctrlMute.textContent = isMuted ? "🔇" : "🔊";
    });
  }

  if (ctrlFullscreen) {
    ctrlFullscreen.addEventListener("click", () => {
      const playerWrapper = document.querySelector(".player-wrapper");
      if (!document.fullscreenElement && playerWrapper) {
        playerWrapper.requestFullscreen().catch(() => {});
      } else if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  // Video scrubbing (if present)
  if (progressBarContainer) {
    progressBarContainer.addEventListener("click", (e) => {
      const rect = progressBarContainer.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      playbackTime = pos * currentVideo.durationSec;
      updateProgressUI();
    });
  }

  // Like / Save buttons inside modal
  modalLikeBtn.addEventListener("click", () => {
    modalLikeBtn.classList.toggle("active");
  });

  modalDislikeBtn.addEventListener("click", () => {
    modalDislikeBtn.classList.toggle("active");
  });

  modalSaveBtn.addEventListener("click", () => {
    modalSaveBtn.classList.toggle("active");
    modalSaveBtn.textContent = modalSaveBtn.classList.contains("active") ? "⭐ Saved" : "⭐ Save Guide";
  });

  modalShareBtn.addEventListener("click", () => {
    shareModal.classList.remove("hidden");
  });

  btnModalShareTeaser.addEventListener("click", () => {
    shareModal.classList.remove("hidden");
  });

  btnModalReminder.addEventListener("click", () => {
    reminderModal.classList.remove("hidden");
  });

  // Comments form
  commentForm.addEventListener("submit", handleCommentSubmit);

  // Simulator Modal triggers
  if (openSimulatorBtn) {
    openSimulatorBtn.addEventListener("click", () => {
      if (simulatorModal) {
        simulatorModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }
    });
  }

  if (btnSelfCheckModal) {
    btnSelfCheckModal.addEventListener("click", () => {
      if (simulatorModal) {
        simulatorModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }
    });
  }

  if (closeSimulatorModal) {
    closeSimulatorModal.addEventListener("click", () => {
      if (simulatorModal) {
        simulatorModal.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });
  }

  // Simulator depth controls
  const depthButtons = [simDepthLight, simDepthMedium, simDepthDeep].filter(Boolean);
  depthButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      depthButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      if (btn === simDepthLight) currentPressureDepth = "light";
      else if (btn === simDepthMedium) currentPressureDepth = "medium";
      else if (btn === simDepthDeep) currentPressureDepth = "deep";
      if (simulatorFeedback) {
        simulatorFeedback.innerHTML = `Pressure switched to <strong>${currentPressureDepth.toUpperCase()}</strong>. Press and sweep the tissue.`;
      }
    });
  });

  if (btnResetSim) {
    btnResetSim.addEventListener("click", () => {
      if (simulatorFeedback) simulatorFeedback.textContent = "Tissue map reset. Palpate the quadrants to locate masses.";
    });
  }

  // Reminder Modal
  if (btnSetReminder) {
    btnSetReminder.addEventListener("click", () => {
      if (reminderModal) reminderModal.classList.remove("hidden");
    });
  }

  if (closeReminderModal) {
    closeReminderModal.addEventListener("click", () => {
      if (reminderModal) reminderModal.classList.add("hidden");
    });
  }

  if (btnDownloadCalendar) {
    btnDownloadCalendar.addEventListener("click", () => {
      const day = parseInt(reminderDay ? reminderDay.value : "10", 10);
      const title = (reminderName && reminderName.value.trim()) || "Monthly Breast Self-Exam";
      downloadICSFile(day, title);
    });
  }

  if (btnBrowserNotification) {
    btnBrowserNotification.addEventListener("click", requestBrowserNotification);
  }

  // Share Modal
  if (btnShareCampaign) {
    btnShareCampaign.addEventListener("click", () => {
      if (shareUrlInput && window.location.protocol.startsWith("http")) {
        shareUrlInput.value = window.location.href.split("#")[0];
      }
      if (shareModal) shareModal.classList.remove("hidden");
    });
  }

  if (closeShareModal) {
    closeShareModal.addEventListener("click", () => {
      if (shareModal) shareModal.classList.add("hidden");
    });
  }

  if (btnCopyShareUrl && shareUrlInput) {
    btnCopyShareUrl.addEventListener("click", () => {
      navigator.clipboard.writeText(shareUrlInput.value).then(() => {
        btnCopyShareUrl.textContent = "Copied!";
        setTimeout(() => {
          btnCopyShareUrl.textContent = "Copy Link";
        }, 2500);
      }).catch(() => {
        shareUrlInput.select();
        document.execCommand("copy");
        btnCopyShareUrl.textContent = "Copied!";
      });
    });
  }

  // Social Share button actions
  const campaignTeaserText = "Bro you have to see this video... wait, actually it's about breast cancer awareness! Check yourself or share with someone you love:";
  const getShareLink = () => window.location.protocol.startsWith("http") ? window.location.href.split("#")[0] : "https://ai.loopsintegrated.co/softlogic/";

  if (shareWhatsApp) {
    shareWhatsApp.addEventListener("click", () => {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(campaignTeaserText + " " + getShareLink())}`, "_blank");
    });
  }

  if (shareTwitter) {
    shareTwitter.addEventListener("click", () => {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(campaignTeaserText)}&url=${encodeURIComponent(getShareLink())}&hashtags=BreastCancerAwareness,CheckHub`, "_blank");
    });
  }

  if (shareTelegram) {
    shareTelegram.addEventListener("click", () => {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(getShareLink())}&text=${encodeURIComponent(campaignTeaserText)}`, "_blank");
    });
  }

  // Accordion Toggle in Myths section
  document.querySelectorAll(".accordion-header").forEach(hdr => {
    hdr.addEventListener("click", () => {
      const parent = hdr.parentElement;
      const isOpen = parent.classList.contains("open");
      document.querySelectorAll(".accordion-item").forEach(item => item.classList.remove("open"));
      if (!isOpen) {
        parent.classList.add("open");
      }
    });
  });

  // Close modals on Esc key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeVideo();
      if (simulatorModal) simulatorModal.classList.add("hidden");
      if (reminderModal) reminderModal.classList.add("hidden");
      if (shareModal) shareModal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });

  // Click outside modal content to close
  [videoModal, simulatorModal, reminderModal, shareModal].filter(Boolean).forEach(modalEl => {
    modalEl.addEventListener("click", (e) => {
      if (e.target === modalEl) {
        modalEl.classList.add("hidden");
        document.body.style.overflow = "";
        if (modalEl === videoModal) stopMedicalAnimation();
      }
    });
  });

  // Footer links
  const footMam = document.getElementById("footerMammogramLink");
  if (footMam) {
    footMam.addEventListener("click", (e) => {
      e.preventDefault();
      triggerGlitchTransition(() => openVideo("vid-6"));
    });
  }

  const footMale = document.getElementById("footerMaleCancerLink");
  if (footMale) {
    footMale.addEventListener("click", (e) => {
      e.preventDefault();
      triggerGlitchTransition(() => openVideo("vid-5"));
    });
  }

  const footClin = document.getElementById("footerFindClinicLink");
  if (footClin) {
    footClin.addEventListener("click", (e) => {
      e.preventDefault();
      window.open("https://www.cdc.gov/cancer/nbccedp/screenings.htm", "_blank");
    });
  }

  const logoH = document.getElementById("logoHome");
  if (logoH) {
    logoH.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
