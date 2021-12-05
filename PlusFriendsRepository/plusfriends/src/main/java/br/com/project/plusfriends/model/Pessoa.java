package br.com.project.plusfriends.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import jdk.jfr.Name;
import lombok.Data;

@Entity
@Table
@Data
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Name("nome")
    String nome;

    @Name("sobrenome")
    String sobrenome;

    @Name("sexo")
    String sexo;

    @Name("idade")
    int idade;

    @Name("cpf")
    String cpf;

    @Name("email")
    String email;

    @Name("usuario")
    String usuario;

    @Name("senha")
    String senha;

    @Name("cod_perfil")
    String cod_perfil;

    @Name("dt_cadastro")
    Date dt_cadastro;

    @Name("dt_ult_login")
    Date dt_ult_login;

    @Name("dt_cancelamento")
    Date dt_cancelamento;

    @Name("sts_ativo")
    Integer sts_ativo;
}