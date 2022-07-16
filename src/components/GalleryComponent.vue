<template>
	<div class="page-box">
		<span class="gallery-intro">
			Morbi faucibus dolor nec efficitur consectetur. In hac habitasse platea
			dictumst. Pellentesque feugiat risus non ipsum facilisis, ut bibendum enim
			vulputate. Proin nec rhoncus eros, vitae vehicula elit. Vestibulum at
			ipsum ac justo feugiat pharetra sed id quam. Nulla eu tellus sollicitudin,
			tincidunt ex et, egestas lectus. Pellentesque bibendum erat ac dapibus
			venenatis. Aenean vel est id tortor posuere congue. Aliquam convallis et
			metus quis pharetra. Sed tortor nisi, laoreet vitae dolor quis, ultricies
			vehicula massa.
		</span>
		<div class="card" v-for="user of users" :key="user.id">
			<router-link :to="'/details/' + user.id"
				><img
					class="shane"
					src="@/assets/sudheer.webp"
					alt="Avatar"
					style="width: 100%"
			/></router-link>
			<div class="container">
				<h4 class="name">
					<b>{{ user.name }}</b>
				</h4>
				<p class="title">{{ user.address.city }}</p>
			</div>
		</div>
	</div>

</template>

<script>
import { UserService } from "@/services/UserServices";

export default {
	name: "GalleryComponent",
	data() {
		return {
			loading: false,
			users: [],
			errorMessage: null,
		};
	},

	created: async function () {
		try {
			this.loading = true;
			let response = await UserService.getAllUsers();
			this.loading = false;
			this.users = response.data;
		} catch (error) {
			this.loading = false;
			this.errorMessage = error;
		}
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.page-box {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 20px;
	padding-left: 10%;
	padding-right: 10%;
	font-family: "Poppins", sans-serif;
}

.gallery-intro {
	width: 100%;
	text-align: center;
	padding-top: 10vh;
	padding-bottom: 12vh;
	font-size: 20px;
}

.card {
	transition: 0.3s;
	width: 300px;
	text-align: center;
}

.container {
	/* padding: 2px 16px; */
}

.shane {
	border-radius: 10px;
}
.shane:hover {
	background-color: aqua;
	opacity: 80%;
}

.name {
	font-size: 18px;
	margin-top: 0;
	margin-bottom: 0;
}

.title {
	font-size: 16px;
	color: gray;
	margin-top: -20px;
}
</style>
