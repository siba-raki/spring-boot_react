package com.proyecto.JavaAvanzado.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.JavaAvanzado.entidad.Ciudad;
import com.proyecto.JavaAvanzado.projection.ProjectionCiudad;
import com.proyecto.JavaAvanzado.service.CiudadImpl;
import com.proyecto.JavaAvanzado.service.Servicio;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/ciudad")
public class ControladorCiudad {

	@Autowired
	private Servicio<Ciudad> servicio;
	
	@Autowired
	private CiudadImpl servicioCiudad;
	
	@GetMapping
	public List<ProjectionCiudad> listAll() {
		return servicioCiudad.listAll();
	}
	
	@PostMapping
	public Ciudad insertar(@RequestBody Ciudad ciudad) {
		return servicio.insertar(ciudad);
	}
	
	@PutMapping
	public Ciudad actualizar(@RequestBody Ciudad ciudad) {
		return servicio.actualizar(ciudad);
	}
	
	@DeleteMapping
	public void eliminar(@RequestBody Ciudad ciudad) {
		servicio.eliminar(ciudad);
	}
}
