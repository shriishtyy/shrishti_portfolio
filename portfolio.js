// document.addEventListener("DOMContentLoaded", function() {
//     const portfolioContent = document.getElementById("portfolio-content");
  
//     // Function to load content from HTML files
//     function loadContent(htmlFile) {
//       fetch(htmlFile)
//         .then(response => response.text())
//         .then(html => {
//           const div = document.createElement("div");
//           div.innerHTML = html;
//           portfolioContent.appendChild(div);
//         })
//         .catch(error => console.error('Error loading content:', error));
//     }
  
//     // Load initial content
//     loadContent("index.html"); // Load index.html first
  
//     // Load content as user scrolls
//     window.addEventListener("scroll", function() {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight) {
//         // Load "contact" content at the bottom
//         portfolioContent.innerHTML = "";
//         loadContent("contact.html");
//       } else if (scrollPosition > window.innerHeight) {
//         // Load "intro" content after index.html
//         portfolioContent.innerHTML = "";
//         loadContent("intro.html");
//       }
//     });
//   });
  
  
  
  
  
document.addEventListener('DOMContentLoaded', function(){
    // const text = "Hello, this is a typing effect!";
    let index = 0;

    function type() {
        document.querySelector('.typing-effect').textContent += text[index];
        index++;
        if (index < text.length) {
            setTimeout(type, 500); // Adjust typing speed here (in milliseconds)
        }
    }

    type();
});

const greetings = [
   "स्वागत है!",
  "Welcome!",
  "Bienvenue!",
  "¡Bienvenido!",
  "Willkommen!",
  "Benvenuto!",
  "ようこそ!",
  "欢迎!",
];

let currentIndex = 0;
const greetingElement = document.getElementById("greeting");

function rotateGreetings() {
  greetingElement.innerText = greetings[currentIndex];
  currentIndex = (currentIndex + 1) % greetings.length;
}

setInterval(rotateGreetings, 500);

//intro
document.addEventListener("DOMContentLoaded", function() {
  const projectsContainer = document.getElementById("projects-container");

  // Fetch GitHub repositories using GitHub API
  fetch("https://api.github.com/users/your-username/repos")
    .then(response => response.json())
    .then(repositories => {
      repositories.forEach(repo => {
        // Create project card
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        // Project name
        const projectName = document.createElement("h3");
        projectName.textContent = repo.name;
        projectCard.appendChild(projectName);

        // Project description
        const projectDescription = document.createElement("p");
        projectDescription.textContent = repo.description || "No description provided";
        projectCard.appendChild(projectDescription);

        // Link to project (GitHub repository)
        const projectLink = document.createElement("a");
        projectLink.textContent = "View on GitHub";
        projectLink.href = repo.html_url;
        projectLink.target = "_blank"; // Open link in a new tab
        projectCard.appendChild(projectLink);

        // Append project card to container
        projectsContainer.appendChild(projectCard);
      });
    })
    .catch(error => console.error('Error fetching projects:', error));
});
