import Link from "next/link"

const Homepage = () => {
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      
      <div className="flex flex-col items-center border-2 p-5 rounded-xl">
      <h1 className="p-5 ">For testing purpose</h1>
      <h3 className="p-3  ">Login as </h3>
      <Link href="/admin"> 
      <p className="py-2 px-4 m-1 bg-lamaYellow rounded-xl">Admin</p>
      </Link>
      
      <Link href="/parent"> 
      <p className="py-2 px-4 m-1 bg-lamaPurple rounded-xl">Parent</p>
      </Link>
      
      <Link href="/student"> 
      <p className="py-2 px-4 m-1 bg-lamaSky rounded-xl">Student</p>
      </Link>
      </div>



    </div>
  )
}

export default Homepage