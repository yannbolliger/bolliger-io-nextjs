import DirectusSDK from "@directus/sdk-js"

const apiConfig = {
  url: "https://api.bolligerstudios.ch",
  project: "_",
}

const client = new DirectusSDK(apiConfig)

export const sendMail = ({ name, email, message }) =>
  client.createItem("contact_forms", { name, email, message })
