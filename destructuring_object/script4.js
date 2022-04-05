let options = {
	width:  400,
	height: 500,
};

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;

let {col = "red", width: w, height: h} = options;

console.log(col);
console.log(w);
console.log(h);