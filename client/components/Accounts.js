import React, {Component}  from 'react';
// since we will be integrating React with Blaze form we need to use react-dom
// to get the div where our component is rendered
import ReactDOM from 'react-dom';
// This ships with Meteor
import {Template} from 'meteor/templating';
// this we add to meteor to handle authentication
import {Blaze} from 'meteor/blaze';

class Accounts extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // called once when the comp is first rendered
    // Render the Blaze accounts form the find the div we just rendered in the 'render' method
    // and place the Blaze accounts form in that div
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));

      console.log(ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    // called once before the component will be removed from the Page
    // go find the forms we created and destroy them
    // we need to clean up those forms ourselves

    // garbage collection to remove fragments in the DOM and remove events that might have been bound to the element
    Blaze.remove(this.view);
  }

   render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
