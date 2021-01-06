package fslk.com.apisc.service.impl;

import fslk.com.apisc.entities.Matiere;
import fslk.com.apisc.repository.MatiereRepository;
import fslk.com.apisc.service.MatiereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MatiereServiceImpl implements MatiereService {
    @Autowired
    private MatiereRepository matiereRepository;
    @Override
    public List<Matiere> listMatieres() {
        return matiereRepository.findAll();
    }

    @Override
    public Matiere getMatiereId(Long id) {
        Optional<Matiere> mat = matiereRepository.findById(id);
        if (mat.isPresent()){
            return mat.get();
        }
        return null;
    }

    @Override
    public Matiere addMatiere(Matiere matiere) {
        return matiereRepository.save(matiere);
    }

    public Matiere modifyMatiere(Long id, Matiere matiere) {
        try {
            Matiere matSrc = this.getMatiereId(id);
            matiere.setId(matSrc.getId());
            return matiereRepository.save(matSrc);
        } catch (Exception e) {
            //TODO: handle exception
            throw new RuntimeException("Matiere not Saved an error occured");
        }
    }

    @Override
    public Matiere supprimerMatiere(long id) {
        Matiere newmat = matiereRepository.getMatiereById(id);
        if(newmat!=null){
            matiereRepository.deleteById(id);
        }
        return newmat;
    }
}
