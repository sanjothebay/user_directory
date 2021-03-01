import React from "react";
import API from "../utils/API";
import UserResultsList from "./UserResultsList";
import SearchForm from "./SearchForm";
import { Table } from "react-bootstrap";

class SearchResultContainer extends React.Component {
  state = {
    users: [],
    search: "",
    results: [],
    allUsers: [],
    sort: "ase",
  };

  componentDidMount() {
    //make the call to the API
    //thiss is going to execute only after the first render
    API.getUsers().then((res) => {
      this.setState({ users: res.data.results });
      this.setState({ allUsers: res.data.results });
    });
  }

  handlesSortChange = () => {
    const copyOFusersBeingSorted = [...this.state.users];
    copyOFusersBeingSorted.sort((a, b) =>
      a.email > b.email ? 1 : b.email > a.email ? -1 : 0
    );

    this.setState({
      users: copyOFusersBeingSorted,
    });
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const result = this.state.users.filter((employee) => {
      let employeeStr = Object.values(
        employee.name.first &&
          employee.name.last &&
          employee.email &&
          employee.phone &&
          employee.dob.date
      ).join("");
      return employeeStr.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    this.setState({
      [name]: value,
    });
    this.setState({
      users: result,
    });
  };

  render() {
    return (
      <div>
        <div>
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
          />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th onClick={this.handlesSortChange}>Name</th>
              <th onClick={this.handlesSortChange}>Phone</th>
              <th onClick={this.handlesSortChange}>Email</th>
              <th onClick={this.handlesSortChange}>DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, i) => {
              return (
                <UserResultsList
                  name={user.name.first}
                  image={user.picture.thumbnail}
                  phone={user.phone}
                  email={user.email}
                  birthdate={user.dob.date}
                  last={user.name.last}
                  key={i}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default SearchResultContainer;
