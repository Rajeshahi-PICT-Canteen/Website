import React, { useState, useRef } from 'react';
import Layout from "./Layout";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useReactToPrint } from "react-to-print";
import Printer from "../Assets/Images/Printer.png";

function Viewreport() {

    let report = JSON.parse(localStorage.getItem("Report"));
    report = (report) ? (report) : (null);
    const [reportdata, setReportData] = useState((report) ? ({ reportItems: report.reportItems, reportTotalCost: report.reportTotalCost }) : ({ reportItems: null, reportTotalCost: 0 }));

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    const componentRef = useRef();

    const Print = useReactToPrint({
        content: () => componentRef.current
    });

    function handleReset() {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        localStorage.clear();
                        setReportData({ reportItems: null, reportTotalCost: 0 });
                    }
                },
                {
                    label: 'No',
                }
            ]
        });
    }

    return (
        <Layout>
            <section id='viewreport'>
                <div id='viewreportStatus'>
                    {(report) ? (<>
                        <img src={Printer} alt="" id='reportPrinterIcon' onClick={Print}/>
                        <button className='btn' onClick={handleReset}>Reset</button>
                    </>) : (null)}
                </div>
                {(report) ? (<div id='reportDetails' ref={componentRef}>
                    <h2 id='viewreportHeading'>Total Bill : ₹ {reportdata.reportTotalCost}</h2>
                    <h2 id='viewreportHeading'>Date : {today}</h2>
                    <table id='viewreportTable'>
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
                                report.reportItems.filter(function (element) {
                                    return element.quantity !== 0;
                                }).map((value, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{value.sr + 1}</td>
                                            <td>{value.name}</td>
                                            <td>{value.price}</td>
                                            <td>{value.quantity}</td>
                                            <td>{value.cost}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                ) : (<h2 id='totalBill'>Total Bill : ₹ {reportdata.reportTotalCost}</h2>)}
            </section>
        </Layout>
    );
}

export default Viewreport;
