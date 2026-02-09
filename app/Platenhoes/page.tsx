'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Platenhoes</h1>

      <div className="flex flex-col gap-6">

        {/* TEKST */}
        <div className="bg-blue-100 p-6 rounded-lg">
          <p className="text-gray-700">
            Dit project gaat over platenhoes die ik heb gemaakt bij Publication lab 2.
            Voor dit project heb ik meer apps kunnen leren bv adobe dimension waar we een
            3D model kunnen maken. Het was een uitdaging om de 3D modellen te maken en
            te combineren in een mooie platenhoes.
          </p>
        </div>

        {/* APPS + EXTRA FLEXBOX NAAST ELKAAR */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* APPS */}
          <div className="md:w-1/3 bg-blue-100 p-6 rounded-lg w-64">
            <h2 className="text-2xl font-bold mb-4">Apps die ik heb gebruikt:</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Adobe Dimension</li>
              <li>Adobe InDesign</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
            </ul>
          </div>

          {/* NIEUWE FLEXBOX (ITEMS NAAST ELKAAR) */}
          <div className="md:w-2/3 bg-blue-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Test prints</h2>

            <div className="flex gap-4">
              <div className=" bg-white p-4 rounded-md flex-1 text-center">
                Test print
                <div className="flex gap-2 justify-center mt-2">
                  <div
                    onClick={() => setSelectedImage('/img/Print.jpg')}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/img/Print.jpg"
                      alt="Silent Echo Platenhoes"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div
                    onClick={() => setSelectedImage('/img/Testprint.jpg')}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/img/Testprint.jpg"
                      alt="Silent Echo Platenhoes"
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* IMAGE */}
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="flex gap-2 justify-center mt-2">
            <div
              onClick={() => setSelectedImage('/img/Platenhoes.png')}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src="/img/Platenhoes.png"
                alt="Silent Echo Platenhoes"
                width={500}
                height={2300}
                className="rounded-lg object-cover"
              />
            </div>
            <div
              onClick={() => setSelectedImage('/img/Front.png')}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src="/img/Front.png"
                alt="Silent Echo Platenhoes"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-screen">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={1200}
              className="max-w-full max-h-screen object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-black text-xl font-bold hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
