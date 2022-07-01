const Card = ({ data: props }) => {
    return (
        <div className="card">
            <img src={props.img} alt={props.locationName} />

            <section>
                <div className="card-location">
                    <i className="bi bi-geo-alt-fill pin"></i>
                    <h1> {props.country} </h1>
                </div>

                <h1> {props.locationName} </h1>

                <h2> {props.date} </h2>

                <p> {props.description} </p>
            </section >
        </div >
    );
};

export default Card;