var Welcome = React.createClass({
  handleLogOut(){
    console.log('logging out');
  },

  render() {
   const { isSingedIn } = this.props;
   return (
     <div className="container">
       {!isSingedIn && (
         <div className="singInContainer">
           <a href="/users/sign_in" className="singInBtn">Log In</a>
           or
           <a href="/users/sign_up" className="singInBtn">Sing Up</a>
         </div>
       )}

       {isSingedIn && (
         <div className="singInContainer">
           <button className="singInBtn" onClick={() => this.handleLogOut()}>Log Out</button>
           <p>Welcome!</p>
         </div>
       )}
     </div>
   )
  }
});
