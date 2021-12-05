
window.onload = function () {
    setTimeout(function(){
        document.getElementById('imgFundo3').style.opacity = "100%";
    },300);
    setTimeout(function(){
        document.getElementById('imgFundo2').style.opacity = "100%";
    },600);
    setTimeout(function(){
        document.getElementById('imgFundo1').style.opacity = "100%";
    },900);
}

var app = angular.module('PlusFriends',[]);

app.controller('meuCtrlInicial', function($scope, $http) {
    //usuário admin login
    $scope.nom_usuario_admin = "admin";
    $scope.senha_admin = "admin123";
    $scope.cod_perfil = 1;
    $scope.email = null;
    $scope.usuario = null;
    $scope.senha = null;
    $scope.nome_usuario = null;


  $scope.NGM_UsuarioEmail= "Usuário/ E-mail";
  $scope.NGM_Senha= "*******";
  $scope.NGM_UsuarioNovoCadastro= "Usuário";
  $scope.NGM_EmailNovoCadastro= "E-mail";
  $scope.NGM_SenhaNovoCadastro= "*******";
  $scope.NGM_ConfirmSenhaNovoCadastro= "*******";
  $scope.NGM_NomeNovoCadastro= "Nome";
  $scope.NGM_SobrenomeNovoCadastro= "Sobrenome";
  $scope.NGM_CPFNovoCadastro= "xxx.xxx.xxx-xx";


  //focus
  $scope.NGFfocusUsuarioEmail = function(){
    if($scope.NGM_UsuarioEmail == 'Usuário/ E-mail') 
        $scope.NGM_UsuarioEmail = "";
     }

  $scope.NGFfocusSenhaLogin = function(){
    if($scope.NGM_Senha == '*******') 
        $scope.NGM_Senha = "";
  }

  $scope.NGFfocusUsuarioNovoCadastro = function(){
      if($scope.NGM_UsuarioNovoCadastro == "Usuário")
        $scope.NGM_UsuarioNovoCadastro = "";
  }

  $scope.NGFfocusEmailNovoCadastro = function(){
      if($scope.NGM_EmailNovoCadastro == "E-mail")
        $scope.NGM_EmailNovoCadastro = "";
  }

  $scope.NGFfocusSenhaCadastro = function(){
      if($scope.NGM_SenhaNovoCadastro == "*******")
        $scope.NGM_SenhaNovoCadastro = "";
  }

  $scope.NGFfocusConfirmSenhaCadastro = function(){
      if($scope.NGM_ConfirmSenhaNovoCadastro == "*******")
        $scope.NGM_ConfirmSenhaNovoCadastro = "";
  }
  $scope.NGFnomeNovoCadastro = function(){
    if($scope.NGM_NomeNovoCadastro == 'Nome') 
        $scope.NGM_NomeNovoCadastro = "";
  }

  $scope.NGFsobrenomeNovoCadastro = function(){
    if($scope.NGM_SobrenomeNovoCadastro == 'Sobrenome') 
        $scope.NGM_SobrenomeNovoCadastro = "";
  }

  $scope.NGFCPFNovoCadastro = function(){
    if($scope.NGM_CPFNovoCadastro == 'xxx.xxx.xxx-xx') 
        $scope.NGM_CPFNovoCadastro = "";
  }

  //blur
  $scope.NGBblurUsuarioEmail = function(){
    if($scope.NGM_UsuarioEmail == '') 
        $scope.NGM_UsuarioEmail = "Usuário/ E-mail";
     }

  $scope.NGBblurSenhaLogin = function(){
    if($scope.NGM_Senha == '') 
        $scope.NGM_Senha = "*******";
  }

  $scope.NGBblurUsuarioNovoCadastro = function(){
      if($scope.NGM_UsuarioNovoCadastro == "")
        $scope.NGM_UsuarioNovoCadastro = "Usuário"
  }

  $scope.NGBblurEmailNovoCadastro = function(){
      if($scope.NGM_EmailNovoCadastro == "")
        $scope.NGM_EmailNovoCadastro = "E-mail";
  }

  $scope.NGBblurSenhaCadastro = function(){
      if($scope.NGM_SenhaNovoCadastro == "")
        $scope.NGM_SenhaNovoCadastro = "*******"
  }

  $scope.NGBblurConfirmSenhaCadastro = function(){
      if($scope.NGM_ConfirmSenhaNovoCadastro == "")
        $scope.NGM_ConfirmSenhaNovoCadastro = "*******";
  }

  $scope.NGBnomeNovoCadastro = function(){
    if($scope.NGM_NomeNovoCadastro == "") 
        $scope.NGM_NomeNovoCadastro = 'Nome';
  }

  $scope.NGBsobrenomeNovoCadastro = function(){
    if($scope.NGM_SobrenomeNovoCadastro == "") 
        $scope.NGM_SobrenomeNovoCadastro = 'Sobrenome';
  }

  $scope.NGBCPFNovoCadastro = function(){
    if($scope.NGM_CPFNovoCadastro == "") 
        $scope.NGM_CPFNovoCadastro = 'xxx.xxx.xxx-xx';
  }

 
  $scope.NGBblurValidApNum = function(){
      if(isNaN($scope.NGM_IdadeNovoCadastro))
         $scope.NGM_IdadeNovoCadastro = null;
      if($scope.NGM_IdadeNovoCadastro > 99 || $scope.NGM_IdadeNovoCadastro < 16)
        $scope.NGM_IdadeNovoCadastro = null;
  }


  //*********MouseEnter*********//

    //*Seta Para Baixo*//
    /*
  $scope.NGFfocusDivBtDivInferior = function(){
    document.getElementById('divImgDivBtDivInferior2').style.top = "-1.5%";
    document.getElementById('divImgDivBtDivInferior2').style.left = "60%";
    document.getElementById('divImgDivBtDivInferior2').style.height = "29%";
    document.getElementById('divImgDivBtDivInferior2').style.width = "0%";
    document.getElementById('divImgDivBtDivInferior2').style.transform = "skew(-40deg)";
    document.getElementById('divImgDivBtDivInferior1').style.top = "36%";
    document.getElementById('divImgDivBtDivInferior1').style.left = "30%";
    document.getElementById('divImgDivBtDivInferior1').style.height = "30%";
    document.getElementById('divImgDivBtDivInferior1').style.width = "0%";
    document.getElementById('divImgDivBtDivInferior1').style.transform = "skew(40deg)";
}
    */

    $scope.NGFfocusPopUpTxPlus = function(){
    document.getElementById('lupaPt1').style.opacity = "0%";
    document.getElementById('lupaPt1').style.filter = "blur(10px)";
    document.getElementById('lupaPt2').style.opacity = "0%";
    document.getElementById('lupaPt2').style.filter = "blur(10px)";
    document.getElementById('txFacaAmigos').style.opacity = "100%";
    }

    $scope.NGFfocusPopUpTxPlus2 = function(){
    document.getElementById('lupa2Pt1').style.opacity = "0%";
    document.getElementById('lupa2Pt1').style.filter = "blur(10px)";
    document.getElementById('lupa2Pt2').style.opacity = "0%";
    document.getElementById('lupa2Pt2').style.filter = "blur(10px)";
    document.getElementById('txDescubraLugares').style.opacity = "100%";
    }

    /*Seta para cima*/
    $scope.NGFfocusDivBtDivInferior = function(){
    document.getElementById('divImgDivBtDivInferior2').style.top = "-10%";
    document.getElementById('divImgDivBtDivInferior2').style.left = "60%";
    document.getElementById('divImgDivBtDivInferior2').style.height = "29%";
    document.getElementById('divImgDivBtDivInferior2').style.width = "0%";
    document.getElementById('divImgDivBtDivInferior2').style.transform = "skew(40deg)";
    document.getElementById('divImgDivBtDivInferior1').style.top = "30%";
    document.getElementById('divImgDivBtDivInferior1').style.left = "30%";
    document.getElementById('divImgDivBtDivInferior1').style.height = "30%";
    document.getElementById('divImgDivBtDivInferior1').style.width = "0%";
    document.getElementById('divImgDivBtDivInferior1').style.transform = "skew(-40deg)";
   }

    //*********MouseLeave*********//
    $scope.NGLdivBtDivInferior = function(){
    document.getElementById('divImgDivBtDivInferior2').style.top = "8%";
    document.getElementById('divImgDivBtDivInferior2').style.left = "45%";
    document.getElementById('divImgDivBtDivInferior2').style.height = "50%";
    document.getElementById('divImgDivBtDivInferior2').style.width = "0%";
    document.getElementById('divImgDivBtDivInferior2').style.transform = "skew(0deg)";
    document.getElementById('divImgDivBtDivInferior1').style.top = "47%";
    document.getElementById('divImgDivBtDivInferior1').style.left = "18%";
    document.getElementById('divImgDivBtDivInferior1').style.height = "0%";
    document.getElementById('divImgDivBtDivInferior1').style.width = "50%";
    document.getElementById('divImgDivBtDivInferior1').style.transform = "skew(0deg)";
}

    $scope.NGLPopUpTxPlus = function(){
    document.getElementById('lupaPt1').style.opacity = "100%";
    document.getElementById('lupaPt1').style.filter = "blur(0px)";
    document.getElementById('lupaPt2').style.opacity = "100%";
    document.getElementById('lupaPt2').style.filter = "blur(0px)";
    document.getElementById('txFacaAmigos').style.opacity = "0%";
    }

    
    $scope.NGLPopUpTxPlus2 = function(){
    document.getElementById('lupa2Pt1').style.opacity = "100%";
    document.getElementById('lupa2Pt1').style.filter = "blur(0px)";
    document.getElementById('lupa2Pt2').style.opacity = "100%";
    document.getElementById('lupa2Pt2').style.filter = "blur(0px)";
    document.getElementById('txDescubraLugares').style.opacity = "0%";
    }

  //*********Click*********//


//Home Div Inferior
$scope.NGChomeDivInferior = function(){
    document.getElementById('divInferiorTelaLogin').style.top = "95%"
        document.getElementById('imgFundo1').style.filter = "blur(0px)"
        document.getElementById('divBtDivInferior').style.top = "-1.3%"                
        setTimeout(function(){
        document.getElementById('divFundoParte1').style.left = "-10%"
        document.getElementById('divFundoParte1').style.opacity = "0%"
        document.getElementById('txDivImgDivBtDivInferior1').style.opacity = "100%"
        document.getElementById('txDivImgDivBtDivInferior1').style.left = "125%"
        document.getElementById('btDivImgDivBtDivInferior1').style.opacity = "100%"
        document.getElementById('btDivImgDivBtDivInferior1').style.left = "90%"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.opacity = "100%"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.left = "88%"
    },50);
}

//Avançar Div Inferior
$scope.NGCbtDivInferiorAvancar = function(){
    if(document.getElementById('divInferiorTelaLogin').style.top == "0%"){
        document.getElementById('divInferiorTelaLogin').style.top = "-100%"
        document.getElementById('divFundoParte2').style.opacity = "100%"
        document.getElementById('divFundoParte2').style.left = "0%"
        setTimeout(function(){
        document.getElementById('img1BtDivImgDivBtDivInferior1').style.backgroundColor = "white"
        document.getElementById('img1BtDivImgDivBtDivInferior2').style.backgroundColor = "white"
        document.getElementById('img1BtDivImgDivBtDivInferior3').style.backgroundColor = "white"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.webkitTransitionDelay = "0s"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.transitionDelay = "0s"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.backgroundImage = "url('./Imagem/LogoHomeBranco.png')"
        },1000);
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.webkitTransitionDelay = "3s"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.transitionDelay = "3s"
        document.getElementById('txDivImgDivBtDivInferior2').style.opacity = "100%"
        document.getElementById('txDivImgDivBtDivInferior2').style.left = "27.5%"
    }else if(document.getElementById('divInferiorTelaLogin').style.top == "-100%"){
        document.getElementById('divInferiorTelaLogin').style.top = "-200%"
        document.getElementById('divFundoParte3').style.opacity = "100%"
        document.getElementById('divFundoParte3').style.left = "0%"
        setTimeout(function(){
        document.getElementById('img1BtDivImgDivBtDivInferior1').style.backgroundColor = "black"
        document.getElementById('img1BtDivImgDivBtDivInferior2').style.backgroundColor = "black"
        document.getElementById('img1BtDivImgDivBtDivInferior3').style.backgroundColor = "black"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.webkitTransitionDelay = "0s"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.transitionDelay = "0s"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.backgroundImage = "url('./Imagem/LogoHome.png')"
        },1000);
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.webkitTransitionDelay = "3s"
        document.getElementById('btHomeDivImgDivBtDivInferior1').style.transitionDelay = "3s"

    }else if(document.getElementById('divInferiorTelaLogin').style.top == "-200%"){
        if(($scope.NGM_UsuarioNovoCadastro == null || $scope.NGM_UsuarioNovoCadastro == "Usuário")){                   
            document.getElementById('popUp').style.opacity = "100%";
            document.getElementById('popUp').style.top = "8%";
            $scope.txtMsgPopUp = "Preencha o nome de usuário";
        }
        else if(($scope.NGM_EmailNovoCadastro == null || $scope.NGM_EmailNovoCadastro == "E-mail")){                   
            document.getElementById('popUp').style.opacity = "100%";
            document.getElementById('popUp').style.top = "8%";
            $scope.txtMsgPopUp = "Preencha o e-mail";
        }
        else if(!($scope.NGM_SenhaNovoCadastro == $scope.NGM_ConfirmSenhaNovoCadastro)){
            document.getElementById('popUp').style.opacity = "100%";
            document.getElementById('popUp').style.top = "8%";
            $scope.txtMsgPopUp = "As senhas precisam ser iguais e possuirem mais que 8 dígitos.";
        }
        else if(($scope.NGM_IdadeNovoCadastro < 16 && $scope.NGM_IdadeNovoCadastro > 99) || $scope.NGM_IdadeNovoCadastro == null){
            document.getElementById('popUp').style.opacity = "100%";
            document.getElementById('popUp').style.top = "8%";
            $scope.txtMsgPopUp = "Preencha uma idade válida entre 16 e 99 anos.";
        }
        else if($scope.NGM_SexoNovoCadastro == ""){
            document.getElementById('popUp').style.opacity = "100%";
            document.getElementById('popUp').style.top = "8%";
            $scope.txtMsgPopUp = "Digite seu sexo.";
        }else{

            document.getElementById('divInferiorTelaLogin').style.top = "-300%"
            document.getElementById('divFundoParte4').style.opacity = "100%"
            document.getElementById('divFundoParte4').style.left = "0%"
            setTimeout(function(){
            document.getElementById('img1BtDivImgDivBtDivInferior1').style.backgroundColor = "white"
            document.getElementById('img1BtDivImgDivBtDivInferior2').style.backgroundColor = "white"
            document.getElementById('img1BtDivImgDivBtDivInferior3').style.opacity = "0%"
            document.getElementById('img1BtDivImgDivBtDivInferior2').style.transform = "skew(0deg)"
            document.getElementById('img1BtDivImgDivBtDivInferior2').style.width = "60%"
            document.getElementById('img1BtDivImgDivBtDivInferior2').style.height = "13%"
            document.getElementById('img1BtDivImgDivBtDivInferior2').style.left = "25%"
            document.getElementById('img1BtDivImgDivBtDivInferior2').style.top = "-50%"
            document.getElementById('img1BtDivImgDivBtDivInferior2').style.transform = "skew(0deg)"


            document.getElementById('btHomeDivImgDivBtDivInferior1').style.webkitTransitionDelay = "0s"
            document.getElementById('btHomeDivImgDivBtDivInferior1').style.transitionDelay = "0s"
            document.getElementById('btHomeDivImgDivBtDivInferior1').style.backgroundImage = "url('./Imagem/LogoHomeBranco.png')"
            },1000);
            document.getElementById('btHomeDivImgDivBtDivInferior1').style.webkitTransitionDelay = "3s"
            document.getElementById('btHomeDivImgDivBtDivInferior1').style.transitionDelay = "3s"

        }         
        //Cadastro Concluido   
    }else if(document.getElementById('divInferiorTelaLogin').style.top == "-300%"){

        if(($scope.NGM_NomeNovoCadastro == null || $scope.NGM_NomeNovoCadastro == "Nome")){                   
            document.getElementById('popUp').style.opacity = "100%";
            document.getElementById('popUp').style.top = "8%";
            $scope.txtMsgPopUp = "Preencha o seu Nome.";
        }
        else if(($scope.NGM_SobrenomeNovoCadastro == null || $scope.NGM_SobrenomeNovoCadastro == "Sobrenome")){                   
            document.getElementById('popUp').style.opacity = "100%";
            document.getElementById('popUp').style.top = "8%";
            $scope.txtMsgPopUp = "Preencha o seu Sobrenome.";
        }
        else if(($scope.NGM_CPFNovoCadastro == null || $scope.NGM_CPFNovoCadastro == "xxx.xxx.xxx-xx")){
            document.getElementById('popUp').style.opacity = "100%";
            document.getElementById('popUp').style.top = "8%";
            $scope.txtMsgPopUp = "Preencha o seu CPF.";
        }
        else{
            function dataHoje() {
                var data = new Date();
                return data;
            }
            var req = {
            method: 'POST',
            url: 'http://localhost:8080/plusFriends/post/cadastrarUsuario',
            headers: {
            'Content-Type': 'application/json'
            },
            data: { nome: $scope.NGM_NomeNovoCadastro,
                    sobrenome: $scope.NGM_SobrenomeNovoCadastro,
                    sexo: $scope.NGM_SexoNovoCadastro,
                    idade: $scope.NGM_IdadeNovoCadastro,
                    cpf: $scope.NGM_CPFNovoCadastro,
                    email: $scope.NGM_EmailNovoCadastro,
                    usuario: $scope.NGM_UsuarioNovoCadastro,
                    senha: $scope.NGM_SenhaNovoCadastro,
                    cod_perfil: 2,
                    dt_cadastro: dataHoje(),
                    dt_ult_login: null,
                    dt_cancelamento: null,
                    sts_ativo: 1
                }
            }

            $http(req).then(function(){

                document.getElementById('imgFundo1').style.filter = "blur(0px)";
                document.getElementById('imgFundo2').style.filter = "blur(0px)";
                document.getElementById('imgFundo3').style.filter = "blur(0px)";

                document.getElementById('popUp').style.opacity = "100%";
                document.getElementById('popUp').style.top = "8%";
                $scope.txtMsgPopUp = "Cadastro Realizado com Sucesso!";


                $scope.usuario = $scope.NGM_UsuarioNovoCadastro;
                $scope.email = $scope.NGM_EmailNovoCadastro;
                $scope.senha = $scope.NGM_SenhaNovoCadastro;


                $scope.NGM_UsuarioEmail= "Usuário/ E-mail";
                $scope.NGM_Senha= "*******";
                $scope.NGM_UsuarioNovoCadastro= "Usuário";
                $scope.NGM_EmailNovoCadastro= "E-mail";
                $scope.NGM_SenhaNovoCadastro= "*******";
                $scope.NGM_ConfirmSenhaNovoCadastro= "*******";
                $scope.NGM_NomeNovoCadastro= "Nome";
                $scope.NGM_SobrenomeNovoCadastro= "Sobrenome";
                $scope.NGM_CPFNovoCadastro= "xxx.xxx.xxx-xx";

                document.getElementById('divInferiorTelaLogin').style.top = "95%"
                document.getElementById('imgFundo1').style.filter = "blur(0px)"
                document.getElementById('divBtDivInferior').style.top = "-1.3%"                
                setTimeout(function(){
                document.getElementById('divFundoParte1').style.left = "-10%"
                document.getElementById('divFundoParte1').style.opacity = "0%"
                document.getElementById('txDivImgDivBtDivInferior1').style.opacity = "100%"
                document.getElementById('txDivImgDivBtDivInferior1').style.left = "125%"
                document.getElementById('btDivImgDivBtDivInferior1').style.opacity = "100%"
                document.getElementById('btDivImgDivBtDivInferior1').style.left = "90%"
                document.getElementById('btHomeDivImgDivBtDivInferior1').style.opacity = "100%"
                document.getElementById('btHomeDivImgDivBtDivInferior1').style.left = "88%"
                },50);

            }, function(){
                document.getElementById('popUp').style.opacity = "100%";
                document.getElementById('popUp').style.top = "8%";
                $scope.txtMsgPopUp = "Falha ao realizar cadastro!<br>Sem comunicação com servidor.";
            });
        }

    }

}


  //Novo Cadastro
$scope.NGCcadastroNovo = function(){
            document.getElementById('txMais').style.transition = "all linear 1s";
            document.getElementById('popUpTxPlus').style.transition = "all linear 1s";
            document.getElementById('txFriends').style.transition = "all linear 1s";                    
            document.getElementById('imgFundo1').style.filter = "blur(5px)";
            document.getElementById('imgFundo2').style.filter = "blur(5px)";
            document.getElementById('imgFundo3').style.filter = "blur(5px)";
            document.getElementById('txMais').style.left = "-21%";
            document.getElementById('popUpTxPlus').style.left = "-30%";
            document.getElementById('txFriends').style.left = "-48%";
            document.getElementById('tbSenha').style.left = "-20%";
            document.getElementById('tbUsuarioEmail').style.left = "-20%";

            document.getElementById('divBtsLogin').style.left = "-30%";
            document.getElementById('divBtsLogin').style.opacity = "-100%";

        document.getElementById('divCadastro').style.left = "30%";

        document.getElementById('imgFundo1').style.filter = "blur(5px)";
        document.getElementById('imgFundo2').style.filter = "blur(5px)";
        document.getElementById('imgFundo3').style.filter = "blur(5px)";
  }

   //Voltar Cadastro
   $scope.NGCvoltarCadastro = function(){
        document.getElementById('txMais').style.transition = "all linear 0.5s";
        document.getElementById('txPlus').style.transition = "all linear 0.5s";
        document.getElementById('txFriends').style.transition = "all linear 0.4s";                    
        document.getElementById('imgFundo1').style.filter = "blur(0px)";
        document.getElementById('imgFundo2').style.filter = "blur(0px)";
        document.getElementById('imgFundo3').style.filter = "blur(0px)";
        document.getElementById('txMais').style.left = "21%";
        document.getElementById('txPlus').style.left = "30%";
        document.getElementById('txFriends').style.left = "48%";
        document.getElementById('tbSenha').style.left = "20%";
        document.getElementById('tbUsuarioEmail').style.left = "20%";

        document.getElementById('divBtsLogin').style.left = "30%";
        document.getElementById('divBtsLogin').style.opacity = "100%";

        document.getElementById('divCadastro').style.left = "100%";           
    }

    //Voltar Continuação Cadastro
   $scope.NGCvoltarCadastro2 = function(){

        document.getElementById('divCadastro').style.left = "30%";  
        document.getElementById('divCadastro').style.opacity = "100%";  


        document.getElementById('divContinuaCadastro').style.left = "200%";  
        document.getElementById('divContinuaCadastro').style.opacity = "0%";  



    }

  //Logar
  $scope.NGClogar = function(){
        $scope.url = "http://localhost:8080/plusFriends/";
        $scope.acao = "getUsuarioBancoDados/";

    $http.get($scope.url+$scope.acao+$scope.NGM_UsuarioEmail+"/"+$scope.NGM_Senha).then(function (response) {
      $scope.myData = response.data;

      if(!($scope.myData.nome == null)){
        $http.get($scope.url+$scope.acaoGetUsuario+$scope.usuario+"/"+$scope.senha).then(function (response) {
                $scope.myData = response.data;


                function dataHoje() {
                var data = new Date();
                return data;
                }
                var req = {
                method: 'POST',
                url: 'http://localhost:8080/plusFriends/put/atualizarDtUltLogin',
                headers: {
                'Content-Type': 'application/json'
                },
                data: { id: 2,
                    dtUltLogin: dataHoje()
                    }
                }
                $http(req).then(function(){
                });
            });
        window.sessionStorage.setItem('usuario', JSON.stringify($scope.myData.usuario));
        window.sessionStorage.setItem('senha', JSON.stringify($scope.myData.senha));
        window.location.href = "HTML/PaginaPrincipal.html";
      }else{
        document.getElementById('popUp').style.opacity = "100%";
        document.getElementById('popUp').style.top = "8%";
        $scope.txtMsgPopUp = "Usuário ou E-mail não cadastrado.";
      }
    });
  }
  


  //Upload de arquivo
    $scope.NGCadicionarArquivo = function() {
        var f = document.getElementById('leitorDeArquivo').files[0],
            r = new FileReader();

        r.onloadend = function(e) {
        var data = e.target.result;
        //send your binary data via $http or $resource or do anything else with it
        }

        r.readAsBinaryString(f);
    }


    //click botão div inferior
    $scope.NGCdivBtDivInferior = function() {
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
    }

    //*********Keypress*********//
    $scope.NGKmascaraCPF = function(){
        if($scope.NGM_CPFNovoCadastro.length == 3){
            $scope.NGM_CPFNovoCadastro = $scope.NGM_CPFNovoCadastro + ".";
        }
        if($scope.NGM_CPFNovoCadastro.length == 7){
            $scope.NGM_CPFNovoCadastro = $scope.NGM_CPFNovoCadastro + ".";
        }
        if($scope.NGM_CPFNovoCadastro.length == 11){
            $scope.NGM_CPFNovoCadastro = $scope.NGM_CPFNovoCadastro + "-";
        }
    }

});



app.controller('meuCrtlInicial', function($scope, $http){
    $scope.postdata = function(NGM_UsuarioEmail){
        var data = {NGM_UsuarioEmail: NGM_UsuarioEmail};
        $http.post('/api/users/post', JSON.stringify(data)).then(function(response){
            if(response.data)
                $scope.msg = "Post Data Submitted Successfully!";
        }, function(response){
            $scope.msg = "Service not Exists";
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
    };
});

app.controller('UploadCtrl', ['$scope', function (scope) {
    scope.image = "";
}]).directive('myUpload', [function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var reader = new FileReader();
            reader.onload = function (e) {
                scope.image = e.target.result;
                scope.$apply();
            }

            elem.on('change', function() {
                reader.readAsDataURL(elem[0].files[0]);
            });
        }
    };
}]);

app.controller('UploadCtrl', ['$scope', function (scope) {
    scope.image = "";
}]).directive('myUpload2', [function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var reader = new FileReader();
            reader.onload = function (e) {
                scope.image2 = e.target.result;
                scope.$apply();
            }

            elem.on('change', function() {
                reader.readAsDataURL(elem[0].files[0]);
            });
        }
    };
}]);

