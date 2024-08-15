CREATE TABLE PERROS (Id PRIMARY KEY IDENTITY (1,1), Nombre VARCHAR (100) NOT NULL,
Raza VARCHAR NOT NULL, Sexo VARCHAR (100), Edad VARCHAR (100) NOT NULL, Tamano VARCHAR (100) NOT NULL,
Caracteristicas VARCHAR (100) NOT NULL, Municipio VARCHAR (100) NOT NULL);

INSERT INTO PERROS (Nombre, Raza, Sexo, Edad, Tamano, Caracteristicas, Municipio)
VALUES ('Taco', 'Pitbull', 'Macho','Joven','Chico','Divertido, amable, jugueton','Santa Catarina'),
('Max','Labrador','Macho','Adulto','Grande','Amigable y juguetón','San Pedro'),
('Bella','Poodle','Hembra','Joven','Chico','Inteligente y activa','Santa Catarina'),
('Rocky','Bulldog','Macho','Joven','Mediano','Valiente y tranquilo','Garcia'),
('Luna','Beagle','Hembra','Cachorro','Mediano','Curiosa y amigable','San Nicolas'),
('Charlie','Boxer','Macho','Adulto','Grande','Enérgico y leal','Escobedo'),
('Lucy','Chihuahua','Hembra','Cachorro','Chico','Valiente y alerta','Escobedo'),
('Buddy','Dachshund','Macho','Adulto','Chico','Curioso y alegre','Santa Catarina'),
('Daisy','Golden Retriever','Hembra','Joven','Grande','Amigable y paciente','Santa Catarina'),
('Molly','Rottweiler','Hembra','Adulta','Grande','Leal y protectora','Garcia');

SELECT * FROM PERROS

