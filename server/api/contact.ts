import nodemailer from 'nodemailer';
import { createError, defineEventHandler, readBody } from 'h3';
import type { ContactForm } from '~/types';

export default defineEventHandler(async (event) => {
  try {
    // Get form data from request body
    const body = await readBody(event) as ContactForm;
    
    // Validate form data
    if (!body.name || !body.email || !body.subject || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'All fields are required'
      });
    }
    
    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${body.name}" <${body.email}>`,
      to: process.env.EMAIL_TO || 'enalsy22@gmail.com',
      subject: body.subject,
      text: body.message,
      html: `<p>${body.message}</p>`,
    });
    
    // Return success response
    return {
      success: true,
      message: 'Your message has been sent. Thank you!',
      messageId: info.messageId
    };
  } catch (error) {
    // Handle errors
    console.error('Error sending email:', error);
    
    // Return error response
    return {
      success: false,
      message: error.message || 'Something went wrong. Please try again.'
    };
  }
});