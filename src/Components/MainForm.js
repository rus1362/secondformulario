import React, { Component } from "react"
import Sucsess from "./Sucsess"
import Summary from "./Summary"
import UserDetail from "./UserDetail"
import PersonalDetail from "./PersonalDetail"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

class MainFrom extends Component {
	state = {
		step: 1,
		fname: "",
		lname: "",
		email: "",
		city: "",
		birthdate: "",
		gender: "",
		country: "",
		Job: "",
	}
	nextStep = () => {
		const { step } = this.state
		this.setState({  step: step + 1 })
	}
	prevStep = () => {
		const { step } = this.state
		this.setState({
			step: step - 1,
		})
	}
	handlefieldchange = (input) => (e) => {
		this.setState({ [input]: e.target.value })
	}
	render() {
		const { step, fname, lname, email, city, birthdate, gender, country, job } = this.state
		const values = { step, fname, lname, email, city, birthdate, gender, country, job }
		switch (this.state.step) {
			case 1:
				return (
					<UserDetail
						onchange={this.handlefieldchange}
						nextstep={this.nextStep}
						values={values}
					/>
				)
			case 2:
				return (
					<PersonalDetail
						onchange={this.handlefieldchange}
						nextstep={this.nextStep}
						prevstep={this.prevStep}
						values={values}
					/>
				)
			case 3:
				return (
					<Summary
						onchange={this.handlefieldchange}
						nextstep={this.nextStep}
						prevstep={this.prevStep}
						values={values}
					/>
				)
			case 4:
				return <Sucsess values={values} />

			default:
				return
		}
	}
}

export default MainFrom
