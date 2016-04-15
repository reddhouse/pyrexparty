import styles from './group-card.css';
import React from 'react';


export default (props) => (
	<div className={ styles.mainContainer }>
		<div className={ styles.nameBlock }>
			<p>{props.groupname}</p>
		</div>
		<div className= { styles.cardRow }>
	    <div className={ styles.miniBlock }>
	      <span> {`${props.frequency} x`}
	      	<br />
	      	<span className={ styles.miniText }> Month </span>
	      </span>
		  </div>
		  <div className={ styles.miniBlock }>
		  	<span> {props.maxservings}
		  		<br />
		  		<span className={ styles.miniText }> Servings </span>
		  	</span>
		  </div>
		  <div className={ styles.miniBlock }>
		  	<span> {props.containersize}
		  		<br />
		  		<span className={ styles.miniText }> Containers </span>
		  	</span>
		  </div>
		  <div className={ styles.miniBlock }>
		  	<span> {`$${props.avgservingcost}`}
		  		<br />
		  		<span className={ styles.miniText }> Average </span>
		  	</span>
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