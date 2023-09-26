const React = require("react");

class Index extends React.Component {
  render() {
    const { veggies } = this.props;
    return (
      <div>
        <h1>Veggies Index Page</h1>
        <h3>There are no such things as Vegetables!</h3>
        <ul>
          {veggies.map((veg, i) => {
            return (
              <li>
                The <a href={`/veggies/${i}`}>{veg.name}</a> is {veg.color}{" "}
                <br></br>
                {veg.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
              </li>
            );
          })}
        </ul>
        <nav>
          <a href="/veggies/new">Create a New Veg</a>
        </nav>
      </div>
    );
  }
}
module.exports = Index;
