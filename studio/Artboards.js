import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer} from 'react-konva';

class Artboards extends Component {

    createObject = (attrs)=> {
        return Object.assign({}, attrs, {
          // define position
          x: 0,
          y: 0,
          // here should be url to image
          src: '',
        });
      }
    



}

export default Artboards;