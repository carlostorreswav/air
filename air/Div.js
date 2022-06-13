import styled, { css } from "styled-components"

const MarginDim = {
  xxs: "2px",
  xs: "4px",
  s: "8px",
  m: "16px",
  l: "32px",
  xl: "64px",
  xxl: "128px",
}

const MarginPadding = (array, rValue) => {
  const isNumber = typeof rValue === "number"
  const value = isNumber ? `${rValue}px` : MarginDim[rValue] || `${rValue}`
  return array?.map(k => `${k}: ${value}`).join("; ")
}

const getFlex = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const getStyles = p => {
  let Styles = []
  Object.entries(p).forEach(([rKey, rValue]) => {
    if (MainDic[rKey]) {
      Styles.push(MainDic[rKey](rValue))
    }
  })

  const result = Styles.join("; ")
  console.log("result", result)
  return result
}

const getHover = e => {
  const result = Object.entries(e)
    .map(([rKey, rValue]) => {
      if (MainDic[rKey]) {
        return MainDic[rKey](rValue)
      }
    })
    .join("; ")
  const final = `
    &:hover {
      ${result}
    }
  `
  return final
}

const MediaDic = {
  xxs: "@media (min-width: 200px)",
  xs: "@media (min-width: 400px)",
  s: "@media (min-width: 600px)",
  m: "@media (min-width: 800px)",
  l: "@media (min-width: 1000px)",
  xl: "@media (min-width: 1200px)",
  xxl: "@media (min-width: 1400px)",
}

const getMediaQuery = (e, type) => {
  const result = Object.entries(e)
    .map(([rKey, rValue]) => {
      if (MainDic[rKey]) {
        return MainDic[rKey](rValue)
      }
    })
    .join("; ")
  const final = `
    ${MediaDic[type]} {
      ${result}
    }
  `
  return final
}

const MainDic = {
  ml: e => MarginPadding(["margin-left"], e),
  mr: e => MarginPadding(["margin-right"], e),
  mt: e => MarginPadding(["margin-top"], e),
  mb: e => MarginPadding(["margin-bottom"], e),
  mx: e => MarginPadding(["margin-left", "margin-right"], e),
  my: e => MarginPadding(["margin-top", "margin-bottom"], e),
  m: e => MarginPadding(["margin"], e),
  pl: e => MarginPadding(["padding-left"], e),
  pr: e => MarginPadding(["padding-right", e]),
  pt: e => MarginPadding(["padding-top"], e),
  pb: e => MarginPadding(["padding-bottom"], e),
  px: e => MarginPadding(["padding-left", "padding-right"], e),
  py: e => MarginPadding(["padding-top", "padding-bottom"], e),
  p: e => MarginPadding(["padding"], e),
  flex: () => getFlex(),
  bg: e => `background-color: ${e}`,
  border: e => `border: ${e}`,
  borderRadius: e => `border-radius: ${e}`,
  boxShadow: e => `box-shadow: ${e}`,
  color: e => `color: ${e}`,
  fitContent: () => `width: fit-content`,
  mw: e => MarginPadding(["max-width"], e),
  hover: e => getHover(e),
  transition: e => `transition: ${e}`,
  xxs: e => getMediaQuery(e, "xxs"),
  xs: e => getMediaQuery(e, "xs"),
  s: e => getMediaQuery(e, "s"),
  m: e => getMediaQuery(e, "m"),
  l: e => getMediaQuery(e, "l"),
  xl: e => getMediaQuery(e, "xl"),
  xxl: e => getMediaQuery(e, "xxl"),
  cursor: e => `cursor: ${e}`,
}

const StyledDiv = styled.div`
  ${p => getStyles(p)}
`

export const Div = ({ children, ...props }) => (
  <StyledDiv {...props}>{children}</StyledDiv>
)
