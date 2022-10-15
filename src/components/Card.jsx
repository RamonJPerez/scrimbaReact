export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if  (props.location === "online"){
        badgeText = "ONLINE"
}

return (
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`../src/images/${props.img}`} className="card--image" />
        <div className="card--stats">
            <img src="../src/images/star.png" />
            <span>{props.rating}</span>
            <span className="gray">{props.reviewCount}</span>
            <span className="gray">{props.country}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price"><span className="bold">From ${props.price} </span>/ person</p>
    </div>
)
}