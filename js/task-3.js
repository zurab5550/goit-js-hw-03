const findBestEmployee = function(employees){

    let name;
    let totalScores = 0;
    let array = Object.entries(employees);

    for( let i =0; i <array.length; i+=1){
        

        if(array[i][1]> totalScores){
            name = array[i][0];
            totalScores = array[i][1];
            
        }
    }
    return `${name} - ${totalScores}`
}


console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux