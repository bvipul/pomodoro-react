import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import moment from "moment";
import UpArrow from "./UpArrow";
import DownArrow from "./DownArrow";

const P_STYLE = {
	margin: "0 auto"
};

const COLUMN_STYLE = {
	textAlign: "center"
};

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			break_length: 15,
			session_length: 30,
			current_timer: "session",
			timer_time: 0,
			timer: null
		};

		this.upSessionLength = this.upSessionLength.bind(this);
		this.downSessionLength = this.downSessionLength.bind(this);

		this.upBreakLength = this.upBreakLength.bind(this);
		this.downBreakLength = this.downBreakLength.bind(this);

		this.formatTime = this.formatTime.bind(this);

		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
	}

	upSessionLength() {
		const { session_length: len } = this.state;
		this.setState({ session_length: len < 60 ? len + 1 : 60 });
	}

	downSessionLength() {
		const { session_length: len } = this.state;
		this.setState({ session_length: len > 1 ? len - 1 : 1 });
	}

	upBreakLength() {
		const { break_length: len } = this.state;
		this.setState({ break_length: len < 60 ? len + 1 : 60 });
	}

	downBreakLength() {
		const { break_length: len } = this.state;
		this.setState({ break_length: len > 1 ? len - 1 : 1 });
	}

	formatTime() {
		return "00:00:00";
	}

	startTimer() {
		const context = this;

		this.setState({
			timer: setInterval(() => {
				context.setState({ timer_time: context.state.timer_time + 1 });
			}, 1000)
		});
	}

	stopTimer() {
		clearInterval(this.state.timer);

		this.setState(() => ({ timer: null }));
	}

	render() {
		const { session_length, break_length } = this.state;

		return (
			<Container>
				<Grid columns={3}>
					<Grid.Row>
						<Grid.Column style={COLUMN_STYLE}>
							<UpArrow click={this.upSessionLength} />
							<p style={P_STYLE}>{session_length}</p>
							<DownArrow click={this.downSessionLength} />
							<p style={P_STYLE}>Session Length</p>
						</Grid.Column>
						<Grid.Column
							style={{ ...COLUMN_STYLE, margin: "auto 0" }}
						>
							{this.formatTime()}
							<Grid columns={2}>
								<Grid.Row>
									<Grid.Column style={{ textAlign: "left" }}>
										<Button onClick={this.startTimer}>
											Start
										</Button>
									</Grid.Column>
									<Grid.Column style={{ textAlign: "right" }}>
										<Button onClick={this.stopTimer}>
											Stop
										</Button>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Grid.Column>
						<Grid.Column style={COLUMN_STYLE}>
							<UpArrow click={this.upBreakLength} />
							<p style={P_STYLE}>{break_length}</p>
							<DownArrow click={this.downBreakLength} />
							<p style={P_STYLE}>Break Length</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		);
	}
}
