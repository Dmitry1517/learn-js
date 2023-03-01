let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
let idx = Math.floor((styles.length - 1) / 2);
styles.splice(idx, 1, 'Классика');
console.log(styles);
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');
console.log(styles);
