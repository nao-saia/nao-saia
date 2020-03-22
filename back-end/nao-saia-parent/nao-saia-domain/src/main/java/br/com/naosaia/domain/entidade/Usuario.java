package br.com.naosaia.domain.entidade;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.google.gson.annotations.SerializedName;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor(force = true)
@Document(collection = "usuarios")
public class Usuario {
 
	@Id
	private String id;

	private String email;
	
	private String senha;
		
	@SerializedName(value = "dataatualizacao", alternate = "dataAtualizacao")
	private Date dataAtualizacao;

}
