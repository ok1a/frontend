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
import Confirmation from './views/NewRulesPage/Confirmation';
import AddCandidatePage from './views/AddCandidatePage/AddCandidatePage';
import CandidateContactInfo from './views/AddCandidatePage/CandidateContactInfo';
import CandidateEducation from './views/AddCandidatePage/CandidateEducation';
import CandidateSkills from './views/AddCandidatePage/CandidateSkills';
import CandidateExperience from './views/AddCandidatePage/CandidateExperience';
import NewContactForm from './components/Contacts/NewContactForm';
import fire from './config/fire';
import { Menu, Button, Container } from 'semantic-ui-react';
import history from './history';
import EngineDash from './components/Engines/EngineDash';
import { parseRule, addRule } from './actions/ruleActions';
import NewEngine from './components/Engines/NewEngine';
import NewCandidate from './components/NewCandidate/NewCandidate';
import CandidateEngine from './views/AddCandidatePage/CandidateEngine';
import NewEngine from './views/NewRulesPage/NewEngine';

class App extends React.Component {
  state = {
    user: {},
    user_id: null,
    rule: {
      skills: [],
      education: [],
      majors: [],
      minExp: '',
      maxExp: '',
      contactEmail: '',
    },
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

  minEducation = e => {
    switch (e) {
      case '':
        this.setState({
          rule: {
            education: [
              'High School / GED',
              'Some College',
              "Associate's",
              "Bachelor's Degree",
              "Master's Degree",
              'PhD',
            ],
          },
        });
        break;
      case 'High School / GED':
        this.setState({
          rule: {
            education: [
              'High School / GED',
              'Some College',
              "Associate's",
              "Bachelor's Degree",
              "Master's Degree",
              'PhD',
            ],
          },
        });
        break;
      case 'Some College':
        this.setState({
          rule: {
            education: [
              'Some College',
              "Associate's",
              "Bachelor's Degree",
              "Master's Degree",
              'PhD',
            ],
          },
        });
        break;
      case "Associate's":
        this.setState({
          rule: {
            education: [
              "Associate's",
              "Bachelor's Degree",
              "Master's Degree",
              'PhD',
            ],
          },
        });
        break;
      case "Bachelor's Degree":
        this.setState({
          rule: {
            education: ["Bachelor's Degree", "Master's Degree", 'PhD'],
          },
        });
        break;
      case "Master's Degree":
        this.setState({
          rule: {
            education: ["Master's Degree", 'PhD'],
          },
        });
        break;
      case 'PhD':
        this.setState({
          rule: {
            education: ['PhD'],
          },
        });
        break;
    }
  };

  majors = e => {
    this.setState({
      rule: {
        majors: e,
      },
    });
  };

  skills = e => {
    this.setState({
      rule: {
        skills: e,
      },
    });
  };

  parseMyRule() {
    this.props
      .parseRule(this.state.rule)
      .then(() => {
        console.log('from response of parsing', this.props.parsedRule);
        this.props.addRule(
          'https://recruiter-back-end.herokuapp.com/engines/3/rules/',
          this.props.parsedRule,
        );
      })
      .catch(err => {
        console.log('from error parse', err);
      });
  }
  minExp = e => {
    this.setState({
      rule: {
        minExp: e,
      },
    });
  };

  maxExp = e => {
    this.setState({
      rule: {
        maxExp: e,
      },
    });
  };

  contactName = e => {
    this.setState({
      rule: {
        contactName: e,
      },
    });
  };

  contactEmail = e => {
    this.setState({
      rule: {
        contactEmail: e,
      },
    });
  };

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
                    <NavLink style={{ color: 'rgba(0,0,0,.6)' }} to="/engines">
                      <Button>Engines</Button>
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item>
                    <NavLink style={{ color: 'rgba(0,0,0,.6)' }} to="/contacts">
                      <Button>Contacts</Button>
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item>
                    <Button as={Link} to="/new-candidate/engine">
                      Send Candidate
                    </Button>
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button onClick={this.logout}>logout</Button>
                  </Menu.Item>
                </Menu>
                {/* <button onClick={() => console.log(this.state)}>
                  App.js this.state
                </button> */}
                <Route exact path="/" component={NewUserLandingPage} />
                {/* <Route exact path="/db" component={Dashboard} /> */}
                <Route
                  exact
                  path="/id"
                  render={props => {
                    console.log(props);
                    return <div>UserId: {props.match.params.id}</div>;
                  }}
                />
                <Route exact path="/engines/new" component={NewEngine} />
                <Route exact path="/engines" component={EngineDash} />
                <Route
                  exact
                  path="/new-rule/contacts"
                  component={props => (
                    <NewRuleContacts
                      contactName={this.contactName}
                      contactEmail={this.contactEmail}
                    />
                  )}
                />
                <Route
                  exact
                  path="/new-rule/education"
                  component={props => (
                    <Education
                      minEducation={this.minEducation}
                      majors={this.majors}
                    />
                  )}
                />
                <Route
                  exact
                  path="/new-rule/skills"
                  component={props => <Skills skills={this.skills} />}
                />
                <Route
                  exact
                  path="/new-rule/engine"
                  component={props => <NewEngine />} />}
                />
                <Route
                  exact
                  path="/new-rule/experience"
                  //   component={Experience}
                  component={props => (
                    <Experience minExp={this.minExp} maxExp={this.maxExp} />
                  )}
                />
                <Route exact path="/contacts/add" component={NewContactForm} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/checkout" component={CheckoutContainer} />
                <Route
                  exact
                  path="/new-rule/confirmation"
                  component={Confirmation}
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
                <Route 
                exact path="/new-candidate/engine" component={CandidateEngine} />
                <Route
                  exact
                  path="/new-candidate-test"
                  component={NewCandidate}
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
    parsedRule: state.parsedRule,
  };
};

export default connect(
  mapStateToProps,
  { parseRule, addRule },
)(App);
