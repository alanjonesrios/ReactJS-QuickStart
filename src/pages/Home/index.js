import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, ListGrid } from './styles';
import api from '../../services/api';

import * as GroupActions from '../../store/modules/about/action';

class Home extends Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    const response = await api.get('items');

    this.setState({ items: response.data });
  }

  handleFirstAction = item => {
    const { dispath } = this.props;

    dispath(GroupActions.FirstAction(item));
  };

  render() {
    const { items } = this.state;

    return (
      <Container>
        <h1> Hello World </h1>

        <ListGrid>
          {items.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <strong>{item.title}</strong>
            </li>
          ))}
        </ListGrid>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(GroupActions, dispatch);

const mapStateToProps = state => ({
  items: state.About.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
