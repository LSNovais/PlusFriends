/*
 * Class: PessoaService.java
 * Created: 06/12/2021
 * Created by: Lucas da Silva Novais
 * Rights Reserved: PlusFriends
 */  

package br.com.project.plusfriends.service;

import org.springframework.stereotype.Service;

import java.util.List;
import br.com.project.plusfriends.model.Pessoa;
import br.com.project.plusfriends.repository.PessoaRepository;
import lombok.AllArgsConstructor;


/**
 * @version 1.0
 * @author Lucas da Silva Novais
 */
@Service
@AllArgsConstructor
public class PessoaService {

    private PessoaRepository pessoaRepository;



    /**
     * Utilizada para buscar todos os usuários no banco de dados
     * @return retorna todos os usuários do banco de dados
     * @since 11.0
     */
    public List<Pessoa> findAll(){
        return pessoaRepository.findAll();
    }



    /**
     * Cadastra usuário no banco de dados
     * @param pessa recebe todos os dados do usuário que será cadastrado baseado na classe Pessoa
     * @return retorna a confirmação se o usuário foi ou não cadastrado no banco de dados pessoaRepository.save(pessoa);
     * @since 11.0
     */
    public Pessoa save(Pessoa pessoa){
        return pessoaRepository.save(pessoa);
    }



    /**
     * Atualiza usuário do banco de dados
     * @param pessa recebe todos os dados do usuário que será atualizado baseado na classe Pessoa
     * @return retorna a confirmação se o usuário foi ou não atualizado no banco de dados pessoaRepository.save(pessoa);
     * @since 11.0
     */
    public Pessoa update(Pessoa pessoa){
        return pessoaRepository.save(pessoa);
    }
    
}