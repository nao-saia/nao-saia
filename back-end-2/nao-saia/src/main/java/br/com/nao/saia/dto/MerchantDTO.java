package br.com.nao.saia.dto;

import br.com.nao.saia.model.Address;
import br.com.nao.saia.model.Merchant;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

/**
 * Classe representa o DTO de {@link Merchant}
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
public class MerchantDTO {

    private UUID id;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updateAt;
    private String fantasyName;
    private String companyName;
    private String cnpj;
    private AddressDTO address;
    private boolean acceptTerms;
    private boolean active;
    private String logo;
    private List<String> ads;
    private String whatsapp;
    private List<String> phones;
    private boolean ifood;
    private boolean uberEats;
    private boolean rappi;
    private boolean ownDelivery;
    private boolean displayAddress;
    private String note;
    
    public UUID getId() {
        return id;
    }
    
    public void setId(UUID id) {
        this.id = id;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    public LocalDateTime getUpdateAt() {
        return updateAt;
    }
    
    public void setUpdateAt(LocalDateTime updateAt) {
        this.updateAt = updateAt;
    }
    
    public String getFantasyName() {
        return fantasyName;
    }
    
    public void setFantasyName(String fantasyName) {
        this.fantasyName = fantasyName;
    }
    
    public String getCompanyName() {
        return companyName;
    }
    
    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
    
    public String getCnpj() {
        return cnpj;
    }
    
    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public AddressDTO getAddress() {
        return address;
    }

    public void setAddress(AddressDTO address) {
        this.address = address;
    }

    public boolean isAcceptTerms() {
        return acceptTerms;
    }
    
    public void setAcceptTerms(boolean acceptTerms) {
        this.acceptTerms = acceptTerms;
    }
    
    public boolean isActive() {
        return active;
    }
    
    public void setActive(boolean active) {
        this.active = active;
    }
    
    public String getLogo() {
        return logo;
    }
    
    public void setLogo(String logo) {
        this.logo = logo;
    }
    
    public List<String> getAds() {
        return ads;
    }
    
    public void setAds(List<String> ads) {
        this.ads = ads;
    }
    
    public String getWhatsapp() {
        return whatsapp;
    }
    
    public void setWhatsapp(String whatsapp) {
        this.whatsapp = whatsapp;
    }
    
    public List<String> getPhones() {
        return phones;
    }
    
    public void setPhones(List<String> phones) {
        this.phones = phones;
    }
    
    public boolean isIfood() {
        return ifood;
    }
    
    public void setIfood(boolean ifood) {
        this.ifood = ifood;
    }
    
    public boolean isUberEats() {
        return uberEats;
    }
    
    public void setUberEats(boolean uberEats) {
        this.uberEats = uberEats;
    }
    
    public boolean isRappi() {
        return rappi;
    }
    
    public void setRappi(boolean rappi) {
        this.rappi = rappi;
    }
    
    public boolean isOwnDelivery() {
        return ownDelivery;
    }
    
    public void setOwnDelivery(boolean ownDelivery) {
        this.ownDelivery = ownDelivery;
    }
    
    public boolean isDisplayAddress() {
        return displayAddress;
    }
    
    public void setDisplayAddress(boolean displayAddress) {
        this.displayAddress = displayAddress;
    }
    
    public String getNote() {
        return note;
    }
    
    public void setNote(String note) {
        this.note = note;
    }
    
}