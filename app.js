const icon = document.querySelector(".BAR i");
const list = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a"); // Tous les liens du menu

// Clic sur l'icône hamburger
icon.onclick = () => {
  icon.classList.toggle('fa-xmark'); // Bascule l'icône
  list.classList.toggle('active');   // Affiche / cache le menu
};

// Clic sur un lien du menu : on ferme le menu
links.forEach(link => {
  link.onclick = () => {
    icon.classList.remove('fa-xmark'); // Restaure l'icône hamburger
    list.classList.remove('active');   // Cache le menu
  };
});





  // Récupère toutes les vidéos et les boutons
  const videos = document.querySelectorAll('.vid');
  const btn1 = document.querySelector('.btn1');
  const btn2 = document.querySelector('.btn2');
  const btn3 = document.querySelector('.btn3');

  // Fonction pour afficher une seule vidéo à la fois
  function showVideo(index) {
    videos.forEach((video, i) => {
      video.style.display = (i === index) ? 'block' : 'none';
    });
  }

  // Par défaut, on affiche la première vidéo
  showVideo(0);

  // Événements sur les boutons
  btn1.addEventListener('click', () => showVideo(0));
  btn2.addEventListener('click', () => showVideo(1));
  btn3.addEventListener('click', () => showVideo(2));





//   let lastScrollTop = 0;
//   const navbar = document.querySelector('.sec1');

//   window.addEventListener('scroll', function () {
//     let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//     if (currentScroll > lastScrollTop) {
//       // Scroll vers le bas → cacher la navbar
//       navbar.style.top = "-100px"; // Ajuste si ta barre est plus haute ou plus basse
//     } else {
//       // Scroll vers le haut → montrer la navbar
//       navbar.style.top = "0";
//     }

//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
//   });
 

    
    
 