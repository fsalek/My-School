package fslk.com.apisc.controllers;

import fslk.com.apisc.entities.Niveau;
import fslk.com.apisc.service.impl.NiveauServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/apisc")
public class NiveauController {
    @Autowired
    private NiveauServiceImpl niveauServiceImpl;

    @GetMapping(value = "/niveaux")
    public List<Niveau> listeNiveaux() {
        return niveauServiceImpl.listNiveaux();
    }
    @GetMapping(value = "/niveaux/{id}")
    public Niveau getNiveauById(@PathVariable("id") Long id) {
        Optional<Niveau> newNiveau = Optional.ofNullable(niveauServiceImpl.getNiveauId(id));
        if (newNiveau.isPresent()) {
            return newNiveau.get();
        } else {
            return null;
        }
    }

    @PostMapping(value = "/niveaux")
    public Niveau createNiveau(@Valid @RequestBody Niveau niveau) {
        return niveauServiceImpl.addNiveau(niveau);
    }

    @PutMapping(value = "/niveaux/{id}")
    public Niveau updateNiveau(@PathVariable Long id, @RequestBody Niveau niveau) {
        Optional<Niveau> newNiveau = Optional.ofNullable(niveauServiceImpl.getNiveauId(id));
        if (newNiveau.isPresent()) {
            niveau.setId(newNiveau.get().getId());
            niveauServiceImpl.modifyNiveau(id, niveau);
        } else {
            new RuntimeException();
        }
        return niveau;
    }

    @DeleteMapping(value = "/niveaux/{id}")
    public Niveau deleteNiveau(@PathVariable Long id) {
        return niveauServiceImpl.supprimerNiveau(id);
    }
}
