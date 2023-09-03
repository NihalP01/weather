// Input date string

export const formattedDayTime = (inputDayTime) => {
  // Parse the input date string into a JavaScript Date object
  const parsedDate = new Date(inputDayTime);

  // Define an array of weekday names
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = parsedDate.getDay();

  // Get the hour and minute from the parsed date
  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes() + 1;

  // Convert hours to 12-hour format and determine AM/PM
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

  // Create the final formatted date string
  return `${weekdays[dayOfWeek]}, ${formattedHours}:${String(minutes).padStart(
    2,
    '0'
  )} ${period}`;

  // Output the result
};
