package it.project.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.project.entities.Ordine;


@Repository
public interface OrdineDAO extends JpaRepository<Ordine, Integer> {

}
