package br.com.nao.saia.dto;

import br.com.nao.saia.model.Merchant;
import org.springframework.stereotype.Component;

/**
 * Classe responsavel pela geracao de um DTO de {@link Merchant}
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
@Component
public class MerchantDTOFactory {
	
	/**
	 * Gera um DTO contendo o retorno da consulta
	 *
	 */
	public MerchantDTO createMerchantDTO(Merchant merchant) {
		MerchantDTO merchantDTO = new MerchantDTO();
		merchantDTO.setId(merchant.getId());
		merchantDTO.setName(merchant.getName());
		merchantDTO.setCnpj(merchant.getCnpj());
		merchantDTO.setAddress(merchant.getAddress());
		merchantDTO.setCity(merchant.getCity());
		merchantDTO.setUf(merchant.getUf());
		merchantDTO.setCreatedAt(merchant.getCreatedAt());
		merchantDTO.setUpdateAt(merchant.getUpdateAt());
		return merchantDTO;
	}
}
