package fslk.com.apisc.controllers;

import fslk.com.apisc.entities.Professeur;
import fslk.com.apisc.service.impl.ProfesseurServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/apisc")
public class ProfesseurController {
    @Autowired
    private ProfesseurServiceImpl professeurServiceImpl;

    @GetMapping(value = "/professeurs")
    public List<Professeur> listeProfesseurs() {
        return professeurServiceImpl.listProfesseurs();
    }

    @GetMapping(value = "/professeurs/{id}")
    public Professeur getProfesseurById(@PathVariable("id") Long id) {
        Optional<Professeur> newProfesseur = Optional.ofNullable(professeurServiceImpl.getProfesseurId(id));
        if (newProfesseur.isPresent()) {
            return newProfesseur.get();
        } else {
            return null;
        }
    }

    @PostMapping(value = "/professeurs")
    public Professeur createProfesseur(@Valid @RequestBody Professeur professeur) {
        return professeurServiceImpl.addProfesseur(professeur);
    }

    @PutMapping(value = "/professeurs/{id}")
    public Professeur updateProfesseur(@PathVariable Long id, @RequestBody Professeur professeur) {
        Optional<Professeur> newProfesseur = Optional.ofNullable(professeurServiceImpl.getProfesseurId(id));
        if (newProfesseur.isPresent()) {
            professeur.setId(newProfesseur.get().getId());
            professeurServiceImpl.modifyProfesseur(id, professeur);
        } else {
            new RuntimeException();
        }
        return professeur;
    }

    @DeleteMapping(value = "/professeurs/{id}")
    public Professeur deleteProfesseur(@PathVariable Long id) {
        return professeurServiceImpl.supprimerProfesseur(id);
    }

}
