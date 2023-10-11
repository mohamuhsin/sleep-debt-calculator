const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 4;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 5;
  } else if (day === "friday") {
    return 10;
  } else if (day === "saturday") {
    return 12;
  } else {
    return 8;
  }
};

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const sleepDebt = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log(
      " You have got the perfect amount of sleep of " + sleepDebt + "this week"
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got more ${sleepDebt} hrs of sleep than you need this week`
    );
  } else {
    console.log(
      `You should get some rest, you only got ${sleepDebt} hrs of sleep this week`
    );
  }
};

calculateSleepDebt();
