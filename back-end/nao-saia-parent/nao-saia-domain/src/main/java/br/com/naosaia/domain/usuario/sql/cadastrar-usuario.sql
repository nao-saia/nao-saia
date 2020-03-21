INSERT INTO usuarios
	(
     idusuario, 
     email, 
     senha, 
     dataatualizacao
    )
    VALUES 
    (
     :idusuario::uuid, 
     upper(:email), 
     :senha, 
     now()
	)