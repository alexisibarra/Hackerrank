const getFormattedHour = (hour: number, meridian: string) => {
  if (meridian === "P" && hour !== 12) {
    return String(hour + 12);
  }

  if (meridian === "A" && hour === 12) {
    return "00";
  }

  return hour < 10 ? `0${hour}` : String(hour);
};

export default getFormattedHour;
