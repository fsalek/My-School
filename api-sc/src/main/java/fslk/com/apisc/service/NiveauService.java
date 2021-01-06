package fslk.com.apisc.service;


import fslk.com.apisc.entities.Niveau;

import java.util.List;

public interface NiveauService {
    // recuperer lisre des niveaus
    public List<Niveau> listNiveaux();
    // recuperer un niveau par son id
    public Niveau getNiveauId(Long id);
    //creer une niveau à une niveau
    public Niveau addNiveau(Niveau niveau);
    //modifier une niveau à une niveau
    public Niveau modifyNiveau(Long id, Niveau niveau);
    //Retire une niveau à une niveau
    public Niveau supprimerNiveau(long id);
}
