var app = angular.module('PlusFriends',[]);

app.controller('meuCtrlInicial', function($scope) {
  //Fechar Pop Up
   $scope.NGCbtFecharPopUp = function(){
    document.getElementById('popUp').style.opacity = "0%";
    document.getElementById('popUp').style.top = "-5%";
   }
});
