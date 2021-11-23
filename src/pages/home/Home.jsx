import FeaturedCardItem from "../../components/featuredcard/FeaturedCardItem"
import "./home.css"
import { LineChartData } from "../../DummyData"
import LineChartItem from "../../components/Charts/linechart/LineChartItem"

export default function Home() {
    return (
        <div className="home">
            <FeaturedCardItem />
            <LineChartItem data={LineChartData} title="Issues Reported Count" grid dataKey="count"/>
        </div>
    )
}
