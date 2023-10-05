var counter = document.querySelector("#counter");
var followers = document.querySelector("#followers");

let count = 1;

setInterval( () => {
    if (count < 1000)
    {
        count++;
    counter.innerText = count;
    }
},1)


setTimeout( () => {
    followers.innerText = "🐺Sevanth Cherry Got 1000 Followers in Instagram!"
} ,5000)