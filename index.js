
let herois = [
  { nome: "Luna", xp: 3000 },
  { nome: "Banguela", xp: 970 },
  { nome: "Layla", xp: 1200 },
  { nome: "Frajola", xp: 7800 },
  { nome: "Lanna", xp: 6900 },
  { nome: "Mimi", xp: 8500 },
  { nome: "Maggie", xp: 9900 },
  { nome: "Mizuki", xp: 12000 }
];
 
function classificarHeroi(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    return "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    return "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    return "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    return "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    return "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

for (let i = 0; i < herois.length; i++) {
  let nome = herois[i].nome;
  let xp = herois[i].xp;
  let nivel = classificarHeroi(xp);

  console.log(`O Herói de nome **${ nome }** está no nível de **${ nivel }**`);
}
