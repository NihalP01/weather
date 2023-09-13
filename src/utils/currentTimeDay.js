export const formattedDayTime = (inputDayTime) => {
  const parsedDate = new Date(inputDayTime);
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dayOfWeek = parsedDate.getDay();

  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes() + 1;

  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

  return `${weekdays[dayOfWeek]}, ${formattedHours}:${String(minutes).padStart(
    2,
    '0'
  )} ${period}`;
};
