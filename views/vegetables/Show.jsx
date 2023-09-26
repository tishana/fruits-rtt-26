const React = require('react')
class Show extends React.Component {
   render () {
    const veg = this.props.veg
    return (
      <div> 
      <h1> Veggies Show Page </h1>
      <h2>Veggies aren't real...</h2>
      The {veg.name} is {veg.color}. 
      {veg.readyToEat? 'It is ready to eat' : 'It is NOT ready to eat' }
      </div> 
     )
    }
 }
 module.exports  = Show

