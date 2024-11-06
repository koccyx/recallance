<template>
	<layouts-product-layout>
		<template #card>
			<v-card>
				<v-card-item>
					<v-container>
						<v-row>
							<v-col>
								<typography-text tag="h2">
									Create new product
								</typography-text>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<inputs-text-input>
								</inputs-text-input>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<v-btn variant="flat" :color="colors.primary">
									create product
								</v-btn>
							</v-col>
						</v-row>
					</v-container>
				</v-card-item>
			</v-card>
		</template>
		
		<template #default>
			<v-container class="pa-0">
				<v-row>
					<v-col md="6" sm="12">
						<v-card class="d-flex pa-2" height="100px">
							<v-card-item>
								<v-card-title>
									<typography-text tag="h3">
										NEW PRODUCT!
									</typography-text>
								</v-card-title>
							</v-card-item>
						</v-card>
					</v-col>
					<v-col sm="12" md="6">
						<v-card class="d-flex pa-2" height="100px">
							<v-card-item>
								<v-card-title>
									<typography-text tag="h3">
										NEW PRODUCT!
									</typography-text>
								</v-card-title>
							</v-card-item>
						</v-card>
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