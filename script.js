const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
  threshold: 0.18,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach((element) => revealObserver.observe(element));

const links = document.querySelectorAll('.main-nav a');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const timelineCards = document.querySelectorAll('.timeline-card');
const detailPanel = document.getElementById('timeline-detail');
const detailImage = document.getElementById('detail-image');
const detailEra = document.getElementById('detail-era');
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');
const detailPoints = document.getElementById('detail-points');
const closeDetail = document.querySelector('.close-detail');

const timelineDetails = {
  prehistoric: {
    era: 'Prehistoric Art',
    title: 'First art from long ago',
    description: 'Long before cities, people painted animals and hands on cave walls. These pictures were simple, bright, and meant to share stories or show respect for nature.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    points: ['People painted with earth colors and charcoal.', 'Images showed the animals they hunted and the places they lived.', 'These paintings are among the oldest stories humans ever made.'],
  },
  classical: {
    era: 'Classical Antiquity',
    title: 'Balanced beauty in ancient times',
    description: 'Artists in ancient Greece and Rome carved statues and built temples that looked calm, strong, and perfect. They wanted their artwork to feel noble and lasting.',
    image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?auto=format&fit=crop&w=900&q=80',
    points: ['Sculptures showed people with calm faces and perfect bodies.', 'Buildings used columns and simple shapes to feel strong.', 'Art was used to honor gods, heroes, and leaders.'],
  },
  renaissance: {
    era: 'High Renaissance',
    title: 'Painting people and places in real life',
    description: 'In the Renaissance, artists learned to paint people, light, and space very clearly. They made pictures look three-dimensional and full of life.',
    image: 'https://images.unsplash.com/photo-1545259742-91e73d22f3a0?auto=format&fit=crop&w=900&q=80',
    points: ['Artists studied the human body to draw it better.', 'They used shadows and perspective to make scenes look real.', 'Famous painters like Leonardo and Michelangelo changed art forever.'],
  },
  impressionism: {
    era: 'Impressionism',
    title: 'Light, color, and quick brushstrokes',
    description: 'Impressionist painters wanted to catch a moment. They painted outside, using soft colors and quick strokes to show how light made things look different.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
    points: ['They painted outdoors to capture real light.', 'Brushstrokes were visible and often mixed right on the canvas.', 'Every painting felt like a snapshot of a place or moment.'],
  },
  cubism: {
    era: 'Cubism',
    title: 'Breaking pictures into shapes',
    description: 'Cubism made objects look like they were seen from many sides at once. Artists used sharp shapes and overlapping planes to create a new kind of visual story.',
    image: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=900&q=80',
    points: ['Objects were shown as flat pieces of shape.', 'Faces and chairs could look split into triangles and squares.', 'It was a new way to think about seeing, not just copying reality.'],
  },
  abstract: {
    era: 'Abstract Expressionism',
    title: 'Feelings shown through paint',
    description: 'Abstract art did not try to show real people or places. Instead, artists used color, gesture, and movement to share a feeling or mood.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
    points: ['Paintings were often large and bold.', 'The focus was on emotion and energy, not details.', 'Artists used drips, splashes, and strong color to speak directly to the viewer.'],
  },
};

function showTimelineDetail(key) {
  const detail = timelineDetails[key];
  if (!detail) return;

  detailEra.textContent = detail.era;
  detailTitle.textContent = detail.title;
  detailDescription.textContent = detail.description;
  detailImage.src = detail.image;
  detailImage.alt = `${detail.era} artwork`;
  detailPoints.innerHTML = detail.points.map((point) => `<li>${point}</li>`).join('');
  detailPanel.hidden = false;
  detailPanel.classList.add('visible');
  detailPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

timelineCards.forEach((card) => {
  const era = card.dataset.era;
  card.addEventListener('click', () => showTimelineDetail(era));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showTimelineDetail(era);
    }
  });
});

if (closeDetail) {
  closeDetail.addEventListener('click', () => {
    detailPanel.hidden = true;
  });
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });
}
