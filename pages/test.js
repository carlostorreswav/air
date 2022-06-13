import { useContext, useEffect, useState } from "react"
import { Div, Button, Text, Link } from "../air/components"
import Modal from "../air/modal"
import { NotifContext } from "../air/notif"

const Test = () => {
  const [open, setOpen] = useState(false)
  const Notif = useContext(NotifContext)
  useEffect(() => {
    Notif.success("Success")
  }, [open])
  return (
    <>
      <Div bg="red">sdf</Div>
      <Button
        p="xl"
        hover={{ bg: "yellow", p: "s" }}
        m={{ bg: "blue", p: "xxl" }}
      >
        Click me!
      </Button>
      <Text size="m" hover={{ color: "red", bold: "true" }}>
        Im a beautiful Text
      </Text>
      <Modal open={open} setOpen={setOpen}>
        <Div fitContent>
          <Link
            href="https://nextjs.org"
            size="xxl"
            hover={{ color: "tomato", bold: "true" }}
            transition="all 0.3s ease-in-out"
          >
            Next.js
          </Link>
        </Div>
      </Modal>
      <Button
        px="l"
        mx="l"
        hover={{ px: "xl", mx: 0, boxShadow: "0 0 100px rgba(0,0,0,0.5)" }}
        borderRadius="10px"
        boxShadow="0 0 10px rgba(0,0,0,0.5)"
      ></Button>
      <Button size="xl" bold onClick={() => setOpen(true)}>
        Click ME!
      </Button>
    </>
  )
}

export default Test
