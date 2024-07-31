import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-row justify-center items-center m-auto'>
      <div className="m-2">
        <h1 className="text-5xl font-bold italic">Hello I am Citra P Rahman</h1>
        <span>I am a full-stack Developer based in Istanbul, Turkey.</span>
      </div>
      <Image alt='citra' src='/citra.jpg' width={500} height={500} className="m-2 rounded-full object-cover" />
    </main>
  )
}