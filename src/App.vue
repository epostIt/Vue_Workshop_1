<template>
	<v-app style="background: black">
		<v-app-bar app color="teal_accent_3" dark>
			<div class="d-flex align-center">
				<v-img alt="D2 Logo" src="./assets/d2_logo.png" width="60" />
			</div>

			<v-spacer></v-spacer>

			<v-btn href="https://github.com/epostIt/CodingKatas" text>
				<span class="mr-2">Github</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'App',

	data: () => ({
		//
	}),
});
</script>
<style>
.background {
	color: black;
}
</style>
