import React from "react";
import { connect } from "react-redux";
// import {
//   setDependence,
//   setProductName,
//   setProductOwner,
//   setDomain,
// } from "./redux/config/configActions";
// import { uploadTasks } from "./redux/session/sessionActions";
// import TaskList from "./components/taskList/TaskList";
import { configSlise } from "./redux/config/configReducer";

const name = "redux";
const owner = "Bootcamp_20";

const data = [
  {
    task: "Redux",
    dateFinish: "13.07.2020",
    mentor: "Bond",
    id: "09f8ruyg5htrkfiv",
  },
  {
    task: "redux toolkit",
    dateFinish: "20.07.2020",
    mentor: "Bond",
    id: "09v8ufjremdckvjds",
  },
  {
    task: "redux thunk",
    dateFinish: "17.07.2020",
    mentor: "Bond",
    id: "8765rfwevdbcs",
  },
  {
    task: "hooks",
    dateFinish: "20.07.2020",
    mentor: "Bond",
    id: "d9876wtrfsndsd",
  },
  {
    task: "async redux",
    dateFinish: "13.07.2020",
    mentor: "Bond",
    id: "der9ujednsds",
  },
];

class App extends React.Component {
  state = {};
  componentDidMount() {
    //имитация  запроса на db
    const environment = process.env.NODE_ENV;
    const location = window.location.href;
    console.log("location", location);
    this.props.setDependence(environment);
    this.props.setProductName(name);
    this.props.setProductOwner(owner);
    this.props.setDomain(location);
    // this.props.uploadTasks(data);
  }
  render() {
    return <>{/* <TaskList /> */}</>;
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setDependence: (data) => dispatch(configSlise.actions.setDependence(data)),

//     setProductName: (name) =>
//       dispatch(configSlise.actions.setProductName(name)),

//     setProductOwner: (owner) =>
//       dispatch(configSlise.actions.setProductOwner(owner)),

//     setDomain: (location) => dispatch(configSlise.actions.setDomain(location)),

//     // setDependence,
//     // setProductName,
//     // setProductOwner,
//     // setDomain,
//     // uploadTasks,
//   };
// };
// или

// const {
//   setDependence,
//   setProductName,
//   setProductOwner,
//   setDomain,
//   // uploadTasks
// } = configSlise.actions;

// const mapDispatchToProps = {
//   setDependence,
//   setProductName,
//   setProductOwner,
//   setDomain,
// };
// или еще проще:
// const mapDispatchToProps = { ...configSlise.actions };

// export default connect(null, mapDispatchToProps)(App);

// или еще проще:
export default connect(null, { ...configSlise.actions })(App);