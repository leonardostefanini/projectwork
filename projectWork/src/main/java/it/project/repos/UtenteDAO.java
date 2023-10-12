package it.project.repos;





import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.project.entities.Utente;


@Repository
public interface UtenteDAO extends JpaRepository<Utente,Integer> {

	Utente findByUserId(String userid);


	
	

}
