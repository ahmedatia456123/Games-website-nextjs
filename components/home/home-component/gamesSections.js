import GameCard from "../../shared/gameCard"
import Link from 'next/link'
const GamesSections = (props) => {
    return <section className={'gameSection ' +  props.recClass}>
        <div>
            <h1>{props.title}</h1>
            <ul>

                {props.data.map(d=>{return<GameCard key={props.title.split(" ").join("")+Math.random().toString()} type={d.title} gamedata={d}/>})}
            </ul>
            {props.moreGames && <span><Link href={props.moreGames}><a>عرض المزيد</a></Link></span>}
        </div>
            
    </section>
}

export default GamesSections