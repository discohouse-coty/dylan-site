"use client"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { useScroll } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()

  return (
    <main className="h-[500vh] relative">
      <Section
        index={0}
        title="DYLAN BUSH"
        description="EDUCATOR • HISTORIAN • WRITER"
        background="bg-[#C9DDFF]"
        className="text-[#080708]"
        progress={scrollYProgress}
      >
        <div className="flex gap-4">
          <Button size="icon" variant="ghost">
            <Twitter className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Instagram className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Github className="w-5 h-5" />
          </Button>
        </div>
      </Section>

      <Section
        index={1}
        title="ABOUT DYLAN"
        description="My name is Dylan Bush and I'm an historian, educator, and writer. Currently, I'm teaching middle school history in Ohio, and serve as Assistant Athletic Director. Outside of the classroom, I write about history on..."
        background="bg-[#2CA58D]"
        className="text-[#FEFCFB]"
        progress={scrollYProgress}
      >
        <div className="flex gap-4">
          <Button>Education & Certifications</Button>
          <Button>Resume</Button>
        </div>
      </Section>

      <Section
        index={2}
        title="IBIS ACADEMY"
        description="IBIS Academy provides high-quality history resources created by experienced educators. Our platform supports students, teachers, and lifelong learners with engaging materials that foster a deeper understanding of the past."
        background="bg-[#FEFCFB]"
        className="text-[#080708]"
        progress={scrollYProgress}
      >
        <Button>Learn More</Button>
      </Section>

      <Section
        index={3}
        title="NEWSLETTER"
        description="I write a monthly newsletter covering different stories from history that I find compelling."
        background="bg-[#C9DDFF]"
        className="text-[#324FB8]"
        progress={scrollYProgress}
      >
        <Button>Learn More</Button>
      </Section>

      <Section
        index={4}
        title="GET IN TOUCH"
        description="Want to work together? Have questions for Dylan?"
        background="bg-[#324FB8]"
        className="text-[#FEFCFB]"
        progress={scrollYProgress}
      >
        <form className="grid gap-4 w-full max-w-md">
          <input type="text" placeholder="Name" className="w-full p-2 rounded-md bg-white/10 border border-white/20" />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-md bg-white/10 border border-white/20"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-2 rounded-md bg-white/10 border border-white/20"
          />
          <Button className="w-full">Submit</Button>
        </form>
      </Section>
    </main>
  )
}

