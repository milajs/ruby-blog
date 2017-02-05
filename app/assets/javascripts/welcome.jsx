var Welcome = React.createClass({
  render() {
   const { isSingedIn } = this.props;
   return (
     <div className="container">
       {!isSingedIn && (
         <div className="singInContainer">
           <a href="/users/sign_in" onClick={this.props.logIn} className="singInBtn">Войти</a> или <a href="/users/sign_up" className="singInBtn">Зарегистрироваться</a>
         </div>
       )}

       {isSingedIn && (
         <p>Добро пожаловать, {this.props.userEmail}</p>
       )}
     </div>
   )
  }
});
