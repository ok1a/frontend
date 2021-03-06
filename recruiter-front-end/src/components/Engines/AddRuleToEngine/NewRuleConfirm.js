import React from 'react';
import {
  Grid,
  Button,
  Modal,
  Header,
  Segment,
  Icon,
  Progress,
  Step,
  Form,
  Card,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const token = sessionStorage.getItem('token');
const tokenHeader = { headers: { token: `${token}` } };

class NewRuleConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidEmail: false,
      hasContactEmail: true,
      message: '',
    };
  }

  state = { log: [] };

  componentDidMount() {

  }

  handleSubmit = e => {
    this.props.submitRule();
  };

  render() {
    console.log('this.props.rule', this.props.rule);
    const flexContainer = {
      display: 'flex',
      flexDirection: 'column',
    };

    const primaryButton = {
      margin: '50px 0',
      height: '4rem',
      width: '150px',
      fontSize: '1.35rem',
      fontWeight: '900',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const linkStyles = {
      textAlign: 'center',
      color: 'rgba(0,0,0,.87)',
    };

    const center = {
      textAlign: 'center',
    };

    const rule = this.props.rule;

    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
          <h3>
              Adding rule to engine:{' '}
              {this.props.props.location.state.engineName} 
            </h3>
            <Progress percent={92} />
            <Step.Group widths={6}>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to={{
                  pathname: '/engine/new-rule/contacts',
                  state: {
                    engineName: this.props.props.location.state.engineName,
                  },
                }}>
                    <Step.Title>Rule Contacts</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles}  to={{
                  pathname: '/engine/new-rule/education',
                  state: {
                    engineName: this.props.props.location.state.engineName,
                  },
                }}>
                    <Step.Title>Education</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Link style={linkStyles}  to={{
                  pathname: '/engine/new-rule/skills',
                  state: {
                    engineName: this.props.props.location.state.engineName,
                  },
                }}>
                  <Step.Content>
                    <Step.Title>Skills</Step.Title>
                  </Step.Content>
                </Link>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles}  to={{
                  pathname: '/engine/new-rule/experience',
                  state: {
                    engineName: this.props.props.location.state.engineName,
                  },
                }}>
                    <Step.Title>Experience</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step active>
                <Step.Content>
                  <Link style={linkStyles}  to={{
                  pathname: '/engine/new-rule/confirmation',
                  state: {
                    engineName: this.props.props.location.state.engineName,
                  },
                }}>
                    <Step.Title>Confirmation</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
            </Step.Group>

                    <Card fluid>
                      <Card.Content>
                          <p>
                            If a candidate passes these rules then they will be
                            sent to{' '}
                            {rule.contactEmail
                              .join(', ')
                              .replace(/,(?!.*,)/gim, ' and')}
                          </p>
                          <p>
                            Minimum degree required is a{' '}
                            {rule.education[0]}
                          </p>
                          <p>
                            The candidate must have majored in{' '}
                            {rule.majors
                              .join(', ')
                              .replace(/,(?!.*,)/gim, ' and')}
                          </p>
                          <p>
                            The skills required for this rule are{' '}
                            {rule.skills
                              .join(', ')
                              .replace(/,(?!.*,)/gim, ' and')}
                          </p>
                          <p>
                            The experience required for this rule is at least{' '}
                            {rule.minExp} years of experience
                          </p>
                          <p>
                            The maximum experience allowed for this rule is{' '}
                            {rule.maxExp} years of experience
                          </p>
                      </Card.Content>
                    </Card>
           
            {this.state.message === '' ? null : (
              <Segment>{this.state.message}</Segment>
            )}

            <Grid.Column
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Button
                style={primaryButton}
                as={Link}
                to={{
                  pathname: '/engine/new-rule/experience',
                  state: {
                    engineName: this.props.props.location.state.engineName,
                  },
                }}
              >
                <Icon name="arrow left" size="small" />
                Back
              </Button>
              <Button
                style={primaryButton}
                onClick={this.handleSubmit}
                as={Link}
                to="/engines"
              >
                Submit
              </Button>
            </Grid.Column>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default NewRuleConfirm;
