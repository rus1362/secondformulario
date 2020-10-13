import React, { Component, Fragment } from "react"
import { List, ListItem } from "material-ui/List"
import AppBar from "material-ui/AppBar"
import RaisedButton from "material-ui/RaisedButton"
import { MuiThemeProvider } from "material-ui/styles"

export class Summary extends Component {
	continue = (e) => {
		e.preventDefault()
		this.props.nextstep()
	}
	goback = (e) => {
		e.preventDefault()
		this.props.prevstep()
	}
	render() {
		const {
			values: { step, fname, lname, email, city, birthdate, gender, country, job },
		} = this.props
		return (
			<MuiThemeProvider>
				<Fragment>
					<AppBar title='User Data:' />
					<List>
						<ListItem primeryText='Full Name' secondaryText={fname + " " + lname} />
						<ListItem primeryText='Email' secondaryText={email} />
						<ListItem primeryText='BirthDate' secondaryText={birthdate} />
						<ListItem primeryText='Country' secondaryText={country} />
						<ListItem primeryText='City' secondaryText={city} />
						<ListItem primeryText='Job' secondaryText={job} />
						<ListItem primeryText='Gender' secondaryText={gender} />
					</List>
					<br />
					<RaisedButton
						label='Submit'
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
				</Fragment>
			</MuiThemeProvider>
		)
	}
}
const style = {
	button: {
		margin: 15,
	},
}
export default Summary
