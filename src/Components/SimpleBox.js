import React, { Component } from 'react';

class SimpleBox extends Component {

   // constructor(props) {
   //     super(props);
   // }

render(){
	return(
		<div className="container">
			<div className="d-flex justify-content-center align-self-center">
				<div className="card col-sm-6">
					<div className="card-block">
						<div className="card-title text-center">
							{ this.props.title }
						</div>

						<div className="card-body">
							{ this.props.body }
						</div>

						{ this.props.footer && <div className="card-footer">
							{ this.props.footer }
						</div>}

					</div>
				</div>
			</div>
		</div>
		)

	}
}

export default SimpleBox;