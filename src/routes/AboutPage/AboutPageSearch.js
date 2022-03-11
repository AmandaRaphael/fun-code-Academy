
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import style from "./About.module.css";
const AboutPageSearch = () => {
    const {data,searchInput} = useContext(MyContext);
    const { results, loading, error } = data;
    if (loading) return <p>Loading....</p>;
    if (error) return <p>{error}</p>;
  const dataList = [];
  const count= Math.min(5,results.data.length)
    for (var i = 0; i <= count; i++){
        dataList.push(results.data[i])
    }
    return (
      <div className={style.li}>{count?
        dataList.map((ele, i) => {
            return (
              <div >
                <li key={ele.name}>
                  {ele.name}{" "}
                  <a href={ele.web_pages} >
                    Website
                  </a>{" "}
                </li>
              </div>
            )
              
        }) : <li>Sorry! No search results for {searchInput}</li>}
  
      </div>
    );
}

export default AboutPageSearch
