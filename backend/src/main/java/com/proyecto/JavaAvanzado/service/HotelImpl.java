package com.proyecto.JavaAvanzado.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.JavaAvanzado.entidad.Hotel;
import com.proyecto.JavaAvanzado.projection.ProjectionHotel;
import com.proyecto.JavaAvanzado.repository.RepositorioHotel;

@Service
public class HotelImpl implements Servicio<Hotel>{
	
	@Autowired
	private RepositorioHotel repositorio;
	
	@Override
	public Hotel insertar(Hotel hotel) {
		return repositorio.save(hotel);
	}

	@Override
	public Hotel actualizar(Hotel hotel) {
		return repositorio.save(hotel);
	}
	
	public List<ProjectionHotel> listAll(){
		return repositorio.listAll();
	}

	public List<ProjectionHotel> listNombre(String nombre) {
		nombre = "%"+ nombre +"%";
		return repositorio.listNombre(nombre);
	}

	public List<ProjectionHotel> listCantHabitaciones(Long cantHabitaciones) {
		return repositorio.listCantHabitaciones(cantHabitaciones);
	}

	public List<ProjectionHotel> listCiudad(String ciudad) {
		return repositorio.listCiudad(ciudad);
	}

	public List<ProjectionHotel> listCalificacion(float calificacion) {
		return repositorio.listCalificacion(calificacion);
	}
	
	public List<ProjectionHotel> listPrecio(int precio1, int precio2) {
		return repositorio.listPrecio(precio1,precio2);
	}

	public void eliminarID(Integer hotel) {
		repositorio.deleteById(hotel);
	}

	@Override
	public void eliminar(Hotel objeto) {
		// TODO Auto-generated method stub
		
	}
}
