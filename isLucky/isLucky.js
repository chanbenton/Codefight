let n = parseInt(process.argv.slice(2));

if (!Number.isInteger(n)) {
    console.log("Not a number.");
} else {
    let number_length = n.toString().length;

    // Converts input 'n' to a string to be able to verify by char_index
    let number_array = n.toString().split("");
    
    let sum_a = 0;
    let sum_b = 0;
    
    // Adds first half of digits to sum_a, 
    // also adds second half to sum_b 
    for (i = 0; i < number_length; i++) {
        if (i < (number_length / 2)) {
           sum_a += parseInt(number_array[i],10);
        } else {
           sum_b += parseInt(number_array[i],10);
        }
    }

    // If the number has odd-numbered digits, 
    // remove the middle number from the totals
    if (number_length % 2 === 1) {
        let middle_number = Math.floor(number_length / 2);
        sum_a -= parseInt(number_array[middle_number]);
    } 
    
    console.log(sum_a === sum_b);
}