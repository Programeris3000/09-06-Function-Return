// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function humanToDogYears(humanYears) {
  let dogYears = humanYears * 7
  let output = `${humanYears} žmogaus metai yra ${dogYears} šuns metai.`
  return output
}

console.log(humanToDogYears(25))
console.log(humanToDogYears(10))

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





// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du argumentus: 
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function converter(days, units){
let minutes = days * 24 * 60
let toHours = days * 24
let toWeeks = days / 7
let toMonths = days / 30
let toYears = days / 365
let output = ``

if (units == 'minutes'){
  output = `${days} days - ${minutes} ${units}`
  return output
} else if(units == 'hours'){
  output = `${days} days - ${toHours} ${units}`
  return output
} else if(units == 'weeks'){
  output = `${days} days - ${toWeeks.toFixed(2)} ${units}`
  return output
} else if(units == 'months'){
  output = `${days} days - ${toMonths.toFixed(2)} ${units}`
  return output
} else if(units == 'years'){
  output = `${days} days - ${toYears.toFixed(2)} ${units}`
  return output
} 
}
console.log(converter(5, 'minutes'))
console.log(converter(6, 'hours'))
console.log(converter(7, 'weeks'))
console.log(converter(8, 'months'))
console.log(converter(9, 'years'))


// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus: 
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function doDivide(dalinys, daliklis){
  let result = dalinys % daliklis
  let output = ``
  if (result){
    output = `Skaicius ${dalinys} dalinasi iš ${daliklis} liekana yra ${result}` 
  } else {
    output = `${dalinys} dalinasi iš ${daliklis}` 
  } 
  return output
}

console.log(doDivide(10, 6))

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function isCouple(text){
  let output = ``
  if (text.length % 2 === 0){
    output = `Tekstas turi porinį raidžių skaičių` 
  } else {
    output = `Tekstas turi neporinį raidžių skaičių` 
  } 
  return output
}

console.log(isCouple('asdasdasdasdasds'))


// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio. 
// 11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.


function getSymbol(str, num) {
  if (num === 0) {
    return 'Reikia įvesti arba teigiamą, arba neigiamą skaičių'
  }
  let strLength = str.length
  let convertedNum = num < 0 ? num * -1 : num

  if (strLength < convertedNum) {
    return `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${convertedNum}.`
  }

  if (num < 0) {
    let selectedBackSymbol = str.at(num)
    return `Teksto "${str}" ${convertedNum} simbolis nuo galo yra "${selectedBackSymbol}".`
  }

  let symbolIndex = num - 1
  let selectedSymbol = str.at(symbolIndex)
  return `Teksto "${str}" ${num} simbolis yra "${selectedSymbol}".`
}

console.log(getSymbol('sveikas', 7))

