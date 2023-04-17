import React from "react";
import PaddingContainer from "../HelpersComponents/Containers/PaddingContainer";
import WidthCenterContainer from "../HelpersComponents/Containers/WidthCenterContainer";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const FourthSection = () => {
	const isNonMobile = useMediaQuery("(min-width: 350px)");
	return (
		<div>
			<PaddingContainer>
				<WidthCenterContainer>
					<Typography
						variant={isNonMobile ? "fs6xl" : "h1"}
						component="h4"
						textAlign="center"
					>
						Let's Work Together
					</Typography>
				</WidthCenterContainer>
			</PaddingContainer>
		</div>
	);
};

export default FourthSection;
