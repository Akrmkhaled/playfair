let keyy = localStorage.getItem("keyys");
let plaintext = localStorage.getItem("plaintext");

function createMatrix(key) {
  let chars = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
  let matrix = [];
  let usedChars = [];
  key = key.toUpperCase().replace(/[^A-Z]/g, "");
  for (let i = 0; i < key.length; i++) {
    let char = key.charAt(i);
    if (!usedChars.includes(char) && char !== "J") {
      usedChars.push(char);
    }
  }

  for (let i = 0; i < chars.length; i++) {
    let char = chars.charAt(i);
    if (!usedChars.includes(char)) {
      usedChars.push(char);
    }
  }

  // إنشاء مصفوفة 5 * 5
  for (let i = 0; i < 5; i++) {
    matrix[i] = [];
    for (let j = 0; j < 5; j++) {
      let char = usedChars[i * 5 + j];
      matrix[i][j] = char;
    }
  }

  return matrix;
}

let arr = createMatrix(keyy);

function createTable(myArray) {

  const table = document.createElement("table");
  table.style.border = "1px solid black";
  table.style.textAlign = "center";

  for (let i = 0; i < 5; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 5; j++) {
      const cell = document.createElement("td");
      cell.id = myArray[i][j];
      cell.style.border = "1px solid black";
      cell.textContent = myArray[i][j]; 
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  document.body.appendChild(table);
}
createTable(arr);

function playfairEncrypt(message, matrix) {
  message = message.toUpperCase().replace(/[^A-Z]/g, "");
  let messagePairs = [];

  for (let i = 0; i < message.length; i += 2) {
    if (i === message.length - 1) {
      messagePairs.push([message[i], "X"]);
    } else if (message[i] === message[i + 1]) {
      messagePairs.push([message[i], "X"]);
      i--;
    } else {
      messagePairs.push([message[i], message[i + 1]]);
    }
  }
  console.log(messagePairs);
  let pairsIndexes = [];
  let indexes = [];
  let index = 0;
  let zz = 0
  for (let pair of messagePairs) {
    for (let char of pair) {
      for (zz = 0; zz < 5; zz++) {
        index = matrix[zz].indexOf(char);
        if (index === -1) {
        } else {
          break;
        }
      }

      let col = index % 5;
      indexes.push([zz, col]);
    }
  }
  pairsIndexes.push(indexes);
  console.log(pairsIndexes);
  let encryptedPairs = [];
  let chars1 ;
  let chars2 ;
  for (let indexess of pairsIndexes) 
    for (let i = 0; i < indexess.length; i=i+2) {
      let [row1, col1] = indexess[i];
      let [row2, col2] = indexess[i+1];
      if (row1 === row2) {
        chars1 =  matrix[row1][(col1 + 1)% 5];
        chars2 =  matrix[row1][(col2 + 1)% 5];  
      } else if (col1 === col2) {
        chars1 =  matrix[(row1 + 1)% 5][col2];
        chars2 =  matrix[(row2 + 1)% 5][col2];
      } else {
        chars1 =  matrix[row1][col2];
        chars2 =  matrix[row2][col1];
      }
      encryptedPairs.push(chars1 + chars2);
    
     
      
    }
  let encryptedMessage = encryptedPairs.join('');

  return encryptedMessage;
}
console.log(arr);
function ddddd() {
  document.getElementById('decrption').value = playfairEncrypt(plaintext, arr);
}
