import { useEffect, useState } from "react";
import Header from "./Header";

function Query5() {
  const [data, setData] = useState([]);
  const host = process.env.React_App_Hostname;

  const api = async () => {
    const res = await fetch(`${host}/api/data/fetchFive`);
    const apiData = await res.json();
    setData(apiData);
  };
  useEffect(() => {
    api();
  }, []);

  if (!data) return null;

  function roundedString(numString) {
    return `$${Number(numString).toFixed(2)}`;
  }

  return (
    <>
      <Header
        title={"Query5:"}
        text={
          "Show the data of top 10 cities which have the highest number of users and their average income."
        }
        cls={"normal-heading"}
      />

      <div className="table-container">
        <table border={0} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>City</th>
              <th>Users</th>
              <th>Avg Income</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elem) => (
              <tr key={elem.id}>
                <td>{elem._id}</td>
                <td>{elem.count}</td>
                <td>{roundedString(elem.avg_income)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Query5;
