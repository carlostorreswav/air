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
  xxs: "@media (max-width: 250px)",
  xs: "@media (max-width: 500px)",
  s: "@media (max-width: 750px)",
  m: "@media (max-width: 1000px)",
  l: "@media (max-width: 1250px)",
  xl: "@media (max-width: 1500px)",
  xxl: "@media (max-width: 1750px)",
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
  transition: all 0.2s ease-in-out;
  ${getStyles}
`

const StyledButton = styled.button`
  transition: all 0.2s ease-in-out;
  outline: none;
  border: none;
  cursor: pointer;
  ${getStyles}
`

const SizeDic = {
  xxs: { fontSize: "1em", prev1: "xxs", prev2: "xxs" },
  xs: { fontSize: "1.2em", prev1: "xxs", prev2: "xxs" },
  s: { fontSize: "1.4em", prev1: "xs", prev2: "xxs" },
  m: { fontSize: "1.6em", prev1: "s", prev2: "xs" },
  l: { fontSize: "1.8em", prev1: "m", prev2: "s" },
  xl: { fontSize: "2em", prev1: "l", prev2: "m" },
  xxl: { fontSize: "2.4em", prev1: "xl", prev2: "l" },
}

const getTextSize = e => {
  const value = SizeDic[e]
  const prev1 = SizeDic[value.prev1]
  const prev2 = SizeDic[value.prev2]
  const result = `
    font-size: ${value.fontSize};
    ${MediaDic.l} {
      font-size: ${prev1.fontSize};
    }
    ${MediaDic.s} {
      font-size: ${prev2.fontSize};
    }
    `
  return result
}

const getTextHover = e => {
  const result = Object.entries(e)
    .map(([rKey, rValue]) => {
      if (TextDic[rKey]) {
        return TextDic[rKey](rValue)
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

const TextDic = {
  bold: () => `font-weight: bold`,
  italic: () => `font-style: italic`,
  underline: () => `text-decoration: underline`,
  uppercase: () => `text-transform: uppercase`,
  lowercase: () => `text-transform: lowercase`,
  capitalize: () => `text-transform: capitalize`,
  color: e => `color: ${e}`,
  size: e => getTextSize(e),
  hover: e => getTextHover(e),
  transition: e => `transition: ${e}`,
}

const getTextStyles = p => {
  let TextStyles = []
  Object.entries(p).forEach(([rKey, rValue]) => {
    if (TextDic[rKey]) {
      TextStyles.push(TextDic[rKey](rValue))
    }
  })
  const result = TextStyles.join("; ")
  console.log("result TextStyles ", result)
  return result
}

export const StyledText = styled.p`
  ${getTextStyles}
`

export const StyledAnchor = styled.a``

const Div = ({ children, ...props }) => (
  <StyledDiv {...props}>{children}</StyledDiv>
)

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

const Text = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
)

const Link = ({ children, ...props }) => (
  <StyledAnchor href={props.href} target="_blank" rel="noreferrer">
    <Text {...props}>{children}</Text>
  </StyledAnchor>
)

export { Div, Button, Text, Link }
