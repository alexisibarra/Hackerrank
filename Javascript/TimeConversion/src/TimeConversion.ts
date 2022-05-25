const getFormattedHour = (hour: number, meridian: string) => {
  if (meridian === "P" && hour !== 12) {
    return String(hour + 12);
  } else if (meridian === "A" && hour === 12) {
    return "00";
  }

  return hour < 10 ? `0${hour}` : hour;
};

function timeConversion(s: string) {
  const regex = /(\d\d):(\d\d):(\d\d)([A|P])M/g;
  const match = regex.exec(s);

  const hour = Number(match[1]);
  const minutes = match[2];
  const seconds = match[3];
  const meridian = match[4];

  const formattedHour = getFormattedHour(hour, meridian);

  return `${formattedHour}:${minutes}:${seconds}`;
}

console.log(timeConversion("12:05:45AM"));
console.log(timeConversion("11:05:45AM"));
console.log(timeConversion("12:05:45PM"));
console.log(timeConversion("07:05:45PM"));

console.log(timeConversion("06:40:03AM"));
console.log(timeConversion("04:59:59AM"));
