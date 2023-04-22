function getHighestIndexOne(arr) {
  let highest = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1] > highest) {
      highest = arr[i][1];
    }
  }
  return highest;
}

function generateArray(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr[i] = 0;
    }
    return arr;
  }

let arrayseat =[ [3,2], [4,3], [2,3], [3,4] ];
let passengers = 1;
let highestColumn=getHighestIndexOne(arrayseat);

let column = arrayseat[0][0];
let arrayResault =[];

// now aisle seat
for(let count=0;count<highestColumn;count++)
{
  let arraySection=[];
  let c=0;
  let arrayrow=generateArray(arrayseat[0][c]);

  if(count<arrayseat[0][1])
  {
    column = arrayseat[0][0]-1;
    arrayrow[column] = passengers++;
    arraySection[c]=[...arrayrow];
  }
  for (let i = 1; i < arrayseat.length - 1; i++)
  {
    if(count<arrayseat[i][1])
    {
      column = 0;
      c++;
      let arrayrow=generateArray(arrayseat[i][0]);
      arrayrow[column] = passengers++;
      column = arrayseat[i][0] - 1;
      arrayrow[column] = passengers++;
      arraySection[c]=[...arrayrow];
    }
  }
  column = 0;
  c= arrayseat.length - 1;
  if(count<arrayseat[arrayseat.length - 1][1])
  {
    arrayrow=generateArray(arrayseat[arrayseat.length - 1][0]);
    arrayrow[column] = passengers++;
    arraySection[c]=[...arrayrow];
  }
  arrayResault.push(arraySection);

  arrayrow=[];
}

// now windows seat
for(let count=0;count<highestColumn;count++)
{
  let arraySection=[];
  let c=0;
  let arrayrow=generateArray(arrayseat[0][c]);
  if(count<arrayseat[0][1])
  {
    column = 0;
    arrayrow[column] = passengers++;
    arraySection[c]=[...arrayrow];
    arrayResault[count][c][0]=arrayrow[0];
  }
  
  column = arrayseat[0][0]-1;
  c= arrayseat.length - 1;
  if(count<arrayseat[arrayseat.length - 1][1])
  {
    arrayrow=generateArray(arrayseat[arrayseat.length - 1][0]);
    arrayrow[column] = passengers++;
    arraySection[c]=[...arrayrow];
    arrayResault[count][c][column]=arrayrow[column];
  }
  
  //arrayrow=[];
}

// now middle seat
for (let i = 0; i < arrayResault.length; i++) {
  for (let j = 0; j < arrayResault[i].length; j++) {
    if (arrayResault[i][j]) { // check if item is not empty
      for (let k = 1; k < arrayResault[i][j].length-1; k++) {
        arrayResault[i][j][k] = passengers++;
      }
    }
  }
}

console.log('arrayResault : ');
console.log(arrayResault);
