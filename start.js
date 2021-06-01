///1
const today = new Date();
console.log(today);

///2
const jan2017 = new Date(2017, 0, 1, 1);
console.log(jan2017);


// 3; ///

const totaltime = today.getTime() - jan2017.getTime();
const msid = 1000 * 3600 * 24;
const daysInBetween = totaltime / msid;
console.log(daysInBetween.toFixed(0));

///4
const dates = [];
for (let i = 0; i < Math.round(daysInBetween); i++) {
    const num = jan2017.getTime() + i * (1000 * 60 * 60 * 24);
    const simpleDate = new Date(num).toString().slice(4, 15);
    const dateObject = { date: simpleDate }
    dates.push(dateObject)
};

console.log(dates);

///5
for (let i = 0; i < dates.length; i++) {
    const whoKnows = Math.round(Math.random());
    if (whoKnows === 0) {
        dates[i].workout = true;
    } else {
        dates[i].workout = false;
    }
};

console.log(dates);

///6
console.log(dates[0].workout);


///7
console.log(dates[dates.length - 8].workout);