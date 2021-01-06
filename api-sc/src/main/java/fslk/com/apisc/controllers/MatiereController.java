package fslk.com.apisc.controllers;

import fslk.com.apisc.entities.Matiere;
import fslk.com.apisc.service.impl.MatiereServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/apisc")
public class MatiereController {
    @Autowired
    private MatiereServiceImpl matiereServiceImpl;

    @GetMapping(value = "/matieres")
    public List<Matiere> listeMatieres() {
        return matiereServiceImpl.listMatieres();
    }

    @GetMapping(value = "/matieres/{id}")
    public Matiere getMatiereById(@PathVariable("id") Long id) {
        Optional<Matiere> newMatiere = Optional.ofNullable(matiereServiceImpl.getMatiereId(id));
        if (newMatiere.isPresent()) {
            return newMatiere.get();
        } else {
            return null;
        }
    }

    @PostMapping(value = "/matieres")
    public Matiere createMatiere(@Valid @RequestBody Matiere matiere) {
        return matiereServiceImpl.addMatiere(matiere);
    }

    @PutMapping(value = "/matieres/{id}")
    public Matiere updateMatiere(@PathVariable Long id, @RequestBody Matiere matiere) {
        Optional<Matiere> newMatiere = Optional.ofNullable(matiereServiceImpl.getMatiereId(id));
        if (newMatiere.isPresent()) {
            matiere.setId(newMatiere.get().getId());
            matiereServiceImpl.modifyMatiere(id, matiere);
        } else {
            new RuntimeException();
        }
        return matiere;
    }

    @DeleteMapping(value = "/matieres/{id}")
    public Matiere deleteMatiere(@PathVariable Long id) {
        return matiereServiceImpl.supprimerMatiere(id);
    }

}
