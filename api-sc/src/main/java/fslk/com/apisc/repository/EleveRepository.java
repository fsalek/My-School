package fslk.com.apisc.repository;

import fslk.com.apisc.entities.Eleve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EleveRepository extends JpaRepository<Eleve, Long> {
    public List<Eleve> findByFirstNameContains(@Param("mc") String mc);
    public List<Eleve> findByFirstName(@Param("firstName") String name);

    public Eleve getEleveById(long id);
}
