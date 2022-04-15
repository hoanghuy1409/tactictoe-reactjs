/* eslint-disable react-hooks/exhaustive-deps */
import { getDocs } from "firebase/firestore";
import { Fragment, useEffect, useState } from "react";

const History = ({collectionRef}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getDocs(collectionRef)
      .then(res => {
        setList(
          res.docs.map(item => {
            return item.data()
          })
        )
      })
      .catch(() => console.log('Fail'))
  }, []);

  return (
    <div id="history">
      <table>
        <tbody>
          <tr>
            <th>Win</th>
            <th>Lose</th>
          </tr>
          {list.map((item, index) => {
            return (
              <Fragment key={index}>
                <tr>
                  <td className="td-left">{item.playerWin[0].toUpperCase() + item.playerWin.substring(1)}</td>
                  <td className="td-right">{item.playerLose[0].toUpperCase() + item.playerLose.substring(1)}</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default History