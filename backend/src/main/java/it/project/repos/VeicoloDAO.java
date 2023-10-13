package it.project.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.project.entities.Veicolo;

@Repository
public interface VeicoloDAO extends JpaRepository<Veicolo, Integer> {

}
