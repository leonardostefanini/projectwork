package it.project.services;

import java.util.List;

import it.project.entities.Ordine;

public interface OrdineService {
	
	
	Ordine add(Ordine o);
	Ordine getById (int id);
	List<Ordine> getAll();
	Ordine update (Ordine o);
	void delete (int id);
	
	

}
