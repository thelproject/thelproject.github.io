var app = angular.module('designApp');

app.factory('packagesFactory', function () {

    function basic(items) {
        items.forEach(function (item) {
            if(item.id === 5 || item.id === 7 || item.id === 11 || item.id === 15 || item.id === 17 || item.id === 18 || item.id === 20 || item.id === 21 || item.id === 22 || item.id === 23){
                item.selected = false;
            } else {
                item.selected = true;
            }
        });
        return items;
    }

    function standard(items) {
        items.forEach(function (item) {
            if(item.id === 20 || item.id === 22 || item.id === 23){
                item.selected = false;
            } else {
                item.selected = true;
            }
        });
        return items;
    }

    function complex(items) {
        items.forEach(function (item) {
            item.selected = true;
        });
        return items;
    }

    function clear(items) {
        items.forEach(function (item) {
            item.selected = false;
        });
        return items;
    }


    return {
        createBasic: basic,
        createStandard: standard,
        createComplex: complex,
        createClear: clear
    }
});

