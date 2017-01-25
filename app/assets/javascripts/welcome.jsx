 // Place all the behaviors and hooks related to the matching controller here.
 // All this logic will automatically be available in application.js.
 // You can use CoffeeScript in this file: http://coffeescript.org/

 var Welcome = React.createClass({
   render() {
     console.log(this.props.isSingedIn);
     return (
       <div>
        <h1>Hello, World!</h1>
       </div>
     )
   }
 });
