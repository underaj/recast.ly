// var Search = (props) => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down" onClick={function() {
//       // console.log(input.value);
//       // var foo = findSiblings('.form-control').val();
//       // props.search(foo);
//       // input.val('');
//     }}>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
    
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleChange.bind(this)}/>
        <button className="btn hidden-sm-down" onClick={(function() {
          console.log(this.state.inputValue);
          this.props.search(this.state.inputValue);
        }).bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );

  }  
}

window.Search = Search;