// function func(employee) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let info     = employee[2];
// }

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

function func([name, surname, ...info]) {

    console.log(name)
    console.log(surname);
    console.log(info);
}

console.log("Задача 3")