import "./styles/Home.css";

function Home(props) {
    return (
        <section>
            <h1>Bike Collection</h1>
            <div>
                {
                    props.mydata.map((data,index) => {
                        return (
                            <main key={index}>
                                <h2>{data.companyname}</h2>
                                <img src={data.img} alt="" />
                                <h3>{data.model}</h3>
                                <p>{data.category}</p>
                                <p>{data.price}</p>
                            </main>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Home;