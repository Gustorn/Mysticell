import classNames from 'classnames';
import React from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';

import { generate } from 'common/util';

import { MenuBar } from 'components/molecules';
import { Toolbar, TreeView } from 'components/molecules';
import { GraphEditor, GraphEditorRouteParams } from 'components/organisms';

import { MenuItem } from 'data/common';

import './Editor.scss';


interface Props extends React.HTMLAttributes<HTMLElement> {} // cannot find name HTMLMainElement :<


const navItem: MenuItem = {
	id: generate( 'MENU' ),
	title: 'menu',
};


const treeItems = Array( 12 ).fill( 0 ).map( () => ({ id: generate( 'FIELD' ) , title: 'item' }));


const renderGraphEditor = ( routeProps: RouteComponentProps<GraphEditorRouteParams> ) => (
	<GraphEditor className="editor-document-content" { ...routeProps } />
);


const renderDocument = () => (
	<div className="editor-document">
		<TreeView className="editor-document-nav" items={ treeItems } expandedItems={ [] } />
		<Route exact path="/formula/:id" render={ renderGraphEditor } />
	</div>
);


const demoMenuItems: MenuItem[] = [
	{ id: 'MENU-file', title: 'File', childItems: [] },
	{ id: 'MENU-edit', title: 'Edit', childItems: [] },
	{ id: 'MENU-view', title: 'View', childItems: [] },
];


const toolbarItems: MenuItem[] = [
	{
		title: 'Menu',
		id: 'app-menu',
		render: ( item: MenuItem ) => <MenuBar items={ demoMenuItems } key={ item.id } />,
	},
];


const Editor = ({ className }: Props ) => (
	<Router>
		<main className={ classNames( 'editor', className ) }>
			<Toolbar
				title="Mysticell"
				className="editor-appbar mod-inverted"
				navItem={ navItem }
				items={ toolbarItems }
			/>
			{ renderDocument() }
		</main>
	</Router>
);

export default Editor;
