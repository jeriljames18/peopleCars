import { Divider, Input, InputLabel, ListItem } from "@mui/material";
import { Link } from "react-router-dom";



const ItemList = ({firstName,lastName}) => {
    return (

       <>
        <ListItem key={firstName}>
            <InputLabel > {firstName + "  " + lastName}</InputLabel>
            <Divider/>
           
        </ListItem>
       </>
    )

}

export default ItemList;