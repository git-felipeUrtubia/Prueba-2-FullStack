export default function Contacto() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1 className="text-center mb-4">Contáctanos</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" className="form-control" placeholder="tucorreo@dominio.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea rows="4" className="form-control" placeholder="¿Cómo podemos ayudarte?"></textarea>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
