import React from "react"
import PropTypes from "prop-types"
class Header extends React.Component {
  render () {
      console.log(this.props);
    return (
      <div className="dayday-header">

        <h1>DAYDAY</h1>   <li><a href="/about/">About</a></li>  <div style={{backgroundImage:'url('+this.props.profile_picture+')'}} className="kookleo-profile-picture" >  </div>

      </div>

    );
  }
}

export default Header
