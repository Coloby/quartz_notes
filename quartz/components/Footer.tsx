import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default (() => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <ul style={{ display : "flex", flexDirection : "column", gap: "0px"}}>
          <li>
            Ed's <a href="https://edondigital.vercel.app">personal website</a>
          </li>
          <li>
            Website's <a href="https://github.com/Coloby/quartz_notes">source code</a>
          </li>
          <li>
            This website was made using <a href="https://github.com/jackyzha0/quartz">Quartz V4</a> thanks to <a href="https://github.com/jackyzha0">jackyzha0</a> {"<3!"}
          </li>
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
