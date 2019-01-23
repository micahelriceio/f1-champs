import axios from 'axios';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
import Panel from './styled/Panel';
import Container from './styled/Container';
import { Table, Head, Body, Row } from './styled/table';

// ChampionsByYear is basically the same as the WorldChampions component.
// The only difference is that in the componentDidMount function we're
// getting a couple params from the url (that were set on the previous page)
// to make our query dynamic.
class ChampionsByYear extends Component {
  state = {
    loading: true,
    error: false,
    errorMessage: undefined,
    data: [],
  }

  async componentDidMount() {
    const { params } = this.props.match;

    // If params.year is not a valid number throw and error.
    if (Number.isNaN(parseInt(params.year, 10))) {
      this.setState({
        loading: false,
        error: true,
        errorMessage: 'Invalid year. Valid years are 1950 - 2018',
      });
    }

    try {
      const res = await axios.post(`https://ergast.com/api/f1/${params.year}/results/1.json`);

      const data = res.data.MRData.RaceTable.Races.map(race => ({
        country: race.Circuit.Location.country,
        raceName: race.raceName,
        driver: race.Results[0].Driver,
      }));

      this.setState({
        data,
        loading: false,
        error: false,
        errorMessage: undefined,
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  renderChampions() {
    return this.state.data.map(({ driver, raceName }) => (
      <Row key={raceName} currentDriver={driver.driverId === this.props.match.params.champId}>
        <p className="f1">{raceName}</p>
        <p className="f1">{driver.givenName} {driver.familyName}</p>
      </Row>
    ));
  }

  render() {
    const { loading, error, errorMessage } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error message={errorMessage} />;
    }

    return (
      <Container>
        <Panel pullUp animate>
          <div className="panel-header">
            <h2>{this.props.match.params.year} Race Results</h2>
            <Link to="/" className="button-link">
              Back
            </Link>
          </div>
          <div className="panel-body">
            <Table>
              <Head>
                <p className="f1">Race</p>
                <p className="f1">Winner</p>
              </Head>
              <Body>
                {this.renderChampions()}
              </Body>
            </Table>
          </div>
        </Panel>
      </Container>
    );
  }
}

// Validate that the required props have been passed in.
ChampionsByYear.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default ChampionsByYear;
