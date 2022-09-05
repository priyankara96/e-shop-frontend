import React from 'react';
import Itemcard from './ItemCard';
import data from './data';
import './productstyle.css';

const HomeCart = () => {


    return (
        <div>
          
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard 
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index} />
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default HomeCart;