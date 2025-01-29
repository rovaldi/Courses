var styles = "background-color:green; font-size:1rem; font-weight: bold;";
var theBeatles = {
    name: "The Beatles",
    year: 1960,
    active: true,
    gender: "🎵 Pop Rock",
};
var queen = {
    name: "Queen",
    year: 1970,
    active: false,
    gender: "🎸 Rock",
};
var acdc = {
    name: "AC DC",
    year: 1973,
    active: true,
    gender: "🤘 Hard Rock",
};
var beethoven = {
    name: "Ludwig van Beethoven",
    year: 1770,
    active: false,
    gender: "🎼 Classic",
};
var theRollingStones = {
    name: "The Rolling Stones",
    year: 1962,
    active: true,
    gender: "🎸 Rock",
};
console.log("%c".concat(theBeatles.name), styles, "/ ".concat(theBeatles.year, " / ").concat(theBeatles.active, " / ").concat(theBeatles.gender));
console.log("%c".concat(queen.name), styles, "/ ".concat(queen.year, " / ").concat(queen.active, " / ").concat(queen.gender));
console.log("%c".concat(acdc.name), styles, "/ ".concat(acdc.year, " / ").concat(acdc.active, " / ").concat(acdc.gender));
console.log("%c".concat(beethoven.name), styles, "/ ".concat(beethoven.year, " / ").concat(beethoven.active, " / ").concat(beethoven.gender));
console.log("%c".concat(theRollingStones.name), styles, "/ ".concat(theRollingStones.year, " / ").concat(theRollingStones.active, " / ").concat(theRollingStones.gender));
export {};
