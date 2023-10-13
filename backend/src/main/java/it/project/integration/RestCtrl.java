package it.project.integration;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.project.Dto.OrdineDto;
import it.project.Dto.VeicoloDto;
import it.project.entities.Ordine;
import it.project.entities.Utente;
import it.project.entities.Veicolo;
import it.project.services.OrdineService;
import it.project.services.UtenteService;
import it.project.services.VeicoloService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class RestCtrl {
	
	@Autowired
	UtenteService utenteService;
	
	@Autowired
	VeicoloService veicoloService;
	
	@Autowired
	OrdineService ordineService;
	
	@GetMapping("utente")
	List<Utente> getUtente() {
		return utenteService.getAll();
	}
	
	@PostMapping("utente")
	Utente addUtente(@RequestBody Utente u) {
		return utenteService.add(u);
	}
	
	@GetMapping("veicolo")
	List<Veicolo> getVeicolo(){
		return veicoloService.getAll();
	}
		
	
	@PutMapping("veicolo")
	Veicolo updateVeicolo(@RequestBody Veicolo v) {
		return veicoloService.update(v);
	}
	
	@DeleteMapping("veicolo/{id}") 
	public void deleteVeicolo(@PathVariable int id) {
	veicoloService.delete(id);
	}
	
	@GetMapping("veicolo/{id}")
	Veicolo getVeicolobyId(@PathVariable int id) {
		if(veicoloService.getById(id)!= null) 
			return veicoloService.getById(id);
			return new Veicolo();
		}
	
	@GetMapping("ordine")
	List<Ordine> getOrdine(){
		return ordineService.getAll();
		
	}
	
//	@PostMapping("ordine")
//	Ordine addOrdine(@RequestBody Ordine o) {
//		return ordineService.add(o);
//	}
	
	
	@DeleteMapping("ordine/{id}")
	public void deleteOrdine (@PathVariable int id) {
		ordineService.delete(id);
	}
	
	@GetMapping("ordine/{id}")
	Ordine getOrdineById(@PathVariable int id) {
		if(ordineService.getById(id)!= null)
			return ordineService.getById(id);
		return new Ordine();
		
	}
	
	
	
	
	@PostMapping("ordine")
	public Ordine addOrdine(@RequestBody OrdineDto requestBody) {
	    try {
	        

	        // Carica manualmente l'utente e il veicolo dal tuo servizio
	        Utente utente = utenteService.findByUserid(requestBody.getUserid()); // Sostituisci con il tuo metodo per trovare l'utente per nome utente
	        Veicolo veicolo = veicoloService.getById(requestBody.getVeicoloId());

	        
	       

	        // Ora puoi creare l'oggetto Ordine
	        Ordine ordine = new Ordine(utente, veicolo, requestBody.getDescrizione());
	      

	        // Salva l'ordine nel tuo servizio
	        return ordineService.add(ordine);
	        
	        
	    } catch (Exception e) {
	        // Gestisci eventuali eccezioni
	        e.printStackTrace();
	        return null; // oppure lancia un'eccezione personalizzata
	    }
	}
	
	
	
//	@PostMapping("veicolo")
//	Veicolo addVeicolo(@RequestBody Veicolo v) {
//		return veicoloService.add(v);
//	}
	
	
	@PostMapping("veicolo")
	public Veicolo addVeicolo(@RequestBody VeicoloDto request) {
	    try {
	        

	        // Carica manualmente l'utente e il veicolo dal tuo servizio
	        Utente utente = utenteService.findByUserid(request.getUserid()); // Sostituisci con il tuo metodo per trovare l'utente per nome utente
	       //Veicolo veicolo = veicoloService.getById(request.getVeicoloId());

	 

	      
	        Veicolo veicolo1 = new Veicolo(request.getTipologia(),request.getAlimentazione(), request.getDescrizione(),  request.getPosizione(),request.isDisponibilità(),request.getImmagine(),utente);

	       
	        return veicoloService.add(veicolo1);
	    } catch (Exception e) {
	        
	        e.printStackTrace();
	        return null; 
	    } // catch
	} //public
	
	
	
	
		

	
	
} // classe
			
		 
		
		
		
	
	




	

	
	
	

   
