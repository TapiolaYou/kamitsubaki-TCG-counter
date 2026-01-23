let mana = {
  alpha: 0,
  beta: 0,
  omega: 0,
};

let vol = 0;

const volImage = "../images/VOL.jpeg";
const nonVol = "../images/nonVOL.png";

const manaImage = {
  alpha: "../images/α.jpeg",
  beta: "../images/β.jpeg",
  omega: "../images/Ω.jpeg",
};

const manaBack = {
  alpha: "../images/nonα.png",
  beta: "../images/nonβ.png",
  omega: "../images/nonΩ.png",
};

function updateManaColumn(type) {
  const col = document.getElementById(`${type}-col`);
  const imgs = col.querySelectorAll("img");

  imgs.forEach((img, i) => {
    img.src = i < mana[type] ? manaImage[type] : manaBack[type];
  });
}

function initColumn(type) {
  const col = document.getElementById(`${type}-col`);
  const imgs = col.querySelectorAll("img");

  imgs.forEach((img, i) => {
    img.src = manaBack[type];
    img.dataset.index = i + 1;

    img.onclick = () => {
      toggleMana(type, i + 1);
    };
  });
}

function toggleMana(type, index) {
  if (mana[type] === index) {
    mana[type] = index - 1;
  } else {
    mana[type] = index;
  }
  updateManaColumn(type);
}

function addVol() {
  if (vol >= 10) return;
  vol++;
  updateVolUI();
}

function removeVol() {
  if (vol <= 0) return;
  vol--;
  updateVolUI();
}

["alpha", "beta", "omega"].forEach((type) => {
  initColumn(type);
});

function initVol() {
  const grid = document.getElementById("vol-grid");
  const imgs = grid.querySelectorAll("img");

  imgs.forEach((img, i) => {
    img.src = nonVol;
    img.dataset.index = i + 1;

    img.onclick = () => {
      toggleVol(i + 1);
    };
  });
}

function toggleVol(index) {
  if (vol === index) {
    vol = index - 1;
  } else {
    vol = index;
  }
  updateVolUI();
}

function updateVolUI() {
  const imgs = document.getElementById("vol-grid").querySelectorAll("img");

  imgs.forEach((img, i) => {
    img.src = i < vol ? volImage : nonVol;
  });
}

initVol();
