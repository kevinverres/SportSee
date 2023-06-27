import "../../assets/css/CardDataCorps.css"

function CardDataCorps({img, data, label}) {
    return (
        <div className="card-data">
            <img src={img} alt={label} />
            <div>
                <h1>{data}</h1>
                <p>{label}</p>
            </div>
        </div>
    )
}

export default CardDataCorps;