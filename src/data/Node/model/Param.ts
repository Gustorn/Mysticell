interface NumberParam {
	type: 'number';
	value: number;
}

interface StringParam {
	type: 'string';
	value: string;
}

interface EmptyParam {
	type: 'empty';
	value: undefined;
}

interface ArrayParam {
	type: 'array';
	value: Param[];
}

interface ErrorParam {
	type: 'error';
	value: 'ERR';
	message: string;
}

export { ErrorParam };
export type Param = NumberParam | StringParam | EmptyParam | ArrayParam | ErrorParam;
export default Param;
