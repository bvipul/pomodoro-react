import React from "react";
import { Button } from "semantic-ui-react";

const DownArrow = props => (
	<Button onClick={props.click}>
		<i className="fa fa-arrow-down fa-2x" />
	</Button>
);

export default DownArrow;
