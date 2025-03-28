import { useState } from "react";
import "./ContactUs.css"; // Import the CSS file
import { Form } from "react-router-dom";

export const contactData = async({request})=>{
    try {
        const newDataContact =  await request.formData();
        const response = Object.fromEntries(newDataContact);
        console.log(response);
                
    } catch (error) {
        console.log(error.message);
        
    }
}//TO log form data easily
export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form Submitted:", formData);
    //     alert("Thank you! Your message has been sent.");
    //     setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    // };

    return (
        
        <div className="dabba2">
        <div className="contact-container">
            <h2 className="contact-heading">📢 Get in Touch with OurFarmer</h2>
            <p className="contact-subtext">
                💬 Have questions, feedback, or need assistance? We're here to help!
            </p>

            <div className="contact-info">
                <p>📍 <strong>Address:</strong> Airoli , Navi Mumbai, Maharashtra, India</p>
                <p>📞 <strong>Phone:</strong> +91 678-136-7092</p>
                <p>📧 <strong>Email:</strong> <a href="mailto:support@smartkisan.com">support@smartkisan.com</a></p>
                <p>🌐 <strong>Website:</strong> <a href="#">http://localhost:5174/</a></p>
            </div>

            <Form method="POST" action="/contact" className="contact-form">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
                
                <button className="typeSubbb" type="submit">Send Message</button>
            </Form>
        </div>
        </div>
    );
};

