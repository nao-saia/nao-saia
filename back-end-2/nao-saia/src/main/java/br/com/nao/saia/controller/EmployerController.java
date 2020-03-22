package br.com.nao.saia.controller;

import br.com.nao.saia.dto.EmployerDTO;
import br.com.nao.saia.model.Employer;
import br.com.nao.saia.service.EmployerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import java.util.List;

/**
 * Classe que armazena os endpoints de {@link Employer} recebendo as requisicoes,
 * tratando e devolvendo os resultados
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
@RestController
@RequestMapping("/employer")
public class EmployerController {

	private final EmployerService employerService;
	
	public EmployerController(EmployerService employerService) {
		this.employerService = employerService;
	}
	
	@PutMapping(value = "/save")
	public void salvar(@Valid @RequestBody Employer employer) {
		employerService.salvar(employer);
	}
	
	@PostMapping(value = "/delete")
	public void excluir(@Valid @RequestBody Long codigo) {
		employerService.excluir(codigo);
	}
	
	@GetMapping(value = "/findAll")
	public List<EmployerDTO> findAll() {
		return employerService.findAll();
	}
	
	@PostMapping(value = "/findByFilter")
	public List<EmployerDTO> findByFilter(@Valid @RequestBody String param) {
		return employerService.findByFilter(param);
	}
}
