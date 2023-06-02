import React, { useEffect, useState } from 'react';

 export default function Home() {
   const[data,setData] = useState([]);
   
   const fetchUserData =()=>{
       fetch("https://reqres.in/api/users?page=2")
       .then((resp)=>resp.json())
       .then((item)=>{
        setData(item.data);
       })
   };
   useEffect(() => {
    fetchUserData()
  }, [])

   console.log(data);
  return (
    <>
    
        <div className="table-responsive">
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">Column 1</th>
                        <th scope="col">Column 2</th>
                        <th scope="col">Column 3</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                       data.map((ele)=>{
                        return (<tr key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.email}</td>
                        <td>{ele.first_name}</td>
                       </tr>)
                       })
                     
                    }   
                </tbody>
            </table>
        </div>
        
        
        
    
    </>
  )
}
