/* This example requires Tailwind CSS v2.0+ */
import Header from 'components/Header'


export default function Home() {
  return (
    <>
      <div className="min-h-full">
        <Header currentPage='Home'/>
        <main>
          <div className='flex items-center justify-center h-screen'>
            <h1 className='text-2xl font-medium'>Welcome !</h1>
          </div>
        </main>
      </div>
    </>
  )
}
