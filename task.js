let str =
  "C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup";
function findUniqueLetter(str) {
  let newWord = "";

  str.split(" ").forEach((word) => {
    //розбиваєм рядок на масив окремих слів і за допомогою методу forEach проходимось по кожному слові
    for (let i = 0; i < word.length; i++) {
      //за допомогою циклу for проходимось по кожному символу слова
      if (
        word.indexOf(word.charAt[i], word.indexOf(word.charAt(i) + 1)) == -1
      ) {
        //якщо індекс символу не знаходить наступне входження даного символу
        newWord += word[i]; // додаємо цей символ до змінної newWord
        break; //і виходимо з циклу
      }
    }
  });

  let uniqueLetter = "";

  for (let i of newWord) {
    // за допомогою циклу for проходимось по кожному символу нового слова
    if (newWord.split(i).length - 1 === 1) {
      //якщо кількість входжень поточного символу і в рядок newWord дорівнює 1
      uniqueLetter += i; //додаємо цей символ в зміннну uniqueLetter
      break; //і виходимо з циклу
    }
  }
  console.log(uniqueLetter); //вивожу в консоль для зручності перевірки
  return uniqueLetter;
}
findUniqueLetter(str);
