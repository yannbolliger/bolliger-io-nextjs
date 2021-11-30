import emailjs from "emailjs-com"

export default (name: string, email: string, message: string) =>
  emailjs.send("bolligerio", "contact_form_bolligerio", {
    name,
    email,
    message,
  })
