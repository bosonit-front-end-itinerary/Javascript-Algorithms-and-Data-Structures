//forma 1 de sacar los días de la semana con un array
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(weekday[2]);


//forma 2 de sacar los días de la semana con un objeto
day = 8;

const weekdaysObj = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday', 
    6: 'Saturday'
};

console.log(weekdaysObj[day] || 'Day not Defined');