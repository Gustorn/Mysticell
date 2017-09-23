import classnames from "classnames";
import React from "react";
import {Link} from "react-router-dom";

import {Dict, isBranch} from "common/types";
import {collapse} from "common/utils";

import {TreeView} from "components/molecules";

import {Formula} from "data/Formula";
import {Nav} from "data/Nav";

import functionIcon from "./assets/icon-function.svg";
import "./NavView.scss";


interface Props {
	className?: string;
	formulas: Dict<Formula>;
	nav: Nav;
	expandedNavItems: Set<string>;
}


const NavView = (props: Props) => {
	const isExpanded = (tree: Nav) => (
		tree === props.nav ||
		(isBranch(tree) && props.expandedNavItems.has(tree.value.id))
	);
	return (
		<TreeView
			className={classnames("navView", props.className)}
			tree={collapse(props.nav, isExpanded)}
			getKey={tree => isBranch(tree) ? tree.value.id : tree.value}
			renderItem={renderItem(props.formulas)}
		/>
	);
};

const renderItem = (formulas: Dict<Formula>) => (tree: Nav) => (
	isBranch(tree)
		? renderDirItem(tree.value.name)
		: renderEndItem(formulas[tree.value])
);

const renderDirItem = (name: string) => (
	<div className="navView-item">
		<span className="navView-item-icon icon">arrow_drop_down</span>
		<span className="navView-item-title">{name}</span>
	</div>
);

const renderEndItem = (formula: Formula) => (
	<div className="navView-item">
		<img className="navView-item-icon icon" src={functionIcon} />
		<Link className="navView-item-title" to={`/formula/${formula.id}`}>{formula.name}</Link>
	</div>
);


export {NavView};
