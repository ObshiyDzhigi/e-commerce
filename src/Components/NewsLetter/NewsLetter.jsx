import './NewsLetter.css';
const NewsLetter = () => {
    return (
        <div className="newsletter">
            <div className="newsletter-container container">
                <h1>Get Exlusive Offers On Your Email</h1>
                <p>Subscribe to out newsletter and stay updated</p>
                <div>
                    <input type="email" placeholder='Your Email id' />
                    <button>Subcribe</button>
                </div>
            </div>
        </div>
    );
}
 
export default NewsLetter;