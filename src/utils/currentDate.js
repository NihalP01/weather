export const formattedDate = (inputDate) => {
  const newDate = new Date(inputDate);
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, 0);
  const date = String(newDate.getDate()).padStart(2, 0);
  return `${date}-${month}-${year}`;
};
