package br.com.naosaia.service.fs;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.naosaia.domain.entidade.RespostaSituacao;
import br.com.naosaia.domain.entidade.Usuario;
import br.com.naosaia.domain.usuario.UsuarioBs;
 

@RestController
@RequestMapping("usuario")
public class UsuarioFs {

	private static final String JSON = MediaType.APPLICATION_JSON_VALUE;

	@Autowired
	public UsuarioBs bs;

	@PostMapping(path = "/logar", consumes = JSON, produces = JSON)
	public RespostaSituacao login(@Valid @RequestBody Usuario usuario) {
		return bs.logar(usuario);
	}
	
	@PostMapping(consumes = JSON, produces = JSON)
	@ResponseStatus(code = HttpStatus.CREATED)
	public RespostaSituacao cadastrarVisitante(@Valid @RequestBody Usuario usuario) {
		return bs.cadastrarUsuario(usuario);
	}

}