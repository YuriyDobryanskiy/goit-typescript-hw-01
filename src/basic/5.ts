enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

// console.log("%c--5.ts--", "color: green; font-size: 20px;");
//console.log(isWeekend(DayOfWeek.Monday)); 
// console.log(isWeekend(DayOfWeek.Saturday)); 
