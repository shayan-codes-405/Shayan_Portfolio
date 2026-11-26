import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      sent: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    const mailtoUrl = `mailto:shayanakhtar405@gmail.com?subject=${encodeURIComponent(
      subject || "Message from Portfolio"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    this.setState({ sent: true });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt="Shayan Akhtar"
                  style={{
                    maxWidth: "80%",
                    maxHeight: "450px",
                    borderRadius: "50%",
                    boxShadow: `0 10px 30px ${theme.jacketColor || "rgba(0,0,0,0.2)"}`,
                  }}
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    href="/resume"
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Explore GitHub Repos"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade>

          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                {phoneSection["title"] && (
                  <>
                    <h1
                      className="address-heading-text"
                      style={{ color: theme.text }}
                    >
                      {phoneSection["title"]}
                    </h1>
                    <p
                      className="contact-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {phoneSection["subtitle"]}
                    </p>
                  </>
                )}
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>

          {/* Interactive Contact Form */}
          <Fade bottom duration={1000} distance="40px">
            <div
              style={{
                maxWidth: "750px",
                margin: "80px auto 40px auto",
                padding: "35px",
                borderRadius: "16px",
                backgroundColor: theme.imageHighlight || "rgba(255,255,255,0.05)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                border: `1px solid ${theme.jacketColor || "rgba(0,0,0,0.1)"}`,
              }}
            >
              <h2
                style={{
                  color: theme.text,
                  textAlign: "center",
                  fontFamily: "Google Sans Bold, sans-serif",
                  marginBottom: "15px",
                }}
              >
                Send Me A Message
              </h2>
              <p
                style={{
                  color: theme.secondaryText,
                  textAlign: "center",
                  fontSize: "16px",
                  marginBottom: "30px",
                }}
              >
                Have a question, collaboration idea, or want to discuss Data Science & AI projects? Drop a note below!
              </p>
              <form onSubmit={this.handleSubmit}>
                <div style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    style={{
                      flex: 1,
                      minWidth: "250px",
                      padding: "14px 18px",
                      borderRadius: "8px",
                      border: `1px solid ${theme.secondaryText}`,
                      backgroundColor: theme.body,
                      color: theme.text,
                      fontSize: "15px",
                      outline: "none",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                    style={{
                      flex: 1,
                      minWidth: "250px",
                      padding: "14px 18px",
                      borderRadius: "8px",
                      border: `1px solid ${theme.secondaryText}`,
                      backgroundColor: theme.body,
                      color: theme.text,
                      fontSize: "15px",
                      outline: "none",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={this.state.subject}
                    onChange={this.handleChange}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: "8px",
                      border: `1px solid ${theme.secondaryText}`,
                      backgroundColor: theme.body,
                      color: theme.text,
                      fontSize: "15px",
                      boxSizing: "border-box",
                      outline: "none",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "25px" }}>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message..."
                    required
                    value={this.state.message}
                    onChange={this.handleChange}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: "8px",
                      border: `1px solid ${theme.secondaryText}`,
                      backgroundColor: theme.body,
                      color: theme.text,
                      fontSize: "15px",
                      boxSizing: "border-box",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: theme.accentColor || "#1F70C1",
                      color: "#FFFFFF",
                      border: "none",
                      padding: "14px 36px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Send Message <span role="img" aria-label="envelope">✉️</span>
                  </button>
                  {this.state.sent && (
                    <p style={{ color: "#28a745", marginTop: "15px", fontWeight: "bold" }}>
                      Thank you! Your email client has been launched with your message.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
