import { projects } from "./projects.config.js";
import { clearApp } from "./utils/helpers.js";

const app = document.getElementById("app");
const backButtonArea = document.getElementById("backButtonArea");
const header = document.getElementById("header");

let filteredProjects = [...projects];

function renderHome() {
  // Clear back button area
  clearApp(backButtonArea);
  document.body.classList.remove("project-loaded");
  clearApp(app);

  // Hero Section with Yellow Tab and Marquee
  const heroSection = document.createElement("section");
  heroSection.className = "hero-section";

  // JavaScript Code Display Tab
  const jsCodeTab = document.createElement("div");
  jsCodeTab.className = "js-code-tab";
  jsCodeTab.innerHTML = `
    <div class="js-code-display">
      <span class="keyword">const</span> <span class="string">Projects</span> = {
        <span class="comment">// Build amazing web apps</span>
      }
    </div>
  `;

  // Marquee of Project Names
  const marqueeContainer = document.createElement("div");
  marqueeContainer.className = "marquee-container";
  const marquee = document.createElement("div");
  marquee.className = "marquee";

  // Create marquee items (duplicated for seamless loop)
  projects.forEach(project => {
    const item = document.createElement("div");
    item.className = "marquee-item";
    item.textContent = project.title;
    marquee.appendChild(item);
  });

  // Duplicate for seamless scroll
  projects.forEach(project => {
    const item = document.createElement("div");
    item.className = "marquee-item";
    item.textContent = project.title;
    marquee.appendChild(item);
  });

  marqueeContainer.appendChild(marquee);

  heroSection.appendChild(jsCodeTab);
  heroSection.appendChild(marqueeContainer);

  // Search Section
  const searchSection = document.createElement("div");
  searchSection.className = "search-section";

  const searchBar = document.createElement("input");
  searchBar.className = "search-bar";
  searchBar.type = "text";
  searchBar.placeholder = "Search projects... (try 'calculator', 'timer', 'app')";

  const searchStatus = document.createElement("div");
  searchStatus.className = "search-status";
  searchStatus.textContent = `${projects.length} projects`;

  searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    if (query === "") {
      filteredProjects = [...projects];
      searchStatus.textContent = `${projects.length} projects`;
    } else {
      filteredProjects = projects.filter(
        project => project.title.toLowerCase().includes(query) ||
                   project.file.toLowerCase().includes(query)
      );
      searchStatus.textContent = `${filteredProjects.length} result${filteredProjects.length !== 1 ? 's' : ''}`;
    }
    renderProjectsGrid();
  });

  searchSection.appendChild(searchBar);
  searchSection.appendChild(searchStatus);

  // Projects Grid
  const projectsGridContainer = document.createElement("div");
  projectsGridContainer.className = "project-container";

  const projectsGrid = document.createElement("div");
  projectsGrid.className = "projects-grid";
  projectsGrid.id = "projectsGrid";

  projectsGridContainer.appendChild(projectsGrid);

  app.appendChild(heroSection);
  app.appendChild(searchSection);
  app.appendChild(projectsGridContainer);

  renderProjectsGrid();
}

function renderProjectsGrid() {
  const projectsGrid = document.getElementById("projectsGrid");
  clearApp(projectsGrid);

  if (filteredProjects.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1 / -1;">
        <div class="no-results">
          <i class="fas fa-search" style="font-size: 3rem; color: #d1d5db; margin-bottom: 1rem; display: block;"></i>
          No projects found. Try a different search!
        </div>
      </div>
    `;
    return;
  }

  filteredProjects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    const icon = document.createElement("div");
    icon.className = "project-card-icon";
    icon.innerHTML = '<i class="fas fa-laptop-code"></i>';

    const title = document.createElement("div");
    title.className = "project-card-title";
    title.textContent = project.title;

    card.appendChild(icon);
    card.appendChild(title);

    card.addEventListener("click", () => loadProject(project));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") loadProject(project);
    });

    projectsGrid.appendChild(card);
  });
}

async function loadProject(project) {
  // Show back button in back button area
  clearApp(backButtonArea);
  const backBtn = document.createElement("button");
  backBtn.className = "back-btn";
  backBtn.innerHTML = "⬅ Go Back";
  backBtn.onclick = renderHome;
  backButtonArea.appendChild(backBtn);

  document.body.classList.add("project-loaded");
  clearApp(app);

  // Add gradient effect container
  const projectContainer = document.createElement("div");
  projectContainer.className = "project-container";

  const module = await import(`./projects/${project.file}`);
  module.default(projectContainer);

  app.appendChild(projectContainer);
}

// Initial render
renderHome(); 