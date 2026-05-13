import { currentLang } from "./translation.js";
import { T } from "./translation-object.js";

// ── PRINT CV ──
function getSelectedSections() {
  return Array.from(
    document.querySelectorAll("#cv-options input[type=checkbox]"),
  )
    .filter((cb) => cb.checked)
    .map((cb) => cb.getAttribute("data-section"));
}

function buildCVHTML(selected) {
  const t = T[currentLang];
  const dir = t.dir || "ltr";
  const photoImg = document.getElementById("hero-photo-img");
  const hasPhoto =
    photoImg && photoImg.style.display !== "none" && photoImg.src;
  const photoSrc = hasPhoto ? photoImg.src : "";

  const inc = (id) => selected.includes(id);

  // ── experience items ──
  const expItems = [
    {
      role: t.exp1_role || "Senior Full-Stack Engineer",
      company: "Vercel",
      loc: "San Francisco, CA",
      date: "Jan 2022 — Present",
      desc: t.exp1_desc,
      tags: ["Next.js", "TypeScript", "Rust", "Kubernetes"],
    },
    {
      role: t.exp2_role || "Software Engineer",
      company: "Stripe",
      loc: "Remote",
      date: "Mar 2019 — Dec 2021",
      desc: t.exp2_desc,
      tags: ["React", "Go", "gRPC", "Redis"],
    },
    {
      role: t.exp3_role || "Frontend Developer",
      company: "Shopify",
      loc: "Ottawa, ON",
      date: "Jun 2017 — Feb 2019",
      desc: t.exp3_desc,
      tags: ["Vue.js", "Ruby on Rails", "SCSS"],
    },
  ];

  const projItems = [
    {
      name: "DevFlux CLI",
      desc: t.proj1_desc,
      tags: ["Rust", "CLI", "DevOps"],
    },
    {
      name: "Mindmap AI",
      desc: t.proj2_desc,
      tags: ["TypeScript", "WebGL", "OpenAI API"],
    },
    {
      name: "VaultKit",
      desc: t.proj3_desc,
      tags: ["Go", "AES-256", "Docker"],
    },
    {
      name: "Prism Analytics",
      desc: t.proj4_desc,
      tags: ["ClickHouse", "Svelte", "Privacy"],
    },
  ];

  const skillGroups = [
    {
      label: t.skills_frontend || "Frontend",
      items: [
        "React / Next.js",
        "TypeScript",
        "Vue / Nuxt",
        "Svelte",
        "CSS / SCSS",
        "WebGL",
      ],
    },
    {
      label: t.skills_backend || "Backend",
      items: ["Node.js", "Go", "Rust", "Python", "PostgreSQL", "Redis"],
    },
    {
      label: t.skills_infra || "Infrastructure",
      items: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Terraform",
        "GitHub Actions",
        "Prometheus",
      ],
    },
  ];

  const hobbyItems = [
    {
      e: "📸",
      n: t.hobby1_name || "Photography",
    },
    {
      e: "🎵",
      n: t.hobby2_name || "Music Production",
    },
    {
      e: "🧗",
      n: t.hobby3_name || "Rock Climbing",
    },
    {
      e: "📚",
      n: t.hobby4_name || "Reading",
    },
    {
      e: "🌱",
      n: t.hobby5_name || "Open Source",
    },
    {
      e: "✈️",
      n: t.hobby6_name || "Travel",
    },
  ];

  const socialItems = [
    {
      icon: "🐙",
      name: "GitHub",
      handle: "@alexrivera",
    },
    {
      icon: "💼",
      name: "LinkedIn",
      handle: "alex-rivera-dev",
    },
    {
      icon: "🐦",
      name: "Twitter / X",
      handle: "@alexrivera",
    },
    {
      icon: "🟦",
      name: "Bluesky",
      handle: "@alexrivera.dev",
    },
    {
      icon: "📝",
      name: "Dev.to",
      handle: "@alexrivera",
    },
    {
      icon: "📺",
      name: "YouTube",
      handle: "Alex Rivera Dev",
    },
  ];

  const tag = (s) =>
    `<span style="display:inline-block;background:#ede9ff;color:#4b3fb5;padding:1px 7px;border-radius:20px;font-size:8px;font-family:monospace;margin:1px 2px 1px 0;border:1px solid #d5cfff;">${s}</span>`;

  const secHead = (label) =>
    `<div style="font-size:8px;font-family:monospace;letter-spacing:.15em;text-transform:uppercase;color:#7c6ff5;margin-bottom:4px;padding-bottom:3px;border-bottom:1px solid #e8e6ff;">${label}</div>`;

  let leftCol = "";
  let rightCol = "";

  // ── LEFT: experience & projects ──
  if (inc("experience")) {
    leftCol += `<div style="margin-bottom:14px;">${secHead(t.exp_title || "Experience")}`;
    expItems.forEach((e) => {
      leftCol += `
        <div style="margin-bottom:9px;padding-left:8px;border-left:2px solid #c4beff;">
          <div style="font-size:10px;font-weight:700;color:#1a1830;">${e.role}</div>
          <div style="font-size:8.5px;color:#7c6ff5;font-family:monospace;">${e.company} · ${e.loc}</div>
          <div style="font-size:7.5px;color:#999;margin-bottom:2px;">${e.date}</div>
          <div style="font-size:8px;color:#444;line-height:1.5;">${e.desc || ""}</div>
          <div style="margin-top:3px;">${e.tags.map(tag).join("")}</div>
        </div>`;
    });
    leftCol += `</div>`;
  }

  if (inc("projects")) {
    leftCol += `<div style="margin-bottom:14px;">${secHead(t.proj_title || "Projects")}`;
    projItems.forEach((p) => {
      leftCol += `
        <div style="margin-bottom:8px;padding-left:8px;border-left:2px solid #b8f0d8;">
          <div style="font-size:10px;font-weight:700;color:#1a1830;">${p.name}</div>
          <div style="font-size:8px;color:#444;line-height:1.5;">${p.desc || ""}</div>
          <div style="margin-top:2px;">${p.tags.map(tag).join("")}</div>
        </div>`;
    });
    leftCol += `</div>`;
  }

  if (inc("hobbies")) {
    leftCol += `<div style="margin-bottom:14px;">${secHead(t.hobbies_title || "Hobbies")}
      <div style="display:flex;flex-wrap:wrap;gap:5px;">
        ${hobbyItems.map((h) => `<span style="font-size:8.5px;color:#444;">${h.e} ${h.n}</span>`).join("")}
      </div></div>`;
  }

  // ── RIGHT: photo, contact, education, skills, social ──
  if (photoSrc) {
    rightCol += `<div style="text-align:center;margin-bottom:12px;">
      <img src="${photoSrc}" style="width:90px;height:90px;border-radius:12px;object-fit:cover;object-position:center top;border:2px solid #c4beff;display:block;margin:0 auto;">
    </div>`;
  }

  if (inc("contact")) {
    rightCol += `<div style="margin-bottom:12px;">${secHead(t.contact_title || "Contact")}
      <div style="font-size:8.5px;color:#444;line-height:1.9;">
        <div>✉ <a href="mailto:alex@example.dev" style="color:#7c6ff5;text-decoration:none;">alex@example.dev</a></div>
        <div>📍 San Francisco, CA</div>
        <div>🌐 alexrivera.dev</div>
        <div>💼 linkedin.com/in/alex-rivera-dev</div>
        <div>🐙 github.com/alexrivera</div>
      </div></div>`;
  }

  if (inc("education")) {
    rightCol += `<div style="margin-bottom:12px;">${secHead(t.edu_title || "Education")}
      <div style="margin-bottom:7px;padding-left:8px;border-left:2px solid #c4beff;">
        <div style="font-size:9.5px;font-weight:700;color:#1a1830;">${t.edu1_degree || "B.Sc. Computer Science"}</div>
        <div style="font-size:8px;color:#7c6ff5;font-family:monospace;">University of Waterloo</div>
        <div style="font-size:7.5px;color:#999;">2013 — 2017 · GPA 3.9</div>
        <div style="font-size:8px;color:#444;">${t.edu1_desc || ""}</div>
      </div>
      <div style="margin-bottom:5px;padding-left:8px;border-left:2px solid #b8f0d8;">
        <div style="font-size:9px;font-weight:700;color:#1a1830;">AWS Solutions Architect</div>
        <div style="font-size:7.5px;color:#999;">2021 · Active</div>
      </div>
      <div style="padding-left:8px;border-left:2px solid #b8f0d8;">
        <div style="font-size:9px;font-weight:700;color:#1a1830;">Certified Kubernetes Admin</div>
        <div style="font-size:7.5px;color:#999;">2022 · Active</div>
      </div>
    </div>`;
  }

  if (inc("skills")) {
    rightCol += `<div style="margin-bottom:12px;">${secHead(t.skills_title || "Skills")}`;
    skillGroups.forEach((g) => {
      rightCol += `<div style="margin-bottom:6px;">
        <div style="font-size:7.5px;color:#999;font-family:monospace;margin-bottom:3px;">${g.label}</div>
        <div>${g.items.map(tag).join("")}</div>
      </div>`;
    });
    rightCol += `</div>`;
  }

  if (inc("social")) {
    rightCol += `<div style="margin-bottom:12px;">${secHead(t.social_title || "Social")}
      ${socialItems.map((s) => `<div style="font-size:8px;color:#444;margin-bottom:2px;">${s.icon} <span style="color:#7c6ff5;font-family:monospace;">${s.handle}</span> <span style="color:#aaa;">— ${s.name}</span></div>`).join("")}
    </div>`;
  }

  return `<!DOCTYPE html>
<html lang="${currentLang}" dir="${dir}">
<head>
<meta charset="UTF-8">
<title>CV — Alex Rivera</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,300&family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
<style>
  @page { size: A4 portrait; margin: 0; }
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { width:210mm; height:297mm; overflow:hidden; background:#fff; }
  body { font-family:'Outfit',sans-serif; font-weight:300; color:#1a1830; }
  @media print {
    html, body { width:210mm; height:297mm; }
    .no-print { display:none !important; }
  }
</style>
</head>
<body>

<!-- PRINT BUTTON (screen only) -->
<div class="no-print" style="position:fixed;top:12px;right:12px;z-index:999;display:flex;gap:8px;">
  <button onclick="window.print()" style="background:#7c6ff5;color:#fff;border:none;padding:8px 18px;border-radius:20px;font-family:'Outfit',sans-serif;font-size:13px;cursor:pointer;font-weight:500;">🖨 Save as PDF</button>
  <button onclick="window.close()" style="background:#f0eff8;color:#333;border:1px solid #ddd;padding:8px 14px;border-radius:20px;font-family:'Outfit',sans-serif;font-size:13px;cursor:pointer;">✕ Close</button>
</div>

<!-- A4 PAGE -->
<div style="width:210mm;height:297mm;background:#fff;position:relative;overflow:hidden;">

  <!-- HEADER BAND -->
  <div style="background:linear-gradient(135deg,#3b2fc9 0%,#6d5ef5 60%,#9b8cff 100%);padding:20px 28px 16px;display:flex;align-items:center;justify-content:space-between;gap:16px;">
    <div style="flex:1;">
      <div style="font-size:8px;font-family:monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,0.65);margin-bottom:4px;">Full-Stack Developer</div>
      <div style="font-family:'Fraunces',serif;font-size:28px;font-weight:300;color:#fff;line-height:1;letter-spacing:-0.02em;">Alex <em style="font-style:italic;color:#c4beff;">Rivera</em></div>
      <div style="font-size:8.5px;color:rgba(255,255,255,0.7);margin-top:6px;font-family:monospace;">
        ✉ alex@example.dev &nbsp;·&nbsp; 📍 San Francisco, CA &nbsp;·&nbsp; 🌐 alexrivera.dev
      </div>
    </div>
    ${photoSrc ? `<img src="${photoSrc}" style="width:68px;height:68px;border-radius:10px;object-fit:cover;object-position:center top;border:2px solid rgba(255,255,255,0.35);flex-shrink:0;">` : `<div style="width:68px;height:68px;border-radius:10px;border:2px solid rgba(255,255,255,0.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>`}
  </div>

  <!-- STATS STRIP -->
  <div style="background:#f5f4fc;border-bottom:1px solid #e8e6ff;padding:7px 28px;display:flex;gap:28px;">
    <div style="text-align:center;"><div style="font-family:'Fraunces',serif;font-size:15px;color:#5848d9;font-weight:300;">7+</div><div style="font-size:7px;color:#888;text-transform:uppercase;letter-spacing:.1em;">${t.stat_years || "Years exp."}</div></div>
    <div style="text-align:center;"><div style="font-family:'Fraunces',serif;font-size:15px;color:#5848d9;font-weight:300;">40+</div><div style="font-size:7px;color:#888;text-transform:uppercase;letter-spacing:.1em;">${t.stat_projects || "Projects"}</div></div>
    <div style="text-align:center;"><div style="font-family:'Fraunces',serif;font-size:15px;color:#5848d9;font-weight:300;">12k</div><div style="font-size:7px;color:#888;text-transform:uppercase;letter-spacing:.1em;">GitHub ★</div></div>
    <div style="text-align:center;"><div style="font-family:'Fraunces',serif;font-size:15px;color:#5848d9;font-weight:300;">3</div><div style="font-size:7px;color:#888;text-transform:uppercase;letter-spacing:.1em;">${t.stat_certs || "Certs"}</div></div>
    <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;">
      <span style="background:#e8fdf3;color:#0d9e68;border:1px solid #b8f0d8;padding:3px 10px;border-radius:20px;font-size:7.5px;font-family:monospace;">● ${t.hero_avail || "Open to opportunities"}</span>
    </div>
  </div>

  <!-- TWO COLUMNS -->
  <div style="display:flex;height:calc(297mm - 120px);overflow:hidden;">

    <!-- LEFT (wider) -->
    <div style="flex:1.5;padding:16px 18px 16px 28px;overflow:hidden;border-right:1px solid #ede9ff;">
      ${leftCol || '<div style="color:#aaa;font-size:9px;">No sections selected.</div>'}
    </div>

    <!-- RIGHT (sidebar) -->
    <div style="width:68mm;padding:16px 20px 16px 16px;overflow:hidden;background:#faf9ff;">
      ${rightCol}
    </div>

  </div>

  <!-- FOOTER -->
  <div style="position:absolute;bottom:0;left:0;right:0;height:22px;background:#3b2fc9;display:flex;align-items:center;justify-content:center;">
    <span style="font-size:7px;color:rgba(255,255,255,0.5);font-family:monospace;letter-spacing:.1em;">alexrivera.dev · alex@example.dev · github.com/alexrivera</span>
  </div>

</div>
<script>
  // auto-trigger print after fonts load
  document.fonts.ready.then(() => {
    setTimeout(() => { /* user clicks the button */ }, 500);
  });
<\/script>
</body>
</html>`;
}

function printCV() {
  const selected = getSelectedSections();
  const html = buildCVHTML(selected);
  const win = window.open("", "_blank", "width=900,height=700,scrollbars=yes");
  win.document.open();
  win.document.write(html);
  win.document.close();
}

function previewCV() {
  printCV(); // preview IS the A4 window
}


window.printCV = printCV;