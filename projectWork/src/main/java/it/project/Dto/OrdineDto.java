package it.project.Dto;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder
public class OrdineDto {  //oggetto costumizzato - data transfer object 
	
	private String userid;
	private int veicoloId;
	private String descrizione;
	
	
	
	
	
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
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
	
	
	
	 /*
	   {
	   "utenteId" : "utente1",
	   "veicoloId" : 1,
	   "descrizione": "cicciopasticcio",
	   
	   
	   
	   }
	  */

}
