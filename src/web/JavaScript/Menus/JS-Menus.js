var app = angular.module('PlusFriends',[]);

app.controller('meuCtrlInicial', function($scope) {
    //AbrirMenulateral
    $scope.NGCbtMenuLateral = function(){
        document.getElementById('fundoEscudoMenuLateral').style.visibility = 'visible';
        document.getElementById('divMenuLateral').style.left = '0%';
        document.getElementById('divMenuLateral').style.opacity = '100%'; 
        document.getElementById('btMenuLateralFechar').style.left = '26%';
        document.getElementById('img1BtMenuLateralFechar').style.left = "26.6%";
        document.getElementById('img2BtMenuLateralFechar').style.left = "26.6%";
        document.getElementById('img3BtMenuLateralFechar').style.left = "26.6%";
        document.getElementById('btMenuLateralFechar').style.opacity = '100%'; 
        document.getElementById('img1BtMenuLateralFechar').style.opacity = '100%'; 
        document.getElementById('img2BtMenuLateralFechar').style.opacity = '100%'; 
        document.getElementById('img3BtMenuLateralFechar').style.opacity = '100%'; 
    }

    
    //FecharMenulateral
    $scope.NGCbtMenuLateralFechar = function(){
        document.getElementById('fundoEscudoMenuLateral').style.visibility = 'hidden';
        document.getElementById('btMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('img1BtMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('img2BtMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('img3BtMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('btMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('img1BtMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('img2BtMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('img3BtMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('btMenuLateralFechar').style.left = '-111%';
        document.getElementById('img1BtMenuLateralFechar').style.left = '-111%';
        document.getElementById('img2BtMenuLateralFechar').style.left = '-111%';
        document.getElementById('img3BtMenuLateralFechar').style.left = '-111%';
        document.getElementById('divMenuLateral').style.left = '-111%';
        document.getElementById('divMenuLateral').style.opacity = '0%'; 
    }

    $scope.NGCbtMenuLateralCriarConta = function(){
        document.getElementById('fundoEscudoMenuLateral').style.visibility = 'hidden';
        document.getElementById('btMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('img1BtMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('img2BtMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('img3BtMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('btMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('img1BtMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('img2BtMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('img3BtMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('btMenuLateralFechar').style.left = '-111%';
        document.getElementById('img1BtMenuLateralFechar').style.left = '-111%';
        document.getElementById('img2BtMenuLateralFechar').style.left = '-111%';
        document.getElementById('img3BtMenuLateralFechar').style.left = '-111%';
        document.getElementById('divMenuLateral').style.left = '-111%';
        document.getElementById('divMenuLateral').style.opacity = '0%'; 
        setTimeout(function(){
        document.getElementById('divInferiorTelaLogin').style.top = "0%"
        document.getElementById('imgFundo1').style.filter = "blur(3px)"
        document.getElementById('divFundoParte1').style.left = "0%"
        document.getElementById('divFundoParte1').style.opacity = "100%"
        document.getElementById('txDivImgDivBtDivInferior1').style.opacity = "100%"
        document.getElementById('txDivImgDivBtDivInferior1').style.left = "125%"
        document.getElementById('btDivImgDivBtDivInferior1').style.opacity = "100%"
        document.getElementById('btDivImgDivBtDivInferior1').style.left = "90%"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.opacity = "100%"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.left = "88%"                
        document.getElementById('divBtDivInferior').style.top = "-2.1%"
    },100);

    }

    $scope.NGCbtMenuLateralFazerLogin = function(){
        document.getElementById('fundoEscudoMenuLateral').style.visibility = 'hidden';
        document.getElementById('btMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('img1BtMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('img2BtMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('img3BtMenuLateralFechar').style.webkitTransitionDelay = '0s';
        document.getElementById('btMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('img1BtMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('img2BtMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('img3BtMenuLateralFechar').style.transitionDelay = '0s';
        document.getElementById('btMenuLateralFechar').style.left = '-111%';
        document.getElementById('img1BtMenuLateralFechar').style.left = '-111%';
        document.getElementById('img2BtMenuLateralFechar').style.left = '-111%';
        document.getElementById('img3BtMenuLateralFechar').style.left = '-111%';
        document.getElementById('divMenuLateral').style.left = '-111%';
        document.getElementById('divMenuLateral').style.opacity = '0%'; 

    }
});
