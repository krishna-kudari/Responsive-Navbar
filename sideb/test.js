let emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ console.log(emojis.slice(1, 4));
/* 3 */ let emojiss = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;
// A: 1
// B: 1 and 2
// C: 3 and 4
// D: 3
console.log([...emojis]);
emojis.length=4;
console.log([...emojiss]);
console.log(typeof typeof "");