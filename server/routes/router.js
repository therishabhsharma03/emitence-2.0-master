

const nodemailer = require('nodemailer');

const express = require("express");

const route = express.Router();

const services = require("../services/render.js")


route.get('/', services.homeRoutes);


route.post('/submit', (req, res) => {
    // Extract the user data from the request body
    const { name, contactNumber, location, flatType, budget,remarks } = req.body;
  
    // Create the email content
    const emailContent = `
      <h2>New Flat Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Contact Number:</strong> ${contactNumber}</p>
      <p><strong>Preferred Location:</strong> ${location}</p>
      <p><strong>Flat Type:</strong> ${flatType}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Message:</strong> ${remarks}</p>
    `;
  
    // Configure the nodemailer transport
    const transporter = nodemailer.createTransport({
      // Provide your email server details here (e.g., SMTP)
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'apicheck11@gmail.com',
        pass: 'atnondyksdbdaxwv'
      }
    });
  
    // Define the email options
    const mailOptions = {
      from: 'apicheck11@gmail.com',
      to: 'therishabhsharma03@gmail.com', // Replace with the admin email address
      subject: 'New Flat Enquiry',
      html: emailContent
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while submitting the form.' });
      } else {
        console.log('Email sent:', info.response);
        res.render("index");
      }
    });
  });
  

  route.get('/services', services.service);
  route.get('/about', services.about);
  route.get('/contact', services.contact);
  route.get('/policy', services.policy);



  module.exports = route;
