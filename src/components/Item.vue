<template>
	<b-list-group-item  href="#" class="flex-column align-items-start">			
		<div class="d-flex w-100 justify-content-between">
			<h5 class="mb-1">{{ item.message }}</h5>
			<small>{{ item.user }}</small>
		</div>
		<div class="list-buttons">
			<b-button 
				@onClick="showCollapse = !showCollapse"
				variant="warning"
				size="sm"
				class="mr5">
					Update
			</b-button>
			<b-button 
				variant="danger"
				size="sm"
				@onClick="$emit('deletePurchase', item._id)">
					Delete
				</b-button>
		</div>
		<collapse
			:id="item._id"
			:message=item.message
			:showCollapse="showCollapse"
			@onClick="update"
			@toggle="showCollapse = !showCollapse"
		/>
	</b-list-group-item>
</template>

<script>
import BButton from './Button';
import Collapse from './Collapse';

export default {
	name: 'Item',
	props: {
		item: {
			type: Object
		}, 
		deletePurchase: {
			type: Function
		}, 
		updatePurchase: {
			type: Function
		}
	},
  data() {
    return {
			showCollapse: false
    }
	},
	methods: {
		update(id, message) {
			this.$emit('updatePurchase', id, message);
		}
	},
	components: {
		BButton,
		Collapse
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.list-buttons {
		float: right;
	}
	.mr5 {
		margin-right: 5px;
	}
</style>
