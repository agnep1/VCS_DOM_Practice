// const table = document.querySelectorAll('tr td:nth-child(2)');
// let data = [];
// for (el of table) {
//   data.push(el.innerText);
// }

// const data = Array.from(document.querySelectorAll('tr td:nth-child(2)')).map(td => td.innerText);

// console.log(data);

const data = [
  'What is my IP',
  'How many weeks in a year',
  'How many ounces in a cup',
  'How to screenshot on Mac',
  'When is the Super Bowl',
  'When is Easter',
  "When is Father's Day",
  'What is Juneteenth',
  'How do I register to vote',
  'When is Thanksgiving',
  'How many days until Christmas',
  'How many ounces in a pound',
  'How to tie a tie',
  'How many liters in a gallon',
  'How to screenshot on windows',
  'How many cups in a quart',
  'What holiday is today',
  'How many oz in a gallon',
  'How many quarts in a gallon',
  'What is RSV',
  'When is the next full moon',
  "When is Mother's Day 2023",
  'What is monkeypox',
  'How long does covid last',
  'How to delete apps',
  'How to delete Instagram account',
  'How many teaspoons in a tablespoon',
  'When is Labor Day',
  'When is Memorial Day',
  'How many oz in a cup',
  'How to lose weight fast',
  'Where to vote',
  'How many people are in the world',
  "How to solve a Rubik's cube",
  'How much house can I afford',
  'How many feet in a mile',
  'How long to boil eggs',
  'What time is it in Australia',
  'What is a recession',
  'Why were chainsaws invented',
  'What is pansexual',
  "What does Let's go Brandon mean",
  'When are taxes due 2023',
  'How many steps in a mile',
  'When does fall start',
  'When does summer start',
  'How to lower blood pressure',
  'How to write a cover letter',
  'How to take a screenshot on Mac',
  'How to make French toast',
  'What time does Walmart close',
  'How old is Hasbulla',
  'Why are flags at half mast today',
  'What is a woman',
  'How to take a screenshot',
  'How to write a check',
  'How many square feet in an acre',
  'When is the next Powerball drawing',
  "What time does McDonald's stop serving breakfast",
  'How many grams in a pound',
  'What does 444 mean',
  'How many kids does Nick Cannon have',
  'How long are you contagious with Covid',
  'How to get rid of fruit flies',
  'How many days in a year',
  'What time is it in Arizona',
  'How to delete Facebook account',
  'How many ounces in a liter',
  'How to take a screenshot on Windows',
  'How did Jeffrey Dahmer die',
  'What is a verb',
  'Why is the sky blue',
  'How to get rid of gnats',
  'How old is Jenna Ortega',
  'When is Christmas',
  'How old is Dolly Parton',
  'How many seconds in a day',
  'When is Mardi Gras 2023',
  'Where is the Super Bowl this year',
  'How many continents are there',
  'What time is it in Germany',
  'What channel is the Super Bowl on',
  'How did Elvis die',
  'How many tablespoons in 1/4 cup',
  'What time is it in India',
  'How to get rid of hiccups',
  'What does 222 mean',
  'How old is Tom Cruise',
  'How long does it take to get a passport',
  'What is MS',
  'How to screenshot on Chromebook',
  'What does SOS mean',
  'What does woke mean',
  'How to say hi in Spanish',
  'What is gaslighting',
  'What does monkeypox look like',
  'How many countries are there',
  'How old is Queen Elizabeth',
  'How many genders are there',
  'What does rizz mean',
];

const input = document.querySelector('input');
const proposalList = document.querySelector('.proposals');
const searchIcon = document.querySelector('.search-box i');
input.addEventListener('input', fileterSugesstions);
input.addEventListener('focus', hidePlaceholder);
input.addEventListener('blur', showPlaceholder);
proposalList.addEventListener('click', choseProposal);
searchIcon?.addEventListener('click', () => {
  input.focus();
});

let proposals = [];
function fileterSugesstions(e) {
  e.preventDefault();
  if (e.target.value === '') {
    return (proposalList.innerHTML = '');
  }
  proposalList.classList.remove('hidden');
  const entered = e.target.value;
  proposals = data.filter((el) =>
    el.toLowerCase().includes(entered.toLowerCase())
  );
  displayProposals();
}

function displayProposals() {
  let markup = '';
  for (let i = 0; proposals.length < 5 ? i < proposals.length : i < 5; i++) {
    markup += `<p>${proposals[i]}</p>`;
  }
  proposalList.innerHTML = !markup ? '' : markup;
}

function choseProposal(e) {
  e.preventDefault();
  const choice = e.target.textContent;
  input.value = choice;
  proposalList.classList.add('hidden');
}

function hidePlaceholder() {
  input.removeAttribute('placeholder');
}
function showPlaceholder() {
  input.setAttribute('placeholder', 'what are you looking for?');
}
