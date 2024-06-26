import React from "react";
import NavBar from "@/components/ui/navbar";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import {LitUpBorderButton} from "@/components/ui/lit-up-border-button";
import SpeechBubble from "@/components/ui/speech-bubble/speech-bubble";
import { cn } from "@/utils/cn";
import Card from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <BackgroundGradientAnimation className="min-h-screen flex">
      <div className="flex flex-col flex-1 z-50 items-center">
        <NavBar/>
        <div className="inset-0 flex flex-1 items-center justify-center p-5">
          <div className="flex flex-col md:flex-row text-white px-4 max-w-screen-xl items-center">
            <div className="mr-0 md:mr-10 lg:mr-28 flex flex-col flex-1">
              <h1 className="text-center md:text-left text-3xl md:text-4xl lg:text-7xl font-bold">Elaborate on your curiosity</h1>
              <p className="text-center md:text-left text-xl md:text-2xl lg:text-4xl pt-10 text-zinc-400">Chat with your podcast, audiobooks and YouTube videos.</p>
              <LitUpBorderButton className="self-center md:self-start mt-9">
                <Link className="px-5 py-3 block text-base md:text-lg" href="/access-form">
                  Request Beta Access
                </Link>
              </LitUpBorderButton>
            </div>
            <div className="hidden md:flex flex-col flex-1 mb-20">
              <SpeechBubble
                className={
                  cn("w-9/12 self-end", 'animate-hovering')} 
                text={"Hey there! I just watched this fascinating YouTube video about quantum computing. Can you tell me more about it?"}/>
              <SpeechBubble
                className={
                  cn("mt-10 w-9/12", "animate-hovering")}
                text={"Of course! Quantum computing is a field that utilizes the principles of quantum mechanics to perform operations on data."}
                isReply
                delay={400}
              />
              <SpeechBubble
                className={
                  cn("mt-10 w-9/12 self-end", "animate-hovering")}
                text={"Wow, that sounds mind-blowing! But how exactly does it differ from traditional computing?"}
                delay={400 + 300}
              />
              <SpeechBubble 
                className={cn("mt-10 w-9/12", "animate-hovering")}
                text={"In traditional computing, bits can only exist in one state at a time, either 0 or 1. However, qubits can exist in a superposition of both states simultaneously, exponentially increasing the computational power of quantum computers."}
                isReply
                delay={400 + 300 + 100}
              />
            </div>
          </div>
        </div>
        <section className="cards flex flex-col md:flex-row justify-between p-5 pb-20 w-full max-w-screen-xl z-[100]">
          <Card className="mr-0 mb-10 md:mr-10 md:mb-0">
            <div className="flex align-center mb-3">
              <Image
                className="card-icon"
                width={30}
                height={30}
                src="/images/globe.svg"
                alt="Globe Icon"
              />
              <h2 className="font-bold text-xl">Instant Video Insights</h2>
            </div>
            <p className="text-white/50">Get quick and accurate summaries of YouTube videos on various topics.</p>
          </Card>
          <Card className="mr-0 mb-10 md:mr-10 md:mb-0">
            <div className="flex align-center mb-3">
            <Image
                className="card-icon"
                width={30}
                height={30}
                src="/images/bar-chart-big.svg"
                alt="Bar Chart Icon"
              />
              <h2 className="font-bold text-xl">Video Analysis</h2>
            </div>
            <p className="text-white/50">Receive detailed analyses and breakdowns of video content, including themes, trends, and important points.</p>
          </Card>
          <Card>
            <div className="flex align-center mb-3">
            <Image
                className="card-icon"
                width={30}
                height={30}
                src="/images/messages-square.svg"
                alt="Speech Bubble Icon"
              />
              <h2 className="font-bold text-xl">Interactive Experience</h2>
            </div>
            <p className="text-white/50">Engage in conversational interactions, ask follow-up questions, and explore further insights effortlessly.</p>
          </Card>
        </section>
      </div>
    </BackgroundGradientAnimation>
  );
}
