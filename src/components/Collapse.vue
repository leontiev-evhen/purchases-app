<template>
		<div class="collapse-block">
			<b-collapse id="collapse" class="mt-2" v-model="showCollapse">
				<b-card>
					<p class="card-text">Update purchse</p>
					<b-form>
						<b-form-group
							description="Enter text to update a purchase">
							<b-form-input
								type="text"
								:value="message"
								@change="handlerUpdate"
								required
								placeholder="Enter text">
							</b-form-input>
						</b-form-group>
						<b-button
							@onClick="update(id, message)"
							type="submit"
							variant="warning" 
							size="sm"
							class="mr5">
								Update
						</b-button>
						<b-button
							@onClick="toggle"
							variant="primary" 
							size="sm">
								Close
						</b-button>
					</b-form>
				</b-card>
			</b-collapse>
		</div>
</template>

<script>
import BButton from './Button';

export default {
	name: 'Item',
	props: {
		id: {
			type: String
    }, 
    message: {
			type: String
    },
    showCollapse: {
			type: Boolean
		},
		updatePurchase: {
			type: Function
		}
	},
  data() {
    return {
			newMessage: '',
    }
	},
	methods: {
		handlerUpdate(message) {
			this.newMessage = message;
		},
		update(id, message) {
			this.$emit('onClick', id, this.newMessage || message);
      this.toggle();
    },
    toggle() {
      this.$emit('toggle');
    }
	},
	components: {
    BButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.collapse-block {
		margin-top: 60px;
	}
	.mr5 {
		margin-right: 5px;
	}
</style>
