package br.com.nao.saia.model;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Entidade que representa Empresa
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
@Document(collection = "merchants")
public class Merchant extends EntitySupport {

    private String name;

    private String cnpj;

    private String address;

    private String city;

    private String uf;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

}
