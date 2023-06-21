let keyy = localStorage.getItem("keyys");
let plaintext = localStorage.getItem("plaintext");
plaintext = plaintext.toUpperCase();
let messagePairs = [];
function waitFor(timee) {
  return new Promise((res) =>setTimeout(res, timee));
}

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

      let row = Math.floor(index / 5);
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
      let encryptedPair;
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
let decrption = playfairEncrypt(plaintext, arr);
console.log(arr);
async function ddddd() {
  textpaln();
  
}
function td_to_blue(leter) {
  document.getElementById(leter).style.animationName = "td_blue";
  document.getElementById(leter).style.animationDuration = "0.5s";
  document.getElementById(leter).style.animationIterationCount = "1";
  document.getElementById(leter).style.animationFillMode = "forwards";

}
function td_to_red(leter) {
  document.getElementById(leter).style.animationName = "td_red";
  document.getElementById(leter).style.animationDuration = "0.5s";
  document.getElementById(leter).style.animationIterationCount = "1";
  document.getElementById(leter).style.animationFillMode = "forwards";

}
 function td_to_back(leter) {
  document.getElementById(leter).style.animationName = "td_back";
  document.getElementById(leter).style.animationDuration = "0.5s";
  document.getElementById(leter).style.animationIterationCount = "1";
  document.getElementById(leter).style.animationFillMode = "forwards";
}
async function textpaln() {
  let ccc = 0;
  for (let i = 0; i < messagePairs.length; i++) {
  
  const element = messagePairs[i][0];
  const element2 = messagePairs[i][1];
  document.getElementById('textss').innerHTML += "<u id='" + i + '0' + "' style='text-decoration-line: none'>" + element +"</u>";
  document.getElementById('textss').innerHTML += "<u id='" + i + '1' + "' style='text-decoration-line: none'>" + element2 +"</u>";
  
}
console.log(decrption);
  for (let i = 0; i < messagePairs.length; i++) {
    let first = document.getElementById(i + '' + '0').innerHTML;
    let scond = document.getElementById(i + '' + '1').innerHTML;
    const roww1 = arr.findIndex(row => row.includes(first));
    const coll1 = arr[roww1].indexOf(first);
    const roww2 = arr.findIndex(row => row.includes(scond));
    const coll2 = arr[roww2].indexOf(scond);
      const element = messagePairs[i][0];
      const element2 = messagePairs[i][1];
    document.getElementById(i + '' + '0').style.textDecoration = 'underline';
    document.getElementById(i + '' + '1').style.textDecoration = 'underline';

    td_to_blue(first);
    td_to_blue(scond);  
    if(roww1 == roww2){
      document.getElementById('a').style.color = '#e88686';
    }else if(coll1 == coll2){
      document.getElementById('b').style.color = '#e88686';
    }else{
      document.getElementById('c').style.color = '#e88686';
    }
    document.getElementById('letr1').innerHTML = element + " = ";
    document.getElementById('letr2').innerHTML = element2 + " = ";
    await waitFor(3000);
    document.getElementById('letr1').innerHTML += decrption[ccc];
    document.getElementById('letr2').innerHTML += decrption[ccc+1];
     document.getElementById('decrption').innerHTML += decrption[ccc];
      document.getElementById('decrption').innerHTML += decrption[ccc+1];

    td_to_red(decrption[ccc]);
    td_to_red(decrption[ccc+1]);
    await waitFor(3000);
    document.getElementById('letr1').innerHTML = '';
    document.getElementById('letr2').innerHTML = '';
    document.getElementById(i + '' + '1').style.textDecoration = 'none';
    document.getElementById(i + '' + '0').style.textDecoration = 'none';
    td_to_back(document.getElementById(i + '' + '1').innerHTML);
    td_to_back(decrption[ccc]);
    td_to_back(document.getElementById(i + '' + '0').innerHTML);
    td_to_back(decrption[ccc+1]);
    document.getElementById('a').style.color = '#000000';
    document.getElementById('b').style.color = '#000000';
    document.getElementById('c').style.color = '#000000';
    
    
    
    ccc = ccc + 2;
  

  }
  document.getElementById('decrption').value = decrption;
  
}

