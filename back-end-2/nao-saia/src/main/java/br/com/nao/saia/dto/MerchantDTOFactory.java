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
		merchantDTO.setCreatedAt(merchant.getCreatedAt());
		merchantDTO.setUpdateAt(merchant.getUpdateAt());
		merchantDTO.setFantasyName(merchant.getFantasyName());
		merchantDTO.setCompanyName(merchant.getCompanyName());
		merchantDTO.setCnpj(merchant.getCnpj());
		merchantDTO.setGeocode(merchant.getAddress().getGeocode());
		merchantDTO.setEndereco(merchant.getAddress().getEndereco());
		merchantDTO.setBairro(merchant.getAddress().getBairro());
		merchantDTO.setCep(merchant.getAddress().getCep());
		merchantDTO.setAcceptTerms(merchant.isAcceptTerms());
		merchantDTO.setActive(merchant.isActive());
		merchantDTO.setLogo(merchant.getLogo());
		merchantDTO.setAds(merchant.getAds());
		merchantDTO.setWhatsapp(merchant.getWhatsapp());
		merchantDTO.setPhones(merchant.getPhones());
		merchantDTO.setIfood(merchant.isIfood());
		merchantDTO.setUberEats(merchant.isUberEats());
		merchantDTO.setRappi(merchant.isRappi());
		merchantDTO.setOwnDelivery(merchant.isOwnDelivery());
		merchantDTO.setDisplayAddress(merchant.isDisplayAddress());
		merchantDTO.setNote(merchant.getNote());
		return merchantDTO;
	}
}
