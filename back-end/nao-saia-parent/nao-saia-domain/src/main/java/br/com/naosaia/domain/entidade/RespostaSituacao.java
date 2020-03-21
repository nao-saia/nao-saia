package br.com.naosaia.domain.entidade;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor(force = true)
public class RespostaSituacao {

	private boolean status;
	private String mensagem;
	
}
