import React from 'react'
import API from '../utils/API';
import Users from './user';

class Content extends React.Component {

  state = {
    name : "JC",
    users: [],
  }


  componentDidMount() {
    //make the call to the API

    //thiss is going to execute only after the first render
    // API.getUsers().then(res => {
    //   console.log('RES', res.data.results);
    //   this.setState({users: res.data.results});
    // });

    API.getMoreUsers('20').then(res => {
      console.log('RES', res.data.results);
      this.setState({users: res.data.results});
    });

    

  }

  

  // handleChangeName () {
  //   this.setState({name: "Fer"}) 
  // }

  render(){
    console.log('SSTATE', this.state.users);
    return (
      <div>
        {
          this.state.users.map(((user, i) => {
            console.log(user.name.first)
            return  <Users name={user.name.first} key={i}/>
          }))
        }
      </div>
    )
  }

}

export default Content;