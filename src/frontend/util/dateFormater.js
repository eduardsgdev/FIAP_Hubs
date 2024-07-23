export function brazilianDate(date) {
    const data = new Date(date);

    const addZeroLeft = value => value < 10 ? `0${value}` : value;

    const day = addZeroLeft(data.getDate());
    const month = addZeroLeft(data.getMonth() + 1);
    const year = data.getFullYear();
    const hours = addZeroLeft(data.getHours());
    const minutes = addZeroLeft(data.getMinutes());
    const seconds = addZeroLeft(data.getSeconds());

    const dateTimeFormater = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return dateTimeFormater;
    
}