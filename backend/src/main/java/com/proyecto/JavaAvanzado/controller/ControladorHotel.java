package com.proyecto.JavaAvanzado.controller;

import java.util.ArrayList;
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

import com.proyecto.JavaAvanzado.entidad.Hotel;
import com.proyecto.JavaAvanzado.projection.ProjectionHotel;
import com.proyecto.JavaAvanzado.service.HotelImpl;
import com.proyecto.JavaAvanzado.service.Servicio;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/hotel")
public class ControladorHotel {
	
	List<Hotel> listaHotel = new ArrayList<Hotel>();
	List<String> listaCiudades = new ArrayList<String>();
	
	@Autowired
	private Servicio<Hotel> servicio;
	
	@Autowired
	private HotelImpl servicioHotel;
	
	@GetMapping
	public List<ProjectionHotel> listarHoteles() {
		return servicioHotel.listAll();
	}
	
	@RequestMapping(value="/nombre/{nombre}", method=RequestMethod.GET)
    public List<ProjectionHotel> listNombre(@PathVariable("nombre") String nombre) {
		return servicioHotel.listNombre(nombre);
    }
	
	@RequestMapping(value="/habitacion/{cantHabitaciones}", method=RequestMethod.GET)
    public List<ProjectionHotel> listCantHabitaciones(@PathVariable("cantHabitaciones") Long cantHabitaciones) {
		return servicioHotel.listCantHabitaciones(cantHabitaciones);
    }
	
	@RequestMapping(value="/ciudad/{ciudad}", method=RequestMethod.GET)
    public List<ProjectionHotel> listCiudad(@PathVariable("ciudad") String ciudad) {
		return servicioHotel.listCiudad(ciudad);
    }
	
	@RequestMapping(value="/calificacion/{calificacion}", method=RequestMethod.GET)
    public List<ProjectionHotel> listCalificacion(@PathVariable("calificacion") float calificacion) {
		return servicioHotel.listCalificacion(calificacion);
    }
	
	@RequestMapping(value="/precio/{precio1},{precio2}", method=RequestMethod.GET)
    public List<ProjectionHotel> listPrecio(@PathVariable("precio1") int precio1, @PathVariable("precio2") int precio2) {
		return servicioHotel.listPrecio(precio1,precio2); 
    }
	
	@PostMapping
	public Hotel insertarHotel(@RequestBody Hotel hotel) {
		System.out.println(hotel);
		listaHotel.add(hotel);
		return servicio.insertar(hotel);
	}
	
	@PutMapping
	public Hotel actualizarHotel(@RequestBody Hotel hotel) {
		return servicio.actualizar(hotel);
	}
	
	@DeleteMapping("/eliminar/{hotel}")
	public void eliminarHotel(@PathVariable("hotel") Integer hotel) {
		servicioHotel.eliminarID(hotel);
	}
}
