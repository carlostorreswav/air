import { Div } from "../air"

const Test = () => {
  return (
    <>
      <Div
        bg="blue"
        p="l"
        fitContent
        mw={"0"}
        hover={{ bg: "yellow", p: "xxl" }}
        transition={"all 0.3s ease-in-out"}
        boxShadow={"0 0 10px rgba(0,0,0,0.5)"}
        xl={{
          bg: "pink",
          p: "xl",
          hover: { bg: "violet", p: "0", px: "xxl", cursor: "pointer" },
        }}
      >
        sdf
      </Div>
    </>
  )
}

export default Test
