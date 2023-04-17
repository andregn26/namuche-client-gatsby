import { Box, Typography } from "@mui/material";
import React from "react";
import WidthCenterContainer from "../HelpersComponents/Containers/WidthCenterContainer";
import FlexBetween from "../HelpersComponents/Flex/FlexBetween";
import { useMediaQuery } from "@mui/material";

const SecondSection = () => {
	const isNonMobile = useMediaQuery("(min-width: 900px)");
	return (
		<Box
			sx={{
				padding: isNonMobile ? "10rem 0" : "5rem 0",
				display: "flex",
				justifyContent: "center",
				backgroundColor: "white",
				color: "black",
			}}
		>
			<WidthCenterContainer>
				<Box
					sx={
						isNonMobile
							? {
									display: "flex",
									justifyContent: "space-evenly",
									gap: "2rem",
							  }
							: {
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-evenly",
									gap: "3rem",
							  }
					}
				>
					<Typography
						variant="h1"
						component="h3"
						textAlign="center"
						fontWeight="700"
					>
						Branding
					</Typography>
					<Typography
						variant="h1"
						component="h3"
						textAlign="center"
						fontWeight="700"
					>
						Web
					</Typography>
					<Typography
						variant="h1"
						component="h3"
						textAlign="center"
						fontWeight="700"
					>
						Digital
					</Typography>
				</Box>
			</WidthCenterContainer>
		</Box>
	);
};

export default SecondSection;
