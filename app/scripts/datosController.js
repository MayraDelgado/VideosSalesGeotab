var miApp = {
    app: null,
    initAngular: function (api, freshState) {
        miApp.app = angular.module('appControl', ['ngMaterial']);
        miApp.app.controller('videosController', ['$scope', function ($scope) {

        }]);
    }
}