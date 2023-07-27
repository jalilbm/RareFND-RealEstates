import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./index.css";

export default function CreateProjectNavBar(props) {
	const handleNavItem = (event) => {
		props.changeTab(event.target.id);
	};
	return (
		<nav
			id="dashboard-rules-NAV_1"
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div id="dashboard-rules-DIV_2" style={{ width: "90%" }}>
				<div id="dashboard-rules-DIV_3">
					<div id="dashboard-rules-DIV_4">
						<div
							id="dashboard-rules-DIV_5"
							// style={{ border: "0.5px solid lightgray" }}
						>
							<ul
								id="dashboard-rules-UL_6"
								style={{
									listStyle: "none",
									padding: "0px",
									margin: "0px",
									width: "100%",
									height: "80px",
								}}
							>
								<Row style={{ height: "100%" }} className="d-none d-md-flex">
									<Col>
										<li
											id="create-project-tab-1"
											onClick={handleNavItem}
											style={{ padding: "15px" }}
										>
											<div
												id="dashboard-rules-DIV_9"
												style={{ pointerEvents: "none" }}
											>
												<div
													id="dashboard-rules-DIV_10"
													style={{ pointerEvents: "none" }}
												>
													<span
														id="dashboard-rules-SPAN_11"
														style={{ pointerEvents: "none" }}
													>
														🖊️
													</span>
												</div>
												Basics
											</div>
										</li>
									</Col>
									<Col>
										<li id="create-project-tab-2" onClick={handleNavItem}>
											<div
												id="dashboard-rules-DIV_14"
												style={{ pointerEvents: "none" }}
											>
												<div
													id="dashboard-rules-DIV_15"
													style={{ pointerEvents: "none" }}
												>
													<span
														id="dashboard-rules-SPAN_16"
														style={{ pointerEvents: "none" }}
													>
														🤔
													</span>
												</div>
												Funding
											</div>
										</li>
									</Col>
									<Col>
										<li id="create-project-tab-3" onClick={handleNavItem}>
											<div
												id="dashboard-rules-DIV_19"
												style={{ pointerEvents: "none" }}
											>
												<div
													id="dashboard-rules-DIV_20"
													style={{ pointerEvents: "none" }}
												>
													<span
														id="dashboard-rules-SPAN_21"
														style={{ pointerEvents: "none" }}
													>
														🏆
													</span>
												</div>
												Rewards
											</div>
										</li>
									</Col>
									<Col>
										<li id="create-project-tab-4" onClick={handleNavItem}>
											<div
												id="dashboard-rules-DIV_24"
												style={{ pointerEvents: "none" }}
											>
												<div
													id="dashboard-rules-DIV_25"
													style={{ pointerEvents: "none" }}
												>
													<span
														id="dashboard-rules-SPAN_26"
														style={{ pointerEvents: "none" }}
													>
														🫶
													</span>
												</div>
												Story
											</div>
										</li>
									</Col>
									<Col>
										<li id="create-project-tab-5" onClick={handleNavItem}>
											<div
												id="dashboard-rules-DIV_29"
												style={{ pointerEvents: "none" }}
											>
												<div
													id="dashboard-rules-DIV_30"
													style={{ pointerEvents: "none" }}
												>
													<span
														id="dashboard-rules-SPAN_31"
														style={{ pointerEvents: "none" }}
													>
														👤
													</span>
												</div>
												People
											</div>
										</li>
									</Col>
									<Col>
										<li id="create-project-tab-6" onClick={handleNavItem}>
											<div
												id="dashboard-rules-DIV_34"
												style={{ pointerEvents: "none" }}
											>
												<div
													id="dashboard-rules-DIV_35"
													style={{ pointerEvents: "none" }}
												>
													<span
														id="dashboard-rules-SPAN_36"
														style={{ pointerEvents: "none" }}
													>
														💵
													</span>
												</div>
												Payment
											</div>
										</li>
									</Col>
								</Row>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
