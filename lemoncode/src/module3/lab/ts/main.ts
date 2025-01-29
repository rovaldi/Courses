import { MusicBands } from "module3/lab/types";

const theBeatles: MusicBands = {
  name: "The Beatles",
  year: 1960,
  active: true,
  gender: "🎵 Pop Rock",
};

const queen: MusicBands = {
  name: "Queen",
  year: 1970,
  active: false,
  gender: "🎸 Rock",
};

const acdc: MusicBands = {
  name: "AC DC",
  year: 1973,
  active: true,
  gender: "🤘 Hard Rock",
};

const beethoven: MusicBands = {
  name: "Ludwig van Beethoven",
  year: 1770,
  active: false,
  gender: "🎼 Classic",
};

const theRollingStones: MusicBands = {
  name: "The Rolling Stones",
  year: 1962,
  active: true,
  gender: "🎸 Rock",
};

console.log(
  `%c${theBeatles.name}`,
  "background-color:green; font-size:1rem; font-weight: bold;",
  `/ ${theBeatles.year} / ${theBeatles.active} / ${theBeatles.gender}`
);
console.log(
  `%c${queen.name}`,
  "background-color:green; font-size:1rem; font-weight: bold;",
  `/ ${queen.year} / ${queen.active} / ${queen.gender}`
);
console.log(
  `%c${acdc.name}`,
  "background-color:green; font-size:1rem; font-weight: bold;",
  `/ ${acdc.year} / ${acdc.active} / ${acdc.gender}`
);
console.log(
  `%c${beethoven.name}`,
  "background-color:green; font-size:1rem; font-weight: bold;",
  `/ ${beethoven.year} / ${beethoven.active} / ${beethoven.gender}`
);
console.log(
  `%c${theRollingStones.name}`,
  "background-color:green; font-size:1rem; font-weight: bold;",
  `/ ${theRollingStones.year} / ${theRollingStones.active} / ${theRollingStones.gender}`
);
