let mana = {
  alpha: 0,
  beta: 0,
  omega: 0,
  vol: 0,
};

const manaImage = {
  alpha: "../images/α.jpeg",
  beta: "../images/β.jpeg",
  omega: "../images/Ω.jpeg",
  volume: "../images/VOL.jpeg",
};

const manaBack = "mana_back.png";

function addMana(type) {
  if (mana[type] >= 5) {
    alert("これ以上生成できません（上限5）");
    return;
  }
  mana[type]++;
  updateManaUI(type);
}

function removeMana(type) {
  if (mana[type] <= 0) return;

  mana[type]--;
  updateManaUI(type);
}

function updateManaUI(type) {
  const img = document.getElementById(`mana-${type} || volume`);
  const count = document.getElementById(`${type}-count || volume-count`);

  count.textContent = mana[type];
  count.textContent = volume;

  if (mana[type] === 0) {
    img.src = manaBack;
  } else {
    img.src = manaImage[type];
  }

  if (volume === 0) {
    img.src = nonVol;
  } else {
    img.src = manaImage[volume];
  }
}
