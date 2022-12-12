function humanReadable(seconds) {
  // Calculate the number of hours, minutes, and seconds from the given number of seconds.
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Pad the hours, minutes, and seconds with leading zeros if necessary,
  // and return the formatted time string.
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
// using the Math.floor() function to calculate the number of hours, minutes, and seconds from the given number of seconds. 
//It then pads the hours, minutes, and seconds with leading zeros if necessary using the String.padStart() method. 
// Finally, it returns the formatted time string.
