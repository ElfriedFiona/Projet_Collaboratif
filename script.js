const resumeBtns = document.querySelectorAll('.resume-btn'); // Utilise querySelectorAll

	resumeBtns.forEach((btn,idx) => { // Syntaxe correcte
		btn.addEventListener('click', () => {
			const resumeDetails = document.querySelectorAll('.resume-detail')
			// Supprime la classe 'active' de tous les boutons
			resumeBtns.forEach(btn => { btn.classList.remove('active')});

			// Ajoute la classe 'active' au bouton cliqué
			btn.classList.add('active');
			resumeDetails.forEach(detail => { detail.classList.remove('active')});
			resumeDetails[idx].classList.add('active');
		});
	});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
	const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
	const portfolioDetails = document.querySelectorAll('.portfolio-detail');

	imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

	portfolioDetails.forEach(detail => {
		detail.classList.remove('active');
	} );
	portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
	if (index < 2) {
		index++;
		arrowLeft.classList.remove('disabled');
	}
	else {
		index = 3;
		arrowRight.classList.add('disabled');
	}

	activePortfolio();
});

arrowLeft.addEventListener('click', () => {
	if (index > 1) {
		index--;
		arrowRight.classList.remove('disabled');
	}
	else {
		index = 0;
		arrowLeft.classList.add('disabled');
	}

	activePortfolio();
});

function showSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex'
}
function hideSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none'
}


// Sélection des éléments
const modal = document.getElementById('liveProjectModal');
const openModalLinks = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.modal .close');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = videoPlayer.querySelector('source');

// Ajouter un gestionnaire de clic pour chaque lien
openModalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut
        const videoUrl = link.getAttribute('data-url'); // Récupère l'URL de la vidéo
        videoSource.src = videoUrl; // Met à jour la source de la vidéo
        videoPlayer.load(); // Recharge la vidéo pour qu'elle soit lue
        modal.style.display = 'flex'; // Affiche la popup
    });
});

// Fermer la popup
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Cache la popup
    videoPlayer.pause(); // Met en pause la vidéo si elle est en lecture
    videoSource.src = ''; // Vide la source pour économiser les ressources
});

// Fermer la popup en cliquant en dehors du contenu
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        videoPlayer.pause(); // Met en pause la vidéo
        videoSource.src = ''; // Vide la source
    }
});



