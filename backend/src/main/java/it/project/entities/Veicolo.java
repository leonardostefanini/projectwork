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
@Table (name = "veicolo")
public class Veicolo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String tipologia;
	private String alimentazione;
	private String descrizione;
	private String posizione;
	private boolean disponibilità;
	@CreationTimestamp	
	private LocalDateTime data_prenotazione;
	private String immagine;
	
	

	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	public Utente utente;

	

  public Veicolo(String tipologia, String alimentazione,String descrizione, String posizione, boolean disponibilità, String immagine,
			Utente utente) {
		
		this.tipologia = tipologia;
		this.alimentazione = alimentazione;
		this.descrizione = descrizione;
		this.posizione = posizione;
		this.disponibilità = disponibilità;
		this.immagine = immagine;
		this.utente = utente;
	}

	public Veicolo() {
	
}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTipologia() {
		return tipologia;
	}

	public void setTipologia(String tipologia) {
		this.tipologia = tipologia;
	}

	public String getAlimentazione() {
		return alimentazione;
	}

	public void setAlimentazione(String alimentazione) {
		this.alimentazione = alimentazione;
	}

	public String getPosizione() {
		return posizione;
	}

	public void setPosizione(String posizione) {
		this.posizione = posizione;
	}

	public boolean isDisponibilità() {
		return disponibilità;
	}

	public void setDisponibilità(boolean disponibilità) {
		this.disponibilità = disponibilità;
	}

	

	public LocalDateTime getData_prenotazione() {
		return data_prenotazione;
	}

	public void setData_prenotazione(LocalDateTime data_prenotazione) {
		this.data_prenotazione = data_prenotazione;
	}

	public String getImmagine() {
		return immagine;
	}

	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}

	public Utente getUtente() {
		return utente;
	}

	public void setUtente(Utente utente) {
		this.utente = utente;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	
	
	

}
