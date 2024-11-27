const time = prompt("Укажите время суток:");

if (typeof time !== 'string' || time == ''){
    alert("Введите верное значение!");
}
if(time == "утро"){
    console.log("Как насчет кофе?");
}
if(time ==  "день"){
    console.log("Как насчет чая?");
}
if(time ==  "вечер"){
    console.log("Как насчет горячего шоколада?");
}
//2task
const userName = prompt("Укажите ваше имя: ");
const userAge = prompt("Укажите ваш возраст: ");
const userSubject = prompt("Укажите ваш предмет:");
const userGrade = prompt("Укажите вашу оценку:");
const student = {
    name: userName,
    age: Number(userAge),
    subject: userSubject,
    grade: userGrade
};
student.age += 5;
console.log(student.age);

//3task
const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];
console.log(movies[1].director);
console.log(movies[3].genre);

//4task
const pokupki = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
pokupki.unshift("груша");
pokupki.pop();
pokupki.splice(2,2,"жвачка","леденец");
console.log(pokupki);