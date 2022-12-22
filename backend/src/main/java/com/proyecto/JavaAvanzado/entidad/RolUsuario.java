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
@Table(name = "Rol")
public class RolUsuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idRol;
	
	@Column(name="nombreRol", nullable = false, length = 50)
	private String nombreRol;

	public RolUsuario() {
		super();
	}

	public RolUsuario(int idRol) {
		super();
		this.idRol = idRol;
	}

	public RolUsuario(int idRol, String nombreRol) {
		super();
		this.idRol = idRol;
		this.nombreRol = nombreRol;
	}

	public int getIdRol() {
		return idRol;
	}

	public void setIdRol(int idRol) {
		this.idRol = idRol;
	}

	public String getNombreRol() {
		return nombreRol;
	}

	public void setNombreRol(String nombreRol) {
		this.nombreRol = nombreRol;
	}
	
}
