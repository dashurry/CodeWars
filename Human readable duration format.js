function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    const time = {
        year: 31536000,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };
    const timeArr = [];
    for (let key in time) {
        if (seconds >= time[key]) {
        let num = Math.floor(seconds / time[key]);
        timeArr.push(num + ' ' + key + (num > 1 ? 's' : ''));
        seconds = seconds % time[key];
        }
    }
    return timeArr.length > 1 ? timeArr.join(', ').replace(/, ([^,]*)$/, ' and $1') : timeArr[0];
    }
// 1. if seconds is 0, return 'now'
// 2. create an object with the time values
// 3. create an empty array to store the time values
// 4. loop through the object
// 5. if seconds is greater than or equal to the time value, push the time value into the array
// 6. return the array with the time values
// 7. if the array length is greater than 1, join the array with ', ' and replace the last ', ' with ' and '
// 8. if the array length is 1, return the first value in the array
