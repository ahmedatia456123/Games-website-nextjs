import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import {FacebookIcon,TwitterIcon,WhatsappIcon,TelegramIcon,PinterestIcon} from "react-share"
import classes from './socialShare.module.css'
const shareIcons = [
    {share:FacebookShareButton,icon:FacebookIcon,text:"FaceBook"},
    {share:WhatsappShareButton,icon:WhatsappIcon,text:"WhatsApp"},
    {share:TwitterShareButton,icon:TwitterIcon,text:"Twitter"},
    {share:TelegramShareButton,icon:TelegramIcon,text:"Telegram"},
    {share:PinterestShareButton,icon:PinterestIcon,text:"Pinterest"}
]



const SocialShare = (props) => {
    const {pageUrl , onclick} = props
    return <>
        <div onClick={onclick} className={classes.shareBackDrop}></div>
        <div className={classes.socialLightBox}>
            <div onClick={onclick} className={classes.close}>X</div>
            <div className={classes.iconsContainer}>
                {shareIcons.map((share, i) => (
                    <share.share
                        url={"https://peing.net/ja/"}
                        quote={"qoute"}
                        hashtag={"#hashtag"}
                        description={"aiueo"}
                        className={classes.shareContainer}
                    >
                        <share.icon size={160} round /> {share.text}
                    </share.share>
                ))}
            </div>
            <div className={classes.sharelink}>{pageUrl}</div>
        </div>
    </>
        
    
}

export default SocialShare