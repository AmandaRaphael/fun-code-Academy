
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import style from "./About.module.css";
const AboutPageSearch = () => {
    const {data} = useContext(MyContext);
    const { results, loading, error } = data;
    if (loading) return <p>Loading....</p>;
    if (error) return <p>{error}</p>;
    const dataList = [];
    for (var i = 0; i <= 5; i++){
        dataList.push(results.data[i])
    }
    return (
      <div>
        {dataList.map((ele, i) => {
            return (
              <div className={style.li}>
                <li>
                  {ele.name}{" "}
                  <a href={ele.web_pages} target="_blank">
                    Website
                  </a>{" "}
                </li>
              </div>
            );
              
            })}
  
      </div>
    );
}

export default AboutPageSearch
