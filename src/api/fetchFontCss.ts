import axios from "axios"

const fetchFontCss = async () => {
  const fontDomain = "https://rsms.me/inter/"
  const fontCssFile = await axios.get(`${fontDomain}inter.css`)

  return fontCssFile.data
    .replace(/\n/g, "")
    .replace(/\s\s+/g, " ")
    .replace(/\/\*.*?\*\//g, "")
    .replace(/font-files/g, `${fontDomain}font-files`)
}

export default fetchFontCss
