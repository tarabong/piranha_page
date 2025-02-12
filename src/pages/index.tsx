import { useEffect } from "react"
import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/top')
  },[router])

  return<></>
}

export default Home