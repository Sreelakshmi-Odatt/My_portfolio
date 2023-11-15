
/*
 Name : Sreelakshmi Odatt Venu
     File name :script.js
     Date of creation:26/09/2023
     Description: This is the javascript file .
    Course section:CST8285_33
*/
document.addEventListener("DOMContentLoaded", function () {

  let currentProject = 1;
  document.getElementById('nextButton').addEventListener('click', () => {
    window.scrollTo({ top: 0, });
    currentProject = (currentProject % 4) + 1;
    showProject(currentProject);

  });

  document.getElementById('prevButton').addEventListener('click', () => {
    window.scrollTo({ top: 0, });
    currentProject = (currentProject - 2 + 4) % 4 + 1;
    showProject(currentProject);
  });
  function showProject(projectNumber) {


    const projects = document.querySelectorAll('.project');
    projects.forEach(project => project.style.display = 'none');

    const selectedProject = document.getElementById(`project${projectNumber}`);
    if (selectedProject) {
      selectedProject.style.display = 'block';
    }

    currentProject = projectNumber;
  }


  
  showProject(currentProject);


  const images = document.querySelectorAll(".expand-image");
  const popup = document.createElement("div");
  popup.className = "popup";
  const popupImage = document.createElement("img");
  popupImage.className = "popup-image";
  popup.appendChild(popupImage);

  const closeButton = document.createElement("span");
  closeButton.className = "close-button";

  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });

  popup.appendChild(closeButton);
  document.body.appendChild(popup);

  images.forEach(function (image) {
    image.addEventListener("click", function () {

      var newWindow = window.open('', '_blank');


      var newImage = document.createElement('img');
      newImage.src = image.src;


      newWindow.document.body.appendChild(newImage);
    });
  });

});
