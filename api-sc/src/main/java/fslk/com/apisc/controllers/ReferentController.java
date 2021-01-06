package fslk.com.apisc.controllers;

import fslk.com.apisc.entities.Referent;
import fslk.com.apisc.service.impl.ReferentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/apisc")
public class ReferentController {
    @Autowired
    private ReferentServiceImpl referentServiceImpl;

    @GetMapping(value = "/referents")
    public List<Referent> listeReferents() {
        return referentServiceImpl.listReferents();
    }

    @GetMapping(value = "/referents/{id}")
    public Referent getReferentById(@PathVariable("id") Long id) {
        Optional<Referent> newReferent = Optional.ofNullable(referentServiceImpl.getReferentId(id));
        if (newReferent.isPresent()) {
            return newReferent.get();
        } else {
            return null;
        }
    }

    @PostMapping(value = "/referents")
    public Referent createReferent(@Valid @RequestBody Referent referent) {
        return referentServiceImpl.addReferent(referent);
    }

    @PutMapping(value = "/referents/{id}")
    public Referent updateReferent(@PathVariable Long id, @RequestBody Referent referent) {
        Optional<Referent> newReferent = Optional.ofNullable(referentServiceImpl.getReferentId(id));
        if (newReferent.isPresent()) {
            referent.setId(newReferent.get().getId());
            referentServiceImpl.addReferent(referent);
        } else {
            new RuntimeException();
        }
        return referent;
    }

    @DeleteMapping(value = "/referents/{id}")
    public Referent deleteReferent(@PathVariable Long id) {
        return referentServiceImpl.supprimerReferent(id);
    }

}
