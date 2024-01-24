import { GetStaticProps } from "next"

export interface WithLocale {
  locale: string
}

export const withLocaleStaticProps: GetStaticProps = ({ locale }) => ({
  props: { locale },
})
