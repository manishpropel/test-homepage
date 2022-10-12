export const formatSecondsToDHM = (seconds: number) => {
  const day = Math.floor(seconds / (3600 * 24));
  const hour = Math.floor((seconds % (3600 * 24)) / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
  const dDisplay = day > 0 ? day + (day === 1 ? "D, " : "D, ") : "";
  const hDisplay = hour > 0 ? hour + (hour === 1 ? "H, " : "H, ") : "";
  const mDisplay = minute > 0 ? minute + (minute === 1 ? "M, " : "M, ") : "";
  const outForDisplay = dDisplay + hDisplay + mDisplay;
  return outForDisplay.slice(0, -2);
};
