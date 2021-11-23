import "./featuredcarditem.css"

export default function FeaturedCardItem() {
    return (
        <div className="featured">
            <div className="featuredCard">
                <span className="cardTitle">Open</span>
                <div className="cardValuesContainer">
                    <span className="cardCount">200</span>
                    <span className="cardPercent">20%</span>
                </div>
                <span className="cardSubTitle">Till Current Date</span>
            </div>
            <div className="featuredCard">
                <span className="cardTitle">In-Progress</span>
                <div className="cardValuesContainer">
                    <span className="cardCount">100</span>
                    <span className="cardPercent">10%</span>
                </div>
                <span className="cardSubTitle">Till Current Date</span>
            </div>
            <div className="featuredCard">
                <span className="cardTitle">Assigned</span>
                <div className="cardValuesContainer">
                    <span className="cardCount">500</span>
                    <span className="cardPercent">50%</span>
                </div>
                <span className="cardSubTitle">Till Current Date</span>
            </div>
            <div className="featuredCard">
                <span className="cardTitle">Closed</span>
                <div className="cardValuesContainer">
                    <span className="cardCount">200</span>
                    <span className="cardPercent">20%</span>
                </div>
                <span className="cardSubTitle">Till Current Date</span>
            </div>
        </div>
    )
}
