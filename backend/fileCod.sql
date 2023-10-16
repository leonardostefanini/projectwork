-- in local instance
create database if not exists registrazione;
grant all 
on registrazione.* 
to 'app_java'@'localhost';

USE registrazione;

  
/*CREATE TABLE archivioUtenti (
-- id int auto_increment primary key,  
ultimaModifica TIMESTAMP ,  
userID VARCHAR(16) NOT NULL,  
password VARCHAR(50) NOT NULL,  
firma TEXT,  
tipo VARCHAR(1) NOT NULL,  
nome VARCHAR(40),  
cognome VARCHAR(40),  
nascita VARCHAR(10),  
email VARCHAR(40) NOT NULL,  
dataIscrizione TIMESTAMP,  
 CONSTRAINT userID PRIMARY KEY (userID),  
 UNIQUE KEY IDX_Utente_1 (userID)  
);  */
drop table archivioutenti;
CREATE TABLE archivioutenti (
  ultimamodifica TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  userid VARCHAR(16) NOT NULL,
  password VARCHAR(50) NOT NULL,
  firma TEXT,
  tipo VARCHAR(1) NOT NULL,
  nome VARCHAR(40),
  cognome VARCHAR(40),
  nascita DATE, 
  email VARCHAR(40) NOT NULL,
  dataiscrizione TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (userid)
);
ALTER TABLE archivioutenti
MODIFY COLUMN dataiscrizione TIMESTAMP DEFAULT CURRENT_TIMESTAMP();

INSERT INTO archivioutenti (ultimamodifica,userid, password, firma, tipo, nome, cognome, nascita, email, dataiscrizione)  
VALUES ('2023-10-11','Amministratore', 'Amministratore', 'Amministratore dei servizi', 'A',  
'Paolino','Paperino','1990-10-10','paolino.paperino@paperopoli.com','2023-10-11');  

INSERT INTO archivioutenti (userid, password, firma, tipo, nome, cognome, nascita, email)  
VALUES ('utente1', 'utente1', 'Utente loggato', 'U',  
'Paolino','Paperino','1990-10-10','paolino.paperino@paperopoli.com');

INSERT INTO archivioutenti (userid, password, firma, tipo, nome, cognome, nascita, email)  
VALUES ('utente2', 'utente2', 'Utente loggato', 'U',  
'Paolino','Paperino','1990-10-10','paolino.paperino@paperopoli.com');  

/*CREATE TABLE veicolo (  
id int auto_increment primary key,
tipologia enum('Auto','Monopatini','Bicicletta'),
alimentazione enum('Elettrico','Ibrido','Benzina','Diesel','ND'),
-- descrizione json,
descrizione VARCHAR(40),
posizione VARCHAR(16),
disponibilita boolean,
data_prenotazione timestamp,
immagine VARCHAR(200),
userID_fk int
); 

alter table veicolo 
add constraint fk_userID -- nome chiave
foreign key (userID_fk) -- tabella figlia
references  archivioUtenti(userID) -- tabella padre
on delete set null 
on update cascade;*/
drop table veicolo;

CREATE TABLE veicolo (  
  id int auto_increment primary key,
  tipologia VARCHAR(15),
  alimentazione VARCHAR(10),
  descrizione VARCHAR(40),
  posizione VARCHAR(16),
  disponibilita boolean,
  data_prenotazione TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  immagine VARCHAR(200),
  user_id  VARCHAR(16) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES archivioutenti(userid)
);

insert into veicolo(tipologia,alimentazione,descrizione,posizione,disponibilita,data_prenotazione,immagine,user_id)
values();
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('BMW', 'Benzina', 'BMW x1, blu, 2000cc ', 'Roma', true, 'image.jpg', 'utente1');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('BMW', 'Benzina', 'BMW x2, giallo, 2000cc ', 'Roma', true, 'image.jpg', 'utente2');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('BMW', 'Benzina', 'BMW x3, verde, 2000cc ', 'Roma', true, 'image.jpg', 'Amministratore');



drop table ordini;
CREATE TABLE ordini (  
id int auto_increment primary key,
descrizione VARCHAR(40),
veicolo_id int not null,
user_id  VARCHAR(16) NOT NULL,
data_prenotazione TIMESTAMP DEFAULT CURRENT_TIMESTAMP not null,
FOREIGN KEY (user_id) REFERENCES archivioutenti(userid),
FOREIGN KEY (veicolo_id) REFERENCES veicolo(id)
); 

INSERT INTO ordini (descrizione, veicolo_id, user_id)
VALUES ('utente1 ha prenotato un auto', 1, 'utente2');

/*alter table ordini 
add constraint fk_idAuto 
foreign key (veicolo_id) 
references  veicolo(id) 
on delete set null 
on update cascade;

alter table ordini 
add constraint fk_userID -- nome chiave
foreign key (userID_fk) -- tabella figlia
references  archivioUtenti(userID) -- tabella padre
on delete set null 
on update cascade;*/











 
