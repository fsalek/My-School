package fslk.com.apisc.repository;

import fslk.com.apisc.entities.Professeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfesseurRepository extends JpaRepository<Professeur, Long> {
    Professeur getProfesseurById(long id);
}
