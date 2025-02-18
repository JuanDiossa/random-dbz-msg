const messages = [
  "El poder viene en respuesta a una necesidad, no a un deseo. Tienes que crear esa necesidad",
  "Vas a tener batallas duras y habrá dolor, pero eres un verdadero guerrero, así que levántate, pelea y gana",
  "Nunca te conformes con cómo eres ahora, supera tus límites",
  "Cuando una persona tiene algo importante que proteger, es cuando puede volverse verdaderamente fuerte",
  "¡Muéstrales de qué está hecho un Saiyan!",
  "¡Nunca he visto a un enemigo tan fuerte como tú!",
  "Yo soy el Emperador. ¡El gran Freezer! Por eso tú, maldito insecto, morirás en mis manos",
  "Gohan! This commit is a lie",
  "Eres fuerte de eso no hay duda, no obstante, tienes debilidades. Debes superarlas o dudo que consigas vencer en el torneo",
  "This is not the commit message you are looking for, Veggeta!",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
  funnyCommit,
};
