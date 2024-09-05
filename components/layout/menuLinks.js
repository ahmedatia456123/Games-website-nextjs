import Link from 'next/link'
const MenuLinks = (props) => {
    return (
        <li>
                <Link href={`/${props.link}`}>
                <a className='menuElement'><div>{props.icon}</div><div>{props.text}</div></a>
                </Link>
            </li>
    )
}

export default MenuLinks