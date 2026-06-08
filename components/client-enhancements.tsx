"use client"

import dynamic from "next/dynamic"

const LoadingScreen = dynamic(() => import("@/components/loading-screen"), {
  ssr: false,
})

const Cursor = dynamic(() => import("@/components/cursor"), {
  ssr: false,
})

export default function ClientEnhancements() {
  return (
    <>
      <LoadingScreen />
      <Cursor />
    </>
  )
}
