import React from 'react'
import { Fragment, useState } from 'react'
import "../css/bootstrap.min.css"
import "./Counter.css"

const Counter = () => {

	const [counter, setcounter] = useState(0);
	function decreaseCounter(){
		if(counter > 0){
			setcounter(counter-1);
		}
	}

	return (
		<Fragment>
			<div className="conatainer">
				<div className="row">
					<div className="col-md-12">
						<div className="card shadow m-5 p-5">
							<h1 className="text-center">
								{counter}
							</h1>
							<div className="d-flex justify-content-between">
								<div className="btn btn-secondary" onClick = {()=>decreaseCounter()} >-</div>
								<div className="btn btn-primary" onClick = {()=>setcounter(counter+1)}  >+</div>
								<div className="btn btn-danger" onClick={()=>setcounter(0)}>Reset</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Counter
