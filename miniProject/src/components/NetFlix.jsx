import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";
function NetFlix(){
  return (
    <ul>
      {seriesData.map((currEle)=>(
       <SeriesCard key={currEle.id} currEle={currEle}/>
      ))}
    </ul>
  );
};

export default NetFlix;
