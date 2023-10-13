package it.project.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "archivioutenti")
public class Utente {
	
	private Date ultimamodifica;
	
	@Id
//	@Column(name = "userid")
//	
	private String userid;
	 
	private String password;
	private String firma;
	private String tipo;
	private String nome;
	private String cognome;
	private Date nascita;
	private String email;
	private Date dataiscrizione;
	
	
	public Date getUltimamodifica() {
		return ultimamodifica;
	}
	public void setUltimamodifica(Date ultimamodifica) {
		this.ultimamodifica = ultimamodifica;
	}
	
	
	
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirma() {
		return firma;
	}
	public void setFirma(String firma) {
		this.firma = firma;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public Date getNascita() {
		return nascita;
	}
	public void setNascita(Date nascita) {
		this.nascita = nascita;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getDataiscrizione() {
		return dataiscrizione;
	}
	public void setDataiscrizione(Date dataiscrizione) {
		this.dataiscrizione = dataiscrizione;
	}
	

}
