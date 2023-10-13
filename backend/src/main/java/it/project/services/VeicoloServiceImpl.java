package it.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.project.entities.Veicolo;
import it.project.repos.VeicoloDAO;


@Service
public class VeicoloServiceImpl implements VeicoloService {

	@Autowired
	VeicoloDAO veicoloDao;
	
	@Override
	public Veicolo add(Veicolo v) {
		// TODO Auto-generated method stub
		return veicoloDao.save(v);
	}

	@Override
	public Veicolo getById(int id) {
		// TODO Auto-generated method stub
		return veicoloDao.findById(id).get();
	}

	@Override
	public List<Veicolo> getAll() {
		// TODO Auto-generated method stub
		return veicoloDao.findAll();
	}

	@Override
	public Veicolo update(Veicolo v) {
		// TODO Auto-generated method stub
		return veicoloDao.save(v);
	}

	@Override
	public void delete(int id) {
		veicoloDao.deleteById(id);
		
	}

}
