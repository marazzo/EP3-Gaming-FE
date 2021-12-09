// const deadHero = [
//   '../../assets/hero-dying/dead1',
//   '../../assets/hero-dying/dead2',
//   '../../assets/hero-dying/dead3',
//   '../../assets/hero-dying/dead4',
//   '../../assets/hero-dying/dead5',
//   '../../assets/hero-dying/dead6',
//   '../../assets/hero-dying/dead7',
//   '../../assets/hero-dying/dead8',
//   '../../assets/hero-dying/dead9',
//   '../../assets/hero-dying/dead10',
// ]

const attackHero = [
  '../../assets/hero-attacking/attack1',
  '../../assets/hero-attacking/attack2',
  '../../assets/hero-attacking/attack3',
  '../../assets/hero-attacking/attack4',
  '../../assets/hero-attacking/attack5',
  '../../assets/hero-attacking/attack6',
  '../../assets/hero-attacking/attack7',
  '../../assets/hero-attacking/attack8',
  '../../assets/hero-attacking/attack9',
  '../../assets/hero-attacking/attack10',
]


// function dead(){
//   let count = 0
//   setInterval( function dead(){
//       if (count !== deadHero.length){
//         let hero = deadHero[count];
//         imgDisplay.src = hero
//         count ++
//       }
//     }, 100);

export function attack(){
  let count = 0
  setInterval(
    function attack(){
      if (count !== attackHero.length){
        let hero = attackHero[count];
        count ++
        return hero
      }
    }, 100);
  }

