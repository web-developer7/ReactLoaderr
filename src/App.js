import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: 'Abdunabi',
      age: 16,
      job: 'programmer',
      loading: true
    };
  }

// getInfo = ()=>{
//   this.setState({name:'Shoxbaxt',age:'15',job:'programmer'});
// }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then(() => this.setState({work:'no',name:'Shoxbaxt',age:'15',job:'Men stack Developper',loading:false}));

  console.log('componentDidMount');
  // this.getInfo();
}
componentDidUpdate(){
  console.log('componentDidUptade');
}
  render() {
    console.log('render');  
    return (
      <div className="card">
       
        {this.state.loading ? <div className="load"> 
        <div class="loadingio-spinner-spinner-edtgccrjsd5"><div class="ldio-21weysl4ces">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>
      
        </div> :
         <ul className="list">
      <li>{this.state.name}</li>          
      <li>{this.state.age}</li>     
      <li>{this.state.job}</li>     
  
      </ul>
      }      
      </div>
    )
  }
}