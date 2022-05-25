import getFormattedHour from "./getFormattedHour";

type TTimeConversion = (date: string) => string;

const timeConversion: TTimeConversion = (date: string) => {
  const regex = /(\d\d):(\d\d):(\d\d)([A|P])M/g;
  const match = regex.exec(date);

  const hour = Number(match[1]);
  const minutes = match[2];
  const seconds = match[3];
  const meridian = match[4];

  const formattedHour = getFormattedHour(hour, meridian);

  return `${formattedHour}:${minutes}:${seconds}`;
};

export default timeConversion;
