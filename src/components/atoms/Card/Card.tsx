import classNames from "classnames";
import React from "react";

import "./Card.scss";


interface Props {
	className?: string;
	children?: JSX.Element[] | string;
}


export default ({ className, children, ...attrs }: Props) => (
	<div { ...attrs } className={ classNames("card", className) }>
		{ children }
	</div>
);
