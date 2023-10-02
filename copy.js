// Завдання 6
/**
 * Функція `isLeapYear` перевіряє, чи є рік високосним.
 *
 * year - Рік, який треба перевірити.
 *
 * Повертає об'єкт:
 * {
 *   year: // Рік, який був перевірений.
 *   isLeap: // Чи є рік високосним.
 * }
 */
function isLeapYear(year) {
  // Перевірка, чи є вхідне значення числом якщо ні повертаємо рядок .
  let leapYear = {};
  let notLeapYear = {};

  if (typeof year === "number") {
    // Перевірка, чи є рік високосним.
    log(year % 4);
    for (let i = 0; i < 10; i++) {
      year++;
      if (year++ % 4 === 0) {
        let isLeap = true;

        // log("leapYear", year);
        leapYear = year;
      }
      //   else {
      //     let isLeap = false;
      //     // log("notLeapYear", year);
      //     notLeapYear = year[i];
      //   }
    }
    return leapYear, notLeapYear;
  }

  // Високосним вважається рік, який ділиться націло на 4
  // Повертаємо об'єкт з роком та інформацією про те, чи є він високосним.
}
console.log("Завдання: 6 ==============================");

console.log(isLeapYear(2020));
//Виведе { year: 2020, isLeap: true }
