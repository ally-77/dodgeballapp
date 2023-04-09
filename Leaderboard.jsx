import React from 'react'
import '../styles/Leaderboard.css'

function Leaderboard() {
  return (
  
    <div className="container">
        <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Points from Last Round</th>
            <th>Next Game (Vs.) </th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sydney Sirens</td>
            <td>30</td>
            <td>Melbourne Dodgers</td>
            <td>110</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Melbourne Dodgers</td>
            <td>20</td>
            <td>Sydney Sirens</td>
            <td>98</td>
          </tr>
          <tr>
            <td>3</td>
            <td>QLD Quokkas</td>
            <td>10</td>
            <td>Canberra Cowboys</td>
            <td>86</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Adelaide Adders</td>
            <td>8</td>
            <td>Broom Broome</td>
            <td>78</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Broom Broome</td>
            <td>5</td>
            <td>Adelaide Adders</td>
            <td>65</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard;
