function Display(props) {
    const allbooks = [...props.books];

    return (
        <section>
            {
                allbooks.map((data) => {
                    return (
                        <div>
                            <h3>{data.bookname}</h3>
                            <img src={data.img} alt="" />
                            <h4>{data.authorname}</h4>
                            <p>${data.price}</p>
                            <p>pages:{data.pages}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Display;