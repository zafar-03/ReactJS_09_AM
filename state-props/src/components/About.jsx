function About(props){
    const newIdentity = {
        ...props
    };
    newIdentity.fname = "Sahil";
    console.log(newIdentity);
    return (
        <h2>Hello</h2>
    )
}

export default About;