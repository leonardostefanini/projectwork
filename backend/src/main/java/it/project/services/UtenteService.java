package it.project.services;

import java.util.List;

import it.project.entities.Utente;

public interface UtenteService {
	
	List<Utente> getAll();
	Utente add(Utente u);
	Utente findByUserId(String userid);

}
