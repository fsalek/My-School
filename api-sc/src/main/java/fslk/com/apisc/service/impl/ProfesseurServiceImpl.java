package fslk.com.apisc.service.impl;

import fslk.com.apisc.entities.Professeur;
import fslk.com.apisc.repository.ProfesseurRepository;
import fslk.com.apisc.service.ProfesseurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfesseurServiceImpl implements ProfesseurService {
    @Autowired
    private ProfesseurRepository professeurRepository;
    @Override
    public List<Professeur> listProfesseurs() {
        return professeurRepository.findAll();
    }

    @Override
    public Professeur getProfesseurId(Long id) {
        Optional<Professeur> ref = professeurRepository.findById(id);
        if (ref.isPresent()){
            return ref.get();
        }
        return null;
    }

    @Override
    public Professeur addProfesseur(Professeur professeur) {
        return professeurRepository.save(professeur);
    }

    public Professeur modifyProfesseur(Long id, Professeur professeur) {
        try {
            Professeur proSrc = this.getProfesseurId(id);
            professeur.setId(proSrc.getId());
            return professeurRepository.save(proSrc);
        } catch (Exception e) {
            //TODO: handle exception
            throw new RuntimeException("Professeur not Saved an error occured");
        }
    }


    @Override
    public Professeur supprimerProfesseur(long id) {
        Professeur ref = professeurRepository.getProfesseurById(id);
        if (ref!= null){
            professeurRepository.deleteById(id);
        }
        return ref;
    }
}
