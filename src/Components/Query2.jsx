import { useEffect, useState } from "react";
import Header from "./Header";

function Query2() {
  const [data, setData] = useState([]);
  const host = process.env.React_App_Hostname;

  const api = async () => {
    const res = await fetch(`${host}/api/data/fetchTwo`);
    const apiData = await res.json();
    setData(apiData);
  };
  useEffect(() => {
    api();
  }, []);

  if (!data) return null;

  return (
    <>
        <Header title={'Query2:'} text={"Male Users which have phone price greater than 10,000."} cls={'normal-heading'}/>

      <div className="table-container">
        <table border={0} cellPadding={10}cellSpacing={0}>
          <thead >
            <tr >
              <th>Name</th>
              <th>Email</th>
              <th>Income</th>
              <th>Ph_Price</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((elem)=>(
                    <tr key={elem.id}>
                        <td>{elem.first_name} {elem.last_name}</td>
                        <td>{elem.email}</td>
                        <td>${elem.income}</td>
                        <td>{elem.phone_price}</td>
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

export default Query2;
