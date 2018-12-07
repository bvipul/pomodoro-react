import React from "react";
import { Button } from "semantic-ui-react";

const UpArrow = props => (
	<Button onClick={props.click}>
		<i className="fa fa-arrow-up fa-2x" />
	</Button>
);

export default UpArrow;
