import React from 'react';
import '../../MainSuppliers.css';
import Footer from '../Footer';

export default function Home() {
var textStyle = {
position: 'absolute',
fontSize: '90px',
top: '60%',
left: '5%',
color: 'white'
};
var textStyle2 = {
position: 'absolute',
fontSize: '90px',
top: '70%',
left: '5%',
color: 'white'
};
return ( <div>
              <h1
                className='homesup'>
              </h1>
              <h1 style={textStyle} >Welcome</h1>
              <h1 style={textStyle2}>{localStorage.username}</h1>

              <Footer />
          </div>);
}
