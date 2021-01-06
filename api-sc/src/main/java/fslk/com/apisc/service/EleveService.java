package fslk.com.apisc.service;


import fslk.com.apisc.entities.Eleve;

import java.util.List;


public interface EleveService {
	// recuperer lisre des eleves
	public List<Eleve> listEleves();
	// recuperer un eleve par son id
	public Eleve getEleveId(Long id);
	//creer une eleve à une eleve
	public Eleve addEleve(Eleve eleve);
	//modifier une eleve à une eleve
	public Eleve modifyEleve(Long id, Eleve eleve);
	//Retire une eleve à une eleve
	public Eleve supprimerEleve(long id);
	public List<Eleve> lisEleveFirstNameContains(String mc);
	/*public void saveAvatar(MultipartFile imageAvatar, Long eleveID) throws IOException;
	public File getAvatar(Long eleveID) throws IOException;*/
	
}
