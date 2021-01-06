package fslk.com.apisc.service.impl;

import fslk.com.apisc.entities.Eleve;
import fslk.com.apisc.repository.EleveRepository;
import fslk.com.apisc.service.EleveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EleveServiceImpl implements EleveService {
    // Save the uploaded file to this folder for eleve documents
    private static String ELEVE_FOLDER = "eleves";
    @Autowired
    private EleveRepository eleveRepository;

    @Override
    public List<Eleve> listEleves() {
        return eleveRepository.findAll();
    }

    @Override
    public Eleve getEleveId(Long id) {
        Optional<Eleve> elev = eleveRepository.findById(id);
        if (elev.isPresent()) {
            return elev.get();
        } else {
            return null;
        }
    }

    @Override
    public Eleve addEleve(Eleve eleve) {
        return eleveRepository.save(eleve);
    }

    public Eleve modifyEleve(Long id, Eleve eleve) {
        try {
            Eleve elevSrc = this.getEleveId(id);
            eleve.setId(elevSrc.getId());
            return eleveRepository.save(elevSrc);
        } catch (Exception e) {
            //TODO: handle exception
            throw new RuntimeException("Eleve not Saved an error occured");
        }
    }

    @Override
    public Eleve supprimerEleve(long id) {
        Eleve newClass = eleveRepository.getEleveById(id);
        if(newClass!=null){
            eleveRepository.deleteById(id);
        }
        return newClass;
    }


    @Override
    public List<Eleve> lisEleveFirstNameContains(String mc) {
        return eleveRepository.findByFirstName(mc);
    }

    /*@Override
    @Transactional
    public void saveAvatar(MultipartFile imageAvatar, Long eleveID) throws IOException, RuntimeException {

        // Bloc de contrôle à déplacer dans le service
        // Regarde si le type est image et que la taille n'exède pas 10Mb
        if (imageAvatar.isEmpty()) {
            throw new IOException("please select a file!");
        }
        else if (!imageAvatar.getContentType().startsWith("image/")) {
            throw new IOException("select a correct file");
        }
        else if (imageAvatar.getSize() > 10000000) {
            throw new IOException("size limit exceded");
        } else {
            Optional<Eleve> u = eleveRepository.findById(eleveID);
            if (u.isPresent()) {
                System.out.println(imageAvatar.getContentType());
                filesStoreService.saveWithoutExtensionCheck("avatar", imageAvatar.getBytes(), ELEVE_FOLDER, eleveID.toString());
                u.get().setAvatar(true);
            } else {
                throw new RuntimeException("Usager not found");
            }
        }

    }

    @Override
    public File getAvatar(Long eleveID) throws IOException {
        return filesStoreService.load("avatar", ELEVE_FOLDER, eleveID.toString());
    }*/
}
