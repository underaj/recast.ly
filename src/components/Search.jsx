class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.debouncedSearch = _.debounce(function(event) {
      this.setState({inputValue: event.target.value});
      this.props.search(this.state.inputValue);
    }, 500, {leading: true});
  }

  handleChange(event) {
    // this.setState({inputValue: event.target.value});
    // context.props.search(context.state.inputValue);
    event.persist();
    this.debouncedSearch(event);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleChange.bind(this)}/>
        <button className="btn hidden-sm-down" onClick={(function() {
          this.props.search(this.state.inputValue);
        }).bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );

  }  
}

window.Search = Search;