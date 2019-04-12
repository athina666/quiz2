import React from 'react';

import './Header.css'

export class Header extends React.Component {
    
    
    render ()  {
        return (
          <div className='container-header'>
                <div>
                    <h1>This is a quiz</h1>
                </div>
             <div className='header'>
                <span className="prev">Previous</span>
                <div className="clear-box"><div id='infinity'></div></div>
                <span className="next">Next</span>
            </div>
         </div>
        );
    }
};

