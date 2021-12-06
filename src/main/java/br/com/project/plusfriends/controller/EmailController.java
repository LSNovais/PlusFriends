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


@EnableAutoConfiguration
@RestController
public class EmailController {

    @Autowired private JavaMailSender mailSender;

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