(function () {
  const dreams = {
    bear: {
      title: "Love Dream",
      image: "images/bearlove.png",
      pop: "images/popbear.png",
      alt: "A teddy bear held during a romantic night view date",
      caption: "A romantic bear dream about a date, city lights, and a soft moment of happiness.",
      story: "In this dream, the bear goes on a date with someone special. They drive to UC Berkeley and find a quiet terrace where the city lights stretch out below them. The night feels peaceful, romantic, and full of happiness. The bear represents a sweet memory of being loved, sharing the view together, and wishing that this warm moment could last a little longer."
    },

    lamb: {
      title: "Dream Car Dream",
      image: "images/lambdream.png",
      pop: "images/poplamb.png",
      alt: "A lamb plush seeing a dream car outside",
      caption: "A soft lamb dream about seeing a dream car and imagining future freedom.",
      story: "In this dream, the lamb is on the way to dinner when it suddenly sees its dream car parked outside. For a moment, everything feels bright and exciting. The car becomes more than just a beautiful object. It represents ambition, independence, and the hope that one day the lamb will be able to drive toward its own future adventure."
    },

    lion: {
      title: "Friendship Dream",
      image: "images/lionfriend.png",
      pop: "images/poplion.png",
      alt: "A lion plush in a late-night snack memory with friends",
      caption: "A playful lion dream about a spontaneous midnight McDonald’s trip with friends.",
      story: "In this dream, the lion and its friends suddenly decide in the middle of the night that they need a late-night snack. Without overthinking, they drive to McDonald’s together. The car is full of laughter, random conversations, and sleepy excitement. The ice cream becomes part of the memory too: simple, sweet, and unforgettable. This dream represents the energetic kind of friendship where even a tiny midnight plan can become a precious adventure."
    },

    tata: {
      title: "Family Dream",
      image: "images/tatafamily.png",
      pop: "images/poptata.png",
      alt: "An otter plush family on a California road trip",
      caption: "A warm otter dream about a family road trip along California’s Highway 1 and 17-Mile Drive.",
      story: "In this dream, the otter travels with its family on a road trip along California’s Highway 1. They pass the ocean, trees, and beautiful coastal views, eventually arriving at 17-Mile Drive. The trip feels calm, beautiful, and deeply comforting. The otter represents the tenderness of family time: sitting together in the car, sharing the scenery, and feeling protected by the people closest to you. This dream wishes that such warm family moments could continue."
    }
  };

  const outlinePaths = document.querySelectorAll(".outline-path");

  const overlay = document.querySelector("#dream-overlay");
  const closeButton = document.querySelector("#close-button");
  const nextDreamButton = document.querySelector("#next-dream");

  const dreamImage = document.querySelector("#dream-image");
  const dreamPop = document.querySelector("#dream-pop");
  const dreamTitle = document.querySelector("#dream-title");
  const dreamCaption = document.querySelector("#dream-caption");
  const dreamStory = document.querySelector("#dream-story");

  let currentDream = "bear";

  function clearActiveOutlines() {
    outlinePaths.forEach(function (path) {
      path.classList.remove("is-active");
    });
  }

  function showOutline(path) {
    clearActiveOutlines();
    path.classList.add("is-active");
  }

  function hideOutline(path) {
    path.classList.remove("is-active");
  }

  function openDream(dreamName) {
    const selected = dreams[dreamName];
    currentDream = dreamName;

    dreamImage.src = selected.image;
    dreamImage.alt = selected.alt;

    dreamPop.src = selected.pop;
    dreamPop.setAttribute("data-dream", dreamName);

    dreamTitle.textContent = selected.title;
    dreamCaption.textContent = selected.caption;
    dreamStory.textContent = selected.story;

    overlay.classList.add("open");
  }

  function closeDream() {
    overlay.classList.remove("open");
  }

  function chooseAnotherDream() {
    closeDream();
    clearActiveOutlines();
  }

  outlinePaths.forEach(function (path) {
    const dreamName = path.dataset.dream;

    path.addEventListener("pointerenter", function () {
      showOutline(path);
    });

    path.addEventListener("pointerleave", function () {
      hideOutline(path);
    });

    path.addEventListener("click", function () {
      openDream(dreamName);
    });
  });

  closeButton.addEventListener("click", function () {
    closeDream();
    clearActiveOutlines();
  });

  nextDreamButton.addEventListener("click", chooseAnotherDream);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeDream();
      clearActiveOutlines();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeDream();
      clearActiveOutlines();
    }
  });
}());