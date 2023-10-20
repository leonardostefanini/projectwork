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
ALTER TABLE archivioutenti
MODIFY COLUMN  ultimamodifica TIMESTAMP DEFAULT CURRENT_TIMESTAMP();

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
  immagine VARCHAR(400),
  user_id  VARCHAR(20) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES archivioutenti(userid)
);
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Elettrica', 'Tesla model 3, 283cc ', 'Roma', true, 'https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=FRONT34&size=1400&model=ms&options=$MDLS,$MTS14,$PPSW,$WS10,$APBS,$SC04,$CPF0,$TW01,$IWC00,$ST0Y&crop=1400,850,300,130&', 'Amministratore');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Elettrica', 'Ford Mustang Mach-E, 487cc ', 'Roma', true, 'https://www.ford.it/content/dam/guxeu/rhd/central/cars/2019-cx727/pre-launch/gt-white.png.renditions.original.png', 'Amministratore');
 INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Elettrica', 'Polestar 3, 517cc ', 'Roma', true, 'https://cdn.drivek.com/configurator-icon/cars/it/$original$/POLESTAR/3/41390_SUV-5-DOORS/polestar-3-side-view.png', 'Amministratore');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Bicicletta', 'Elettrica', 'The One Nitro 250W', 'Ancona', false, 'https://png2.cleanpng.com/sh/c73e03cfca38d871f4d26ccee494f803/L0KzQYm3VMI2N5J3j5H0aYP2gLBuTfVtbZR5ittsLXLsc8rqjPUua6pohNt3Zz33eLa0hfJqc5YyiAZ4cnWwebBqTfV2epCyfORqZ3XxPYbohcBjOWFpTKlqY3K2Pom9WMk4QGo8Sac7NEa6RIm5WcI6O2cziNDw/kisspng-electric-bicycle-cycling-the-ebike-store-inc-euro-dragen-5ae0b10d47acb3.8689789715246748292936.png', 'Amministratore');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Bicicletta', 'Elettrica', 'Ness 3.0, 1.334 Wh ', 'Firenze', false, 'https://png2.cleanpng.com/sh/eedc8048afd0cc62eeb395979330ee90/L0KzQYm3V8ExN5Dte5H0aYP2gLBuTfVtbZR5ittsLXLsc8rqjPUueKN0iNpudHWwdX7piftmNZJxjZ9saYT8Pbbzhft1epCyfZ9raXvoPcH5jCBpbaVqRadrNETpRYPoU8BkbGY5RqsCM0i3SYe8UcU0OWM5TaoBNkG8SYq1kP5o/kisspng-electric-bicycle-prophete-e-bike-alu-city-elektro-e-bike-prophete-5b44f52a30cd54.9738496515312458661999.png', 'Amministratore');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Monopattino', 'Elettrico', 'XIAOMI MI Electric', 'Torino', true, 'https://png2.cleanpng.com/sh/9b93fb4f7d4f1ae92a143cf4f6814b05/L0KzQYm3V8I0N5D6epH0aYP2gLBuTgdpbZZxRdd1ZXP3grrqTf1wfJD3eAtsbHX2PbL1hL10a5D0jNd7cz32dbb9TfNqfKpoRdhycoP3PcH5hgNqbJZzjJ90YYrke7n6lPFvNZVmkZ8AYkW5SLLtgvM0O5I2TpC9MkS5Qom4WcE2O2M4Uao8M0G6SYqATwBvbz==/kisspng-wheel-electric-motorcycles-and-scooters-seev-cityc-first-president-kazakhstan-day-5b568afbc33a16.4246281915323983317997.png', 'Amministratore');

INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Monopattino', 'Elettrico', 'Faster Green, 350W', 'Torino', true, 'https://png2.cleanpng.com/sh/204e0dbd2da264276636287683cb03f9/L0KzQYm3U8I0N6V4j5H0aYP2gLBuTfVtbZR5ittsLYboeLrqjPUubZ1qeAZ7aXOwe7rqi710a5D0jNd7LXXvdbT7kvlkNZ50ReVsb3B3dcO0VfFjPWU4ftM9M0S2cYW1UMEyQGE3UKQ6NUK0SIOBWMU5Omg6TZD5bne=/kisspng-electric-vehicle-electric-kick-scooter-electric-mo-scooter-5ab543fa4343a4.0118028215218288582755.png', 'Amministratore');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Ibrida', 'Mercedes, 455cc ', 'Salerno', false, 'https://png2.cleanpng.com/sh/4394e8961026bafcffc4cfa804ec745e/L0KzQYi4UsAyN2hrSJGAYUK0R4S7gslmbWpmTpCANEKzSYi7VcE2OWM2TKMBNEO5RYGCTwBvbz==/5a21734b9ee9a6.5420974515121416436509.png', 'Amministratore');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Diesel', 'BMW M3', 'Firenze', false, 'https://png2.cleanpng.com/sh/3cfb5b81cb80eae7f0818adf48bd906a/L0KzQYm3UsA3N6JofZH0aYP2gLBuTcIxOWgyet9CLX22PYO3Ucguap58Rd88LXPkgn7pjgcugGcyet9CLX22PcH1h71kdJp1eeR9LUXkR7K5VsFibGZmTNgELkG0RYG5UsI0OWY2T6sANEW7RomAVcEveJ9s/kisspng-2017-bmw-m3-2018-bmw-m3-car-bmw-x6-bmw-m3-png-clipart-5a7a261ad5a4f9.1150222315179545868751.png', 'Amministratore');
INSERT INTO veicolo (tipologia, alimentazione, descrizione, posizione, disponibilita,immagine, user_id)
VALUES ('Auto', 'Elettrica', 'Tesla Model S, 670cc ', 'Roma', true, 'https://png2.cleanpng.com/sh/05cb6d6d5beea75d0bddb346fe6f26e0/L0KzQYm3UsA1N6dxj5H0aYP2gLBuTgRme51mRd94ZHXvPcS0gBFzNaVqi95qLX3ydLbzTggufJZ4hNM2bXB3f8P6TgRme51mReJ3Zz33grL1kCBiepZzjJ9ybXHqdX68gcc4apI2fqRvNnbpQHA7V8I4OWE2TaMAMUe6SYaBV8EyQWU4RuJ3Zx==/kisspng-tesla-model-s-car-tesla-model-x-tesla-motors-tesla-png-transparent-image-5a77ba1f2f6ff0.4727101515177958711943.png', 'Amministratore');


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











 








 
