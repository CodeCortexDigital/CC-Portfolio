// Cards with an icon, a title and a list of points.
function InfoGrid({ items }) {
  return (
    <div className="info-grid">
      {items.map((item) => (
        <div className="info-card" key={item.title}>
          {item.icon && (
            <div className="info-icon">
              <i className={item.icon}></i>
            </div>
          )}
          <h3>{item.title}</h3>
          <ul>
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default InfoGrid;
