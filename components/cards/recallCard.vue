<template>
	<v-card class="d-flex pa-2" min-height="150px">
		<v-container>
			<v-row>
				<v-col md="9" sm="9" class="d-flex flex-column ga-4">
					<typography-text tag="h3" >
						{{ recall.title }}
					</typography-text>
					<typography-text tag="p">
						{{ recall.text }}
					</typography-text>
					<typography-text tag="span">
						By <b>{{ recall.authorName }}</b>
					</typography-text>
				</v-col>
				
				<v-col md="3" sm="3" class="d-flex flex-column ga-4">
					<v-select v-model="status" :disabled="!can" @update:model-value="emit('handleStatus', status)" density="compact" :items="Object.values(RecallStatus)">
					</v-select>
					
					<v-btn @click="emit('handleLike')" :color="recall.isUpvoted ? colors.red : colors.primary ">
						<v-icon icon="mdi-heart-flash"></v-icon>
					</v-btn>
					<typography-text tag="h4">
						Upvotes: {{ recall.upVotes }}
					</typography-text>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>

<script setup lang="ts">
import { type Recall, RecallStatus } from "@/api/types/recall";

const { colors } = useColors();

const props = defineProps<{
	recall: Recall;
	can: boolean;
}>();

const status = ref<RecallStatus>(props.recall.status);

const emit = defineEmits(["handleLike", "handleStatus"]);
</script>
