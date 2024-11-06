<template>
	<v-container max-width="1440px" class="pa-10">
		<v-row>
			<v-col sm="12" md="4">
				<slot name="card"></slot>
			</v-col>
			<v-col sm="12" md="8">
				<slot name="default"></slot>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
</script>

<style lang="scss" scoped>

</style>