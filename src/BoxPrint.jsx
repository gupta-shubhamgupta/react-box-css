import React, {useContext} from "react";
import "./BoxPrint.css";
import BoxInputCount from "./store/app-store";

export default function BoxPrint({ finalBoxCount }){
    const boxNumber = useContext(BoxInputCount);

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
    for(let i =0; i<boxNumber.boxNumbereCount; i++){
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