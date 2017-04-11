import React from 'react';

class LoginComponent extends React.Component {
   render() {
      return (
         <div>
            <h2>Login</h2>
            <form id="loginForm" action="/login" method="POST">
               <table>
                  <tr>
                     <td>Username:</td><td><input type="text" name="username"/></td> 
                  </tr>
                  <tr>
                     <td>Password:</td><td><input type="password" name="password"/></td> 
                  </tr>
                  <tr>
                     <td><input type="submit"/></td> 
                  </tr>
               </table> 
            </form>
         </div>
      );
   }
}

export default LoginComponent;