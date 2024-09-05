import classes from './description.module.css'
import GameCard from '../shared/gameCard'
import SvgPlay from '../icons/Play'
import { useState, useEffect } from 'react'
const Description = (props) => {
    const { likes, dislikes, title, Data } = props
    const [playGamePlay, setPlayGamePlay] = useState(false)
    const youtubeId = 'c401DrpyVdI'
    const gamePlayThumbnailStyle = {
        backgroundImage: `url(https://i.ytimg.com/vi/${youtubeId}/hq720.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top:'0px',
        right:'0px',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        filter: 'grayscale(1)'
    }
    const rating = 10 - (dislikes / likes) * 10
    const countVotes = (likes+dislikes).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    useEffect(() => {
        setPlayGamePlay(false)
    },[title])
    const gamePlayHandler = ()=>{
        setPlayGamePlay(true)
    }
    return <div className={classes.Description}>
        <div className={classes.rightSide}>
            <div className={classes.ad}> 350x600 </div>
        </div>
        <div className={classes.leftSide}>
            <div className={classes.DescriptionHeader}>
                <h1>{title}</h1>
                <div className={classes.rateingSection}>
                    <span className={classes.rateingCounter}>{countVotes}</span>
                    <span className={classes.rateing}>{rating.toFixed(1)}</span>
                </div>
            </div>
            <div className={classes.summary}>
                ملخص اي كلام في اي كلام رغي علي الفاضي 
                ملخص اي كلام في اي كلام رغي علي الفاضي 
                ملخص اي كلام في اي كلام رغي علي الفاضي 
                ملخص اي كلام في اي كلام رغي علي الفاضي 
                ملخص اي كلام في اي كلام رغي علي الفاضي 
                ملخص اي كلام في اي كلام رغي علي الفاضي 
                ملخص اي كلام في اي كلام رغي علي الفاضي 
                ملخص اي كلام في اي كلام رغي علي الفاضي 
            </div>
            <div className={classes.howToPlay}>
                <h2>طريقة اللعب</h2>
                <div>
                ازاي تلعب يا حزين 
                ازاي تلعب يا حزين 
                ازاي تلعب يا حزين 
                ازاي تلعب يا حزين 
                ازاي تلعب يا حزين 
                ازاي تلعب يا حزين 
                ازاي تلعب يا حزين 
                ازاي تلعب يا حزين 
                </div>
            </div>
            <div className={classes.random}>
                <h2>عشوائيات</h2>
                <div>
                    كلام عشوائي توكشو هلا هوب 
                كلام عشوائي توكشو هلا هوب 
                كلام عشوائي توكشو هلا هوب 
                كلام عشوائي توكشو هلا هوب 
                كلام عشوائي توكشو هلا هوب 
                كلام عشوائي توكشو هلا هوب 
                كلام عشوائي توكشو هلا هوب 
                كلام عشوائي توكشو هلا هوب 
                كلام عشوائي توكشو هلا هوب 
                </div>
            </div>
            <div className={classes.control}>
                <h2>شرح التحكم</h2> 
                <div>الكنترول شوف الاعدادات يلا بلاش قرف 
                الكنترول شوف الاعدادات يلا بلاش قرف 
                الكنترول شوف الاعدادات يلا بلاش قرف 
                الكنترول شوف الاعدادات يلا بلاش قرف 
                الكنترول شوف الاعدادات يلا بلاش قرف 
                الكنترول شوف الاعدادات يلا بلاش قرف 
                الكنترول شوف الاعدادات يلا بلاش قرف 
                الكنترول شوف الاعدادات يلا بلاش قرف</div>
            </div>
            <div className={classes.gamePlay}>
                <h2>جيم بلاي من داخل اللعبة</h2>
                <div className={classes.gamePlayContainer}>
                    {playGamePlay ? <iframe src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}/>
                            :
                    <div style={gamePlayThumbnailStyle} className={classes.gamePlayThumbnail}>
                        
                         <button onClick={gamePlayHandler}><SvgPlay /></button> 
                        </div>
                    }
                </div>
                
            </div>
            <div className={classes.developer}>
                <h2>ألعاب من نفس المطور</h2>
                <div>
                    <ul>

                    {Data.map((d,i)=>{ if(i<3) return<GameCard key={d.title.split(" ").join("")+Math.random().toString()} type={d.title} gamedata={d}/>})}
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default Description