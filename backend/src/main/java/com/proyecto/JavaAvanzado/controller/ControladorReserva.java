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

import com.proyecto.JavaAvanzado.entidad.Reserva;
import com.proyecto.JavaAvanzado.projection.ProjectionReserva;
import com.proyecto.JavaAvanzado.service.ReservaImpl;
import com.proyecto.JavaAvanzado.service.Servicio;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/hotel/reserva")
public class ControladorReserva {

	@Autowired
	private Servicio<Reserva> servicio;

	@Autowired
	private ReservaImpl servicioReserva;
	
	@GetMapping
	public List<ProjectionReserva> listAll() {
		return servicioReserva.listAll();
	}
	
	@RequestMapping(value="/usuario/{usuario}", method=RequestMethod.GET)
    public List<ProjectionReserva> listReservaUsuario(@PathVariable("usuario") int usuario) {
		return servicioReserva.listReservaUsuario(usuario);
    }
	
	@PostMapping
	public Reserva insertar(@RequestBody Reserva reserva) {
		return servicio.insertar(reserva);
	}
	
	@PutMapping
	public Reserva actualizar(@RequestBody Reserva reserva) {
		return servicio.actualizar(reserva);
	}
	
	@DeleteMapping
	public void eliminar(@RequestBody Reserva reserva) {
		servicio.eliminar(reserva);
	}
}
