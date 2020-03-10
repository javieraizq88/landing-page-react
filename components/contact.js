import React from "react"

const Contact = (props) => {
    return (
        <>
            <div className="container mx-2">

                <form>
                    <div className="row ">
                        <div className="col-12">
                            <h4 className=" d-flex justify-content-start">Contact</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, odio provident? Enim cum nesciunt
                            voluptas fugit earum, ad id soluta? Laboriosam recusandae minima voluptatibus nobis fuga magnam?
                            Voluptate, illo quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim delectus
                            deserunt voluptates, maxime iure quas doloribus sequi nemo praesentium, est recusandae sapiente
                             harum? Distinctio obcaecati itaque odio in minus..</p>
                            <div className="col 6 offset-1"></div>
                        </div>
                    </div>
                    <div className="row  ">
                        <div className="col-2 offset-2 d-flex justify-content-end bg-light ">
                            <h4><label for="exampleInputEmail1">Email address</label> </h4>
                        </div>
                        <div className="col-6 bg-light">
                            <div className="form-group"></div>

                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-2 offset-2 d-flex justify-content-end pt-2 bg-light">
                            <p><strong><label for="yourmessage">Your message</label></strong></p>
                        </div>
                        <div className="col-6  bg-light">
                            <div className="form-group"></div>

                            <textarea className="form-control  mb-3" id="yourmessage" placeholder="Enter your message here"
                                rows="2"></textarea>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-8 offset-2 bg-light d-flex justify-content-end">
                            <button type="button" className="btn btn-primary  mb-2">Submit</button>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Contact