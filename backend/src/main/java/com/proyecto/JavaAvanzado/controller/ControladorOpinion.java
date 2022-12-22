package com.proyecto.JavaAvanzado.controller;

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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.JavaAvanzado.entidad.Opinion;
import com.proyecto.JavaAvanzado.projection.ProjectionOpinion;
import com.proyecto.JavaAvanzado.service.Servicio;
import com.proyecto.JavaAvanzado.service.OpinionImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/hotel/opinion")
public class ControladorOpinion {
	
	@Autowired
	private Servicio<Opinion> servicio;
	
	@Autowired
	private OpinionImpl servicioOpinion;
	
	@GetMapping
	public List<ProjectionOpinion> listAll() {
		return servicioOpinion.listAll();
	}
	
	@RequestMapping(value="/hotel/{hotel}", method=RequestMethod.GET)
    public List<ProjectionOpinion> listOpinionHotel(@PathVariable("hotel") int hotel) {
		return servicioOpinion.listOpinionHotel(hotel);
    }
	
	@RequestMapping(value="/usuario/{usuario}", method=RequestMethod.GET)
    public List<ProjectionOpinion> listOpinionUsuario(@PathVariable("usuario") int usuario) {
		return servicioOpinion.listOpinionUsuario(usuario);
    }
	
	@PostMapping
	public Opinion insertar(@RequestBody Opinion opinion) {
		return servicio.insertar(opinion);
	}
	
	@PutMapping
	public Opinion actualizar(@RequestBody Opinion opinion) {
		return servicio.actualizar(opinion);
	}
	
	@DeleteMapping
	public void eliminar(@RequestBody Opinion opinion) {
		servicio.eliminar(opinion);
	}
}
