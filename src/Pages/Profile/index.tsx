import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Grid, Typography } from '@mui/material';

const ProfileSettings = (): React.JSX.Element => {
	return (
		<>
			<Box id="Invite-User">
				<Stack spacing={2}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<Typography variant="h4">
								Profile Setting
							</Typography>
						</Grid>
					</Grid>
				</Stack>

				<Stack spacing={2} sx={{ mt: 3 }}></Stack>
			</Box>
		</>
	);
};

export default ProfileSettings;
