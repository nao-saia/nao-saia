package br.com.nao.saia.model;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * Entidade que representa Empresa
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
@Entity(name = "empresa")
public class Employer {
	
	@Id
	@GeneratedValue
	private Long codigo;
	
	@NotEmpty(message = "Razão Social é obrigatório")
	private String razaoSocial;
	
	@NotEmpty(message = "CNPJ é obrigatório")
	private String cnpj;
	
	@NotEmpty(message = "Endereço é obrigatório")
	private String endereco;
	
	@NotEmpty(message = "Município é obrigatório")
	private String municipio;
	
	@NotEmpty(message = "UF é obrigatório")
	private String uf;
	
	@NotNull(message = "Status é obrigatório")
	private Boolean status;
	
	@NotNull(message = "Data de criação é obrigatório")
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Temporal(TemporalType.DATE)
	private Date dataCriacao;
	
	@NotNull(message = "Data de alteração é obrigatório")
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Temporal(TemporalType.DATE)
	private Date dataAlteracao;
	
	@Transient
	private Boolean checked;
	
	public Boolean getChecked() {
		return checked;
	}
	
	public void setChecked(Boolean checked) {
		this.checked = checked;
	}
	
	public Employer() {
		super();
	}
	
	public Employer(String razaoSocial, String cnpj, Date dataCriacao, Date dataAlteracao, String endereco,
					String municipio, String uf, Boolean status) {
		super();
		this.razaoSocial = razaoSocial;
		this.cnpj = cnpj;
		this.endereco = endereco;
		this.municipio = municipio;
		this.uf = uf;
		this.status = status;
		this.dataCriacao = dataCriacao;
		this.dataAlteracao = dataAlteracao;
	}
	
	public String getEndereco() {
		return endereco;
	}
	
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	
	public String getMunicipio() {
		return municipio;
	}
	
	public void setMunicipio(String municipio) {
		this.municipio = municipio;
	}
	
	public String getUf() {
		return uf;
	}
	
	public void setUf(String uf) {
		this.uf = uf;
	}
	
	public Long getCodigo() {
		return codigo;
	}
	
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	
	public String getRazaoSocial() {
		return razaoSocial;
	}
	
	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}
	
	public String getCnpj() {
		return cnpj;
	}
	
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	
	public Date getDataCriacao() {
		return dataCriacao;
	}
	
	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}
	
	public Date getDataAlteracao() {
		return dataAlteracao;
	}
	
	public void setDataAlteracao(Date dataAlteracao) {
		this.dataAlteracao = dataAlteracao;
	}
	
	public Boolean getStatus() {
		return status;
	}
	
	public void setStatus(Boolean status) {
		this.status = status;
	}
	
	@Override
	public boolean equals(Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		Employer employer = (Employer) o;
		return Objects.equals(codigo, employer.codigo) && Objects.equals(razaoSocial, employer.razaoSocial) &&
				Objects.equals(cnpj, employer.cnpj) && Objects.equals(endereco, employer.endereco) &&
				Objects.equals(municipio, employer.municipio) && Objects.equals(uf, employer.uf) &&
				Objects.equals(status, employer.status) && Objects.equals(dataCriacao, employer.dataCriacao) &&
				Objects.equals(dataAlteracao, employer.dataAlteracao) && Objects.equals(checked, employer.checked);
	}
	
	@Override
	public int hashCode() {
		return Objects
				.hash(codigo, razaoSocial, cnpj, endereco, municipio, uf, status, dataCriacao, dataAlteracao, checked);
	}
	
}
