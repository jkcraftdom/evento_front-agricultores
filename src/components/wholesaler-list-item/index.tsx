import "./itemWholesalerStyles.css";

interface items{
    image:string,
    name:string,
    country:string,
    sector:string,
    description:string,
    products:string[]
}

function ItemWholesaler(itemsObj:items) {
  return (
    <div className="card-main-container">
        <div className="card-img-container">
            <img src={itemsObj.image} alt="image post" className="card-img"/>
        </div>
        <div>
            <h3 className="card-main-title">
                <strong className="card-title">{itemsObj.name}</strong>|
                <span className="card-country">{itemsObj.country}</span>|
                <span className="card-main-badge">{itemsObj.sector}</span>
            </h3>
            <p className="card-description">{itemsObj.description}</p>
            <p className="card-secondary-container-badges">
                {
                    itemsObj.products.map((product,i) =>(
                        <span key={i} className="card-secondary-badge">{product}</span>
                    ))
                }
            </p>
        </div>
        <div className="card-btn-container">
            <button className="card-btn">Contactar ✉</button>
        </div>
    </div>
  )
}

export default ItemWholesaler