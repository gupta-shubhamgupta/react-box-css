import React from "react";
import "./BoxPrint.css";

export default function BoxPrint({ finalBoxCount }){

    // const boxes =  Array.from({length: finalBoxCount}).map((_, index) => (
    //     <tr key={index}>
    //         <td>{index + 1}</td>
    //     </tr>
    // ));
    // const boxes = Array.from({ length: finalBoxCount }, (_, index) => (
    //     <tr key={index}>
    //         <td>
    //             <div className="rectangle"></div>
    //         </td>
    //     </tr>
    // ));
    const boxes = [];
    for(let i =0; i<finalBoxCount; i++){
        boxes.push(
            <tr key={i}>
                <td>
                    <div className="rectangle"></div>
                </td>
            </tr>
        )
    }
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Box</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boxes
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}