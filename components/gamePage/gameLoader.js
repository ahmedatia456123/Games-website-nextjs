import { Fragment, useReducer,useState, useEffect, useRef, useCallback } from "react"
import classes from './gameLoader.module.css'
import SvgExpand from '../icons/Expand'
import SvgLike from '../icons/Like'
import SvgDislike from '../icons/Dislike'
import SvgShare from '../icons/Share'
import SvgShrink from '../icons/Shrink'
import SvgDown from '../icons/Down'
import SvgUp from '../icons/Up'
import fscreen from 'fscreen'
import { motion } from 'framer-motion'
import SocialShare from './socialShare'

const initialState = {
    like: false,
    dislike: false,
    likes: 0,
    dislikes:0
}

const reducer = (state, action) => {

    if (action.type === "SET") {
        return {
                like: action.payload.likestate,
                dislike: action.payload.dislikestate,
                likes: action.payload.likes,
                dislikes:action.payload.dislikes
            }
    }else
        if (action.type === "LIKE") {
        if (state.dislike) {     
            return {
                
                like: true,
                dislike: false,
                likes: state.likes+1,
                dislikes: state.dislikes-1
            }
        } else if(!state.like) {
            return {
                
                like: true,
                dislike: false,
                likes: state.likes+1,
                dislikes: state.dislikes
            }    
            }
        } else if (action.type === "DISLIKE") {
            
            if (state.like) {
                return {
                
                like: false,
                dislike: true,
                likes: state.likes-1,
                dislikes:state.dislikes+1
            }
        } else if(!state.dislike) {
            
            return {
                
                like: false,
                dislike: true,
                likes: state.likes,
                dislikes:state.dislikes+1
            }    
        }
        }
    return state
}
const iframeVariants = {
    hide: {
        height: "100%"
    },
    show: {
        height: "calc(100% - 45px)"
    }
}
const toolsBarVariants = {
    hide: {
        y:50
    },
    show: {
        y:0
    }
}
const GameLoader = (props) => {
    const [startGame, setStartGame] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [showToolsBar, setShowToolsBar] = useState(true)
    const [showShareBox, setShowShareBox] = useState(false)
    const element = useRef()
    const [handelLikes,dispatchLikes] = useReducer(reducer,initialState)
    
    const { url, img, title, likes, dislikes,pageUrl } = props
    
    const loaderStyle = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(9px)',
        position: 'absolute',
        top:'0px',
        right:'0px',
        width: '100%',
        height: '100%'
    }
    useEffect(() => {
        setIsFullScreen(false)
        setStartGame(false)
        setShowToolsBar(true)
        const likestate = JSON.parse(localStorage.getItem(`${title}like`))
        const dislikestate = JSON.parse(localStorage.getItem(`${title}dislike`))
        console.log(dislikestate," ",likestate)
        dispatchLikes({ type:"SET",payload:{ likes, dislikes,likestate,dislikestate }})
    },[title])
    const startingGameHandler = () => {
        setStartGame(true)
    }
    const isFullScreenAllowed = fscreen.fullscreenEnabled
    const fullScreenHandler = () => {
        
        fscreen.addEventListener('fullscreenchange', handler, false)
        if (fscreen.fullscreenElement) {
            fscreen.exitFullscreen()
        } else {
            fscreen.requestFullscreen(element.current)
        }
        
        
    }
    const handler = () => {
        if (fscreen.fullscreenElement !== null) {
            setIsFullScreen(true)
        } else {
            setIsFullScreen(false)
            fscreen.removeEventListener('fullscreenchange', handler, false)
        }
    }
    const likeHandler = () => {
        dispatchLikes({ type: "LIKE" })
        localStorage.setItem(`${title}like`, "true")
        localStorage.setItem(`${title}dislike`, "false")
    }
    const dislikeHandler = () => {
        dispatchLikes({ type: "DISLIKE" })
        localStorage.setItem(`${title}like`, "false")
        localStorage.setItem(`${title}dislike`, "true")
    }
    const showToolsBarHandler = () => {
        setShowToolsBar(!showToolsBar)
    }
    const shareBoxHandler = () => {
        setShowShareBox(!showShareBox)
    }

    return <Fragment>
        
        <div ref={element} className={classes.gameContainer}>
            {showShareBox && <SocialShare pageUrl={pageUrl} onclick={shareBoxHandler} url={url} />}
            {!startGame ? <div className={classes.gameLoader}>
            <div style={loaderStyle}></div>
            <button onClick={startingGameHandler}>
                ابدأ اللعبة
            </button>
            <div className={classes.ad}>720x90</div>
        </div>
            :
            <>
                    <motion.iframe variants={iframeVariants} transition={{duration:1}} animate={showToolsBar ? "show" : "hide"} src={url}></motion.iframe>
                    <motion.button transition={{duration:1}} variants={toolsBarVariants} animate={!showToolsBar ? "show" : "hide"} drag onClick={showToolsBarHandler} className={classes.upBtn}><SvgUp /></motion.button>
                    <motion.div transition={{duration:1}} variants={toolsBarVariants} animate={showToolsBar ? "show" : "hide"} className={classes.gameToolsBar}>
                        
                        <div className={classes.right}>
                            {isFullScreenAllowed &&
                                <span onClick={fullScreenHandler} className={classes.expand}>
                                    <button>
                                        {!isFullScreen ?
                                            <SvgExpand /> : <SvgShrink />
                                        }
                                    </button>
                                </span>
                            }
                        <span onClick={shareBoxHandler} className={classes.share}>
                            <button><SvgShare /></button>
                        </span>
                        <span onClick={likeHandler} className={classes.like}>
                            <button><SvgLike fill={handelLikes.like && "#bc13fe"} /></button>
                                <span className={classes.interactionInfo}>{handelLikes.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </span>
                        <span onClick={dislikeHandler} className={classes.dislike}>
                            <button><SvgDislike fill={handelLikes.dislike && "#bc13fe"} /></button>
                                <span className={classes.interactionInfo}>{handelLikes.dislikes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </span>
                        </div>
                        {
                            isFullScreen &&
                        <div onClick={showToolsBarHandler}><button ><SvgDown /></button></div>
                        }
                        <div className={classes.left}>
                        <span className={classes.toolsBarTitle}>
                                <h1>{title}</h1>
                        </span>
                        </div>
                </motion.div>
                </>
        }
        </div>
    </Fragment>

}

export default GameLoader