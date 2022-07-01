import data from "../data";
import Card from "./Card";

const Main = () => {
    const cardUI = data.map(each => <Card key={each.id} data={each} />);

    return (
        <div className="card-flex">
            {cardUI}
        </div>
    );
};

export default Main;