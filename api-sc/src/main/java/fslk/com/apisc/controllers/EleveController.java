package fslk.com.apisc.controllers;

import fslk.com.apisc.entities.Eleve;
import fslk.com.apisc.repository.EleveRepository;
import fslk.com.apisc.service.impl.EleveServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import javax.validation.Valid;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/apisc")
public class EleveController {
    @Autowired
    private EleveServiceImpl eleveServiceImpl;
    @Autowired
    private EleveRepository eleveRepository;
    @Autowired
    ServletContext context;

    @GetMapping(value = "/eleves")
    public List<Eleve> listeEleves() {
        return eleveServiceImpl.listEleves();
    }

    @GetMapping(value = "/eleves/{id}")
    public Eleve getEleveById(@PathVariable("id") Long id) {
        Optional<Eleve> newEleve = Optional.ofNullable(eleveServiceImpl.getEleveId(id));
        if (newEleve.isPresent()) {
            return newEleve.get();
        } else {
            return null;
        }
    }

    @PostMapping(value = "/eleves")
    public Eleve createEleve(@Valid @RequestBody Eleve eleve) {
        return eleveServiceImpl.addEleve(eleve);
    }

    @PutMapping(value = "/eleves/{id}")
    public Eleve updateEleve(@PathVariable Long id, @RequestBody Eleve eleve) {
        Optional<Eleve> newEleve = Optional.ofNullable(eleveServiceImpl.getEleveId(id));
        if (newEleve.isPresent()) {
            eleve.setId(newEleve.get().getId());
            eleveServiceImpl.modifyEleve(id, eleve);
        } else {
            new RuntimeException();
        }
        return eleve;
    }

    @DeleteMapping(value = "/eleves/{id}")
    public Eleve deleteEleve(@PathVariable Long id) {
        return eleveServiceImpl.supprimerEleve(id);
    }

    @GetMapping(value = "/eleves/photoEleve/{id}", produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getPhoto(@PathVariable("id") Long id) throws Exception {
        Eleve eleve = eleveRepository.findById(id).get();
        return Files.readAllBytes(Paths.get(System.getProperty("user.home") + "/Desktop/Java Dev/JEE-Angular/My School/PhotoSchool/" + eleve.getPhotoName()));
    }

    @PostMapping(value = "/eleves/uploadPhoto/{id")
    public void uploadPhoto(@RequestParam("file") MultipartFile file, @PathVariable Long id) throws Exception{
        Eleve eleve = eleveRepository.findById(id).get();
        eleve.setPhotoName(id + ".png");
        // eleve.setPhotoName(file.getOriginalFilename());
        Files.write(Paths.get(System.getProperty("user.home") + "/Desktop/Java Dev/JEE-Angular/My School/PhotoSchool/" + eleve.getPhotoName()), file.getBytes());
        eleveRepository.save(eleve);
    }
    /*@GetMapping(path="/Imgeleves/{id}")
    public byte[] getPhoto(@PathVariable("id") Long id) throws Exception{
        Eleve eleve   = eleveRepository.findById(id).get();
        return Files.readAllBytes(Paths.get(context.getRealPath("/Images/")+eleve.getPhotoName()));
    }*/

}
