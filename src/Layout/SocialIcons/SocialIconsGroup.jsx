import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

const socialIcons = [
	{
		tooltipTitle: "Instagram",
		socialIconSVG: (
			<InstagramIcon
				aria-label="Instagram-icon"
				sx={{ width: "100%", height: "auto" }}
			/>
		),
	},
	{
		tooltipTitle: "LinkedIn",
		socialIconSVG: (
			<LinkedInIcon
				aria-label="LinkedIn-icon"
				sx={{ width: "100%", height: "auto" }}
			/>
		),
	},
	{
		tooltipTitle: "Blog",
		socialIconSVG: (
			<BookIcon
				aria-label="Blog-icon"
				sx={{ width: "100%", height: "auto" }}
			/>
		),
	},
	{
		tooltipTitle: "Newsletter",
		socialIconSVG: (
			<MailIcon
				aria-label="Newsletter-icon"
				sx={{ width: "100%", height: "auto" }}
			/>
		),
	},
];

const SocialIconsGroup = ({ gap, justifyContent, iconWidthHeight }) => {
	return (
		<Box sx={{ display: "flex", gap: gap, justifyContent: justifyContent }}>
			{socialIcons.map((socialIcon, index) => (
				<Tooltip
					key={index}
					title={socialIcon.tooltipTitle}
					arrow
					TransitionComponent={Fade}
					TransitionProps={{ timeout: 600 }}
				>
					<Box width={iconWidthHeight} height={iconWidthHeight}>
						{socialIcon.socialIconSVG}
					</Box>
				</Tooltip>
			))}
		</Box>
	);
};

export default SocialIconsGroup;
