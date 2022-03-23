const Show = ({selectedShow}) => {
    return (
        <section>
            <p>Show overview: {selectedShow.overview}</p>
            <p>First aired: {selectedShow.first_air_date}</p>
            <p>Average rating: { selectedShow.vote_average}</p>

        </section>
    )
}

export default Show;
