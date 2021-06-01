function randomFood(min, max){  
    return (Math.random() * (max-min) + min) / 10 * 10;
}

console.log(randomFood(0, 400))