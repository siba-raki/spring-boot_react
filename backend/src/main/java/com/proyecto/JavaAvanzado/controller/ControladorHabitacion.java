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

import com.proyecto.JavaAvanzado.entidad.Habitacion;
import com.proyecto.JavaAvanzado.projection.ProjectionHabitacion;
import com.proyecto.JavaAvanzado.service.HabitacionImpl;
import com.proyecto.JavaAvanzado.service.Servicio;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/hotel/habitacion")
public class ControladorHabitacion {

	@Autowired
	private Servicio<Habitacion> servicio;
	
	@Autowired
	private HabitacionImpl servicioHabitacion;
	
	@GetMapping
	public List<ProjectionHabitacion> listAll() {
		return servicioHabitacion.listAll();
	}
	
	@PostMapping
	public Habitacion insertar(@RequestBody Habitacion habitacion) {
		return servicio.insertar(habitacion);
	}
	
	@PutMapping
	public Habitacion actualizar(@RequestBody Habitacion habitacion) {
		return servicio.actualizar(habitacion);
	}
	
	@DeleteMapping
	public void eliminar(@RequestBody Habitacion habitacion) {
		servicio.eliminar(habitacion);
	}
	
	@RequestMapping(value="hotel/{hotel}", method=RequestMethod.GET)
    public List<ProjectionHabitacion> listHabHotel(@PathVariable("hotel") int hotel) {
		return servicioHabitacion.listHabHotel(hotel);
    }
	
	@RequestMapping(value="hotel/{hotel}/{camas}/{huespedes}", method=RequestMethod.GET)
    public List<ProjectionHabitacion> listHabHueCamHotel(@PathVariable("hotel") int hotel,@PathVariable("camas") int camas,@PathVariable("huespedes") int huespedes) {
		return servicioHabitacion.listHabHueCamHotel(hotel,camas,huespedes);
    }
	
	@RequestMapping(value="/camas/{camas}", method=RequestMethod.GET)
    public List<ProjectionHabitacion> listHabCamas(@PathVariable("camas") int camas) {
		return servicioHabitacion.listHabCamas(camas);
    }
	
	@RequestMapping(value="/huespedes/{huespedes}", method=RequestMethod.GET)
    public List<ProjectionHabitacion> listHabHuespuedes(@PathVariable("huespedes") int huespedes) {
		return servicioHabitacion.listHabHuespuedes(huespedes);
    }
	
	@RequestMapping(value="/huespedes/{huespedes}/{camas}", method=RequestMethod.GET)
    public List<ProjectionHabitacion> listHabHuespuedesYCamas(@PathVariable("huespedes") int huespedes, @PathVariable("camas") int camas) {
		return servicioHabitacion.listHabHuespuedesYCamas(huespedes,camas);
    }
}
