import React, { useState, useEffect } from "react"
import styled from "styled-components"

interface Props {
  targetRef: React.RefObject<HTMLElement>
  children: React.ReactNode
  onClick?: () => void
}

const ScrollLink: React.FC<Props> = (props) => {
  const [isClicked, setClicked] = useState(false)

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (props.onClick) props.onClick()
    setClicked(true)
  }

  useEffect(() => {
    if (isClicked && props.targetRef.current) {
      props.targetRef.current.scrollIntoView({ behavior: "smooth" })
      setClicked(false)
    }
  }, [isClicked])

  return (
    <Link {...props} onClick={onClick}>
      {props.children}
    </Link>
  )
}

const Link = styled.a`
  cursor: pointer;
`

export default ScrollLink
