import {useState} from 'react'
import './form.css'



const Forms = () => {
  const [submit, setSubmit] = useState(false)
  const [email, setEmail] = useState()
  // const [error, setError] = useState(false)
  // const errMsg = () = {

  // }
  const Popup = () => {
      setSubmit(!submit);
  }
  console.log(Popup)

  const closePopup = () => {
    setSubmit(false);
  }
  return (
    <div className='form' style={{height: '100%'}}>
      <div className='forms'>
        <div className='form_in'>
          <div className='top'>
        <img src='https://i.pinimg.com/236x/3e/9e/db/3e9edbbda5d06cd6bc08dbcc25dd9d2e.jpg' alt='pics' />
        </div>
          <span className='topic'>
            <h1 >Stay update!</h1>
            </span>
      <span className='head'>
        <p> 
          Join 60,000+ product managers receiving monthly updates on:
        </p>
      </span>
      <div className="offer">
      <span className='small'>
        <img className='im' src='  https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/ckeditor/files/good_practice_2_0.png?zUWmBhjgYe6ek0L68YTRnUCQZo9lJo4v' alt="img" />
        <p>  
          Product discovery and building what matters,
        </p>
      </span>
            <span className='small'>
              <img className='im'  src='https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/ckeditor/files/good_practice_2_0.png?zUWmBhjgYe6ek0L68YTRnUCQZo9lJo4v' alt="img" />
        <p>  
          Measuring to ensure update are a success,
        </p>
      </span>
            <span className='small'>
              <img className='im'  src='https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/ckeditor/files/good_practice_2_0.png?zUWmBhjgYe6ek0L68YTRnUCQZo9lJo4v' alt="img" />
              
        <p>  
          And much more.
        </p>
        </span>
          </div>
          <div className="for">
      <form>
              <label for='email'>Email address:</label>
              <p className='para'>Verified</p>
        <input type='email' name='email' placeholder="email@abcd.com"  value={email} onChange={(e) => setEmail(e.target.value)} required /> 
  <button onClick={Popup} >Subscribe to monthly newsletter</button>
            </form>
            </div>
          </div>
      <div className='img'>
        <img src='https://i.pinimg.com/236x/3e/9e/db/3e9edbbda5d06cd6bc08dbcc25dd9d2e.jpg' alt='pics' />
        </div>
        </div>
      <div className='success'>
        {
          submit ?
                <div className='popup'>
              <div className='popupp'>
                <img style={{height:'60px', width:'60px', margin: '2rem' }}  className='suc' src='https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/ckeditor/files/good_practice_2_0.png?zUWmBhjgYe6ek0L68YTRnUCQZo9lJo4v' alt="img" />
              <h1>Thanks for subscribing!</h1>

              <p className='pop' >
                A confirmation has been sent to {email} . Please open it and click the button inside to confirm your subscription.</p>
              
                <button className='btn'
                  style={{height:'200px', width:'70%'}}
                  onClick={closePopup}>Dismiss messsge</button>
                  </div>
                  </div>
            : " "
          }
        </div>
    </div>
  )
}
// add requited attribute and pattern i html for mail : pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
// for only text pattern="^[a-zA-Z]+$" ,



export default Forms
