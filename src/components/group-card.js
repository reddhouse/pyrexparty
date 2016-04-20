import styles from './group-card.css';
import React from 'react';
import { Link } from 'react-router';


export default (props) => (
	<Link to={"groups/" + props.groupid} 
		className={ styles.link }>
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
	</Link>
)
