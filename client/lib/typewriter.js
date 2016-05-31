var hellos = [
  'Hej',
  'Hallo',
  'Hello',
  'Saluton',
  'Tere',
  'سلام',
  'Bula',
  'Terve',
  'Bonjour',
  'Salut',
  'Hallo',
  'Γεια',
  'Hallo',
  'Aloha',
  'שלום',
  'नमस्ते',
  'Sziasztok',
  'Szia',
  'Halo',
  'Dia',
  'Dia',
  'Salve',
  'Ciao',
  'こんにちは',
  'ನಮಸ್ಕಾರ',
  'ជំរាបសួរ',
  '안녕하세요',
  '안녕',
  'ສະບາຍດີ',
  'Salvete',
  'Salve',
  'Sveiki',
  'Hallau',
  'Sveiki',
  'Добар',
  'Selamat',
  'Selamat',
  'Ħelow',
  '你好',
  'Kia',
  'Mirë dita',
  'Hei',
  'ନମସ୍କାର',
  'Cześć',
  'Oi',
  'alo',
  'Здравствуйте',
  'Haló',
  'Здраво',
  '侬好',
  'ahoj',
  'Hola',
  'Grüss',
  'Hujambo',
  'Hej',
  'Hoi',
  'Grüezi',
  'Grüezi',
  'வனக்கம்',
  'నమస్కారం',
  'สวัสดีค่ะ',
  'สวัสดีครับ',
  'Merhaba',
  'Xin',
  'Womenjeka',
  'שלום',
  'مرحبا',
  'ታዲያስ',
];

var numWords = hellos.length;
var typeSpeed = 100; changeSpeed = 1500;

var randomIndex = function () {
  return Math.floor(Math.random() * numWords);
};

var typewriter = function(word, text, i) {
  $('.typewriter').text(text);
  if (text === word) return;
  setTimeout(function() { typewriter(word, text + word[i], i + 1) }, typeSpeed);
}

var changeHello = function() {
  var word = hellos[randomIndex()];
  typewriter(word, '', 0);
  setTimeout(changeHello, word.length * typeSpeed + changeSpeed);
}

changeHello();