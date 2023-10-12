package it.project.services;

import java.util.List;

import it.project.entities.Veicolo;

public interface VeicoloService {
	
	Veicolo add(Veicolo v);
	Veicolo getById(int id);
	List<Veicolo> getAll();
	Veicolo update (Veicolo v);
	void delete (int id);
	

}
