import Arrow from '../svg/arrow-left.svg'
import Router from 'next/router'


const Header = () => (
  <div className={"navBar"}>
    <div onClick={() => Router.back()}><Arrow className={"arrow"}/></div>
  </div>
)

export default Header