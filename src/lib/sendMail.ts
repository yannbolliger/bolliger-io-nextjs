import emailjs from "emailjs-com"

const sendMail = (name: string, email: string, message: string) =>
  emailjs.send("bolligerio", "contact_form_bolligerio", {
    name,
    email,
    message,
  })

export default sendMail
