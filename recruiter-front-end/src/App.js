import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';
import Login from './components/Login';
import { connect } from 'react-redux';
import NewUserLandingPage from './views/NewUserLandingPage/NewUserLandingPage';
import Contacts from './components/Contacts/Contacts';
import Education from './views/NewRulesPage/Education';
import Skills from './views/NewRulesPage/Skills';
import Experience from './views/NewRulesPage/Experience';
import CheckoutContainer from './components/Checkout/CheckoutContainer';
import NewRuleContacts from './views/NewRulesPage/NewRuleContacts';
import Fallback from './views/NewRulesPage/Fallback';
import AddCandidatePage from './views/AddCandidatePage/AddCandidatePage';
import CandidateContactInfo from './views/AddCandidatePage/CandidateContactInfo';
import CandidateEducation from './views/AddCandidatePage/CandidateEducation';
import CandidateSkills from './views/AddCandidatePage/CandidateSkills';
import CandidateExperience from './views/AddCandidatePage/CandidateExperience';

import NewContactForm from './components/Contacts/NewContactForm';
import fire from './config/fire';
import { Menu, Button, Container } from 'semantic-ui-react';
import history from './history';

class App extends React.Component {
  state = {
    user: {},
    user_id: null,
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        sessionStorage.setItem('token', user._lat);
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <Router history={history}>
        <Container>
          {this.state.user ? (
            [
              <>
                <Menu>
                  <Menu.Item>
                    <Button as={Link} to="/">
                      Home
                    </Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button as={Link} to="/new-candidate/contact-info">
                      Send Candidate
                    </Button>
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button onClick={this.logout}>logout</Button>
                  </Menu.Item>
                </Menu>
                <Route exact path="/" component={NewUserLandingPage} />
                <Route exact path="/db" component={Dashboard} />
                <Route
                  exact
                  path="/id"
                  render={props => {
                    console.log(props);
                    return <div>UserId: {props.match.params.id}</div>;
                  }}
                />
                <Route exact path="/contacts/add" component={NewContactForm} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/new-rule/education" component={Education} />
                <Route exact path="/new-rule/skills" component={Skills} />
                <Route
                  exact
                  path="/new-rule/experience"
                  component={Experience}
                />
                <Route exact path="/checkout" component={CheckoutContainer} />
                <Route
                  exact
                  path="/new-rule/contacts"
                  component={NewRuleContacts}
                />
                <Route
                  exact
                  path="/new-rule/confirmation"
                  component={Fallback}
                />
                <Route
                  exact
                  path="/new-candidate/"
                  component={AddCandidatePage}
                />
                <Route
                  exact
                  path="/new-candidate/contact-info"
                  component={CandidateContactInfo}
                />
                <Route
                  exact
                  path="/new-candidate/education"
                  component={CandidateEducation}
                />
                <Route
                  exact
                  path="/new-candidate/skills"
                  component={CandidateSkills}
                />
                <Route
                  exact
                  path="/new-candidate/experience"
                  component={CandidateExperience}
                />
              </>,
            ]
          ) : (
            <Login />
          )}
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    user_id: state.user_id,
  };
};

export default connect(
  mapStateToProps,
  {},
)(App);
