import React from "react";

function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="containercu">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i class="bi bi-house"></i>
              <div className="topic">Address</div>
              <div className="text-one">
              Robert Robertson, 1234 NW Bobcat Lane, St. Robert
              </div>
              <div className="text-two">
                Near Post Office, BehindKalyan Court, Gate No. 2,
                Kalyan(W)Dist-Thane. 421 301
              </div>
            </div>
            <div className="phone details">
              <i class="bi bi-telephone"></i>
              <div className="topic">Phone</div>
              <div className="text-one">9124456363</div>
              <div className="text-two">92234343421</div>
            </div>
            <div className="email details">
              <i className="bi bi-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">random@gmail.com</div>
              <div className="text-two">random@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me you can send me message from here. It's
              my pleasure to help you.
            </p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>

              <div class="input-box message-box">
              <input type="text" placeholder="Enter your message" />
              </div>

              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
