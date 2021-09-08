const Card = ( { character } ) => {
  return (
    <div className="card w-25">
      <img src={character.image} className="card-img-top" alt="character" />
      <div className="card-body">
        <h5 className="card-title, mb-0">{character.name}</h5>
        <p className="card-text">
          {character.status} - {character.species}
        </p>

        <h6 className="card-subtitle text-muted">Last known location</h6>
        <p className="card-text">{character.location.name}</p>
      </div>
    </div>
  )
}

export default Card
