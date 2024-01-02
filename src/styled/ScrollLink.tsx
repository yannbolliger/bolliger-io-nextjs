import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react"
import styled from "styled-components"

interface Props extends PropsWithChildren {
  targetRef: React.RefObject<HTMLElement>
  onClick?: () => void
  as?: keyof JSX.IntrinsicElements
  className?: string
}

const ScrollLink: FunctionComponent<Props> = ({
  onClick: onClickProp,
  targetRef,
  as,
  children,
  className,
}) => {
  const [isClicked, setClicked] = useState(false)

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    onClickProp?.()
    setClicked(true)
  }

  useEffect(() => {
    if (isClicked && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" })
      setClicked(false)
    }
  }, [isClicked, targetRef])

  return (
    <Link as={as} onClick={onClick} className={className}>
      {children}
    </Link>
  )
}

const Link = styled.a`
  cursor: pointer;
`

export default ScrollLink
