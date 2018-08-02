import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "bulma/css/bulma.css";

export default class ResultsModal extends Component {
//   state = {
//     open: false
//   };

//   onOpenModal = () => {
//     this.setState({ open: true });
//   };

//   onCloseModal = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { open } = this.state;
//     return (
//       <div>
//         <button onClick={this.onOpenModal}>Open modal</button>
//         <Modal open={open} onClose={this.onCloseModal} center>
//             <h1>View Your Results</h1>
//             <br/>
//             <h2>{this.props.userSum}</h2>
//             <h2>{this.props.computerSum}</h2>
//         </Modal>
//       </div>
//     );
//   }
}

// exports to NUT.js

// render() {
//     return (
//         <React.Fragment>
//             <div className="modal">
//                 <div className="modal-background"></div>
//                 <div className="modal-card">
//                     <header className="modal-card-head has-background-info">
//                         <p className="modal-card-title">Results</p>
//                         <button className="delete" aria-label="close"></button>
//                     </header>
//                     <section className="modal-card-body">
//                         {/* Content */}
//                         <h1>{this.props.userSum}</h1>
//                         <h4>{this.props.computerSum}</h4>
//                     </section>
//                     <footer className="modal-card-foot has-background-info">
//                         <button className="button is-success is-rounded is-fullwidth">Play Again</button>
//                         <button className="button is-danger is-rounded is-fullwidth">View Standings</button>
//                     </footer>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }
