package fslk.com.apisc.repository;

import fslk.com.apisc.entities.Matiere;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatiereRepository extends JpaRepository<Matiere, Long> {
    Matiere getMatiereById(long id);
}
