export default function Card({ politician }){
    return(
        <div className="card">
            <h2>{politician.name}</h2>
            <img src={politician.image} alt="" />
            <p>{politician.position}</p>
            <p>{politician.biography}</p>
        </div>
    )
}