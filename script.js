const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];
const paragrafElement = document.querySelector("#tekst");
let paragrafTekst = paragrafElement.textContent;
//når man klikker på knappen går den ned i funktionen replaceWords
document.querySelector("#replaceBut").addEventListener("click", replaceWords);

function replaceWords() {
  //Her tager den fat i hvert element i arrayet med forEach
  curseWords.forEach((element) => {
    console.log(element);
    //Her anvender man replace, hvor den udskifter de bad med good
    paragrafTekst = paragrafTekst.replace(element.bad, element.good);
  });
  paragrafElement.textContent = paragrafTekst;
  //Her tjekker den om der er bad words tilbage, og hvis ikke viser den dialog boksen
  const noBadWordsLeft = curseWords.every((element) => !paragrafTekst.includes(element.bad));
  if (noBadWordsLeft) {
    document.querySelector("#dialogBoks").showModal();
  }
}
