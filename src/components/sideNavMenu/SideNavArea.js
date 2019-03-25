import React from 'react'
import '../../styles/App.css'
import NestedTree from './NestedTree'
import FlatTree from './FlatTree'

class SideNavArea extends React.Component{

  render(){
    return(
      <div className = "sideNav-Container">
        <div className = "sideNav-One">          
          <b>Nested Tree Data</b>
          <hr/>
          <NestedTree dataName ='treeDataNested' showRoot = {true}/>
        </div>
        <div className = "sideNav-Two">        
          <b>Flat Tree Data</b>
          <hr/>
          <FlatTree dataName = 'treeDataFlat' showRoot={false}/>
        </div>        
      </div>
    )
  }
}
export default SideNavArea

