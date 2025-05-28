import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdContactMail } from "react-icons/md";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    description: e.target.description.value,
  };

  try {
    const response = await fetch("http://localhost:8888/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Failed to send message.");
    }
  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<MdContactMail size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form
            className="contact__content__form"
            onSubmit={handleSubmit}
          >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
          </form>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;