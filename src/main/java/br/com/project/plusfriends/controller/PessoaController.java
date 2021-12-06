/*
 * Class: PessoaController.java
 * Created: 06/12/2021
 * Created by: Lucas da Silva Novais
 * Rights Reserved: PlusFriends
 */  

package br.com.project.plusfriends.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.project.plusfriends.model.Pessoa;
import br.com.project.plusfriends.service.PessoaService;
import lombok.AllArgsConstructor;


/**
 * @version 1.0
 * @author Lucas da Silva Novais
 */
@CrossOrigin(origins = "http://localhost:8080/plusFriends")
@RestController
@AllArgsConstructor
@RequestMapping("/**")
public class PessoaController {

    private PessoaService pessoaService;



    /**
     * API path = "/getUsuarioBancoDados" 
     * Utilizada como GET, coleta o todos os usuários do banco de dados
     * @return Todos os usuários do banco de dados  ResponseEntity.ok(pessoas);
     * @since 11.0
     */
    @CrossOrigin
    @GetMapping(path = "/getUsuarioBancoDados")
    public ResponseEntity<?> findAll(){
        List<Pessoa> pessoas =  pessoaService.findAll();
        return ResponseEntity.ok(pessoas);
    }



    /**
     * API path = "/getUsuarioBancoDados/{nomUsuario}/{senhaUsuario}" 
     * Utilizada como GET, valida se o usuário e a senha enviados como parametro possuem no banco de dados
     * @param  nomUsuario login do usuário que está acessando a aplicação
     * @param  senhaUsuario senha do usuário que está acessando a aplicação
     * @return retorna se o usuário e a senha são válidos
     * @since 11.0
     */
    @CrossOrigin
    @GetMapping(path = "/getUsuarioBancoDados/{nomUsuario}/{senhaUsuario}")
    public ResponseEntity<?> findUsuarioSenha(@PathVariable String nomUsuario, @PathVariable String senhaUsuario){
        List<Pessoa> pessoas =  pessoaService.findAll();
        int indice = verificaIndiceUsuario(pessoas, nomUsuario);
        if(indice > -1)
            return ResponseEntity
                    .ok(verificaSenhaCorreto(pessoas, indice, senhaUsuario) > -1 ? pessoas.get(indice) : "Senha incorreta");
        else
            return ResponseEntity.notFound().build();
    }



    /**
     * API path = "/post/cadastrarUsuario" 
     * Utilizada como POST, cadastra o usuário no banco de dados
     * @param  pessoa coleta dados como parametro no formato da classe Pessoa, para salvar no banco de dados
     * @return retorna se o usuário foi cadastrado com sucesso ResponseEntity.status(HttpStatus.CREATED).body(pessoaAdded);
     * @since 11.0
     */
    @PostMapping(path = "/post/cadastrarUsuario")
    public ResponseEntity<?> save(@RequestBody Pessoa pessoa){
        Pessoa pessoaAdded = pessoaService.save(pessoa);
        return ResponseEntity.status(HttpStatus.CREATED).body(pessoaAdded);
    }



    /**
     * API path = "/put/atualizarDtUltLogin 
     * Utilizada como PUT, atualiza a data do ultimo login do usuário no banco de dados ao acessar a aplicação
     * @param  id ID do usuário no banco de dados
     * @param  dtUltLogin data do ultimo login do usuário que será salvo no banco de dados
     * @return retorna se a data foi atualizada ResponseEntity.status(HttpStatus.CREATED).body(pessoaAdded);
     * @since 11.0
     */
    @PostMapping(path = "/put/atualizarDtUltLogin")
    public ResponseEntity<?> updateDtUltLogin(@RequestBody Integer id, @RequestBody Date dtUltLogin){
        Pessoa pessoa = pessoaService.findAll().get(id);
        pessoa.setDt_ult_login(dtUltLogin);
        Pessoa pessoaAdded = pessoaService.update(pessoa);
        return ResponseEntity.status(HttpStatus.CREATED).body(pessoaAdded);
    }



    /**
     * Utilizada para verificar o indice de determinado usuário no banco de dados
     * @param  pessoas valores baseados na classe Pessoa, com dados do usuário
     * @param  nomUsuario nome do usuário que terá seu ID consultado
     * @return retorna o indice do usuário 
     * @since 11.0
     */
    public int verificaIndiceUsuario(List<Pessoa> pessoas, String nomUsuario){
        int indice = -1;

        for(int x = 0; x<=pessoas.size(); x++){
            if(pessoas.get(x).getUsuario().toString().equals(nomUsuario)){
                indice = x;
                x = pessoas.size();
            }
        }

        return indice;
    }



    /**
     * Utilizada para verificar se a senha do usuário que está logando, está correta
     * @param  pessoas valores baseados na classe Pessoa, com dados do usuário
     * @param  indice indice do usuário que terá sua senha comparada com o banco de dados
     * @param  senhaUsuario senha do usuário que será comparada com a do banco de dados
     * @return retorna a validação se a senha está correta
     * @since 11.0
     */
    public int verificaSenhaCorreto(List<Pessoa> pessoas, int indice, String senhaUsuario){

        if(pessoas.get(indice).getSenha().toString().equals(senhaUsuario))
            return indice;
        else
            return -1;
    }
    
}