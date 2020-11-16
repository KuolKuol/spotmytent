import React,{Component} from 'react';
import './Studio.css';
import Sidebar from './Sidebar';
import Artboards from './Artboards';

class Studio extends Component {
    render(){
        return(
            <React.Fragment>
                <Sidebar/>
                <Artboards/>
            </React.Fragment>
        )
    }
}


export default Studio;