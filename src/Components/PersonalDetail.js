import React, { Component } from "react"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import { MuiThemeProvider } from "material-ui/styles"

export class PersonalDetail extends Component {
  continue = (e) => {
		e.preventDefault()
		this.props.nextstep()
	}
	goback=(e)=>{
		e.preventDefault();
		this.props.prevstep();
	}
	render() {
    const { values, onchange } = this.props;
    
		return (
			<MuiThemeProvider>
				<>
					<AppBar title='Enter your Personal Data' />
          <TextField
						hintText='Enter your Country'
						floatingLabelText='Country'
						onChange={onchange("country")}
						defaultValue={values.country}
					/>
					<br />
          <TextField
						hintText='Enter your City'
						floatingLabelText='City'
						onChange={onchange("city")}
						defaultValue={values.city}
					/>
					<br />
					<TextField
						hintText='Enter your BirthDaye'
						floatingLabelText='BirthDay'
						onChange={onchange("birthdate")}
						defaultValue={values.birthdate}
					/>
					<br />
          <TextField
						hintText='Enter your Ocupation'
						floatingLabelText='Job'
						onChange={onchange("job")}
						defaultValue={values.job}
					/>
					<br />
					<TextField
						hintText='Enter your gender'
						floatingLabelText='gender'
						onChange={onchange("gender")}
						defaultValue={values.gender}
					/>
					<br />
					<RaisedButton
						label='Continue'
						primary={true}
						style={style.button}
						onClick={this.continue}
					/>
          <RaisedButton
						label='Back'
						primary={false}
						style={style.button}
						onClick={this.goback}
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
export default PersonalDetail
