package br.com.naosaia.domain.entidade;

import java.util.Date;
import java.util.UUID;

import com.google.gson.annotations.SerializedName;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor(force = true)
public class Usuario {
 
	@SerializedName(value = "idusuario", alternate = "idUsuario")
	private UUID idUsuario;

	private String email;
	
	private String senha;
		
	@SerializedName(value = "dataatualizacao", alternate = "dataAtualizacao")
	private Date dataAtualizacao;

}
