package fslk.com.apisc.service;


import fslk.com.apisc.entities.Referent;

import java.util.List;

public interface ReferentService {
    // recuperer lisre des referents
    public List<Referent> listReferents();
    // recuperer un referent par son id
    public Referent getReferentId(Long id);
    //creer une referent à une referent
    public Referent addReferent(Referent referent);
    //modifier une referent à une referent
    public Referent modifyReferent(Long id, Referent referent);
    //Retire une referent à une referent
    public Referent supprimerReferent(long id);
}
