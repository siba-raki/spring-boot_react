package com.proyecto.JavaAvanzado.entidad;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table (name = "Ciudad")
public class Ciudad {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idCiudad;
	
	@Column(name = "ciudad", nullable = false, length = 150)
	private String ciudad;

	public Ciudad() {
	}
	
	public Ciudad(int idCiudad) {
		super();
		this.idCiudad = idCiudad;
	}
	
	public Ciudad(int idCiudad, String ciudad) {
		super();
		this.idCiudad = idCiudad;
		this.ciudad = ciudad;
	}

	public int getIdCiudad() {
		return idCiudad;
	}

	public void setIdCiudad(int idCiudad) {
		this.idCiudad = idCiudad;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}
	
	public String toString() {
		return "Id: " + idCiudad + " Ciudad: " + ciudad;
	}
}
