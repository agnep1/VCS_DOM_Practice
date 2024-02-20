const phrases = [
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
];

// document.querySelector('input').addEventListener('keydown',
function filterPhrases(e) {
  // console.log(e.target.value)
  const text = e.target.value.toLowerCase();
  const filteredPhrases = phrases
    .filter((sentence) => sentence.toLowerCase().includes(text))
    .slice(0, 5);

  const html = filteredPhrases
    .map((value) => `<li onclick="chooseSuggestion()">${value}</li>`)
    .join('');

  document.querySelector('.autocomplete').innerHTML = html;

  // document.querySelectorAll('li').forEach(el => {
  //     el.addEventListener('click',
  function chooseSuggestion(e) {
    // console.log(e.target.textContent);
    // Naujos reikšmės laukelyje priskyrimas
    document.querySelector('input').value = e.target.textContent;
    // Pasiūlymų išvalymas
    document.querySelector('.autocomplete').innerHTML = '';
  }
}
