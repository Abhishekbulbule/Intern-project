import { useEffect, useState } from "react";
import Header from "./Header";

function Query3() {
  const [data, setData] = useState([]);
  const host = process.env.React_App_Hostname;

  const api = async () => {
    const res = await fetch(`${host}/api/data/fetchThree`);
    const apiData = await res.json();
    setData(apiData);
  };
  useEffect(() => {
    api();
  }, []);

  if (!data) return null;

  return (
    <>
        <Header title={'Query3:'} text={"Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name."} cls={'normal-heading'}/>

      <div className="table-container">
        <table border={0} cellPadding={10}cellSpacing={0}>
          <thead >
            <tr >
              <th>Name</th>
              <th>Email</th>
              <th>Quote</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((elem)=>(
                    <tr key={elem.id}>
                        <td>{elem.first_name} {elem.last_name}</td>
                        <td>{elem.email}</td>
                        <td>{elem.quote}</td>
                        <td>{elem.gender}</td>
                    </tr>
                ))
            }
          </tbody>

        </table>
      </div>
    </>
  );
}

export default Query3;
