import './Animal.css';

export default function Animal(prop) {
  return (
    <div className="animal" style={{ top: `${prop.top}`, left: `${prop.left}` }}>
      <img src={`./animals/${prop.type}.svg`}></img>
      <p>
        <h3 className="animalName">{prop.name}</h3>
      </p>
      <p>{prop.says}</p>
    </div>
  );
}
