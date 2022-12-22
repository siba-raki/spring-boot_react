package com.proyecto.JavaAvanzado.entidad;

import java.util.Date;

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
@Table (name = "Reserva")
public class Reserva {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idReserva;
	
    @ManyToOne(optional = false, cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Usuario usuario;
    
    @ManyToOne(optional = false, cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Habitacion habitacion;
    
	@Column(name = "reservaDesde", nullable = false)
	private Date reservaDesde;
	
	@Column(name = "reservaHasta", nullable = false)
	private Date reservaHasta;
	
	@Column(name = "estado", nullable = false, length = 50)
	private String estado;

	public Reserva() {
		super();
	}

	public Reserva(int idReserva) {
		super();
		this.idReserva = idReserva;
	}

	public Reserva(int idReserva, Usuario usuario, Habitacion habitacion, Date reservaDesde, Date reservaHasta,
			String estado) {
		super();
		this.idReserva = idReserva;
		this.usuario = usuario;
		this.habitacion = habitacion;
		this.reservaDesde = reservaDesde;
		this.reservaHasta = reservaHasta;
		this.estado = estado;
	}

	public int getIdReserva() {
		return idReserva;
	}

	public void setIdReserva(int idReserva) {
		this.idReserva = idReserva;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Habitacion getHabitacion() {
		return habitacion;
	}

	public void setHabitacion(Habitacion habitacion) {
		this.habitacion = habitacion;
	}

	public Date getReservaDesde() {
		return reservaDesde;
	}

	public void setReservaDesde(Date reservaDesde) {
		this.reservaDesde = reservaDesde;
	}

	public Date getReservaHasta() {
		return reservaHasta;
	}

	public void setReservaHasta(Date reservaHasta) {
		this.reservaHasta = reservaHasta;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
}
