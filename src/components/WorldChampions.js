import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
import Panel from './styled/Panel';
import Container from './styled/Container';
import { Table, Head, Body, Row } from './styled/table';

class WorldChampions extends Component {
  state = {
    loading: true,
    error: false,
    data: [],
  };

  // Fetch the race data when the component mounts. By default the component is in a "loading"
  // state. When the data is successfully fetched we filter the results we need and set the
  // "loading" state to false to show the data. If there is an error we catch that and trigger
  // the "error" state to show a generic error message.
  async componentDidMount() {
    try {
      const res = await axios.post('https://ergast.com/api/f1/driverstandings/1.json?offset=55');

      const data = res.data.MRData.StandingsTable.StandingsLists.map(standing => ({
        season: standing.season,
        driver: standing.DriverStandings[0].Driver,
      }));

      this.setState({
        data,
        loading: false,
        error: false,
      });
    } catch (error) {
      // In a larger application we'd log this error somewhere and maybe show better
      // error messages.
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  // This function renders each row of the table. Pulled out from the main
  // render method for readability.
  renderChampions() {
    return this.state.data.map(({ season, driver }) => (
      <Row key={season}>
        <p className="f1">{season}</p>
        <p className="f2">{driver.givenName} {driver.familyName}</p>
        <div className="f1 right">
          <Link
            to={`/${season}/${driver.driverId}`}
            className="button-link"
          >
            View
          </Link>
        </div>
      </Row>
    ));
  }

  // Render the screen. We check to see if the component is loading or
  // has an error before defaulting to showing the data.
  render() {
    const { loading, error } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error />;
    }

    return (
      <Container>
        <Panel pullUp animate>
          <div className="panel-header">
            <h2>World Champions 2005-2018</h2>
          </div>
          <div className="panel-body">
            <Table>
              <Head>
                <p className="f1">Year</p>
                <p className="f2">Name</p>
                <p className="f1" />
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

export default WorldChampions;
