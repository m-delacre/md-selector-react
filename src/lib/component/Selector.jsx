import "./Selector.css";
import React from "react";

function ListItem(props){
    return <option value={props.value}>{props.value}</option>
}

function Selector({title,valuesList, onChange}){
    const listOption = valuesList.map((option, index)=>
        <ListItem key={index} value={option.name}/>
    );

    return(
        <div className="selector">
            <label htmlFor="selector">{title}</label>
            
            <select name="selector" id="selector" onChange={onChange}>
                {listOption}
            </select>
        </div>
    )
}

export default Selector;