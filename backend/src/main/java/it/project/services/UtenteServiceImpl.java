package it.project.services;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.project.entities.Utente;
import it.project.repos.UtenteDAO;

@Service
public class UtenteServiceImpl implements UtenteService {

	
	@Autowired
	UtenteDAO utenteDao;
	
	@Override
	public List<Utente> getAll() {
		
		return utenteDao.findAll();
	}

	@Override
	public Utente add(Utente u) {
		
		return utenteDao.save(u);
	}
	
	
	

	@Override
	public Utente findByUserid(String userid) {
		
	 Optional<Utente> u = utenteDao.findByUserid(userid);
	 if(u.isPresent()) {
		 return u.get();
	 }else {
		 return null;
	 }
	}

	

}
