export default function Blog() {
  const posts = [
    { id: 1, titulo: "Tendencias Frontend 2025", categoria: "Tech", resumen: "Frameworks y patrones." },
    { id: 2, titulo: "Bootstrap Grid Pro Tips", categoria: "UI", resumen: "Diseños responsivos." },
    { id: 3, titulo: "Hooks en React", categoria: "Tech", resumen: "useState y useEffect." },
    { id: 4, titulo: "Trucos de CSS", categoria: "Diseño", resumen: "CSS simple y ordenado." },
    { id: 5, titulo: "Tu primera app en React", categoria: "Tutorial", resumen: "Guía para empezar." },
    { id: 6, titulo: "Buenas prácticas al programar", categoria: "Consejos", resumen: "Hábitos útiles." }
  ];

  return (
    <div>
      <h1 className="text-center mb-4">Blog</h1>
      <div className="row">
        {posts.map(p => (
          <div className="col-md-4 mb-4" key={p.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{p.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{p.categoria}</h6>
                <p className="card-text">{p.resumen}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
