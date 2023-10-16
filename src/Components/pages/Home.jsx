
import React, { useState } from 'react'
import Banner from '../Banner/Banner'
import { useLoaderData } from 'react-router-dom'
import HomeCard from '../HomeCard/HomeCard'
import Brand from '../Brand/Brand'
import Footer from '../Footer/Footer'
import HomeCardTitle from '../HomeCard/HomeCardTitle'
import CoffeeSimble from '../CoffeeSimble/CoffeeSimble'

const Home = () => {
    const dataCoffe = useLoaderData()
    const [data, setDataD] = useState(dataCoffe)
    return (
        <div>
            <Banner />
            <Brand />
           <div className='bg-backgroudHomeCard bg-cover bg-no-repeat'>
           <div>
              <HomeCardTitle /> 
            <div className=' w-9/12 mx-auto grid grid-cols-1  lg:grid-cols-2 my-10 gap-5 mt-10'>
                {data?.map(item => <HomeCard key={item._id} data={item} dataD={data} setDataD={setDataD} />)}
            </div>
           </div>
            </div>
             <CoffeeSimble />
            <Footer/>
        </div>
    )
}

export default Home