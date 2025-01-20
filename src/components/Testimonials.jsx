import React, { forwardRef } from "react";
import "./Testimonials.css";

const Testimonials = forwardRef(({ isDarkMode }, ref) => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Investor",
      quote:
        "Investing in Regen Roots has been the best decision. Not only have I seen great returns, but I also know I'm contributing to sustainability.",
      image: "/tractor.png",
    },
    {
      name: "Jane Smith",
      title: "Farmer",
      quote:
        "Regen Roots has transformed how we farm. Our soil is healthier, and we're seeing increased yields while preserving the environment.",
      image: "/soil.png",
    },
    {
      name: "Robert Brown",
      title: "Investor",
      quote:
        "The blockchain integration ensures transparency and trust, making me confident about where my investment goes.",
      image: "/investors.png",
    },
  ];

  return (
    <div
      id="testimonials"
      className={`testimonials-page ${isDarkMode ? "dark" : ""}`}
      ref={ref}
    >
      <header className="testimonials-hero">
        <h1 className="testimonials-heading">What Our Community Says</h1>
        <p className="testimonials-subheading">
          Hear from our investors and farmers who are driving the change in regenerative farming.
        </p>
      </header>
      <section className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={`${testimonial.name}`}
              className="testimonial-avatar"
            />
            <p className="testimonial-quote">“{testimonial.quote}”</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-title">{testimonial.title}</p>
          </div>
        ))}
      </section>
      <footer className="testimonials-footer">
        <p>
          Want to be part of this transformative journey?{" "}
          <a href="#impact" className="cta-link">
            Learn More
          </a>
        </p>
      </footer>
    </div>
  );
});

export default Testimonials;
