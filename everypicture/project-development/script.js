const dreamPanel = document.querySelector("#dreamPanel");
const panelTitle = document.querySelector("#panelTitle");
const panelImage = document.querySelector("#panelImage");
const panelStory = document.querySelector("#panelStory");
const landingPage = document.querySelector("#landingPage");

function openBear() {
  panelTitle.innerHTML = "Bear · Love Dream";
  panelImage.src = "image/bearlove.png";

  panelStory.innerHTML =
    "You fall asleep and wake up in the back of a car, under a dark sky full of city lights. A soft teddy bear is sitting in your arms, and a bouquet of red roses is beside you. Everything feels quiet, warm, and a little unreal.<br><br>" +
    "This dream is about love. Not loud love, not perfect love, but the kind of love that feels like being held safely in a small glowing space. The bear does not say anything, but it stays close to you. It reminds you that love can be gentle, sleepy, and simple.<br><br>" +
    "In this dream, love is not only romance. It is also comfort. It is someone remembering you, someone choosing you, and someone making an ordinary night feel soft.";

  dreamPanel.style.right = "0";
}

function openLamb() {
  panelTitle.innerHTML = "Lamb · Dream Dream";
  panelImage.src = "image/lambdream.png";

  panelStory.innerHTML =
    "You wake up inside a parked car at sunset. A white lamb is resting on the dashboard, looking out toward a bright green sports car. The lamb looks small and soft, but the world outside the window feels fast, shiny, and impossible to reach.<br><br>" +
    "This dream is about ambition and future wishes. The lamb represents the quiet part of you that still wants something big. It does not run toward the dream immediately. It only watches first, wondering if it is allowed to want more.<br><br>" +
    "The dream tells you that dreams can look strange from the inside. Sometimes they are expensive, bright, and far away. Sometimes they are soft and shy. But even a small lamb can be looking at a very big future.";

  dreamPanel.style.right = "0";
}

function openLion() {
  panelTitle.innerHTML = "Lion · Friendship Dream";
  panelImage.src = "image/lionfriend.png";

  panelStory.innerHTML =
    "In this dream, you are sitting in a car at night, sharing ice cream with someone. The road map glows blue in the background, and a lion is hanging quietly near the front of the car. The whole scene feels like a small road trip with no clear destination.<br><br>" +
    "This dream is about friendship. The lion is brave, but it is also silly and soft. It reminds you of the kind of friend who makes late nights feel less lonely. You do not need to have a perfect plan. You only need someone who wants to be there with you.<br><br>" +
    "The ice cream melts, the car lights glow, and the dream keeps moving. Friendship here is not a serious promise. It is a shared snack, a random drive, and the feeling that someone is laughing beside you.";

  dreamPanel.style.right = "0";
}

function openTata() {
  panelTitle.innerHTML = "Otter · Family Dream";
  panelImage.src = "image/tatafamily.png";

  panelStory.innerHTML =
    "You dream of driving near the coast. Outside the window, the sky is blue, the grass is bright, and the ocean feels close even when you cannot see all of it. An otter is sitting near the window, holding a smaller otter in its arms.<br><br>" +
    "This dream is about family. The otter does not look dramatic or powerful. It simply holds on. That is what makes it feel warm. Family in this dream is not about saying perfect words. It is about staying close, carrying each other, and looking out at the same view together.<br><br>" +
    "As the car moves forward, the mirror reflects another piece of the road. The dream reminds you that family is both where you come from and what follows you quietly, even when you are moving somewhere new.";

  dreamPanel.style.right = "0";
}

function closePanel() {
  dreamPanel.style.right = "-460px";
}