export function timestampConverter(hoursToConverter) {
    let hours = hoursToConverter;
    let minutes = hours * 60;
    let milliseconds = ( 60 * 1000);
    let timestamp = minutes * milliseconds;

    return timestamp;
}

export function convertToAmericanFormat(timestamp) {
  let date = new Date(timestamp);
  
  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();
  let hour = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');
  
  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
}