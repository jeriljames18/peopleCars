import { Card } from "antd";
import { Link } from "react-router-dom";
import ItemList from "./ItemsList";
import { BorderColorOutlined, Delete, DeleteOutlined, Edit } from "@mui/icons-material";
import CarCard from "../cards/CardCar";
import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import { textAlign } from "@mui/system";


const ListPerson = ({ data }) => {

    return (
        <>
            {data.persons.map((value) => {
                return (
                    <Card key={value.id} title={value.firstName + " " + value.lastName} style={{
                        borderWidth:"5px", borderStyle:"solid" , marginTop:"15px", textAlign:"start"
                    }} >
                        {/* <ItemList
                            firstName={value.firstName}
                            lastName={value.lastName}
                            last={false}
                            key={value.id + value.firstName}
                            id={value.id}
                            dat={value}
                            type="firstName"
                        /> */}
                        <CarCard id={value.id}/>
                        <div className="links" style={{
                            display:"flex",
                            justifyContent:"start"
                        }}>
                            <Link >Learn more</Link>
                        </div>
                        <div style={{
                                display:"flex",
                                justifyContent:"space-around"
                            }}>
                            <IconButton >
                            <BorderColorOutlined />
                            
                            </IconButton>
                            <IconButton >
                            <DeleteOutlined  sx={{ color: red[500] }}/>
                            
                            </IconButton>
                            </div>
                        
                    </Card>
                )
            })}
        </>
    )

}

export default ListPerson;