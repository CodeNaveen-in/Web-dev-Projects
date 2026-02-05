import { projects } from "./projects.config.js";
import { clearApp } from "./utils/helpers.js";

const app = document.getElementById("app");
const backBtn = document.getElementById("backBtn");

function renderHome() {
  backBtn.hidden = true;
  clearApp(app);

  projects.forEach(project => {
    const btn = document.createElement("button");
    btn.className = "project-btn";
    btn.textContent = project.title;

    btn.onclick = () => loadProject(project);
    app.appendChild(btn);
  });
}

async function loadProject(project) {
  backBtn.hidden = false;
  clearApp(app);

  const module = await import(`./projects/${project.file}`);
  module.default(app);
}

backBtn.onclick = renderHome;

// Initial render
renderHome();

// Common contract in all files : export default function render(container) {} 