import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


function Home() {


    const navigate = useNavigate()

    const data = [
        {
            id: 1,
            name: "pen",
            price: 50,
            quta: 1,
            showprice:50
        },
        {
            id: 2,
            name: "chaddi",
            price: 150,
            quta: 1,
            showprice:150
        },
        {
            id: 3,
            name: "pent",
            price: 2000,
            quta: 1,
            showprice:2000
        },
        {
            id: 4,
            name: "shirt",
            price: 1500,
            quta: 1,
            showprice:1500
        },
        {
            id: 5,
            name: "pencil",
            price: 30,
            quta: 1,
            showprice:30
        }
    ]

    const [cart, setCart] = useState([])


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    function addToCart(cartitem) {
        setCart([...cart, cartitem]);
    }

    function removeToCart(id) {
        setCart(cart.filter(cart => cart.id !== id))
    }



    console.log("cart", cart);
    return (
        <>
            <button onClick={() => navigate('/cart')}>ADD CART PRODUCT</button>
            <h1>Product Add Qty :{cart.length}</h1>
            <div className="App">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <h2>{item.id}</h2>
                                <h2>{item.name}</h2>
                                <h2>{item.price}</h2>
                                <button onClick={() => addToCart(item)}>+</button>

                                <button onClick={() => removeToCart(item.id)}>-</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Home;








// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // import Cart from './Cart';

// function Home() {
//   const navigate = useNavigate();

//   const [data, setData] = useState([
//     {
//       id: 1,
//       name: "Phone",
//       price: 20000,
//       totalprice: 0,
//       qty: 0,
//       totalQty: 10,
//     },
//     {
//       id: 2,
//       name: "Hedphone",
//       price: 1000,
//       totalprice: 0,
//       qty: 0,
//       totalQty: 19,
//     },
//     {
//       id: 3,
//       name: "Leptop",
//       price: 60000,
//       totalprice: 0,
//       qty: 0,
//       totalQty: 12,
//     },
//     {
//       id: 4,
//       name: "Whtch",
//       price: 15000,
//       totalprice: 0,
//       qty: 0,
//       totalQty: 20,
//     },
//     {
//       id: 5,
//       name: "Wifi",
//       price: 50000,
//       totalprice: 0,
//       qty: 0,
//       totalQty: 23,
//     },
//   ]);

//   function addToCart(id) {
//     const newData = [...data];
//     const index = newData.findIndex((item) => {
//       return item.id === id;
//     });

//     if (index !== -1) {
//       if (newData[index].totalQty !== 0) {
//         newData[index].qty = newData[index].qty + 1;
//         newData[index].totalQty = newData[index].totalQty - 1;
//       }
//     }

//     setData(newData);
//   }

//   function removeToCart(id) {
//     const newData = [...data];
//     const index = newData.findIndex((item) => {
//       return item.id === id;
//     });

//     if (index !== -1) {
//       if (newData[index].qty !== 0) {
//         newData[index].qty = newData[index].qty - 1;
//         newData[index].totalQty = newData[index].totalQty + 1;
//       }
//     }

//     setData(newData);
//   }

//   function page() {
//     navigate("/Cart");
//   }

//   return (
//     <>
//       <div className="App">
//     <button onClick={() => page()}>  ADD CART TO PRODUCT  </button>
//         {data.map((item, index) => {
//           return (
//             <div key={index}>
//               <h2>id:{item.id}</h2>
//               <h2>name:{item.name}</h2>
//               <h2>price:{item.price}</h2>
//               <h2>totalQty:{item.totalQty}</h2>

//               <button onClick={() => addToCart(item.id)}>+</button>
//               <h4>Quit:{item.qty}</h4>
//               <h4> Totalprice:{item.totalprice}</h4>
//               <button onClick={() => removeToCart(item.id)}>-</button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default Home;



