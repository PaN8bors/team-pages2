<template>
	<div class="some-page-wrapper">
		<div class="row">
			<div class="column">
				<div class="blue-column">
					<p class="intro">Meet {{user.name}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { UserService } from "@/services/UserServices";

export default {
	name: "DetailsBanner",

	data: function() {
		return {
			loading: false,
			user: {},
			errorMessage: null
		};
	},

	created: async function() {
		let userId = this.$route.params.userId;

		try {
			this.loading = true;
			let response = await UserService.getUser(userId);
			console.log(response.data)
			this.loading = false;
			this.user = response.data;
		} catch (error) {
			this.loading = false;
			this.errorMessage = error;
		}
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.some-page-wrapper {
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}
.logo-row {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	height: 75px;
	align-items: center;
	padding-bottom: 1vh;
}
.row {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
}

.column {
	display: flex;
	flex-direction: column;
	flex-basis: auto;
	flex: 1;
	}

.logo {
	max-height: auto;
	max-width: 60px;
	padding-left: 10%;
}
.blue-column {
	display: flex;
	background-image: url('../assets/DetailsImage.jpg');
	height: 200px;
	align-items: center;
	padding-left: 10%;
}
.intro {
	color: white;
	font-size: 48px;
	padding: 0%;
}

.link {
	margin-left: 10px;
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	/* line-height: 70px; */
	color: #747474;
}

a:link {
	text-decoration: none;	
}

a:visited {
	text-decoration: none;
}

a:hover {
	color: black;
	text-decoration: underline;
}

a:active {
	color: black;
	text-decoration: underline;
}

.link:hover {
	color: black;
}

</style>
