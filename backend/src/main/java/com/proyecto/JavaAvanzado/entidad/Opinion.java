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

@Entity
@Table (name = "Opinion")
public class Opinion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idOpinion;
	
	@Column(name = "opinion", nullable = false, length = 300)
	private String opinion;
	
	@Column(name = "calificacion", nullable = false)
	private int calificacion;
	
    @ManyToOne(optional = false, cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Usuario usuario;
    
    @ManyToOne(optional = false, cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Hotel hotel;

	public Opinion() {
		super();
	}

	public Opinion(int idOpinion) {
		super();
		this.idOpinion = idOpinion;
	}

	public Opinion(int idOpinion, String opinion, int calificacion, Usuario usuario, Hotel hotel) {
		super();
		this.idOpinion = idOpinion;
		this.opinion = opinion;
		this.calificacion = calificacion;
		this.usuario = usuario;
		this.hotel = hotel;
	}

	public int getIdOpinion() {
		return idOpinion;
	}

	public void setIdOpinion(int idOpinion) {
		this.idOpinion = idOpinion;
	}

	public String getOpinion() {
		return opinion;
	}

	public void setOpinion(String opinion) {
		this.opinion = opinion;
	}

	public int getCalificacion() {
		return calificacion;
	}

	public void setCalificacion(int calificacion) {
		this.calificacion = calificacion;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}
}
