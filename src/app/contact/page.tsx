function Contact(){
  return(
    <div>
       <div className="  ">
        <h1 className="font-bold  text-center"> Contact Us</h1>
        <form  className='bg-neutral-200 text-center h-78vw'action="submit_contact_form.php my-2" method="POST">
            <div className="form-group my-5">
                <label className="mx-10">Your Name</label>
                <br />
                <input className=" mx-5  border-solid border-2 w-36 border-indigo-400" type="text" id="name" name="name" placeholder="Enter your name" required/>
            </div>
            <div className="form-group  ">
                <label  className="">Your Email</label>
                <br />
                <input className=" mx-4  border-solid border-2 w-36 border-indigo-400" type="email" id="email" name="email" placeholder="Enter your email" required/>
            </div>
            <div className="form-group">
                <label className="mx-10" >Message</label>
                <br />
                <input className=' mx-5 border-solid border-2 w-36 border-indigo-400' id="message" name="message" placeholder="Write your message here" required/>
            </div>
            <button className=" mx-10 my-5  text-slate-500 hover:text-blue-200 bg-slate-800" type="submit">Submit</button>
        </form>

       
    </div>
    </div>
  )


}
export default Contact;