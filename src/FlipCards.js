import React from 'react';
import FlipCard from 'react-flipcard';
import './Cards.css';

export default class FlipCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }
  render() {
    return (
      <div className="cards">
            <FlipCard>
              <div>
                <div>Shikha Singh</div>
                
              </div>
              <div>Mumbaikar</div>
              
            </FlipCard>
  
      </div>
    );
  }
}
