let size = parseInt(process.argv.slice(2));

let solution = []; 
    
for (i = 0; i < size; i++ ) {
    if (i % 2 === 0) {
        solution.push(Math.floor(i / 2) + 1);
    } else {
        solution.push(size - (Math.floor(i / 2)));
    } 
}
console.log(solution);
