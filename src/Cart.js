import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const navigate = useNavigate()
    const cartdetails = JSON.parse(localStorage.getItem('cart'));
    // console.log("cartdetails", cartdetails)
    // console.log("cartdetailsaaaaaaaaaaaaaa", cartdetails.price)
    let result = []
    cartdetails.map((test) => {

        const index = result.findIndex(item => {
            return item.name === test.name
        })
        if (index === -1) {
            result.push(test)
        } else {
            result[index].price = result[index].price + test.price
            result[index].quta = result[index].quta + 1
        }
    })
    
    let subtotal = ((result.reduce((a,v) =>  a = a + v.price , 0 )))
    let pertotal = ((result.reduce((a,v) =>  a = a + v.price , 0 )  *15 / 100))

    return (
        <div>
            <TableContainer>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell><b>product</b></TableCell>
                            <TableCell><b>Quantity</b></TableCell>
                            <TableCell><b>price</b></TableCell>
                            <TableCell><b>Total</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {result.map((row, index) => 
                        (    
                            <TableRow
                                key={index}
                            >
                                <TableCell >
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.quta}</TableCell>
                                <TableCell>{row.showprice}</TableCell>
                                <TableCell>{row.price}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell> Sub Total</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>{subtotal}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell> GST (15%)</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>{pertotal}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Payable Amount</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>{subtotal + pertotal}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <button onClick={() => navigate('/')}>PRODUCT</button>
        </div>
    )
}

export default Cart