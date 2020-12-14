import React from "react";
import prota from "../../img/prota.png";
import Yuzu from "../../img/Yuzu.png";
import Atsuro from "../../img/Atsuro.png";
import Midori from "../../img/Midori.png";
const Card = () => {
	return (
		<div className="row row-cols-1 row-cols-md-3 g-4">
			<div className="col">
				<div className="card h-100">
					<img src={prota} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Prota</h5>
						<p className="card-text">
							This is a longer card with supporting text below as
							a natural lead-in to additional content. This
							content is a little bit longer.
						</p>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
					<img src={Yuzu} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Yuzu</h5>
						<p className="card-text">This is a short card.</p>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
					<img src={Atsuro} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Atsuro</h5>
						<p className="card-text">
							This is a longer card with supporting text below as
							a natural lead-in to additional content.
						</p>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card h-100">
					<img src={Midori} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Midori</h5>
						<p className="card-text">
							{
								"This is a longer card with supporting text below as a natural lead-in to additional content. Thiscontent is a little bit longer."
							}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Card;
