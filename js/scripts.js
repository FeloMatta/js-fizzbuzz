for (let i = 1; i <= 100; i++) {
    // Controllo se il numero è divisibile sia per 3 che per 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    }
    // Altrimenti, controllo se è divisibile solo per 3
    else if (i % 3 === 0) {
      console.log('Fizz');
    }
    // Altrimenti, controllo se è divisibile solo per 5
    else if (i % 5 === 0) {
      console.log('Buzz');
    }
    // Se nessuna delle condizioni sopra è vera, stampo il numero
    else {
      console.log(i);
    }
  }
  const ul = document.getElementById('results');

    for (let i = 1; i <= 100; i++) {
    const li = document.createElement('li');
    if (i % 3 === 0 && i % 5 === 0) {
        li.textContent = 'FizzBuzz';
        li.style.color = 'red';
    } else if (i % 3 === 0) {
        li.textContent = 'Fizz';
        li.style.color = 'green';
    } else if (i % 5 === 0) {
        li.textContent = 'Buzz';
        li.style.color = 'blue';
    } else {
        li.textContent = i;
    }
    ul.appendChild(li);
    }
