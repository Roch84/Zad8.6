var a = 1,
	b = 1;
a = prompt ('podaj liczbę a');
b = prompt ('podaj liczbę b');
value = (a * a) - (2 * a * b) - (b * b);
console.log('Wynik działania a^2 - 2*b*a - b^2 =' + value);

if (value >= 0) {
	console.log('Wynik jest dodatni');

} else {
	console.log('Wynik jest ujemny');
}

if (value ==0) {
		console.log('Wynik jest równy zero');
} else {
		console.log('Wynik jest różny od zera');
}