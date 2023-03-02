import * as React from 'react';
import { useQuery } from "@apollo/client";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card"
import { GET_PEOPLE } from "../../gQueries";
import List from "@mui/material/List"
import ListPerson from '../list/ListPerson';

const CardPerson = () => {

    const { loading, error, data } = useQuery(GET_PEOPLE);
    if (loading) return "Loading...........";
    if (error) return "Error in App........";

    return (
        <div>
            <h2>Records</h2>
            <Card sx={{ maxWidth: "80%" }} style={{ height: "80%" , paddingLeft:"10%" }}>
                <CardContent>
                    <List component="nav">
                        <ListPerson data={data} />
                    </List>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardPerson;