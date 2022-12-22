package com.proyecto.JavaAvanzado.entidad;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "TipoHabitacion")
public class TipoHabitacion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idTipoHabitacion;
	
	@Column(name = "tipoHabitacion", nullable = false, length = 150)
	private String tipoHabitacion;

	public TipoHabitacion() {
	}
	
	public TipoHabitacion(int idTipoHabitacion) {
		super();
		this.idTipoHabitacion = idTipoHabitacion;
	}
	
	public TipoHabitacion(int idTipoHabitacion, String tipoHabitacion) {
		super();
		this.idTipoHabitacion = idTipoHabitacion;
		this.tipoHabitacion = tipoHabitacion;
	}

	public int getIdTipoHabitacion() {
		return idTipoHabitacion;
	}

	public void setIdTipoHabitacion(int idTipoHabitacion) {
		this.idTipoHabitacion = idTipoHabitacion;
	}

	public String getTipoHabitacion() {
		return tipoHabitacion;
	}

	public void setTipoHabitacion(String tipoHabitacion) {
		this.tipoHabitacion = tipoHabitacion;
	}
}
