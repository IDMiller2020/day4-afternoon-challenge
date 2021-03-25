let health = 100

let players = {
  player1: {
    id: '1',
    name: "Logan",
    health: 100
  },
  player2: {
    id: '2',
    name: "Scott",
    health: 100
  }
}

// Action 1
function action1(player) {
  console.log(player)
  players[player].health--;
  update(player);
}

// Action 2
function action2(player) {
  players[player].health -= 5;
  update(player);
}

// Action 3
function action3(player){
  players[player].health -= 10;
  update(player);
}

// Update
function update(player) {
  console.log(player)
  console.log(players[player].id)
  if (players[player].id === '1'){
    let currentHealth = document.getElementById('health1');
    currentHealth.innerText = `${players[player].health}`;
  } else {
    let currentHealth = document.getElementById('health2');
    currentHealth.innerText = `${players[player].health}`;
  }
}