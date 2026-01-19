let mana = {
  alpha: 0,
  beta: 0,
  omega: 0,
};

// 各魔力の表向き画像
const manaImage = {
  alpha: "mana_alpha.png",
  beta: "mana_beta.png",
  omega: "mana_omega.png",
};

const manaBack = "mana_back.png"; // 裏向き画像

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
  const img = document.getElementById(`mana-${type}`);
  const count = document.getElementById(`${type}-count`);

  count.textContent = mana[type];

  // 0 → 裏、1~5 → 表
  if (mana[type] === 0) {
    img.src = manaBack;
  } else {
    img.src = manaImage[type];
  }
}
