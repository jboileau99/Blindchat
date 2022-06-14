import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import '../../../fonts/brix.ttf'

import './navigation.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';

const Navigation = () => {

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='back-button link-effects' to='/friends'>
          <ArrowBackIcon/>
        </Link>
        <Link className='logo-button link-effects' to='/friends'>
          Blindchat
        </Link>
        <Link className='logout-button link-effects' to='/'>
          <LogoutIcon/>
        </Link>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation