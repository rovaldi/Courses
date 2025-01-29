import { MusicBands } from "module3/lab/types";

const styles = "background-color:green; font-size:1rem; font-weight: bold;";

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
  styles,
  `/ ${theBeatles.year} / ${theBeatles.active} / ${theBeatles.gender}`
);
console.log(
  `%c${queen.name}`,
  styles,
  `/ ${queen.year} / ${queen.active} / ${queen.gender}`
);
console.log(
  `%c${acdc.name}`,
  styles,
  `/ ${acdc.year} / ${acdc.active} / ${acdc.gender}`
);
console.log(
  `%c${beethoven.name}`,
  styles,
  `/ ${beethoven.year} / ${beethoven.active} / ${beethoven.gender}`
);
console.log(
  `%c${theRollingStones.name}`,
  styles,
  `/ ${theRollingStones.year} / ${theRollingStones.active} / ${theRollingStones.gender}`
);
