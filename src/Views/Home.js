import React, { useEffect, useState } from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Home() {
    const url = `https://62ca67134795d2d81f884cca.mockapi.io/products`;
    
    let products = useAxiosGet(url)

    let content = null;

    if(products.error){
        content = <p>
            There was an error please refresh or try again later
        </p>
    }

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content =
                content =
                products.data.map((product)=>
                   <div key={product.id}>
                        <ProductCard
                            product={product}
                        />
                   </div>
                )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home;