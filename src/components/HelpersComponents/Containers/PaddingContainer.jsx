import { Box } from "@mui/material";
import { styled } from "@mui/system";

const PaddingContainer = styled(Box)({
	padding: "10rem 0",
	"@media(minWidth: 600px)": {
		padding: "20rem 0",
	},

	// border: "red 1px solid",
});

export default PaddingContainer;
