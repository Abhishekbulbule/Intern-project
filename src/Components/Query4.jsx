import { useEffect, useState } from "react";
import Header from "./Header";

function Query4() {
  const [data, setData] = useState([]);
  const host = process.env.React_App_Hostname;

  const api = async () => {
    const res = await fetch(`${host}/api/data/fetchFour`);
    const apiData = await res.json();
    setData(apiData);
  };
  useEffect(() => {
    api();
  }, []);

  if (!data) return null;

  return (
    <>
        <Header title={'Query4:'} text={"Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit."} cls={'normal-heading'}/>

      <div className="table-container">
        <table border={0} cellPadding={10}cellSpacing={0}>
          <thead >
            <tr >
              <th>Name</th>
              <th>Email</th>
              <th>Income</th>
              <th>Car</th>
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

export default Query4;
