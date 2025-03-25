// Initialize particles.js with a unique configuration
particlesJS("animated-bg", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": "#00ffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000"
      }
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#00ffff",
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.8
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

// Countdown Timer
// Set event date (example: Dec 31, 2025 00:00:00)
const eventDate = new Date("Dec 31, 2025 00:00:00").getTime();

const timerInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;
  
  // Calculate days, hours, minutes, seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the element with id="countdown-timer"
  document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";
  
  // If the countdown is finished, display text
  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("countdown-timer").innerHTML = "TechFest has begun!";
  }
}, 1000);

// Timeline Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const timelineEvents = document.querySelectorAll('.timeline-event');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(button => button.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    
    timelineEvents.forEach(event => {
      if (filter === 'all' || event.getAttribute('data-category') === filter) {
        event.style.display = 'block';
      } else {
        event.style.display = 'none';
      }
    });
  });
});
