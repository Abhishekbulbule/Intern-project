import { useEffect, useState } from "react";
import Header from "./Header";

function Query1() {
  const [data, setData] = useState([]);
  const host = process.env.React_App_Hostname;

  const api = async () => {
    const res = await fetch(`${host}/api/data/fetchOne`);
    const apiData = await res.json();
    setData(apiData);
  };
  useEffect(() => {
    api();
  }, []);

  if (!data) return null;

  return (
    <>
        <Header title={'Query1:'} text={"Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”."} cls={'normal-heading'}/>

      <div className="table-container">
        <table border={0} cellPadding={10} cellSpacing={0}>
          <thead color='red'>
            <tr >
              <th>Name</th>
              <th>Email</th>
              <th>Income</th>
              <th>Car Brand</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((elem)=>(
                    <tr key={elem.id}>
                        <td>{elem.first_name} {elem.last_name}</td>
                        <td>{elem.email}</td>
                        <td>${elem.income}</td>
                        <td>{elem.car}</td>
                    </tr>
                ))
            }
          </tbody>

        </table>
      </div>
    </>
  );
}

export default Query1;
