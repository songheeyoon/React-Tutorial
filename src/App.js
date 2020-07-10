import React,{Component} from 'react';
import './App.css';
import Customer from './components/Customer';

  var customers =[{
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '송',
    'birthday' : '201010',
    'gender' : '여',
    'job' : '초등학생'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '길동',
    'birthday' : '941222',
    'gender' : '남자',
    'job' : '백수'
  },  
]
  class App extends Component{
    render(){
      return(
        <div>
        {
          customers.map(c=>{
            return( 
            <Customer 
            key ={c.id}
            id={c.id} 
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}>
            </Customer>
            );
          })          
        }
      </div>
      );
    }
  }

export default App;
