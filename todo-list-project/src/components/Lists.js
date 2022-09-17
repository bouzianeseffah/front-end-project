import React  from 'react';
import Card from 'react-bootstrap/Card';


export default function Lists(props) {
  {/* onUpdate function that invoke the bakc-end patch api whenever the user clicks on 
the check/uncheck icon  */}
{/* onDelete function to delete data from mangoDb whenever the user 
click on the delete button  */}
  const { todos, onUpdate, onDelete } = props
 return (
  <div className="lists-container">
   <Card border="info" className="list-card">
     {/* <Card.Header>Header</Card.Header> */}
     <Card.Body >
       <Card.Title>
       <div className="App mt-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col"> createdOn</th>
                        <th scope="col">Done</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {/*maping over todo list */}
                    {
                       todos && todos.map  (todo => {
                            return (
                                <tr key={todo._id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.createdOn}</td>
                                    <td onClick={() => onUpdate(todo._id, todo.done)}>
                                        {
                                            (todo.done) ? 
                                            (<img width="25" src="http://pluspng.com/img-png/green-tick-png-hd-open-2000.png" />) 
                                            :
                                            (<img width="25" src="https://icon-library.com/images/uncheck-icon/uncheck-icon-17.jpg" />)
                                        }
                                    </td>
                                    <td>
                                        <button className='btn btn-danger'
                                          onClick={() => onDelete(todo._id)}>
                                          Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                      }
                </tbody>
            </table>
        </div>
       </Card.Title>
       <Card.Text>
        
       </Card.Text>
     </Card.Body>
   </Card>
   <br />
   <Card border="info" className="list-card">
     <Card.Body >
       <Card.Title>Info Card Title 2</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the
         bulk of the card's content.
       </Card.Text>
     </Card.Body>
   </Card>
  </div>
 )
}