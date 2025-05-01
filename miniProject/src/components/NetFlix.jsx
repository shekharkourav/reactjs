import seriesData from "../api/seriesData.json"
function NetFlix(){
  return (
    <ul>
      {seriesData.map((currEle)=>{
        return <li key={currEle.id}>
          <div>
            <img src={currEle.img_url} alt="image" height="40%" width="40%" />
          </div>
          <h2>Name:{currEle.name}</h2>
          <h3>Rating:{currEle.rating}</h3>
          <p>Summary:{currEle.description}</p>
          <p>Genre:{currEle.genre}</p>
          <p>Cast:{currEle.cast}</p>
          <a href={currEle.watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
        </li>
      })}
    </ul>
  );
};

export default NetFlix;
