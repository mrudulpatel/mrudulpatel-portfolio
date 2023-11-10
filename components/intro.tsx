"use client";
import Image from 'next/image';
import React from 'react'

const Intro = () => {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div>
                <Image src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"} width={192} height={192} alt='profile-photo' />
            </div>
        </div>
    </section>
  )
}

export default Intro