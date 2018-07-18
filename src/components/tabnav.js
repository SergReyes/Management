import React, { Component } from 'react';


class Tabnav extends Component {
    render(){
        return(
        <div className="tab-nav">
        <div className=" tab-nav__tabs"> 
        {
            this.props.tabs.map((tab, index) => {
                return <a className="tab-nav__tab"> {tab.title} </a>
            })
        }
        </div>
        <div> stuff and content </div>
        </div>
            )
        }
  }
  export default Tabnav;