/*
 * Class: EmailController.java
 * Created: 06/12/2021
 * Created by: Lucas da Silva Novais
 * Rights Reserved: PlusFriends
 */  

package br.com.project.plusfriends.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import javax.mail.internet.MimeMessage;



/**
 * @version 1.0
 * @author Lucas da Silva Novais
 */
@EnableAutoConfiguration
@RestController
public class EmailController {

    @Autowired private JavaMailSender mailSender;



    /**
     * API path = "/email-send-usuario-cadastrado/{emailUsuario}/{nomeUsuario}" 
     * Utilizada como GET, envia e-mail para o usuário após concluir o cadastro
     * @param  emailUsuario email do usuário que foi cadastrado no sistema
     * @param  nomeUsuario nome do usuário que foi cadastrado no sistema
     * @return retorna a confirmação se o e-mail foi ou não enviado ao usuário  ResponseEntity.ok("Email enviado com sucesso");
     * @since 11.0
     */
    @CrossOrigin
    @GetMapping(path = "/email-send-usuario-cadastrado/{emailUsuario}/{nomeUsuario}")
    public ResponseEntity<?> findUsuarioSenha(@PathVariable String emailUsuario,@PathVariable String nomeUsuario){
        try {
            MimeMessage mail = mailSender.createMimeMessage();

            MimeMessageHelper helper = new MimeMessageHelper( mail );
            helper.setTo(emailUsuario);
            helper.setFrom("devnovais@gmail.com");
            helper.setSubject("Nova conta PlusFriends!");
            helper.setText("<p>Seja bem-vindo(a) ao PlusFriends "+nomeUsuario+"!</p>", true);
            mailSender.send(mail);

            return ResponseEntity.ok("Email enviado com sucesso");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok("Falha no envio");
        }
    }
}