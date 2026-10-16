import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const bikes = [
  {
        companyname: "Royal Enfield",
        model: "Classic 350",
        price: 193080,
        category: "Cruiser",
        img: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/studio-shots/360/stealth-black/stealth-black-000.png"
    },
    {
        companyname: "Yamaha",
        model: "MT-15 V2",
        price: 169550,
        category: "Sports",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/yamaha-mt-15-standard-20241759582770305.jpg?q=80"
    },
    {
        companyname: "KTM",
        model: "Duke 390",
        price: 297000,
        category: "Sports",
        img: "https://cdn.bajajauto.com/-/media/images/ktm/ktm-bikes/orp/390-duke-orange.webp"
    },
    {
        companyname: "Bajaj",
        model: "Pulsar NS200",
        price: 157000,
        category: "Street",
        img: "https://imgd.aeplcdn.com/1056x594/n/69hooib_1906749.png?q=80"
    },
    {
        companyname: "TVS",
        model: "Apache RTR 200",
        price: 148000,
        category: "Sports",
        img: "https://imgd.aeplcdn.com/664x374/n/bw/models/colors/undefined-matte-blue-1604475089223.jpg?q=80"
    },
    {
        companyname: "Honda",
        model: "CB350",
        price: 214000,
        category: "Cruiser",
        img: "https://imgd.aeplcdn.com/1056x594/n/2emumkb_1986226.png?q=80"
    },
    {
        companyname: "Hero",
        model: "Xtreme 160R",
        price: 136000,
        category: "Street",
        img: "https://www.bikewale.com/n/cw/ec/127127/xtreme-right-side-view-4.png?isig=0"
    },
    {
        companyname: "Suzuki",
        model: "Gixxer SF",
        price: 137000,
        category: "Sports",
        img: "https://imgd.aeplcdn.com/1056x594/n/go3vnjb_1960198.png?q=80"
    },
    {
        companyname: "BMW",
        model: "G 310 R",
        price: 310000,
        category: "Naked",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/126521/g-310-r-right-side-view.png?isig=0&q=80"
    },
    {
        companyname: "Kawasaki",
        model: "Ninja 300",
        price: 343000,
        category: "Sports",
        img: "https://www.bikewale.com/n/cw/ec/216505/ninja-300-right-side-view-2.png?isig=0"
    },
    {
        companyname: "Triumph",
        model: "Speed 400",
        price: 233000,
        category: "Roadster",
        img: "https://imgd.aeplcdn.com/1056x594/n/ydbhg8b_1924472.jpg?q=80"
    },
    {
        companyname: "Jawa",
        model: "Jawa 42",
        price: 198000,
        category: "Cruiser",
        img: "https://mc.bajajfinserv.in/media/catalog/product/j/a/jawa42bobbermysticcopper_base.jpeg"
    },
    {
        companyname: "Harley-Davidson",
        model: "X440",
        price: 239000,
        category: "Cruiser",
        img: "https://imgd.aeplcdn.com/1056x594/n/o8ombgb_1838298.png?q=80"
    },
    {
        companyname: "Yezdi",
        model: "Roadster",
        price: 209000,
        category: "Roadster",
        img: "https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile1/yezdimotorcycles_roadster/images/colours_yezdi-roadster-2025_savage-green_930x620.jpg"
    },
    {
        companyname: "Aprilia",
        model: "RS 457",
        price: 482000,
        category: "Sports",
        img: "https://cdn.bikedekho.com/upload/userreviewimages/6976de8e750d2.png"
    }
]

function App() {
 
  return (
    <>
      <Header/>
      <Home mydata={bikes}/>
      <Footer/>
    </>
  )
}

export default App
