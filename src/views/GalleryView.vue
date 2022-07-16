<template>
	<GalleryBanner />
	<GalleryComponent />
	<FooterComponent />
</template>

<script>
import GalleryBanner from "@/components/GalleryBanner";
import FooterComponent from "@/components/FooterComponent";
import GalleryComponent from "@/components/GalleryComponent";

export default {
	name: 'GalleryView',
	components: {
		GalleryBanner,
		FooterComponent,
		GalleryComponent
}
}
</script>

<style></style>
