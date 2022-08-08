import { variableParams } from "../styles/variableParams"

export function changeRootVariables(theme) {
  const root = document.querySelector(":root")

  variableParams.forEach((element) => {
    root.style.setProperty(
      `--${element}-default`,
      `var(--${element}-${theme ? "light" : "dark"})`
    )
  })
}
