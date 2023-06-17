function counterBox() {
	var element = document.getElementById('counterBox')
	var value = element.innerHTML;
	++value;

	console.log(value)
	document.getElementById('counterBox').innerHTML=value;
}

const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const countElement = document.getElementById('count');

let count = 0;

decrementBtn.addEventListener('click', () => {
  count--;
  countElement.textContent = count;
});

incrementBtn.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});
