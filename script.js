// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

// function humanToDogYears(humanYears) {
//   let dogYears = humanYears * 7
//   let output = `${humanYears} žmogaus metai yra ${dogYears} šuns metai.`
//   return output
// }

// console.log(humanToDogYears(25))
// console.log(humanToDogYears(10))

// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

function calculateBooks(books){
let booksCounter = 365 / books
let booksRounded = Math.floor(booksCounter)
let output = `Norint perskaityti ${books} knygų per metus, vienai knygai perskaityti turėsi ${booksRounded} dienas.`
return output
}
console.log(calculateBooks(10))
console.log(calculateBooks(15))

// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną argumentą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function transform(dayNumber){
let divideNumber = 7
let fromDaysToWeeks = dayNumber / divideNumber
let DaysToWeeksRounded = Math.floor(fromDaysToWeeks) 
let output = `${dayNumber} dienos yra ${DaysToWeeksRounded} savaitės.`
if (fromDaysToWeeks < 2){
  output = `${dayNumber} dienos yra ${DaysToWeeksRounded} savaitė.`
} 
if (fromDaysToWeeks < 1){
  output = `${dayNumber} Nesudaro nei vienos savaitės.`
}
return output
}

console.log(transform(35))
console.log(transform(7))
console.log(transform(0))

// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną argumentą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.

function converter(days){
  let yearsNumber = 365
  let answer = days / yearsNumber
  let answerRounded = answer.toFixed(2)
  output = `${days} dienos yra ${answerRounded} metai.`
 return output 
}

console.log(converter(55))

// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną argumentą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function converter1(years){

  let result = years * 365 * 24
  output = `${years} metai turi ${result} valandas.`
 return output 
}
console.log(converter1(1))

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

function converter2(months){

  let result1 = months * 30 * 24
  output = `${months} mėnesiai turi ${result1} valandas.`
 return output 
}
console.log(converter2(1))

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.


function converter3(months){

  let result2 = months * 30 * 24 *60
  output = `${months} mėnesiai turi ${result2} minutes.`
 return output 
}
console.log(converter3(1))