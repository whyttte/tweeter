const getTime = function(date) {
  let currentDate = Date.now();
  let seconds = (currentDate - date) / 1000;
  var minutes = ( (currentDate - date) * 60 )/ 1000;
  var hours = ( (currentDate - date) * 3600 )/ 1000;
  if (minutes < 1) {
    return `${Math.floor(seconds)} seconds ago`;
  } else if (minutes > 1 && minutes < 60) {
    return `${Math.floor(minutes)} minutes ago`;
  } else if (minutes > 60 && hours < 24) {
    return `${Math.floor(hours)} hours ago`;
  } else if (hours > 24) {
    return `${Math.floor(hours / 24)} days ago`;
  }
}


console.log(getTime((2020, 05, 13)));