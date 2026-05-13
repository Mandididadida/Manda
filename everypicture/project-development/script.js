(function () {
  'use strict';

  const dreams = {
    bear: {
      title: 'Love Dream',
      image: 'images/bearlove.png',
      alt: 'A teddy bear held in a car at night with roses nearby',
      caption: 'A soft bear appears in the back of the car, surrounded by flowers and night lights.',
      story: 'This dream feels warm, dramatic, and a little unreal. The bear becomes a small symbol of affection, sitting between roses, car lights, and the quiet city view. It turns an ordinary car trunk into a private stage for memory.'
    },

    lamb: {
      title: 'Soft Dream',
      image: 'images/lambdream.png',
      alt: 'A white lamb plush toy on a car dashboard near a green sports car outside',
      caption: 'The lamb rests quietly while the outside world looks fast, bright, and expensive.',
      story: 'This dream is about contrast. The lamb is small and soft, but the scene outside the window is loud, shiny, and full of speed. The plush toy makes the image feel less like a car photo and more like a tiny peaceful interruption.'
    },

    lion: {
      title: 'Friendship Dream',
      image: 'images/lionfriend.png',
      alt: 'Several plush animals sitting together in a car seat with an orange blanket',
      caption: 'The lion sits with other plush friends in a crowded car seat.',
      story: 'This dream is playful and crowded. The plush toys look like they are traveling together, sharing the same small space. The car becomes a moving bedroom, a soft shelter, and a place where ordinary objects start to feel like companions.'
    },

    tata: {
      title: 'Family Dream',
      image: 'images/tatafamily.png',
      alt: 'An otter plush holding a baby otter inside a car near the coast',
      caption: 'The otter family looks out from the car window toward the coastline.',
      story: 'This dream is about protection and distance. The large otter holds the small one while the road, mirror, and coast stretch outside. It feels like a travel memory, but also like a small family portrait made from plush toys.'
    }
  };

  const animalButtons = document.querySelectorAll('.animal-card');
  const overlay = document.querySelector('#dream-overlay');
  const closeButton = document.querySelector('#close-button');
  const nextDreamButton = document.querySelector('#next-dream');

  const dreamTitle = document.querySelector('#dream-title');
  const dreamImage = document.querySelector('#dream-image');
  const dreamCaption = document.querySelector('#dream-caption');
  const dreamStory = document.querySelector('#dream-story');

  const dreamKeys = ['bear', 'lamb', 'lion', 'tata'];
  let currentDream = 'bear';

  animalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const selectedDream = button.getAttribute('data-dream');
      openDream(selectedDream);
    });
  });

  closeButton.addEventListener('click', closeDream);
  nextDreamButton.addEventListener('click', closeDream);

  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      closeDream();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeDream();
    }

    if (event.key === 'ArrowRight' && overlay.classList.contains('open')) {
      showNextDream();
    }
  });

  function openDream(dreamName) {
    const selected = dreams[dreamName];
    currentDream = dreamName;

    dreamTitle.textContent = selected.title;
    dreamImage.src = selected.image;
    dreamImage.alt = selected.alt;
    dreamCaption.textContent = selected.caption;

    dreamStory.classList.add('waiting');
    dreamStory.textContent = '';

    overlay.classList.add('open');

    setTimeout(function () {
      dreamStory.textContent = selected.story;
      dreamStory.classList.remove('waiting');
    }, 550);
  }

  function closeDream() {
    overlay.classList.remove('open');
  }

  function showNextDream() {
    const currentIndex = dreamKeys.indexOf(currentDream);
    let nextIndex = currentIndex + 1;

    if (nextIndex > dreamKeys.length - 1) {
      nextIndex = 0;
    }

    openDream(dreamKeys[nextIndex]);
  }
})();