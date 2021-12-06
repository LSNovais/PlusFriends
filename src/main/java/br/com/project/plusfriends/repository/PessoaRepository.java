/*
 * Class: PessoaRepository.java
 * Created: 06/12/2021
 * Created by: Lucas da Silva Novais
 * Rights Reserved: PlusFriends
 */  

package br.com.project.plusfriends.repository;

import br.com.project.plusfriends.model.Pessoa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * @version 1.0
 * @author Lucas da Silva Novais
 */
@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    
}