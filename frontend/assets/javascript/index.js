import { showProjects } from "./commons/project-list.js";
import { createFilterButtons } from "./commons/filter-project-list.js";

document.addEventListener('DOMContentLoaded', () => {
  showProjects();
  createFilterButtons();
});