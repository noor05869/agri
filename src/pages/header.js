import { Row ,Col} from 'antd'
import React from 'react'
import logo from "../assets/logo.jpg"
function Header() {
  return (
    <div>
      <Row justify='center'>
        <Col >
        <img src={logo} style={{width:"250px",marginLeft:"20px"}} />
        </Col>
        
        </Row> </div>
  )
}

export default Header