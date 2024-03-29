const userName = prompt("String tipadigi malumot kriting");
const userAge = +prompt("Number tipadigi malumot kriting");
const userBolen = prompt("Bolen tipadigi malumot kriting");

confirm(`hamma malumoni to'g'ri kiritganga ishonchingiz lomilmi ?`);

alert(`
${userName} so'zi ${typeof userName} tipiga teng
${userAge} soni ${typeof Number(userAge)} tipiga teng
${userBolen} so'zi ${typeof Boolean(userBolen)} tipga teng
`);
