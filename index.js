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
function checkSeat(passenger)
{
  if(passenger>totalPassengers)
    throw new Error('no more passengers');
  return passenger;
}

let arrayseat =[ [3,2], [4,3], [2,3], [3,4] ];
let totalPassengers=30;

let passengers = 1;
let highestColumn=getHighestIndexOne(arrayseat);

let column = arrayseat[0][0];
let row=0;
let arrayResault =[];

let arraySection=[];
let arrayrow=[];

try
{

  
  // now aisle seat
  for(let count=0;count<highestColumn;count++)
  {
    arraySection=[];
    row=0;
    arrayrow=generateArray(arrayseat[0][row]);
    
    if(count<arrayseat[0][1])
    {
      column = arrayseat[0][0]-1;
      arrayrow[column] = checkSeat(passengers++);
      arraySection[row]=[...arrayrow];
    }
    for (let i = 1; i < arrayseat.length - 1; i++)
    {
      if(count<arrayseat[i][1])
      {
        column = 0;
        row++;
        arrayrow=generateArray(arrayseat[i][0]);
        arrayrow[column] = checkSeat(passengers++);
        column = arrayseat[i][0] - 1;
        arrayrow[column] = checkSeat(passengers++);
        arraySection[row]=[...arrayrow];
      }
    }
    column = 0;
  row= arrayseat.length - 1;
  if(count<arrayseat[arrayseat.length - 1][1])
  {
    arrayrow=generateArray(arrayseat[arrayseat.length - 1][0]);
    arrayrow[column] = passengers++;
    arraySection[row]=[...arrayrow];
  }
  arrayResault.push(arraySection);
  
  arrayrow=[];
}

// now windows seat
for(let count=0;count<highestColumn;count++)
{
  arraySection=[];
  arrayrow=[]
  if(count<arrayseat[0][1])
  {
    row=0;
    arrayrow=generateArray(arrayseat[0][row]);
    column = 0;
    arrayrow[column] = passengers++;
    arraySection[row]=[...arrayrow];
    arrayResault[count][row][0]=arrayrow[0];
  }
  
  if(count<arrayseat[arrayseat.length - 1][1])
  {
    column = arrayseat[0][0]-1;
    row= arrayseat.length - 1;
    arrayrow=generateArray(arrayseat[arrayseat.length - 1][0]);
    arrayrow[column] = passengers++;
    arraySection[row]=[...arrayrow];
    arrayResault[count][row][column]=arrayrow[column];
  }
}

// now middle seat
for (let i = 0; i < arrayResault.length; i++) {
  for (let j = 0; j < arrayResault[i].length; j++) {
    if (arrayResault[i][j]) { // check if item is not empty
      for (let k = 1; k < arrayResault[i][j].length-1; k++) {
        arrayResault[i][j][k] = checkSeat(passengers++);
      }
    }
  }
}

// if there is no more seat
if(totalPassengers>passengers)
console.log('there is '+(totalPassengers-passengers+1)+' passengers do not have seats');
}
catch(err)
{
  console.log(err.message);
}
console.log('arrayResault : ');
console.log(arrayResault);
