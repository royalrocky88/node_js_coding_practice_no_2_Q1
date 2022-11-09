const addDays = require("date-fns/addDays");

const getDateAfter = (days) => {
  const newDate = addDays(new Date(2022, 08, 22), days);

  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = getDateAfter;
