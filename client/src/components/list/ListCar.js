import { BorderColorOutlined, DeleteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import { grid } from "@mui/system";
import { Card } from "antd";
import { Link } from "react-router-dom";

const ListCar = ({ data, id }) => {


    return (
        <>
            {data.cars.map((d, i) => {
                if (id === d.personId) {
                    return (
                        <>
                            <Card style={{ marginTop: 16, flex:0
                            }} key={id} type="inner" title={d.year + " " + d.make + " " + d.model + "-> $ " + d.price}>
                                <div className="links">
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
                            
                        </div>
                            </Card>
                        </>
                    )
                }
            })}
        </>
    )

}

export default ListCar;
