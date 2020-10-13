import React, { Component, Fragment } from "react"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import { MuiThemeProvider } from "material-ui/styles"

export class UserDetail extends Component {
	continue = (e) => {
		e.preventDefault()
		this.props.nextstep()
	}
	goback=(e)=>{
		e.preventDefault();
		this.props.prevstep();
	}
	render() {
		const { values, onchange } = this.props
		return (
			<MuiThemeProvider>
				<>
					<AppBar title='Enter your User detail' />
					<TextField
						hintText='Enter your FirstName'
						floatingLabelText='Frist name'
						onChange={onchange("fname")}
						defaultValue={values.fname}
					/>
					<br />
					<TextField
						hintText='Enter your LastName'
						floatingLabelText='Last name'
						onChange={onchange("lname")}
						defaultValue={values.lname}
					/>
					<br />
					<TextField
						hintText='Enter your Email'
						floatingLabelText='Email'
						onChange={onchange("email")}
						defaultValue={values.email}
					/>
					<br />
					<RaisedButton
						label='Continue'
						primary={true}
						style={style.button}
						onClick={this.continue}
					/>
				</>
			</MuiThemeProvider>
		)
	}
}
const style = {
	button: {
      margin: 15 
  }
}
export default UserDetail
