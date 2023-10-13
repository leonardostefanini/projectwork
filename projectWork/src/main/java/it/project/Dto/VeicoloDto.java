package it.project.Dto;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder
public class VeicoloDto {
	
	private int veicoloId;
	private String descrizione;
	private String userid;
	private String tipologia;
	private String alimentazione;
	private boolean disponibilità;
	private String immagine;
	private String posizione;
	public String getPosizione() {
		return posizione;
	}
	public void setPosizione(String posizione) {
		this.posizione = posizione;
	}
	public int getVeicoloId() {
		return veicoloId;
	}
	public void setVeicoloId(int veicoloId) {
		this.veicoloId = veicoloId;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	
	
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
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
	public boolean isDisponibilità() {
		return disponibilità;
	}
	public void setDisponibilità(boolean disponibilità) {
		this.disponibilità = disponibilità;
	}
	public String getImmagine() {
		return immagine;
	}
	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}
	
	
	
	
	
	
	

}
