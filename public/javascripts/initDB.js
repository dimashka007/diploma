var level = require('level');
var db = level('d:/diploma/department/model/db/person', {
  create_if_missing: true,
  valueEncoding: 'json'
});

var data1 = {
  name: 'Плескач Валентина  Леонідівна',
  degree: 'Доктор',
  status: 'Професор',
  position: 'Завідувач кафедрою',
  photo: '/img/Плескач.jpg'
};
var data2 = {
  name: 'Гарко Ірина Ігорівна',
  degree: 'Без ступеню',
  status: 'Без вченого звання',
  position: 'Асистент',
  photo: '/img/Гарко.jpg'
};
var data3 = {
  name: 'Домрачев Володимир Миколайович',
  degree: 'Кандидат',
  status: 'Доцент',
  position: 'Доцент',
  photo: '/img/Домрачев.jpg'
};
var data4 = {
  name: 'Духновська Ксенія Костянтинівна',
  degree: 'Без ступеню',
  status: 'Без вченого звання',
  position: 'Асистент',
  photo: '/img/Духновська.jpg'
};
var data5 = {
  name: 'Жихарєва Юлія Ігорівна',
  degree: 'Кандидат',
  status: 'Без вченого звання',
  position: 'Асистент',
  photo: '/img/Жихарєва.jpg',
};
var data7 = {
  name: 'Міронова Вікторія Леонідівна',
  degree: 'Кандидат',
  status: 'Доцент',
  position: 'Доцент',
  photo: '/img/Міронова.jpg'
};
var data8 = {
  name: 'Пирог Микола Володимирович',
  degree: 'Без ступеню',
  status: 'Без вченого звання',
  position: 'Асистент',
  photo: '/img/Пирог.jpg'
};
var data9 = {
  name: 'Сайко Володимир Григорович',
  degree: 'Доктор',
  status: 'Професор',
  position: 'Професор',
  photo: '/img/Сайко.jpg'
};

db.put('Плескач В.Л.', data1);
db.put('Гарко І.І.', data2);
db.put('Домрачев В.М.', data3);
db.put('Духновська К.К.', data4);
db.put('Жихарєва Ю.І.', data5);
db.put('Міронова В.Л.', data7);
db.put('Пирог М.В.', data8);
db.put('Сайко В.Г.', data9);

db.createReadStream()
  .on('data', function (entry) {
    console.log(entry);
})
