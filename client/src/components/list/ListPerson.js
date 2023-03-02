import { Card } from "antd";
import { Link } from "react-router-dom";
import ItemList from "./ItemsList";
import { BorderColorOutlined, Delete, DeleteOutlined, Edit, Filter } from "@mui/icons-material";
import CarCard from "../cards/CardCar";
import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import { textAlign } from "@mui/system";
import { useMutation } from "@apollo/client";
import { GET_PEOPLE, REMOVE_PERSON } from "../../gQueries";


const ListPerson = ({ data }) => {

    
    const [removePerson] = useMutation(REMOVE_PERSON, {
        update(cache, { data: { removePerson } }) {
          const { people } = cache.readQuery({ query: GET_PEOPLE });
          cache.writeQuery({
            query: GET_PEOPLE,
            data: {
              people: Filter(people, (c) => {
                return c.id !== removePerson.id;
              }),
            },
          });
        },
      });
    const handleDelete = (e,d)=>{
        const { id, firstName, lastName } = d;
        removePerson({
            variables: {
                id,
              },
              optimisticResponse: {
                __typename: "Mutation",
                removePerson: {
                  __typename: "Person",
                  id,
                  firstName,
                  lastName,
                },
              },
        })
    }

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
                            <DeleteOutlined  to={`/person/${value.id}`} onClick={(e)=>handleDelete(e,value)} sx={{ color: red[500] }}/>
                            
                            </IconButton>
                            </div>
                        
                    </Card>
                )
            })}
        </>
    )

}

export default ListPerson;