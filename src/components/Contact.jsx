import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-div'>
        <h2 className="contact-head">Feel Free To Contact Us</h2>
        <div className="contact-ips">
          <form action="https://formspree.io/f/xaygwypl" method='post'>
            <input type='text' name="name" required autoComplete='off' placeholder='Enter Name'/>
            <input type='email' name="email" required autoComplete='off' placeholder='Enter Email'/>
            <textarea name='message' autoComplete='off' required placeholder='message' cols= "30" rows="10">
            </textarea>
            <input type="submit" value="SEND" />
          </form>

        </div>
    </div>
  )
}

export default Contact