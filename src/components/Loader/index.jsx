import { Component } from 'react';
import { ColorRing } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <ColorRing
        visible={this.props.visible}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    );
  }
}