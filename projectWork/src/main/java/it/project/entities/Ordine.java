package it.project.entities;


import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;


import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ordini")
public class Ordine {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	private Utente utente;
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "veicolo_id")
	private Veicolo veicolo;
	
	private String descrizione;
	@CreationTimestamp
	//@UpdateTimestamp
	private LocalDateTime  data_prenotazione;
	
		
	
	
	public Ordine(Utente utente, Veicolo veicolo, String descrizione) {
		
		this.utente = utente;
		this.veicolo = veicolo;
		this.descrizione = descrizione;
		
	}
	public Ordine() {
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Utente getUtente() {
		return utente;
	}
	public void setUtente(Utente utente) {
		this.utente = utente;
	}
	public Veicolo getVeicolo() {
		return veicolo;
	}
	public void setVeicolo(Veicolo veicolo) {
		this.veicolo = veicolo;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	public LocalDateTime getData_prenotazione() {
		return data_prenotazione;
	}
	public void setData_prenotazione(LocalDateTime data_prenotazione) {
		this.data_prenotazione = data_prenotazione;
	}
	
	
	
	
}
