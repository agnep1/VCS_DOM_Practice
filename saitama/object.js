const info = {
  image: 'nuotrauka.svg',
  name: 'Saitama',
  age: 25,
  weight: 70,
  height: 175,
  skills:
    'Immeasurable Physical Prowess, Supernatural Reflexes and Senses, Invulnerability, Indomitable Will, Enhanced Fighting Skill'
}

const personName = document.getElementById('name')
const personAge = document.getElementById('age')
const perosnWeight = document.getElementById('weight')
const personHeight = document.getElementById('height')
const personalSkills = document.querySelector('.personal-skills')

personName.textContent = info.name
personAge.textContent = info.age
perosnWeight.textContent = info.weight
personHeight.textContent = info.height
personalSkills.textContent = info.skills
