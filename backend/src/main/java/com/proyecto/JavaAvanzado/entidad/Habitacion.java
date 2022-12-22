package com.proyecto.JavaAvanzado.entidad;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table (name="Habitacion")
public class Habitacion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idHabitacion;
	
	@Column(name = "numHabitacion", nullable = false)
	private int numHabitacion;
	
	@Column(name = "cantHuespedes", nullable = false)
	private int cantHuespedes;
	
	@Column(name = "cantCamas", nullable = false)
	private int cantCamas;
	
	@Column(name = "precio", nullable = false)
	private int precio;
	
	@Column(name = "estado", nullable = false)
	private boolean estado;
	
    @ManyToOne(optional = false, cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Hotel hotel;
    
    @ManyToOne(optional = false, cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private TipoHabitacion tipoHabitacion;
    
	public Habitacion() {
		super();
	}

	public Habitacion(int idHabitacion) {
		super();
		this.idHabitacion = idHabitacion;
	}

	public Habitacion(int idHabitacion, int numHabitacion, int cantHuespedes, int cantCamas, int precio, boolean estado,
			Hotel hotel, TipoHabitacion tipoHabitacion) {
		super();
		this.idHabitacion = idHabitacion;
		this.numHabitacion = numHabitacion;
		this.cantHuespedes = cantHuespedes;
		this.cantCamas = cantCamas;
		this.precio = precio;
		this.estado = estado;
		this.hotel = hotel;
		this.tipoHabitacion = tipoHabitacion;
	}

	public int getIdHabitacion() {
		return idHabitacion;
	}

	public void setIdHabitacion(int idHabitacion) {
		this.idHabitacion = idHabitacion;
	}

	public int getNumHabitacion() {
		return numHabitacion;
	}

	public void setNumHabitacion(int numHabitacion) {
		this.numHabitacion = numHabitacion;
	}

	public int getCantHuespedes() {
		return cantHuespedes;
	}

	public void setCantHuespedes(int cantHuespedes) {
		this.cantHuespedes = cantHuespedes;
	}

	public int getCantCamas() {
		return cantCamas;
	}

	public void setCantCamas(int cantCamas) {
		this.cantCamas = cantCamas;
	}

	public int getPrecio() {
		return precio;
	}

	public void setPrecio(int precio) {
		this.precio = precio;
	}

	public boolean isEstado() {
		return estado;
	}

	public void setEstado(boolean estado) {
		this.estado = estado;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	public TipoHabitacion getTipoHabitacion() {
		return tipoHabitacion;
	}

	public void setTipoHabitacion(TipoHabitacion tipoHabitacion) {
		this.tipoHabitacion = tipoHabitacion;
	}
}
