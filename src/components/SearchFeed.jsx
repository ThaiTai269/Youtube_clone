import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const SearchFeed = () => {
	const [videos, setVideos] = useState(null);
	const { searchTerm } = useParams();

	useEffect(() => {
		setVideos(null);
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
			setVideos(data.items);
		});
	}, [searchTerm]);
	// console.log(searchTerm);
	return (
		<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
			<Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
				Kết quả tìm kiếm cho:{" "}
				<span style={{ color: "#FC1503", marginRight: "4px" }}>
					{searchTerm}
				</span>
				<span style={{ color: "#FC1503" }}>videos</span>
			</Typography>

			{videos !== null && <Videos videos={videos} />}
		</Box>
	);
};

export default SearchFeed;
