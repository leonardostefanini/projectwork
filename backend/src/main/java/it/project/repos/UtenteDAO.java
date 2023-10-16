package it.project.repos;
import java.util.Optional;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.project.entities.Utente;


@Repository
public interface UtenteDAO extends JpaRepository<Utente,String> {

	Optional<Utente> findByUserid(String userid);



}
