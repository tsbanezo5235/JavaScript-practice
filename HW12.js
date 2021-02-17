let ans1 = new Date(Date.parse('2012-02-20T03:12:00'));
alert(ans1);

let ans2 = new Date(2021, 1, 17);
function getWeekDay(date) {
  let weekday = date.getDay();
  if (weekday == 0) return 'SU';
  else if (weekday == 1) return 'MO';
  else if (weekday == 2) return 'TU';
  else if (weekday == 3) return 'WE';
  else if (weekday == 4) return 'TH';
  else if (weekday == 5) return 'FR';
  else return 'SA';
}
alert(getWeekDay(ans2));

function getLocalDay(date) {
  let weekday = date.getDay();
  if (weekday == 0) return '7';
  else if (weekday == 1) return '1';
  else if (weekday == 2) return '2';
  else if (weekday == 3) return '3';
  else if (weekday == 4) return '4';
  else if (weekday == 5) return '5';
  else return '6';
}
let ans3 = new Date(2021, 1, 14);
alert(getLocalDay(ans3));

let ans4 = new Date(2021, 1, 10);
function getDateAgo(date, days) {
  return new Date(date.setDate(+date.getDate() - days));
}
alert(getDateAgo(ans4, 3));

function getLastDayOfMonth(year, month) {
  let nextMonthFirstDay = new Date(year, month + 1, 1);
  return nextMonthFirstDay.getDate(nextMonthFirstDay.setDate(0));
}
alert(getLastDayOfMonth(2021, 1));

function getSecondsToday(){
  return ((new Date() - new Date().setHours(0, 0, 0, 0))/1000);
}
alert(getSecondsToday());

function getSecondsToTomorrow(){
  return (24*3600*1000 - (new Date() - new Date().setHours(0, 0, 0, 0)))/1000;
}
alert(getSecondsToTomorrow());

