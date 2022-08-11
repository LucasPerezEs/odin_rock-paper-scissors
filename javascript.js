function get_computer_choice(){
    const options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * options.length);
    
    return options[choice];
}

console.log(get_computer_choice());
console.log(get_computer_choice());
console.log(get_computer_choice());