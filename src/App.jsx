import { useState } from 'react'
import './App.css'

function App() {
  const [rating, setRating] = useState(0);
  const [slide, setSlide] = useState(1);

  return (
    <div className="App">
      {slide == 1 && <div className="feedback">
        <img src="./assets/images/icon-star.svg" alt="" className='star-icon'/>
        <h1 className='heading'>How did we do?</h1>
        <p className='subheading'>Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
        <ul className="ratings">
          <li className="rating" onClick={() => setRating(1)} style={rating == 1 ? {backgroundColor: "var(--clr-light-grey)", color: "var(--clr-white)"} : {}}>1</li>
          <li className="rating" onClick={() => setRating(2)} style={rating == 2 ? {backgroundColor: "var(--clr-light-grey)", color: "var(--clr-white)"} : {}}>2</li>
          <li className="rating" onClick={() => setRating(3)} style={rating == 3 ? {backgroundColor: "var(--clr-light-grey)", color: "var(--clr-white)"} : {}}>3</li>
          <li className="rating" onClick={() => setRating(4)} style={rating == 4 ? {backgroundColor: "var(--clr-light-grey)", color: "var(--clr-white)"} : {}}>4</li>
          <li className="rating" onClick={() => setRating(5)} style={rating == 5 ? {backgroundColor: "var(--clr-light-grey)", color: "var(--clr-white)"} : {}}>5</li>
        </ul>
        <button className='submit-button' onClick={() => setSlide(2)}>SUBMIT</button>
      </div>}
      {slide == 2 && <div className='thanks'>
        <img src="./assets/public/images/illustration-thank-you.svg" alt="" />
        <span className='selected-rating'>You selected {rating} out of 5</span>
        <h1 className='heading'>Thank you!</h1>
        <p className='subheading appreciation'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>}
    </div>
  )
}

export default App
