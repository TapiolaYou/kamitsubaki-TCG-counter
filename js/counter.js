let mana = {
  alpha: 0,
  beta: 0,
  omega: 0,
};

let vol = 0;

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

volImage = "../images/VOL.jpeg";
nonVol = "../images/nonVOL.png";

function addMana(type) {
  if (mana[type] >= 5) return;
  mana[type]++;
  updateManaUI(type);
}

function removeMana(type) {
  if (mana[type] <= 0) return;
  mana[type]--;
  updateManaUI(type);
}

function updateManaUI(type) {
  const img = document.getElementById(`mana-${type}`);
  const count = document.getElementById(`${type}-count`);

  count.textContent = mana[type];
  img.src = mana[type] === 0 ? manaBack[type] : manaImage[type];
}

function updateManaColumn(type) {
  const col = document.getElementById(`${type}-col`);
  const imgs = col.querySelectorAll("img");

  imgs.forEach((img, index) => {
    img.src = index < mana[type] ? manaImage[type] : manaBack[type];
  });
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

function updateVolUI() {
  const img = document.getElementById("vol-img");
  const count = document.getElementById("vol-count");

  count.textContent = vol;
  img.src = vol === 0 ? nonVol : volImage;
}
