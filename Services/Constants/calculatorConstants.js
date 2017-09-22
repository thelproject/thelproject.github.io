var app = angular.module('designApp');

app.constant('calculatorConstant', {
    'packages_items': [
        { id: 1, name: 'Обмерный план', price: 2, selected: false },
        { id: 2, name: 'Планировочное решение (3 варианта)', price: 2.2, selected: false },
        { id: 3, name: 'План демонтируемых конструкций', price: 0.2, selected: false },
        { id: 4, name: 'План монтируемых конструкций', price: 0.2, selected: false },
        { id: 5, name: 'План-схема дверных проемов', price: 0.2, selected: false },
        { id: 6, name: 'План напольных покрытий', price: 0.5, selected: false },
        { id: 7, name: 'Спецификация напольных покрытий', price: 0.2, selected: false },
        { id: 8, name: 'Экспликация полов', price: 0.7, selected: false },
        { id: 9, name: 'План-схема отопительных приборов и теплых полов', price: 0.2, selected: false },
        { id: 10, name: 'План размещения сантехнического оборудования', price: 0.5, selected: false },
        { id: 11, name: 'Спецификация приборов и оборудования', price: 0.2, selected: false },
        { id: 12, name: 'Раскладка плитки по стенам', price: 0.4, selected: false },
        { id: 13, name: 'План уровней потолков', price: 0.6, selected: false },
        { id: 14, name: 'План освещения', price: 0.8, selected: false },
        { id: 15, name: 'Спецификация светильников', price: 0.5, selected: false },
        { id: 16, name: 'План розеток и выключателей', price: 0.7, selected: false },
        { id: 17, name: 'Спецификация розеток и выключателей', price: 0.2, selected: false },
        { id: 18, name: 'Развертки по стенам', price: 0.7, selected: false },
        { id: 19, name: 'Ведомость отделочных материалов', price: 2, selected: false },
        { id: 20, name: 'Дополнительные чертежи', price: 2, selected: false },
        { id: 21, name: '3D визуализация помещений', price: 7, selected: false },
        { id: 22, name: 'Подбор материалов', price: 3, selected: false },
        { id: 23, name: 'Авторский надзор ', price: 2, selected: false}
    ]
});