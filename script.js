'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // SAME AS .textContent = 0

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};

calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`; // Math.abs will remove the negative sign

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 0.7) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};
calcDisplaySummary(account1.movements);

// MAPS
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

// FILTER

const deposits = account1.movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

// const deposits = account1.movements.filter(mov => mov > 0);
// console.log(account1.movements);
// console.log(deposits);

const withdrawals = account1.movements.filter(mov => mov < 0);

console.log(withdrawals);

// REDUCE

// ACCUMULATOR -> SNOWBALL
const balance = account1.movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
// 0 SPECIFIES WHERE THE ACCUMULATOR STARTS

let balance2 = 0;
account1.movements.forEach(function (mov) {
  balance2 += mov;
});
console.log(balance2);

// Maximum value
const max = account1.movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov), // acc = accumulator & mov = movement
  account1.movements[0]
);
console.log(max);

//

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));

console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

console.log(arr.slice());
console.log([...arr]); // SPREAD OPERATOR DOES THE SAME AS ABOVE

// SPLICE

console.log(arr.splice(2)); // REMOVES 2 ELEMENTS FROM THE ORIGINAL ARRAY
console.log(arr.splice(-1)); // -1 is always the last element
console.log(arr);

// REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // ORIGINAL IS MUTATED - WILL NOW BE AT REVERSED STATE

// CONCAT - MERGES TWO ARRAYS
const letters = arr.concat(arr2);

console.log(letters);
console.log([...arr, ...arr2]); // SAME AS ABOVE

// JOIN

console.log(letters.join(' - '));

// AT

const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0)); // SAME AS ABOVE


// GETTING THE LAST ELEMENT

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)); // SHOWS AS AN ARRAY - ADD A [0] AT THE END TO MAKE A NUMBER
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1)); // NEW EASIER WAY TO GET LAST ELEMENT

console.log('jonas'.at(2));
*/

/*
// LOOPING ARRAYS WITH EACH OTHER

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
 }

console.log('-----forEach-----');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// CAN NOT BREAK OUT OF A FOR EACH LOOP

*/

// Maps

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`); // KEY DOESN'T EXIST IN SET
// });
