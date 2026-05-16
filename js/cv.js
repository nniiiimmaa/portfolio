/* ============================================================
   cv.js  —  A4 PDF CV generator for Nima's portfolio
   Mirrors the structure from the original cv.js but with
   all real data sourced from index.html.
   ============================================================ */

import { currentLang } from "./translation.js";
import { T } from "./translation-object.js";

/* ────────────────────────────────────────────────────────────
   NIMA'S REAL DATA
   ──────────────────────────────────────────────────────────── */
const NIMA = {
  name:     "Nima",
  role:     "Front-End Developer",
  email:    "nima.javascript@gmail.com",
  location: "Paraná, Brazil (remote-friendly)",
  website:  "nniiiimmaa.github.io/portfolio",
  github:   "github.com/nniiiimmaa",
  linkedin: "linkedin.com/in/nniiiimmaa",

  stats: {
    years:    "4+",
    projects: "10+",
    stars:    "0",
    certs:    "30+",
  },

  experience: [
    {
      roleKey:  "exp1_role",
      roleFb:   "Web Developer Intern",
      company:  "Parsis Global",
      loc:      "Antalya, Turkey",
      date:     "Oct 2021 — Oct 2023",
      descKey:  "exp1_desc",
      descFb:   "Web Developer Intern at a real estate company, gaining practical experience in web development, website maintenance, and responsive design.",
      tags:     ["HTML5", "CSS", "JavaScript"],
      color:    "#c4beff",
    },
    {
      roleKey:  "exp2_role",
      roleFb:   "Front-End Developer Intern",
      company:  "C-TEC",
      loc:      "Maringá, Brazil",
      date:     "Dec 2023 — Apr 2026",
      descKey:  "exp2_desc",
      descFb:   "Participated in team-based development processes, including code collaboration, debugging, and feature implementation, following structured workflows and agile practices. Gained practical experience in component-based architecture, version control, and maintaining consistency across large-scale applications.",
      tags:     ["JavaScript", "Vue", "Tailwind CSS", "Architecture"],
      color:    "#b8f0d8",
    },
    {
      roleKey:  "exp3_role",
      roleFb:   "Frontend Developer Assistant",
      company:  "C-TEC",
      loc:      "Maringá, Brazil",
      date:     "May 2026 — Present",
      descKey:  "exp3_desc",
      descFb:   "Full-time Front-End Developer in a collaborative environment with around 25 developers, contributing to multilingual systems in Portuguese, English, and Spanish. The company provides educational services across South America.",
      tags:     ["Vue", "NPM", "SCSS", "PostCSS", "BEM"],
      color:    "#ffd6b0",
    },
  ],

  projects: [
    {
      name:    "Sprinter",
      url:     "https://sprinter-sistemas.usb.org.br/",
      descKey: "proj1_desc",
      descFb:  "Built the frontend for Sprinter, a Kanban-based task distribution platform developed with Vue.js and Laravel. Focused on task management workflow, usability, and smooth user experience.",
      tags:    ["JS", "Tailwind", "Vue", "Docker"],
    },
    {
      name:    "Verboo",
      url:     "https://7verboo.com.br/",
      descKey: "proj2_desc",
      descFb:  "Developed a modern and responsive landing page for a relationship-focused mobile application. Built engaging UI sections, optimized the user experience across devices, and focused on clear visual communication.",
      tags:    ["HTML5", "CSS3", "JS", "Vue", "Docker"],
    },
    {
      name:    "C-TEC",
      url:     "https://ctec.usb.org.br/",
      descKey: "proj3_desc",
      descFb:  "A full-stack corporate portal integrating multiple internal systems, including employee history management, company regulations, document storage, and historical archives.",
      tags:    ["Vue", "SQL Server", "Docker", "Laravel"],
    },
    {
      name:    "Dental Hope",
      url:     "https://dentalhope.usb.org.br/",
      descKey: "proj4_desc",
      descFb:  "Built the frontend for a dentist locator platform for Dental Uni, helping users find partnered dentists through a responsive and intuitive interface.",
      tags:    ["Vue", "CSS", "Tailwind"],
    },
    {
      name:    "Amazon Clone",
      url:     "https://nniiiimmaa.github.io/Amazon-Order-Page/",
      descKey: "proj5_desc",
      descFb:  "Built a front-end clone of an Amazon order page. Replicated layout and styling, created responsive components, and implemented basic interactivity with DOM manipulation and event handling.",
      tags:    ["HTML5", "CSS3", "JS"],
    },
    {
      name:    "PAC",
      url:     "https://nniiiimmaa.github.io/palavra-acao-conexo/index.html",
      descKey: "proj6_desc",
      descFb:  "Built an interactive platform for a psychoeducational game designed for children aged 9–13, explaining gameplay mechanics, rules, and scoring dynamics through a user-friendly interface.",
      tags:    ["HTML5", "CSS3", "JS"],
    },
  ],

  education: [
    {
      degreeKey: "edu1_degree",
      degreeFb:  "TÖMER Degree (Turkish Language Degree)",
      school:    "Karamanoğlu Mehmetbey University · Turkey",
      date:      "2019 — 2020 · 89/100",
      descKey:   "edu1_desc",
      descFb:    "Completed 1 year of study, earning a TÖMER Turkish Language Certificate. Developed proficiency in reading, writing, listening, and speaking.",
      color:     "#c4beff",
    },
    {
      degreeKey: "edu2_degree",
      degreeFb:  "Goethe Preparation Degree",
      school:    "Akdeniz University · Turkey",
      date:      "2020 — 2021",
      descKey:   "edu2_desc",
      descFb:    "Studied German for 9 months completing Goethe-based Aspekte Neu A1, A2, and B1 levels. Developed foundational skills in reading, writing, listening, and speaking.",
      color:     "#b8f0d8",
    },
    {
      degreeKey: "edu3_degree",
      degreeFb:  "IELTS · Score: 6.5 (B2)",
      school:    "Cambridge University",
      date:      "2020",
      descFb:    "ID: 20TR001652KHAA002A",
      color:     "#ffd6b0",
    },
    {
      degreeFb:  "Programming Associate Degree",
      school:    "Akdeniz University · Turkey",
      date:      "2021 — 2023 · GPA 3.64/4.00",
      descKey:   "edu4_desc",
      descFb:    "Completed 3 semesters of Computer Programming earning 90 academic credits. Studied front-end and back-end web development.",
      color:     "#c4beff",
    },
  ],

  skills: [
    {
      label:    "skills_frontend",
      labelFb:  "Frontend",
      color:    "#b8b0ff",
      items:    ["HTML5", "CSS / SCSS", "PostCSS", "Tailwind CSS", "JavaScript", "TypeScript", "Vue"],
    },
    {
      label:    "skills_backend",
      labelFb:  "Backend",
      color:    "#5eeaaa",
      items:    ["PHP", "Laravel", "SQL Server", "mySQL", "PostgreSQL", "Redis"],
    },
    {
      label:    "skills_infra",
      labelFb:  "Infrastructure",
      color:    "#f5a97f",
      items:    ["Docker", "AWS", "GitHub Actions"],
    },
    {
      labelFb:  "Adobe",
      color:    "#f5c97f",
      items:    ["Premiere Pro", "Photoshop", "Animate"],
    },
    {
      label:    "skills_languages",
      labelFb:  "Languages",
      color:    "#ff9eb5",
      items:    ["English", "Persian", "Portuguese", "Turkish", "German"],
    },
  ],

  hobbies: [
    { e: "✈️",  nameKey: "hobby1_name", nameFb: "Traveling" },
    { e: "🚁",  nameKey: "hobby2_name", nameFb: "Drone" },
    { e: "🏐",  nameKey: "hobby3_name", nameFb: "Volleyball" },
    { e: "🧠",  nameKey: "hobby4_name", nameFb: "Psychology" },
    { e: "🗣️", nameKey: "hobby5_name", nameFb: "Language Learning" },
    { e: "🏛️", nameKey: "hobby6_name", nameFb: "Persian History" },
  ],

  social: [
    { icon: "🐙", name: "GitHub",     handle: "@nniiiimmaa",   url: "https://github.com/nniiiimmaa" },
    { icon: "💼", name: "LinkedIn",   handle: "nniiiimmaa",    url: "https://www.linkedin.com/in/nniiiimmaa/" },
    { icon: "🐦", name: "Twitter/X",  handle: "@nniiiimmaa",   url: "https://x.com/nniiiimmaa" },
    { icon: "🟦", name: "Bluesky",    handle: "@nniiiimmaa",   url: "https://bsky.app/profile/nniiiimmaa.bsky.social" },
    { icon: "📝", name: "Dev.to",     handle: "@nniiiimmaa",   url: "https://dev.to/nniiiimmaa" },
    { icon: "📸", name: "Instagram",  handle: "@nniiiiiimmaa", url: "https://www.instagram.com/nniiiiiimmaa/" },
    { icon: "📦", name: "NPM",        handle: "~nniiiimmaa",   url: "https://www.npmjs.com/~nniiiimmaa" },
  ],
};

/* ────────────────────────────────────────────────────────────
   HELPERS
   ──────────────────────────────────────────────────────────── */
function tr(t, key, fallback = "") {
  return (key && t[key]) ? t[key] : fallback;
}

function tag(s) {
  return `<span style="display:inline-block;background:#ede9ff;color:#4b3fb5;padding:1px 7px;border-radius:20px;font-size:7.5px;font-family:monospace;margin:1px 2px 1px 0;border:1px solid #d5cfff">${s}</span>`;
}

function secHead(label) {
  return `<div style="font-size:7.5px;font-family:monospace;letter-spacing:.18em;text-transform:uppercase;color:#7c6ff5;margin-bottom:5px;padding-bottom:3px;border-bottom:1.5px solid #e8e6ff;font-weight:600">${label}</div>`;
}

function bdr(color, html) {
  return `<div style="margin-bottom:8px;padding-left:8px;border-left:2.5px solid ${color}">${html}</div>`;
}

/* ────────────────────────────────────────────────────────────
   getSelectedSections — reads the checkboxes in the page
   ──────────────────────────────────────────────────────────── */
function getSelectedSections() {
  return Array.from(
    document.querySelectorAll("#cv-options input[type=checkbox]")
  )
    .filter((cb) => cb.checked)
    .map((cb) => cb.getAttribute("data-section"));
}

/* ────────────────────────────────────────────────────────────
   buildCVHTML — assembles the complete A4 HTML string
   ──────────────────────────────────────────────────────────── */
function buildCVHTML(selected) {
  const t   = T[currentLang] || T["en"];
  const dir = t.dir || "ltr";
  const inc = (id) => selected.includes(id);
  const d   = NIMA;

  /* ── photo ── */
  const photoImg = document.getElementById("hero-photo-img");
  const photoSrc = photoImg?.src && !photoImg.src.endsWith("#") ? photoImg.src : "";

  /* ════════════ LEFT COLUMN ════════════ */
  let leftCol = "";

  /* Experience */
  if (inc("experience")) {
    leftCol += `<div style="margin-bottom:13px">${secHead(t.exp_title || "Experience")}`;
    d.experience.forEach((e) => {
      leftCol += bdr(e.color, `
        <div style="font-size:9.5px;font-weight:700;color:#1a1830;line-height:1.3">${tr(t, e.roleKey, e.roleFb)}</div>
        <div style="font-size:8px;color:#7c6ff5;font-family:monospace;margin-bottom:1px">${e.company} · ${e.loc}</div>
        <div style="font-size:7.5px;color:#999;margin-bottom:3px">${e.date}</div>
        <div style="font-size:8px;color:#555;line-height:1.5">${tr(t, e.descKey, e.descFb)}</div>
        <div style="margin-top:3px">${e.tags.map(tag).join("")}</div>
      `);
    });
    leftCol += `</div>`;
  }

  /* Projects */
  if (inc("projects")) {
    leftCol += `<div style="margin-bottom:13px">${secHead(t.proj_title || "Projects")}`;
    d.projects.forEach((p) => {
      leftCol += bdr("#b8f0d8", `
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="font-size:9.5px;font-weight:700;color:#1a1830">${p.name}</div>
          <a href="${p.url}" target="_blank"
            style="font-size:7px;color:#7c6ff5;text-decoration:none;font-family:monospace;flex-shrink:0;margin-left:4px">↗ Live</a>
        </div>
        <div style="font-size:8px;color:#555;line-height:1.5;margin-top:1px">${tr(t, p.descKey, p.descFb)}</div>
        <div style="margin-top:3px">${p.tags.map(tag).join("")}</div>
      `);
    });
    leftCol += `</div>`;
  }

  /* Hobbies */
  if (inc("hobbies")) {
    leftCol += `<div style="margin-bottom:13px">${secHead(t.hobbies_title || "Hobbies")}
      <div style="display:flex;flex-wrap:wrap;gap:5px">
        ${d.hobbies.map((h) =>
          `<span style="font-size:8px;color:#444;background:#f5f4fc;padding:2px 8px;border-radius:20px;border:1px solid #e0deff">
            ${h.e} ${tr(t, h.nameKey, h.nameFb)}
          </span>`
        ).join("")}
      </div>
    </div>`;
  }

  /* ════════════ RIGHT SIDEBAR ════════════ */
  let rightCol = "";

  /* Photo */
  if (photoSrc) {
    rightCol += `<div style="text-align:center;margin-bottom:12px">
      <img src="${photoSrc}"
        style="width:90px;height:90px;border-radius:12px;object-fit:cover;object-position:center top;border:2px solid #c4beff;display:block;margin:0 auto">
    </div>`;
  }

  /* Contact — always shown */
  rightCol += `<div style="margin-bottom:12px">${secHead(t.contact_title || "Contact")}
    <div style="font-size:8px;color:#444;line-height:2">
      <div>✉ <a href="mailto:${d.email}" style="color:#7c6ff5;text-decoration:none">${d.email}</a></div>
      <div>📍 ${d.location}</div>
      <div>🌐 <a href="https://${d.website}" style="color:#7c6ff5;text-decoration:none">${d.website}</a></div>
      <div>💼 <a href="https://${d.linkedin}" style="color:#7c6ff5;text-decoration:none">${d.linkedin}</a></div>
      <div>🐙 <a href="https://${d.github}" style="color:#7c6ff5;text-decoration:none">${d.github}</a></div>
    </div>
  </div>`;

  /* Education */
  if (inc("education")) {
    rightCol += `<div style="margin-bottom:12px">${secHead(t.edu_title || "Education")}`;
    d.education.forEach((e) => {
      rightCol += bdr(e.color, `
        <div style="font-size:8.5px;font-weight:700;color:#1a1830;line-height:1.3">${tr(t, e.degreeKey, e.degreeFb)}</div>
        <div style="font-size:7.5px;color:#7c6ff5;font-family:monospace">${e.school}</div>
        <div style="font-size:7px;color:#999">${e.date}</div>
        ${e.descKey || e.descFb
          ? `<div style="font-size:7.5px;color:#555;line-height:1.4;margin-top:1px">${tr(t, e.descKey, e.descFb)}</div>`
          : ""}
      `);
    });
    rightCol += `</div>`;
  }

  /* Skills */
  if (inc("skills")) {
    rightCol += `<div style="margin-bottom:12px">${secHead(t.skills_title || "Skills")}`;
    d.skills.forEach((g) => {
      const label = tr(t, g.label, g.labelFb);
      rightCol += `<div style="margin-bottom:5px">
        <div style="font-size:7px;color:#999;font-family:monospace;margin-bottom:3px;letter-spacing:.05em">${label}</div>
        <div>${g.items.map((s) =>
          `<span style="display:inline-block;background:#ede9ff;color:#4b3fb5;padding:1px 6px;border-radius:20px;font-size:7px;font-family:monospace;margin:1px 2px 1px 0;border:1px solid #d5cfff">
            <span style="display:inline-block;width:5px;height:5px;border-radius:50%;background:${g.color};margin-right:3px;vertical-align:middle"></span>${s}
          </span>`
        ).join("")}</div>
      </div>`;
    });
    rightCol += `</div>`;
  }

  /* Social */
  if (inc("social")) {
    rightCol += `<div style="margin-bottom:12px">${secHead(t.social_title || "Social")}
      ${d.social.map((s) =>
        `<div style="font-size:8px;color:#444;margin-bottom:3px">
          ${s.icon}
          <a href="${s.url}" target="_blank" style="color:#7c6ff5;font-family:monospace;text-decoration:none">${s.handle}</a>
          <span style="color:#aaa"> — ${s.name}</span>
        </div>`
      ).join("")}
    </div>`;
  }

  /* ── photo element for header ── */
  const headerPhoto = photoSrc
    ? `<img src="${photoSrc}"
        style="width:68px;height:68px;border-radius:10px;object-fit:cover;object-position:center top;border:2px solid rgba(255,255,255,.4);flex-shrink:0">`
    : `<div style="width:68px;height:68px;border-radius:10px;border:2px solid rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.5">
          <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
      </div>`;

  /* ════════════ FULL A4 HTML ════════════ */
  return `<!DOCTYPE html>
<html lang="${currentLang}" dir="${dir}">
<head>
<meta charset="UTF-8">
<title>CV — ${d.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,300&family=Outfit:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  @page { size: A4 portrait; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 210mm; height: 297mm; overflow: hidden; background: #fff; }
  body { font-family: 'Outfit', sans-serif; font-weight: 300; color: #1a1830; }
  @media print {
    html, body { width: 210mm; height: 297mm; }
    .no-print { display: none !important; }
  }
  a { text-decoration: none; }
</style>
</head>
<body>

<!-- PRINT BUTTON (screen only) -->
<div class="no-print" style="position:fixed;top:12px;right:12px;z-index:999;display:flex;gap:8px">
  <button onclick="window.print()"
    style="background:#7c6ff5;color:#fff;border:none;padding:9px 20px;border-radius:20px;font-family:'Outfit',sans-serif;font-size:13px;cursor:pointer;font-weight:500;box-shadow:0 2px 12px rgba(124,111,245,.4)">
    🖨 Save as PDF
  </button>
  <button onclick="window.close()"
    style="background:#f0eff8;color:#333;border:1px solid #ddd;padding:9px 16px;border-radius:20px;font-family:'Outfit',sans-serif;font-size:13px;cursor:pointer">
    ✕ Close
  </button>
</div>

<!-- A4 PAGE -->
<div style="width:210mm;height:297mm;background:#fff;position:relative;overflow:hidden">

  <!-- HEADER BAND -->
  <div style="background:linear-gradient(135deg,#3b2fc9 0%,#6d5ef5 60%,#9b8cff 100%);padding:20px 28px 16px;display:flex;align-items:center;justify-content:space-between;gap:16px">
    <div style="flex:1">
      <div style="font-size:8px;font-family:'DM Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.65);margin-bottom:5px">
        ${d.role}
      </div>
      <div style="font-family:'Fraunces',serif;font-size:30px;font-weight:300;color:#fff;line-height:1;letter-spacing:-.02em">
        ${d.name}
      </div>
      <div style="font-size:8.5px;color:rgba(255,255,255,.75);margin-top:8px;font-family:'DM Mono',monospace;line-height:1.8">
        ✉ ${d.email} &nbsp;·&nbsp; 📍 ${d.location}
      </div>
      <div style="font-size:8.5px;color:rgba(255,255,255,.75);font-family:'DM Mono',monospace">
        🐙 ${d.github} &nbsp;·&nbsp; 💼 ${d.linkedin}
      </div>
    </div>
    ${headerPhoto}
  </div>

  <!-- STATS STRIP -->
  <div style="background:#f5f4fc;border-bottom:1px solid #e8e6ff;padding:7px 28px;display:flex;gap:28px">
    <div style="text-align:center">
      <div style="font-family:'Fraunces',serif;font-size:15px;color:#5848d9;font-weight:300">${d.stats.years}</div>
      <div style="font-size:7px;color:#888;text-transform:uppercase;letter-spacing:.1em">${t.stat_years || "Years exp."}</div>
    </div>
    <div style="text-align:center">
      <div style="font-family:'Fraunces',serif;font-size:15px;color:#5848d9;font-weight:300">${d.stats.projects}</div>
      <div style="font-size:7px;color:#888;text-transform:uppercase;letter-spacing:.1em">${t.stat_projects || "Projects"}</div>
    </div>
    <div style="text-align:center">
      <div style="font-family:'Fraunces',serif;font-size:15px;color:#5848d9;font-weight:300">${d.stats.certs}</div>
      <div style="font-size:7px;color:#888;text-transform:uppercase;letter-spacing:.1em">${t.stat_certs || "Certs"}</div>
    </div>
    <div style="flex:1;display:flex;align-items:center;justify-content:flex-end">
      <span style="background:#e8fdf3;color:#0d9e68;border:1px solid #b8f0d8;padding:3px 10px;border-radius:20px;font-size:7.5px;font-family:'DM Mono',monospace">
        ● ${t.hero_avail || "Open to opportunities"}
      </span>
    </div>
  </div>

  <!-- TWO COLUMNS -->
  <div style="display:flex;height:calc(297mm - 118px);overflow:hidden">

    <!-- LEFT (wider) -->
    <div style="flex:1.5;padding:14px 16px 14px 26px;overflow:hidden;border-right:1px solid #ede9ff">
      ${leftCol || '<div style="color:#aaa;font-size:9px">No sections selected.</div>'}
    </div>

    <!-- RIGHT SIDEBAR -->
    <div style="width:70mm;padding:14px 18px 14px 14px;overflow:hidden;background:#faf9ff">
      ${rightCol}
    </div>

  </div>

  <!-- FOOTER BAR -->
  <div style="position:absolute;bottom:0;left:0;right:0;height:22px;background:#3b2fc9;display:flex;align-items:center;justify-content:center">
    <span style="font-size:7px;color:rgba(255,255,255,.55);font-family:'DM Mono',monospace;letter-spacing:.1em">
      ${d.website} · ${d.email} · ${d.github}
    </span>
  </div>

</div>

<script>
  document.fonts.ready.then(() => { /* fonts loaded — user clicks Save as PDF */ });
<\/script>
</body>
</html>`;
}

/* ────────────────────────────────────────────────────────────
   printCV — called by the Generate A4 CV button in index.html
   ──────────────────────────────────────────────────────────── */
function printCV() {
  const selected = getSelectedSections();
  const html     = buildCVHTML(selected);
  const win      = window.open("", "_blank", "width=900,height=700,scrollbars=yes");
  win.document.open();
  win.document.write(html);
  win.document.close();
}

function previewCV() {
  printCV();
}

window.printCV   = printCV;
window.previewCV = previewCV;