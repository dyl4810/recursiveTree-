import React from 'react'
import {connect} from 'react-redux'

class NestedTree extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      expanded: true
    }
  }
  nextTreeDepth = ()=> {
    return this.props.treeDepth?this.props.treeDepth + 1: 1
  }
  clickArrow = () =>{
    this.setState({expanded: !this.state.expanded})
  }
  arrow = () =>{
    return this.state.expanded?
      <span onClick={this.clickArrow} className= 'arrow'>&#9662;</span>:
      <span onClick={this.clickArrow} className= 'arrow'>&#9656;</span>
  }
  depthStyle =() =>{
    const i = () => this.props.showRoot?0:1
    return {marginLeft: (this.nextTreeDepth()-1-i())*5 +'px'}
  }  
  renderNestedTree(){
    const{treeData, parentExpanded, showRoot} = this.props
    const{expanded} = this.state
    const{arrow, nextTreeDepth, depthStyle} = this
   
    let renderedTree = []
    if(Array.isArray(treeData)){
      if(showRoot){
        renderedTree.push(<div style={depthStyle()}>{arrow()}{treeData[0].name}</div>)} 
      treeData[0].children.forEach(child =>{
        renderedTree.push(<NestedTree treeData ={child} treeDepth ={nextTreeDepth()} parentExpanded = {expanded} showRoot = {showRoot}/>)
      })
    }
    else if(treeData.children.length > 0 && parentExpanded){
      renderedTree.push(<div style={depthStyle()}>{arrow()}{treeData.name}</div>)
      treeData.children.forEach(child =>{
        renderedTree.push(<NestedTree treeData ={child} treeDepth ={nextTreeDepth()} parentExpanded = {expanded} showRoot = {showRoot}/>)
      })
    }
    else if(treeData.children.length ===0 && parentExpanded){
      renderedTree.push(<div style={depthStyle()}>&nbsp;&nbsp;&nbsp;{treeData.name}</div>)
    }
    else {return null}

    return renderedTree
  }  
  render(){
    return <div>{this.renderNestedTree()}</div>
  }
}
const mapStateToProps = (state, props) =>{
  return{
    treeData: state[props.dataName]
  }
}
export default connect(mapStateToProps)(NestedTree)