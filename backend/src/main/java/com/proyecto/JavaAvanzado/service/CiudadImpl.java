package com.proyecto.JavaAvanzado.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.JavaAvanzado.entidad.Ciudad;
import com.proyecto.JavaAvanzado.projection.ProjectionCiudad;
import com.proyecto.JavaAvanzado.repository.RepositorioCiudad;

@Service
public class CiudadImpl implements Servicio<Ciudad>{

	
	@Autowired
	private RepositorioCiudad repositorio;
	
	@Override
	public Ciudad insertar(Ciudad ciudad) {
		return repositorio.save(ciudad);
	}

	@Override
	public Ciudad actualizar(Ciudad ciudad) {
		return repositorio.save(ciudad);
	}

	@Override
	public void eliminar(Ciudad ciudad) {
		repositorio.delete(ciudad);
	}
	
	public List<ProjectionCiudad> listAll() {
		return repositorio.listAll();
	}
}
