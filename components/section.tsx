"use client"

import { motion, useTransform, type MotionValue } from "framer-motion"
import type { ReactNode } from "react"

interface SectionProps {
  title: string
  description: string
  children?: ReactNode
  background?: string
  className?: string
  index: number
  progress: MotionValue<number>
}

export function Section({ title, description, children, background = "bg-accent", className = "", index, progress }: SectionProps) {
  const yOffset = useTransform(progress, [index * 0.25, (index + 1) * 0.25], ["0%", "-100%"])
  const scale = useTransform(
    progress,
    [(index - 0.5) * 0.25, index * 0.25, (index + 1) * 0.25, (index + 1.5) * 0.25],
    [0.8, 1, 1, 0.8],
  )
  const blur = useTransform(
    progress,
    [(index - 0.5) * 0.25, index * 0.25, (index + 1) * 0.25, (index + 1.5) * 0.25],
    ["8px", "0px", "0px", "8px"],
  )
  const zIndex = useTransform(progress, [index * 0.25, (index + 1) * 0.25], [5 - index, 5 - index])

  return (
    <motion.section
      style={{
        y: yOffset,
        scale,
        filter: blur,
        zIndex,
      }}
      className={`fixed left-[40px] right-[40px] h-[90vh] ${background} rounded-t-[24px] flex flex-col justify-end p-8 lg:p-12 ${className}`}
    >
      <div className="max-w-4xl">
        <h2 className="text-6xl lg:text-[80px] font-black mb-6">{title}</h2>
        <p className="text-xl lg:text-2xl font-medium mb-8 max-w-2xl">{description}</p>
        {children}
      </div>
    </motion.section>
  )
}

