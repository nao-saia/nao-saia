package br.com.nao.saia.model;

import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import java.util.Objects;

public class Address {
	
	private GeoJsonPoint geocode;
	
	private String endereco;
	
	private String bairro;
	
	private String cep;
	
	public GeoJsonPoint getGeocode() {
		return geocode;
	}
	
	public void setGeocode(GeoJsonPoint geocode) {
		this.geocode = geocode;
	}
	
	public String getEndereco() {
		return endereco;
	}
	
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	
	public String getBairro() {
		return bairro;
	}
	
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	
	public String getCep() {
		return cep;
	}
	
	public void setCep(String cep) {
		this.cep = cep;
	}
	
	@Override
	public boolean equals(Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		Address address = (Address) o;
		return Objects.equals(geocode, address.geocode) && Objects.equals(endereco, address.endereco) &&
				Objects.equals(bairro, address.bairro) && Objects.equals(cep, address.cep);
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(geocode, endereco, bairro, cep);
	}
	
}
