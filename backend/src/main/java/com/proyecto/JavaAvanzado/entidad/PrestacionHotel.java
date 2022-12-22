package com.proyecto.JavaAvanzado.entidad;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Prestacion")
public class PrestacionHotel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idPrestacion;
	
	@Column(name = "prestacion", nullable = false, length = 100)
	private String prestacion;

}
