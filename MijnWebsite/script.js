const header = document.getElementById("header");
const button = document.getElementById("Hide-header");
const viewCompletedButton = document.getElementById("view-completed");
const viewInProgressButton = document.getElementById("view-in-progress");
const projectsContent = document.querySelector(".projects-content");
const completedProjectsSection = document.querySelector(".projects-completed");
const inProgressProjectsSection = document.querySelector(".projects-in-progress");

button.addEventListener("click", () => {


  header.classList.toggle("collapsed");

  if(header.classList.contains("collapsed")){
    button.innerHTML = "▲";
  }
  else{
    button.innerHTML = "▼";
  }

  

});


viewCompletedButton.addEventListener("click", () => {

  completedProjectsSection.style.display = "block";
  inProgressProjectsSection.style.display = "none"; 
  viewCompletedButton.classList.add("active");
  viewInProgressButton.classList.remove("active");
});

viewInProgressButton.addEventListener("click", () => {  
  completedProjectsSection.style.display = "none";
  inProgressProjectsSection.style.display = "flex"; 
  viewInProgressButton.classList.add("active");
  viewCompletedButton.classList.remove("active");
});