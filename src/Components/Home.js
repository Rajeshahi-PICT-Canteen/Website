import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Layout from "./Layout";
import ItemsData from '../Data/ItemsData'
import Add from '../Assets/Images/Plus.png';
import Minus from '../Assets/Images/Minus.png'

function Home() {
    const [data, setData] = useState({ items: ItemsData, totalcost: 0 });

    const handleAdd = (e) => {
        setData({ items: data.items.map(x => (x.sr === parseInt(e.target.name)) ? { ...x, quantity: x.quantity + 1, cost: (x.cost + x.price) } : x), totalcost: data.totalcost + data.items[e.target.name].price });
    }

    const handleRemove = (e) => {
        setData({ items: data.items.map(x => ((x.sr === parseInt(e.target.name)) && (x.quantity !== 0)) ? { ...x, quantity: x.quantity - 1, cost: (x.cost - x.price) } : x), totalcost: (data.items[e.target.name].quantity !== 0) ? (data.totalcost - data.items[e.target.name].price) : (data.totalcost) });
    }

    const handleReset = () => {
        setData({ items: ItemsData, totalcost: 0 });
    }

    const navigate = useNavigate();

    const handlePrint = () => {
        navigate("/printbill", { state: data })
        handleReset();
    }

    return (
        <Layout className="Home">
            <section id='menu'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Cost</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.items.slice(0, 28).map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.sr + 1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.price}</td>
                                        <td>{value.quantity}</td>
                                        <td>{value.cost}</td>
                                        <td><img src={Add} alt="addIcon" name={value.sr} className="modify" onClick={handleAdd} /><img src={Minus} alt="minusIcon" name={value.sr} className="modify" onClick={handleRemove} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <table id='second_column' className='table'>
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Cost</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.items.slice(28, 56).map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.sr + 1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.price}</td>
                                        <td>{value.quantity}</td>
                                        <td>{value.cost}</td>
                                        <td><img src={Add} alt="addIcon" name={value.sr} className="modify" onClick={handleAdd} /><img src={Minus} alt="minusIcon" name={value.sr} className="modify" onClick={handleRemove} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <span className='column'>
                    <h3 id="billHeading">Bill</h3>
                    <table id='bill' className='last_col_table table'>
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.items.filter(function (element) {
                                    return (element.quantity !== 0);
                                }).map((value, key) => {
                                    return (
                                        (value.quantity !== 0) ?
                                            (<tr key={key}>
                                                <td>{key+1}</td>
                                                <td>{value.name}</td>
                                                <td>{value.price}</td>
                                                <td>{value.quantity}</td>
                                                <td>{value.cost}</td>
                                            </tr>) :
                                            (<></>)
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <h3 id='totalOnHomePage'>Total Cost : ₹ {data.totalcost}</h3>

                    <span id='buttons'>
                        <button className='btn' onClick={handleReset}>Reset</button>
                        <button className='btn' onClick={handlePrint}>Print</button>
                    </span>
                </span>
            </section>

        </Layout>
    );
}

export default Home;
