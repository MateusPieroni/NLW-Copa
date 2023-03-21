function changeColor(nextColor){
  let previousColor = document.body.classList;
  previousColor;
    document.body.classList.add(nextColor);

}

function createButtons(color){
  return`
  <button onclick="changeColor(${color})">${color}</button>
  `
}

function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML=
  createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameroon") + createGame("portugal", "13:00", "ghana")+ createGame("brazil", "13:00", "serbia")) +
  createCard("28/11","segunda",createGame("korea", "10:00", "ghana") +createGame("brazil", "13:00", "switzerland")+createGame("portugal", "16:00", "uruguai")   )

 document.querySelector("#color-button").innerHTML =
  createButtons("yellow") +
  createButtons("blue") +
  createButtons("green")