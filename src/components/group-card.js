import React from 'react';

export default (props) => (
	<div className="row">
	  <div className="col-sm-9">
	    Level 1: .col-sm-9
	    Name {props.groupname}
	    <div className="row">
	      <div className="col-xs-8 col-sm-6">
	        Level 2: .col-xs-8 .col-sm-6
	        Frequency {props.frequency}
	      </div>
	      <div className="col-xs-4 col-sm-6">
	        Level 2: .col-xs-4 .col-sm-6
	        Average {props.avgservingcost}
	      </div>
	    </div>
	  </div>
	</div>
)

// export default (props) => (
// 		<div>
// 			<div className="row">
// 			  <div className="col-sm-9">
// 			    Level 1: .col-sm-9
// 			    Name {props.groupname}
// 			    <div className="row">
// 			      <div className="col-xs-8 col-sm-6">
// 			        Level 2: .col-xs-8 .col-sm-6
// 			        Frequency {props.frequency}
// 			      </div>
// 			      <div className="col-xs-4 col-sm-6">
// 			        Level 2: .col-xs-4 .col-sm-6
// 			        Average {props.avgservingcost}
// 			      </div>
// 			    </div>
// 			  </div>
// 			</div>
// 		</div>
// )