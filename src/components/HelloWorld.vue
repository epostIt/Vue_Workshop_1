<template>
	<v-container>
		<v-row class="text-center">
			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-3" style="color: #fafafa">
					Workshop 1
				</h2>

				<v-row justify="center">
					<a
						v-for="(eco, i) in ecosystem"
						:key="i"
						:href="eco.href"
						class="subheading mx-3"
						target="_blank"
					>
						{{ eco.text }}
					</a>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'HelloWorld',

	data: () => ({
		importantLinks: [
			{
				text: 'Documentation',
				href: 'https://vuetifyjs.com',
			},
			{
				text: 'Chat',
				href: 'https://community.vuetifyjs.com',
			},
			{
				text: 'Made with Vuetify',
				href: 'https://madewithvuejs.com/vuetify',
			},
			{
				text: 'Twitter',
				href: 'https://twitter.com/vuetifyjs',
			},
			{
				text: 'Articles',
				href: 'https://medium.com/vuetify',
			},
		],
		whatsNext: [
			{
				text: 'Explore components',
				href: 'https://vuetifyjs.com/components/api-explorer',
			},
			{
				text: 'Select a layout',
				href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
			},
			{
				text: 'Frequently Asked Questions',
				href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
			},
		],
	}),
});
</script>
