import "./Selector.css";

function ListItem(props){
    return <option value={props.value}>{props.value}</option>
}

function Selector({title,valuesList,valueInfo}){
    const listOption = valuesList.map((option, index)=>
        <ListItem key={index} value={option.name}/>
    );

    return(
        <div className="selector">
            <label htmlFor="selector">{title}</label>
            
            <select name="selector" id="selector">
                {listOption}
            </select>
        </div>
    )
}

export default Selector;