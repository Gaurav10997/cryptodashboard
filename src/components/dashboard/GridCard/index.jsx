import "./styles.css"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
function Grid({image,symbol,name,total_volume,market_cap,current_price, price_change_24h,sign}) {
  return (
     <div className={`grid__card  ${sign?"grid__card_border_green":"grid__card_border_red"}`}>
      <div className="nameandlike">
        <div className="nameandicon">
            <img src={image} alt="" width={45} height={45} />
            <div className="nameandshortname">
              <p className="name">{symbol}-USD</p>
              <p className="shortname">{name}</p>
            </div>
        </div>

      </div>

      <div className="percentage">
          <div className={sign?"greenrectangle":"rectangle"}>
              <p className={`price_change ${sign?"green":"red"}`} >{sign&& "+"+price_change_24h}{!sign&&price_change_24h}%</p>
          </div>
          <div className={`${sign?"greencircle":"circle"} ${sign?"green":"red"}`}> 
          {sign&&<TrendingUpIcon />}
          {!sign&&<TrendingDownIcon />}

          </div>
      </div>
      <h3 className={` current_price ${sign?"green":"red"}`} >${current_price}</h3>
      <div className="totalvolume">
        <p className="current" >TotalVolume: <span className="volume">${total_volume}</span></p>
        <p className="current">MarketCap: <span className="volume" >${market_cap}</span> </p>
      </div>
     </div>
  )
}

export default Grid