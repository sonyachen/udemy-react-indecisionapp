class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisible = this.toggleVisible.bind(this);

    this.state = {
      isVisible: false
    }
  }

  toggleVisible() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisible}>
          {this.state.isVisible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.isVisible && <p>Something shows up here</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let isVisible = false;

// const onVisible = () => {
//   isVisible = !isVisible;
//   renderApp();
// };

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onVisible}>
//         {isVisible ? 'Hide Details' : 'Show Details'}
//       </button>
//       {isVisible && <p>Something shows up here</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// renderApp();