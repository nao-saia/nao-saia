package br.com.nao.saia.dto;

import br.com.nao.saia.model.Employer;
import org.springframework.stereotype.Component;

/**
 * Classe responsavel pela geracao de um DTO de {@link Employer}
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
@Component
public class EmployerDTOFactory {
	
	/**
	 * Gera um DTO contendo o retorno da consulta
	 *
	 */
	public EmployerDTO gerarDTO(Employer employer) {
		EmployerDTO employerDTO = new EmployerDTO();
		employerDTO.setCodigo(employer.getCodigo());
		employerDTO.setRazaoSocial(employer.getRazaoSocial());
		employerDTO.setCnpj(employer.getCnpj());
		employerDTO.setEndereco(employer.getEndereco());
		employerDTO.setMunicipio(employer.getMunicipio());
		employerDTO.setUf(employer.getUf());
		employerDTO.setStatus(employer.getStatus());
		employerDTO.setDataCriacao(employer.getDataCriacao());
		employerDTO.setDataAlteracao(employer.getDataAlteracao());
		return employerDTO;
	}
}
