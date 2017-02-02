var Welcome = React.createClass({
  render() {
   const { isSingedIn } = this.props;
   return (
     <div className="container">
       {!isSingedIn && (
         <div className="singInContainer">
           <button className="singInBtn">Войти</button> или <button className="singInBtn">Зарегистрироваться</button>
         </div>
       )}

       {isSingedIn && (
         <p>Добро пожаловать</p>
       )}
     </div>
   )
  }
});
