import React, {Component} from 'react';

class AuthForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	onSubmit(e) {
		e.preventDefault();

		this.props.onSubmit(this.state);
	}

	render() {
		return (
			<div className="row">
				<form className="col s6" onSubmit={this.onSubmit.bind(this)}>
					<div className="input-field">
						<input
							type="email"
							placeholder="Email"
							value={this.state.email}
							onChange={e => this.setState({email: e.target.value})}
						/>
					</div>
					<div className="input-field">
						<input
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={e => this.setState({password: e.target.value})}
						/>

						<div className="errors">
							{
								this.props.errors.map((err, index) => <div key={index}>{err}</div>)
							}
						</div>

						<input type="submit" className="btn" value="Submit"/>
					</div>
				</form>
			</div>
		)
	}
}

export default AuthForm;