var app = angular.module('myApp');

app.controller('mainController', function ($scope, calculatorConstant, packagesFactory) {
    var flag_bg_1=true;
    var flag_bg_2=false;
    var flag_bg_3=false;

    $scope.nextBgImage = function () {
        if(flag_bg_1){
            $(".bg_1").animate({opacity:'0'}, 1000);
            flag_bg_1=false;
            flag_bg_2=true;
            $(".bg_2").animate({opacity:'1'}, 1000);
            return;
        }
        if(flag_bg_2){
            $(".bg_2").animate({opacity:'0'}, 1000);
            flag_bg_2=false;
            flag_bg_3=true;
            $(".bg_3").animate({opacity:'1'}, 1000);
            return;
        }
        if(flag_bg_3){
            $(".bg_3").animate({opacity:'0'}, 1000);
            flag_bg_3=false;
            flag_bg_1=true;
            $(".bg_1").animate({opacity:'1'}, 1000);
        }
    };

    $scope.previousBgImage = function () {
        if(flag_bg_1){
            $(".bg_1").animate({opacity:'0'}, 1000);
            flag_bg_1=false;
            flag_bg_3=true;
            $(".bg_3").animate({opacity:'1'}, 1000);
            return;
        }
        if(flag_bg_2){
            $(".bg_2").animate({opacity:'0'}, 1000);
            flag_bg_2=false;
            flag_bg_1=true;
            $(".bg_1").animate({opacity:'1'}, 1000);
            return;
        }
        if(flag_bg_3){
            $(".bg_3").animate({opacity:'0'}, 1000);
            flag_bg_3=false;
            flag_bg_2=true;
            $(".bg_2").animate({opacity:'1'}, 1000);
        }
    };


    //слайдер

    $(document).ready(function () {
        var timerId = setInterval($scope.nextBgImage, 4500);
        $(window).blur(function() {
            clearInterval(timerId);
        });
        $(window).focus(function() {
            timerId = setInterval($scope.nextBgImage, 4500);
        });
    });



    // setInterval($scope.nextBgImage, 4500);



    $scope.flag_activeDesignCard = false;
    $scope.flag_calculator = false;

    $scope.showDesignVariants = function () {
        $scope.flag_activeDesignCard = !$scope.flag_activeDesignCard;
        $('#design_variants').slideToggle("slow");
        if($scope.flag_activeDesignCard){
            var destination = $('#design_variants').offset().top;
            $("html,body").animate({scrollTop: destination-50}, 500);
        }
    };

    $scope.hideDesignVariants = function () {
        if($scope.flag_activeDesignCard){
            $scope.showDesignVariants()
        }
    };

    $scope.showCalculator = function () {
        $scope.flag_calculator = true;
        $("#calculator").slideDown("slow");
    };

    $scope.closeCalculator = function () {
        $scope.flag_calculator = false;
        $("#calculator").slideUp("slow");
    };

    $scope.slideDownDesignVariants = function () { //для ссылки 'Дизайн интерьера' в навигации
        if(!$scope.flag_activeDesignCard){
            $scope.flag_activeDesignCard = true;
            $('#design_variants').slideDown();
        }
    };

    $scope.slideDownCalculator = function () { //для ссылки 'Калькулятор' в навигации
        if(!$scope.flag_calculator) {
            $scope.showCalculator()
        }
    };



 // калькулятор
    $scope.area = 0;
    $scope.allPackagesItems = calculatorConstant.packages_items;

    $scope.basicPackageItems = function () {
        $scope.allPackagesItems = packagesFactory.createBasic($scope.allPackagesItems);
    };

    $scope.standardPackageItems = function () {
        $scope.allPackagesItems = packagesFactory.createStandard($scope.allPackagesItems);
    };

    $scope.complexPackageItems = function () {
        $scope.allPackagesItems = packagesFactory.createComplex($scope.allPackagesItems);
    };

    $scope.clearPackageItems = function () {
        $scope.allPackagesItems = packagesFactory.createClear($scope.allPackagesItems);
    };


    $scope.result = function () {
        if(isFinite($scope.area) && $scope.area >= 0) {
            var sum = 0;
            var selectedArr = $scope.allPackagesItems.filter(function (item) {
                return item.selected === true;
            });
            selectedArr.forEach(function (item) {
                sum+=+item.price.toFixed(9);
            });
            var resultPrice = +sum.toFixed(9) * $scope.area;
            return +resultPrice.toFixed(9);
        }
    };


//адаптивное меню


    $scope.flag_menu = false;

    $scope.showMenu = function () {
        $("#menu").animate({width: 'toggle'});
        $scope.flag_menu = !$scope.flag_menu;
    };

    $scope.hide = function () {
        if($scope.flag_menu){
            $("#menu").animate({width: 'toggle'});
            $scope.flag_menu = false;
        }

    };





// изменение цвета навигационного меню при прокрутке страницы
    $(window).scroll(function() {
        if ($(this).scrollTop() > $('.about').offset().top){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });








    // $(function(){
    //     $(document).click(function(event) {
    //         if ($(event.target).closest(".nav_wrapper").length) return;
    //         else {
    //             $("#menu").hide();
    //             event.stopPropagation();
    //         }
    //     });
    // });


});
