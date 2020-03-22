package br.com.nao.saia.converter;

import br.com.nao.saia.dto.MerchantDTO;
import br.com.nao.saia.model.Merchant;
import org.springframework.stereotype.Component;

@Component
public class MerchantConverter {

    public Merchant fromDTOToDomain(MerchantDTO merchantDTO) {
        Merchant merchant = new Merchant();
        merchant.setId(merchantDTO.getId());
        merchant.setCompanyName(merchantDTO.getCompanyName());
        merchant.setFantasyName(merchantDTO.getFantasyName());
        merchant.setCnpj(merchantDTO.getCnpj());
        merchant.setAddress(merchantDTO.getAddress());
        merchant.setCreatedAt(merchantDTO.getCreatedAt());
        merchant.setUpdateAt(merchantDTO.getUpdateAt());
        return merchant;
    }

    public MerchantDTO fromDomainToDTO(Merchant merchant) {
        MerchantDTO merchantDTO = new MerchantDTO();
        merchantDTO.setId(merchant.getId());
        merchantDTO.setCompanyName(merchant.getCompanyName());
        merchantDTO.setFantasyName(merchant.getFantasyName());
        merchantDTO.setCnpj(merchant.getCnpj());
        merchantDTO.setAddress(merchant.getAddress());
        merchantDTO.setCreatedAt(merchant.getCreatedAt());
        merchantDTO.setUpdateAt(merchant.getUpdateAt());
        return merchantDTO;
    }

}
