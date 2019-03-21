import React from 'react'
import {connect} from 'react-redux';

class SampleRouter extends React.Component{
  render(){
    return (
      <div>
        <div>Content for SampleRouter</div>
        <div>{this.props.sampleData}</div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    sampleData: state.sampleData
  }
}
export default connect(mapStateToProps)(SampleRouter);
