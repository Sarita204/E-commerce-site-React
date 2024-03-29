// App.js
import React from "react";
import cart from "../images/shopping-cart.png";

// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";

export default function App() {
	const [itemCount, setItemCount] = React.useState(1);

	return (
		<div style={{ display: "block", padding: 30 }}>
			<h4>How to create ShoppingCart Button in ReactJS?</h4>
			<div>
				<div color="secondary" badgeContent={itemCount}>
                <img src={cart} alt="logo" className="cart-logo"/>
				</div>
				<div>
					<button
						onClick={() => {
							setItemCount(Math.max(itemCount - 1, 0));
						}}
					>
						{" "}
                        -
					</button>
					<button
						onClick={() => {
							setItemCount(itemCount + 1);
						}}
					>
						{" "}
						+
					</button>
				</div>
			</div>
		</div>
	);
}
