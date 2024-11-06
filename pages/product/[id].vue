<template>
	<layouts-product-layout>
		<template #card>
			<v-container>
				<v-row>
					<v-col>
						<typography-text tag="h2">
							New product
						</typography-text>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-btn variant="flat" :color="colors.primary">
							Delete product
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</layouts-product-layout>
</template>

<script setup lang="ts">

const { colors } = useColors();

definePageMeta({
	layout: "app-layout"
});
</script>

<style lang="scss" scoped>

</style>