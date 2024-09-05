import Link from 'next/link'
import Image from 'next/image'
import classes from './postcard.module.css'
const PostCard = () => {
    return (
        
            <Link href='/'>
            <a>
                    <div className={classes.title}>Shell Shockers</div>
                    <div className={classes.video}>Video</div>
                    <Image className={classes.thumbnail} crossOrigin="anonymous" src='https://images.crazygames.com/shellshockersio/20211202050253/shellshockersio-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop' alt='Shell Shocker thumbnail' width={364} height={208}/>
            </a>
            </Link>
        
    )
}

export default PostCard