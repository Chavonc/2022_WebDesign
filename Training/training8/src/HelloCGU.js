const styleArgument = { fontSize: '100px', color: 'red' };

const HelloCGU = () => {
    var output = [];
    output.push(<h1 style={styleArgument}>hello CGU!!</h1>)
    return output;
};

export default HelloCGU;