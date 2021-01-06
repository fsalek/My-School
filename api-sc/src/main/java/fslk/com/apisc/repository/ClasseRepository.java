package fslk.com.apisc.repository;

import fslk.com.apisc.entities.Classe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClasseRepository extends JpaRepository<Classe, Long> {
    public Classe getClasseById(Long id);
}
