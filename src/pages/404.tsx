import { useEffect } from "react"

export default function Custom404() {
  useEffect(function redirectHome() {
    window.location.replace('/')
  }, [])
}