package fslk.com.apisc.controllers;

import fslk.com.apisc.entities.Classe;
import fslk.com.apisc.service.impl.ClasseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
//@RequestMapping("/apisc")
public class ClasseController {
    @Autowired
    private ClasseServiceImpl classeServiceImpl;

    @GetMapping(value = "/classes")
    public List<Classe> listeClasses() {
        return classeServiceImpl.listClasses();
    }

    @GetMapping(value = "/classes/{id}")
    public Classe getClasseById(@PathVariable("id") Long id) {
        Optional<Classe> newClasse = Optional.ofNullable(classeServiceImpl.getClasseId(id));
        if (newClasse.isPresent()) {
            return newClasse.get();
        } else {
            return null;
        }
    }

    @PostMapping(value = "/classes")
    public Classe createClasse(@Valid @RequestBody Classe classe) {
        return classeServiceImpl.addClasse(classe);
    }

    @PutMapping(value = "/classes/{id}")
    public Classe updateClasse(@PathVariable Long id, @RequestBody Classe classe) {
        Optional<Classe> newClasse = Optional.ofNullable(classeServiceImpl.getClasseId(id));
        if (newClasse.isPresent()) {
            classe.setId(newClasse.get().getId());
            classeServiceImpl.modifyClasse(id, classe);
        } else {
            new RuntimeException();
        }
        return classe;

    }

    @DeleteMapping(value = "/classes/{id}")
    public Classe deleteClasse(@PathVariable Long id) {
        return classeServiceImpl.supprimerClasse(id);
    }
}
