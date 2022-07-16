<template>
	<div>
		<pre>{{ user }}</pre>
	</div>
	<router-view />
</template>

<script>
import { UserService } from "@/services/UserServices";
// import axios from "axios";

export default {
	name: "DetailsComponent",

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
			this.loading = false;
			this.user = response.data;
		} catch (error) {
			this.loading = false;
			this.errorMessage = error;
		}
	},


	// created() {
	// 	axios.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
	// 		this.users = res.data;
	// 	});
	// },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");


.compRow {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	align-items: flex-start;
}

.compColumn-left {
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
    margin-left: 7%;
}

.compColumn-right {
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
}

.blobHolder {
	display: flex;
	min-height: 500px;
	width: auto;
	margin-top: 50px;
	padding-left: 5%;
	padding-right: 0%;
}

.frame {
	position: relative;
	width: 600px;
	height: 550px;
	background-image: url(@/assets/sudheer.webp);
	background-repeat: no-repeat;
	background-position: left 100px top 40px;
	background-size: 85%;
}

.pic {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	display: block;
	margin: auto;
}

.badge {
	position: absolute;
	left: 370px;
	top: 390px;
	right: 0;
	bottom: 0;
	/* height: auto;
	width: 20px; */
	/* margin-top: -23%;
	padding-left: 68%;
	z-index: 1; */
}

.badge-image {
    height: auto;
	width: 200px;
}

.details {
	width: 75%;
	margin-right: 15%;
	margin-top: 175px;
	align-content: top;
	padding-left: 18%;
}

.fullName {
	font-size: 35px;
	font-weight: 600;
	font-style: normal;
	font-family: poppins;
	color: #0679be;
	line-height: 27px;
	margin-bottom: 15px;
	margin-top: 0px;
}

.interests {
	display: flex;
	flex-direction: column;
	color: black;
	font-family: poppins, sans-serif;
	width: 100%;
}

.lowerInfo {
	display: flexbox;
	flex-direction: column;
	justify-content: center;
	width: 100%;
}

.icons {
	display: flex;
	flex-direction: row;

	height: auto;
	width: 40%;
	padding-left: 30%;
	padding-bottom: 50px;
	justify-content: center;
}

.pronouns {
	font-size: 24px;
	font-family: poppins;
	font-weight: 600;
	line-height: 28px;
	margin-top: 0px;
	margin-bottom: 0px;
}

.title {
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	font-family: poppins;
	margin-bottom: 0px;
	padding-top: 15px;
}

.startYear {
	font-family: open-sans;
	font-weight: 400;
	font-size: 17px;
	line-height: 23px;
	color: #111111;
	margin-top: 25px;
	margin-bottom: 0px;
}

.jobData {
	font-family: open-sans;
	font-weight: 400;
	font-size: 17px;
	line-height: 23px;
	color: #111111;
	margin-top: 25px;
	padding-right: 20%;
}

.hobby {
	padding-left: 40%;
	width: 20%;
	font-family: poppins;
	font-weight: 600;
	font-size: 18px;
	line-height: 27px;
	color: #1b1b1b;
	justify-self: center;
}

.hobbyData {
	padding-left: 15%;
	width: 70%;
	font-family: poppins;
	font-weight: 400;
	font-size: 17px;
	line-height: 26px;
	font-stretch: 15%;
	color: #111111;
}

.sampleIcon {
	height: 10%;
	width: 10%;
	padding-left: 15px;
	padding-right: 15px;
}
</style>
