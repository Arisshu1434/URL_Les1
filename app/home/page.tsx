export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold">Welcome to my Portfolio</h1>
      <p className="text-lg text-gray-700">
        Hallo, ik ben een student aan AP hogeschool Antwerpen en dit is mijn portfolio website. 
        Hier kan je al mijn projecten zien die ik heb gemaakt tijdens mijn studie. 
      </p>

      <p className="text-lg text-gray-700">  
      Je kan ook meer informatie vinden over mij en mijn contactgegevens. 
      Veel plezier met het bekijken van mijn portfolio!</p>
 
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get Started
      </button>
    </div>
  )
}
