package br.com.naosaia.domain.usuario;

import java.util.Date;
import java.util.Objects;

import javax.inject.Inject;
import javax.inject.Named;
import javax.validation.Valid;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import br.com.naosaia.domain.entidade.RespostaSituacao;
import br.com.naosaia.domain.entidade.Usuario;

@Named
public class UsuarioBs {

	@Inject
	private MongoTemplate mongoTemplate;

	public RespostaSituacao logar(Usuario usuario) {
		Usuario usuarioLogado = consultarUsuarioPorEmailESenha(usuario);
		if (Objects.nonNull(usuarioLogado)) {
			return RespostaSituacao.builder().status(Boolean.TRUE).mensagem("Usuario logado").build();
		} else {
			return RespostaSituacao.builder().status(Boolean.FALSE).mensagem("Usuario e senha inválido").build();
		}
	}
	
	private Usuario consultarUsuarioPorEmailESenha(Usuario usuario) {
		return mongoTemplate.findOne(Query.query(
									Criteria.where("email").is(usuario.getEmail().toUpperCase())
											.and("senha").is(usuario.getSenha())
									), Usuario.class);
	}

	public RespostaSituacao cadastrarUsuario(@Valid Usuario usuario) {
		RespostaSituacao situacao = RespostaSituacao.builder().build();
		Boolean emailCadastrado = verificarEmailJaCadastrado(usuario);
		if (emailCadastrado) {
			situacao.setStatus(Boolean.FALSE);
			situacao.setMensagem("E-mail já cadastrado");
		} else {
			usuario.setDataAtualizacao(new Date());
			usuario.setEmail(usuario.getEmail().toUpperCase());
			mongoTemplate.insert(usuario);
			Boolean status = Boolean.TRUE;
			situacao.setStatus(status);
			situacao.setMensagem("Usuário cadastrado com sucesso");
		}

		return situacao;
	}

	private Boolean verificarEmailJaCadastrado(Usuario usuario) {
		Usuario usario = mongoTemplate.findOne(Query.query(
											Criteria.where("email").is(usuario.getEmail().toUpperCase())), Usuario.class);
		return Objects.nonNull(usario);
	}

}
