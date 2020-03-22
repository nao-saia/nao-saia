package br.com.nao.saia.service;

import br.com.nao.saia.dto.EmployerDTO;
import br.com.nao.saia.dto.EmployerDTOFactory;
import br.com.nao.saia.model.Employer;
import br.com.nao.saia.repository.EmployerRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

/**
 * Service de {@link Employer}
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
@Service
public class EmployerService {

	private final EmployerRepository employerRepository;
	private final EmployerDTOFactory employerDTOFactory;
	
	public EmployerService(EmployerDTOFactory employerDTOFactory,
						   EmployerRepository employerRepository) {
		this.employerDTOFactory = employerDTOFactory;
		this.employerRepository = employerRepository;
	}
	
	public void salvar(Employer employer) {
		try {
			employerRepository.save(employer);
		} catch (DataIntegrityViolationException e) {
			throw new IllegalArgumentException("Formato de data inválida");
		}
	}

	public void excluir(Long codigo) {
		employerRepository.delete(codigo);
	}

	public List<EmployerDTO> findAll() {
		List<EmployerDTO> listDTO = new ArrayList<>();
		for (Employer employer : employerRepository.findAll()) {
			listDTO.add(employerDTOFactory.gerarDTO(employer));
		}
		return listDTO;
	}
	
	public List<EmployerDTO> findByFilter(String param) {
		List<EmployerDTO> listDTO = new ArrayList<>();
		for (Employer employer : employerRepository.findByRazaoSocialStartingWithIgnoreCase(param)) {
			listDTO.add(employerDTOFactory.gerarDTO(employer));
		}
		return listDTO;
	}
}
