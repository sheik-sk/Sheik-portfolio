
setTimeout(() => {
    document.getElementById("loader").style.display = "none"; // Hide loader
    document.body.style.overflow = "auto"; // Enable scrolling
  }, 4000); // 5 seconds delay



const toggleButton = document.getElementById('modeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  // Toggle the theme by adding/removing the dark-mode class
  body.classList.toggle('dark-mode');
});


document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    modeToggle.addEventListener("click", function () {
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
        }
    });
});





        // Smooth scroll functionality
        document.querySelectorAll('.center a, .hire-me').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });




        const menuToggle = document.getElementById('menuToggle');
        const menu = document.getElementById('menu');
        const navbar = document.getElementById('navbar');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shrink');
            } else {
                navbar.classList.remove('shrink');
            }
        });






        // Add this JavaScript code (index.js)

window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navbar a");

    let currentSection = "";
    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});












document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.remove("animate"); // Remove class when out of view
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the item is visible
    );

    serviceItems.forEach((item) => {
        observer.observe(item);
    });
});



function filterCards(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('show');
        if (category === 'All' || card.querySelector('img').alt.includes(category)) {
            setTimeout(() => {
                card.classList.add('show');
            }, 200);
        }
    });
}
function filterCards(category) {
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
card.classList.remove('show');
if (category === 'All' || card.querySelector('img').alt.includes(category)) {
    setTimeout(() => {
        card.classList.add('show');
    }, 200);
}
});
}
document.addEventListener('DOMContentLoaded', () => {
const cards = document.querySelectorAll('.card');

// Function to trigger animation when the card is in view
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        // Add the 'show' class to trigger the animation
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Stop observing after the card is shown
    }
});
}, { threshold: 0.5 }); // Trigger when 50% of the card is in the viewport

// Start observing each card
cards.forEach(card => {
observer.observe(card);
});
});






// Intersection Observer to trigger the animation when the section is in view
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Add the in-view class to start animation
        } else {
            entry.target.classList.remove('in-view'); // Remove class when out of view
        }
    });
}, {
    threshold: 0.8 // Trigger when 80% of the card is visible
});

// Observe each card
document.querySelectorAll('.cd-card').forEach(card => {
    cardObserver.observe(card);
});





const skillCards = document.querySelectorAll('.skill-card');

function checkVisibility() {
    skillCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            if (!card.classList.contains('visible')) {
                card.classList.add('visible');
                card.style.animation = "none"; // Reset animation
                void card.offsetWidth; // Trigger reflow
                card.style.animation = ""; // Reapply animation
            }
        } else {
            card.classList.remove('visible'); // Remove class when out of view
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);




document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".number");
    const speed = 200; // Speed of counting

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute("data-target");
                let count = 0;
                const increment = target / speed;

                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        entry.target.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        entry.target.textContent = target;
                    }
                };

                entry.target.textContent = "0"; // Reset counter on re-entry
                updateCount();
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
});




document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = document.querySelectorAll(".social");
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 500);
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.5 });

    socialLinks.forEach(link => {
        observer.observe(link);
    });

    document.getElementById("mail-link").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "mailto:Sheikibramusha0729@gmail.com?subject=Hello Sheik&body=I wanted to contact you!";
    });

    document.getElementById("whatsapp-link").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "http://wa.me/+917708864431";
    });
});



 // Get the button element
 const scrollUpBtn = document.getElementById('scrollUpBtn');

 // Show or hide the button based on scroll position
 window.onscroll = function() {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
     scrollUpBtn.classList.add('show');
   } else {
     scrollUpBtn.classList.remove('show');
   }
 };

 // Scroll to the top when the button is clicked
 scrollUpBtn.onclick = function() {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 };






document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("footer").classList.add("show");
});








//comment box

function postComment() {
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    
    if(name.trim() === '' || message.trim() === '') return;

    let commentBox = document.getElementById('comments');
    let newComment = document.createElement('div');
    newComment.classList.add('comment');

    let userImage = `https://i.pravatar.cc/30?u=${name}`;
    newComment.innerHTML = `
        <img src="${userImage}" alt="User Image">
        <p><strong>${name}</strong><br>${message}</p>
        <button class="delete-comment-btn">&times;</button>
    `;

    commentBox.appendChild(newComment);

    saveComment({ name, message });

    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
}

function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    let commentBox = document.getElementById('comments');
    commentBox.innerHTML = '';

   
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-comment-btn')) {
        let commentElement = e.target.parentElement;
        let name = commentElement.querySelector('p strong').innerText;
        let message = commentElement.querySelector('p').innerText.split('\n')[1];

        removeComment(name, message);
        commentElement.remove();
    }
});

function removeComment(name, message) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments = comments.filter(comment => comment.name !== name || comment.message !== message);
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Load comments when the page loads
document.addEventListener('DOMContentLoaded', loadComments);

// Intersection Observer for animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.3 });

observer.observe(document.getElementById('commentBox'));





//certificationdocument.addEventListener("DOMContentLoaded", function () {
    const section = document.getElementById("certificateSection");
    const title = section.querySelector(".title");
    const items = section.querySelectorAll(".certificate-item");

    function revealOnScroll() {
        const sectionPosition = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const screenPosition = window.innerHeight / 1.2;

        // If section is in view, add animation
        if (sectionPosition < screenPosition && sectionBottom > 0) {
            section.classList.add("visible");
            title.classList.add("visible");
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("visible");
                }, index * 300);
            });
        } else {
            // If section is out of view, remove animation classes
            section.classList.remove("visible");
            title.classList.remove("visible");
            items.forEach((item) => {
                item.classList.remove("visible");
            });
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
