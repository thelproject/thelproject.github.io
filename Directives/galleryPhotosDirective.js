var app = angular.module('designApp');

app.directive("galleryPhotos", function (galleryValues) {
    return {
        link: function (scope) {
            scope.gallery_photos = galleryValues.gallery_photos;
        },
        templateUrl: 'Directives/galleryPhotosTemplate.html'
    }
});

