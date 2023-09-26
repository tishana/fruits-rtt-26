const React = require('react')

   class New extends React.Component {
     render() {
       return (
           <div>
               <h1>New Veg page</h1>
               <h2>Don't believe the hype</h2>
               <h2>Vegetables aren't real...</h2>
               {/* NOTE: action will be the route, method will be the HTTP verb */}
               <form action="/veggies" method="POST">
                 Name: <input type="text" name="name" /><br/>
                 Color: <input type="text" name="color" /><br/>
                 Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                 <input type="submit" name="" value="Create Veg"/>
               </form>
           </div>)
       }
     }

   module.exports = New