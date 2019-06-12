import React from 'react';
import { Button, Checkbox, Form, Container, Header } from 'semantic-ui-react';
import Axios from 'axios';

class NewCandidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      skills: '',
      education: '',
      industry: '',
      languages: '',
      certifications: '',
      volunteer: '',
      publications: '',
      bio: false,
      picture: false,
      posts: false,
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleBio = () => {
    this.setState(prevState => ({ bio: !prevState.bio }));
  };

  togglePicture = () => {
    this.setState(prevState => ({ picture: !prevState.picture }));
  };

  togglePosts = () => {
    this.setState(prevState => ({ posts: !prevState.posts }));
  };

  submit = e => {
    const newCandidate = {
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      skills: this.state.skills,
      education: this.state.education,
      industry: this.state.industry,
      languages: this.state.languages,
      certifications: this.state.certifications,
      volunteer: this.state.volunteer,
      publications: this.state.publications,
      bio: this.state.bio,
      picture: this.state.picture,
      posts: this.state.posts,
    };
    Axios.post(
      'https://recruiter-back-end.herokuapp.com/candidates/',
      newCandidate,
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="form-container">
        <Header size="huge">New Candidate</Header>
        <Form>
          <Form.Field>
            <label htmlFor="name">Name</label>
            <input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="Name"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="title">Title</label>
            <input
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
              name="title"
              placeholder="Title"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="skills">Skills</label>
            <input
              value={this.state.skills}
              onChange={this.handleChange}
              type="text"
              name="skills"
              placeholder="Skills"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="education">Education</label>
            <input
              value={this.state.education}
              onChange={this.handleChange}
              type="text"
              name="education"
              placeholder="Education"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="industry">Industry</label>
            <input
              value={this.state.industry}
              onChange={this.handleChange}
              type="text"
              name="industry"
              placeholder="Industry"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="languages">Languages</label>
            <input
              value={this.state.languages}
              onChange={this.handleChange}
              type="text"
              name="languages"
              placeholder="Languages"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="certifications">Certifications</label>
            <input
              value={this.state.certifications}
              onChange={this.handleChange}
              type="text"
              name="certifications"
              placeholder="Certifications"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="volunteer">Volunteer</label>
            <input
              value={this.state.volunteer}
              onChange={this.handleChange}
              type="text"
              name="volunteer"
              placeholder="Volunteer"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="publications">Publications</label>
            <input
              value={this.state.publications}
              onChange={this.handleChange}
              type="text"
              name="publications"
              placeholder="Publications"
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="LinkedIn Bio Exists" onChange={this.toggleBio} />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label="LinkedIn Picture Exists"
              onChange={this.togglePicture}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label="LinkedIn Picture Exists"
              onChange={this.togglePosts}
            />
          </Form.Field>
          <Button type="submit" onClick={this.submit}>
            Add Candidate
          </Button>
        </Form>
      </Container>
    );
  }
}

export default NewCandidate;
