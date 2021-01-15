import React from 'react';
import './App.css';


const arrayItems = [
  {
    name: "item1",
    desription: "description1"
  },
  {
    name: "item2",
    desription: "description2"
  },
  {
    name: "item3",
    desription: "description3"
  },
  {
    name: "item4",
    desription: "description4"
  },

]
function ActiveLink() {
  function handleClick() {
    arrayItems.map(item => {
      return
    })
  }
    return (
      <div>{arrayItems.item.name}</div>
    )
}


function App() {
  return (
    <div className="App">
      <header className="train-header">
        <div>Hello World</div>
      </header>

      <div className="train-app-dashboard">
        <div className="layout-positioning">
          <div className="sidebar-menu">
            <ul className="sidebar-items">
              {arrayItems.map(item => {
                return(<li onClick={handleClick}>{item.name} </li>)
              })}
            </ul>
          </div>
        </div>
        <div className="description-item-panel">

          {arrayItems.map(item => {
            return(
              <div>{item.desription}</div>
              )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
