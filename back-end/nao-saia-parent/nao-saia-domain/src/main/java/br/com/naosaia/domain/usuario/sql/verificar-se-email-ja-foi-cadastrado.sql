SELECT 	
  ( CASE WHEN count(*) > 0 THEN true ELSE false END) possuiregistro
  FROM usuarios
WHERE 
	email = :email