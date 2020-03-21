package br.com.naosaia.domain.usuario;

import java.util.UUID;

import javax.inject.Named;
import javax.validation.Valid;

import br.com.erp.framework.dao.DaoService;
import br.com.erp.framework.utilitario.ValidatorUtils;
import br.com.naosaia.domain.entidade.RespostaSituacao;
import br.com.naosaia.domain.entidade.Usuario;
 

@Named
public class UsuarioBs extends DaoService {

	public RespostaSituacao logar(Usuario usuario) {
		Usuario usuarioLogado =  find("consultar-usuario-por-email-e-senha.sql", usuario, Usuario.class);
		if(ValidatorUtils.isValueValid(usuarioLogado)) {
			return RespostaSituacao.builder().status(Boolean.TRUE).mensagem("Usuario logado").build();
		}else {
			return RespostaSituacao.builder().status(Boolean.FALSE).mensagem("Usuario e senha inválido").build();
		}
	}

	public RespostaSituacao cadastrarUsuario(@Valid Usuario usuario) {
		RespostaSituacao situacao = RespostaSituacao.builder().build();
		Boolean emailCadastrado = findForBoolean("verificar-se-email-ja-foi-cadastrado.sql", usuario);
		if (emailCadastrado) {
			situacao.setStatus(Boolean.FALSE);
			situacao.setMensagem("E-mail já cadastrado");
		} else {
			usuario.setIdUsuario(UUID.randomUUID());
			Boolean status = add("cadastrar-usuario.sql", usuario);
			situacao.setStatus(status);
			situacao.setMensagem("Usuário cadastrado com sucesso");
		}

		return situacao;
	}

}
