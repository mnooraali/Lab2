import { ReactFragment } from "react";

const changeHandler = (props) => {
    props.setValue(event.target.value);
}

export const Input = () => {

 
    return (
        <ReactFragment>
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="inut-group-text" id="inputGroup-sizing-lg">{props.label} </span>
                </div>   
                <input type="text"
                       className="form-control" 
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-lg"
                       value={props.vlaue}
                       onChange={changeHandler} />
            </div>
        </ReactFragment>
    )
}