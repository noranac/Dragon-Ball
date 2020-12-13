import React, { Component } from 'react';
import countHits from './countHits';
import vegeta from './vegeta.png'

class Vegeta extends Component {

 
  render() {

      const {name, addOneHit, hocState, life} = this.props;

      const lifeValue = life > 0 ? (<td>{life}%</td>): (<td><span className="badge badge-danger">Game Over</span></td>);

      const button = life > 0 ? ( <button onClick={addOneHit} className="btn btn-success m-3"> {name} Frappe</button>) : ( <button  className="btn btn-danger m-3 disabled"> Game Over</button>);


    return (
      <div className="col"> 
        <img src={vegeta} alt="vegeta" /> <br/>
        {button}
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Coups</th>
                    <th scope="col">Vie</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                     <td>{hocState.hits}</td>
                     <td>{lifeValue}</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default countHits(Vegeta, 10)
