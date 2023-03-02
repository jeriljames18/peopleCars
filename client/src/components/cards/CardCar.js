import { useQuery } from "@apollo/client";
import { Card, CardContent, List } from "@mui/material";
import { GET_CARS } from "../../gQueries";
import ListCar from "../list/ListCar";



const CarCard = ({cars,id,personID}) => {

    const { loading, error, data } = useQuery(GET_CARS);
    if (loading) return "Loading....";
    if (error) return "Error has occured in the application";
    
    return (
        <>
            <div>
                <CardContent>
                    <List>
                        <ListCar id={id} data= {cars?cars:data} />
                    </List>
                </CardContent>
            </div>
        </>
    )

}


export default CarCard;
