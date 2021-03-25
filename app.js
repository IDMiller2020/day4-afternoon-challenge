let players = {
  player1: {
    id: "1",
    name: 'Spiderman',
    health: 100,
  },
  player2: {
    id: "2",
    name: 'Venom',
    health: 100,
  },
};

// go back to here

// Action 1
function action1(player) {
  toggleRed(player);
  players[player].health--;
  update(player);
}

// Action 2
function action2(player) {
  toggleRed(player);
  players[player].health -= 5;
  update(player);
}

// Action 3
function action3(player){
  toggleRed(player);
  players[player].health -= 10;
  update(player);
}

// Update
function update(player) {
  if (players[player].id === '1'){
    let currentHealth = document.getElementById('health1');

    if(players[player].health <= 0) {
      currentHealth.innerText = `DEAD`;
      disableButtons();
    } else {
      currentHealth.innerText = `${players[player].health}`;
    }
  }

  if (players[player].id === "2") {
    let currentHealth = document.getElementById("health2");
    if (players[player].health <= 0) {
      currentHealth.innerText = `DEAD`;
      disableButtons();
    } else {
      currentHealth.innerText = `${players[player].health}`;
    }
  }
}

// RESET
function reset() {
  players['player1'].health = 100;
  players['player2'].health = 100;
  update('player1');
  update('player2');
  disableButtons();
}

// TOGGLE CLASS
function toggleRed(playerSelected) {
  if(playerSelected == 'player2') {
    let img = document.getElementById("img-player-2");
    setTimeout(() => {
      img.classList.add('red-shadow');
    }, 50);

    setTimeout(() => {
      img.classList.remove('red-shadow');
    }, 300);
  }  

  if(playerSelected == 'player1') { 
    console.log('hi')
    let img = document.getElementById('img-player-1');
    setTimeout(() => {
      img.classList.add("red-shadow");
    }, 50);
    setTimeout(() => {
      img.classList.remove("red-shadow");
    }, 300);
  }
}


function disableButtons() {
 let overlay = document.getElementById('overlay');
 overlay.classList.toggle('overlay');
}
