package fslk.com.apisc.repository;

import fslk.com.apisc.entities.Referent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReferentRepository extends JpaRepository<Referent, Long> {
}
