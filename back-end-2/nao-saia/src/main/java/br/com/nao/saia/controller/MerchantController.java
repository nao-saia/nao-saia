package br.com.nao.saia.controller;

import br.com.nao.saia.dto.MerchantDTO;
import br.com.nao.saia.model.Merchant;
import br.com.nao.saia.service.MerchantService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

/**
 * Classe que armazena os endpoints de {@link Merchant} recebendo as requisicoes,
 * tratando e devolvendo os resultados
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
@RestController
@RequestMapping("merchants")
public class MerchantController {

	private final MerchantService merchantService;
	
	public MerchantController(MerchantService merchantService) {
		this.merchantService = merchantService;
	}

	@GetMapping
	public List<MerchantDTO> findAll() {
		return merchantService.findAll();
	}

	@GetMapping("/{id}")
	public MerchantDTO findById(@PathVariable UUID id) {
		return merchantService.findById(id);
	}

	@PostMapping
	public void save(@Valid @RequestBody Merchant merchant) {
		merchantService.save(merchant);
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable UUID id) {
		merchantService.deleteById(id);
	}
	
}
