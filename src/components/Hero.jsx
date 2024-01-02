import './Hero.css'
const Hero = ({title ,img, page}) => {
  return (
    <div className="hero">
        <div className="hero-left">
                <span className='hero-greet'>Welcome To</span>
                <br />
                <span className='hero-title'>{title}</span> <br />
                <span className='hero-greet'>
                    FASHION UNLEASHED. STYLE REDEFINED.
                </span> <br />
                <div className='hero-dec'>
                    {/* {description} */}
                    {page == 'home' && "Unleash your style potential in a world without limits. Discover our curated collection, where individuality is celebrated and self-expression knows no boundaries. Redefine fashion, embark on your unique style journey, and welcome to a fashion destination like never before."}
                </div>
                <div className='hero-dec hero-dec1'>
                    {/* {description} */}
                    {page == 'about' && "Welcome to our fashion sanctuary, where tradition meets modernity in perfect harmony. We take immense pride in showcasing the exquisite artistry of Lucknow Chikankari, a timeless craft that weaves together rich heritage and contemporary flair. Our passion lies in preserving this age-old tradition while infusing it with fresh designs and innovative silhouettes, ensuring that each garment tells a story of cultural elegance and refined craftsmanship. Every stitch is meticulously handcrafted by skilled artisans. Whether you seek the grace of traditional attire or the allure of modern fashion."}
                </div>
        </div>
        <div className="hero-right">
            <div className='hero-img'>
                {/* <img  src="" alt="ex" /> */}
                <img src={img} alt="ex" />
            </div>
        </div>
    </div>
  )
}

export default Hero