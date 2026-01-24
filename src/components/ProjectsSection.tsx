import { FunctionComponent } from "react"
import { chunk } from "lodash"

import { colors } from "../styled"
import ItemContainer from "../styled/ItemContainer"
import { Section } from "../styled/LinkList"
import SplitView from "../styled/SplitView"
import TextBlockSection from "./TextBlockSection"

import dj from "../content/djing.jpg"
import moderation from "../content/moderation.png"
import portrait from "../content/portrait.jpg"
import Projects from "../content/Projects.mdx"

const projects = [
  {
    name: "DJ",
    person: "both",
    img: dj,
    desc: (
      <>
        Als DJ-Duo Fratelli Flex treten wir gemeinsam auf.{" "}
        <i>Strictly hits only.</i>
      </>
    ),
  },
  {
    name: "Public speaking",
    person: "Yann",
    img: moderation,
    desc: (
      <>
        Wir geniessen die Bühnenluft, zum Beispiel bei der Moderation des
        Gala-Abends.
      </>
    ),
  },
  {
    name: "Fotografie",
    person: "Éric",
    img: portrait,
    desc: "Ob Unternehmensporträt oder Anlass, Éric fängt die Stimmung ein.",
  },
]

const ProjectsSection: FunctionComponent<Section> = (props) => (
  <>
    <TextBlockSection {...props} color={colors.secondary} borderTop>
      <Projects />
    </TextBlockSection>

    {chunk(projects, 2).map((pjs) => (
      <SplitView key={pjs.map((p) => p.name).join("-")}>
        {pjs.map(({ name, person, img, desc }, i) => (
          <ItemContainer
            key={name}
            title={name}
            sideTitle={person === "both" ? "Beide" : person}
            color={colors.secondaryLight}
            img={{ src: img, alt: name }}
            borderRight={pjs.length > 1 && i == 0}
          >
            <p>{desc}</p>
          </ItemContainer>
        ))}
      </SplitView>
    ))}
  </>
)

export default ProjectsSection
