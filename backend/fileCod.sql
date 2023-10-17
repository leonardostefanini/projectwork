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

INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Benzina', 'BMW x1, 200cc ', 'Roma', true, 'https://web.imgstore.it/86f8f5fbe76b42739d2166c2e7be8c98_orig.jpg', 'utente1');
 INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Elettrica', 'Tesla model 3, 283cc ', 'Roma', true, 'https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=FRONT34&size=1400&model=ms&options=$MDLS,$MTS14,$PPSW,$WS10,$APBS,$SC04,$CPF0,$TW01,$IWC00,$ST0Y&crop=1400,850,300,130&', 'utente1');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Elettrica', 'Ford Mustang Mach-E, 487cc ', 'Roma', true, 'https://www.ford.it/content/dam/guxeu/rhd/central/cars/2019-cx727/pre-launch/gt-white.png.renditions.original.png', 'utente1');
 INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Elettrica', 'Polestar 3, 517cc ', 'Roma', true, 'https://cdn.drivek.com/configurator-icon/cars/it/$original$/POLESTAR/3/41390_SUV-5-DOORS/polestar-3-side-view.png', 'utente1');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Elettrica', 'Hyundai Ioniq 6, 325cc ', 'Roma', true, 'https://www.sunmotor.com/wp-content/uploads/2020/03/Nocturne-Gray-Matte-310x190.png', 'utente1');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Elettrica', 'BMW i7, 455cc ', 'Roma', true, 'https://images.dealer.com/ddc/vehicles/2024/BMW/i7/Sedan/trim_M70_a4ebb0/color/Oxide%20Gray%20Metallic-C4A-45%2C46%2C50-640-en_US.jpg', 'utente1');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Elettrica', 'Tesla Model S, 670cc ', 'Roma', true, 'https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=FRONT34&size=1400&model=ms&options=$MDLS,$MTS14,$PPSW,$WS10,$APBS,$SC04,$CPF0,$TW01,$IWC00,$ST0Y&crop=1400,850,300,130&', 'utente1');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Bicicletta', 'Elettrica', 'XIAOMI MI Electric Scooter', 'Roma', true, 'https://images.eprice.it/nobrand/0/lightbox/654/303255654/39761789_1709950131.jpg','utente1');


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
VALUES ('utente2 ha prenotato', 1, 'utente2');

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











 
