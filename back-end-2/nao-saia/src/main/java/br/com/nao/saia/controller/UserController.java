package br.com.nao.saia.controller;

import br.com.nao.saia.dto.UserStatusDTO;
import br.com.nao.saia.model.User;
import br.com.nao.saia.service.UserService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Classe que armazena os endpoints de {@link User} recebendo as requisicoes,
 * tratando e devolvendo os resultados
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
@RestController
@RequestMapping("users")
public class UserController {

	private static final String JSON = MediaType.APPLICATION_JSON_VALUE;

	private final UserService userService;
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@PostMapping(path = "/login", consumes = JSON, produces = JSON)
	public UserStatusDTO login(@Valid @RequestBody User user) {
		return userService.login(user);
	}
	
	@PostMapping(path = "/create", consumes = JSON, produces = JSON)
	public UserStatusDTO createUser(@Valid @RequestBody User user) {
		return userService.createUser(user);
	}

}