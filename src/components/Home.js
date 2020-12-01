import React from 'react';
import Product from './Product';

const Home = (props) => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat lacus, consequat ac lorem eget, pulvinar fringilla lorem. Curabitur mollis turpis a purus faucibus, ac consectetur leo porta. Pellentesque lacinia venenatis mi eget placerat. Vivamus venenatis auctor ante eu pellentesque. Sed porta, diam vel volutpat tincidunt, nunc diam pellentesque turpis, quis consequat erat enim in magna. Nam porttitor aliquet commodo. Phasellus non hendrerit sem. Nulla volutpat vitae enim ac consequat. Vivamus a consectetur magna.
            </p>
            <Product 
                name="Playstation 5"
                price={4.50}
                addBasket={props.addBasket}
            />
            <Product
                name="IPhone 12"
                price={2000}
                addBasket={props.addBasket}
            />
        </div>
    )
}

export default Home

