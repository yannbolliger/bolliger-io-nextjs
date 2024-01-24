import Eric from "../content/Eric.mdx"
import Yann from "../content/Yann.mdx"
import ericImg from "./eric.jpg"
import yannImg from "./yann.jpg"

const data = {
  yann: {
    firstName: "Yann",
    links: [
      { title: "Github", href: "https://github.com/yannbolliger" },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/yannbolliger/",
      },
    ],
    img: yannImg,
    about: <Yann />,
  },
  eric: {
    firstName: "Éric",
    links: [
      { title: "Flickr", href: "https://www.flickr.com/photos/147989145@N07" },
    ],
    img: ericImg,
    about: <Eric />,
  },
}

export default data
