package br.com.nao.saia.model;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Objects;

/**
 * Entidade que representa Usuario
 *
 * @author Taynan Rezende
 * @since 22/03/2020
 */
@Entity(name = "usuario")
public class User {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@NotEmpty(message = "Email é obrigatório")
	private String email;
	
	@NotEmpty(message = "Senha é obrigatório")
	private String senha;
	
	@NotNull(message = "Data de criação é obrigatório")
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Temporal(TemporalType.DATE)
	private Date dataCriacao;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getSenha() {
		return senha;
	}
	
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public Date getDataCriacao() {
		return dataCriacao;
	}
	
	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}
	
	@Override
	public boolean equals(Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		User user = (User) o;
		return Objects.equals(id, user.id) && Objects.equals(email, user.email) &&
				Objects.equals(senha, user.senha) && Objects.equals(dataCriacao, user.dataCriacao);
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(id, email, senha, dataCriacao);
	}
	
}
