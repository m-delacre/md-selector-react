import "./Selector.css";
import React from "react";
/**
 * 
 * @param {string} props.value 
 * 
 * @returns will create an option for the select
 */
function ListItem(props){
    return <option value={props.value}>{props.value}</option>
}

/**
 * 
 * @param {string} title 
 * @param {Array} valuesList
 * @param {function} onChange(event)
 * 
 * @returns our Selector component with the label and the select
 */
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