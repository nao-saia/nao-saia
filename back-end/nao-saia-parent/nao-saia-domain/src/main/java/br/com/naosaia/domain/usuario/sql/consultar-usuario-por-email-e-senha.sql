SELECT 	
	idusuario, 
	email, 
	senha, 
	dataatualizacao
  FROM usuarios
WHERE 
	email = :email AND senha = :senha