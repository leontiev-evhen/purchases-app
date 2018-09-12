<template>
	<div>
		<b-row>
			<b-col cols="12" md="8">
				<b-alert :show="dismissCountDown"
					dismissible
					variant="success"
					@dismissed="dismissCountDown=0"
					@dismiss-count-down="countDownChanged">
					<p>{{alertMessage}}</p>
			</b-alert>
				<div class="list" v-if="purchases">
					<b-list-group>
						<list-item 
							v-for="(item, index) in purchases" :key="index"
							:item="item"
							@deletePurchase="deletePurchase"
							@updatePurchase="updatePurchase"
						/>
					</b-list-group>
				</div>
			</b-col>
			<b-col cols="12" md="4">
				<sidebar
					@user="handleUser"
					@message="handleMessage"
					@onSubmit="createPurchase"
				/>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import ListItem from './Item';
import Sidebar from './Sidebar';
import {
	get,
	post,
	put,
	remove
} from '@/api';
import getIndex from '@/helper';

export default {
	name: 'List',
	data() {
		return {
			purchases: [],
			user: '',
			message: '',
			success: false,
			dismissSecs: 2,
			dismissCountDown: 0,
			error: false,
			loading: false,
			alertMessage: '',
			isConnected: false,
		}
	},
	methods: {
			handleUser(value) {
				this.user = value;
			},
			handleMessage(value) {
				this.message = value;
			},
			async getPurchases() {
				try {
					const data = await get();
					this.purchases = data.data;
				} catch (e) {
					this.error = true;
				}
			},
			async createPurchase() {
				try {
					const data = await post({
						user: this.user.trim(),
						message: this.message.trim()
					});
					if(data.status) {
						this.showAlert(data.message);
					}
				} catch (e) {
					this.error = true;
				}
			},
			async updatePurchase(id, newMessage) {
				try {
					const data = await put(id, {
						message: newMessage
					});
					if(data.status) {
						this.showAlert(data.message);
					}
				} catch (e) {
					this.error = true;
				}
			},
			async deletePurchase(id) {
				try {
					const data = await remove(id);
					if(data.status) {
						this.showAlert(data.message);
					}
				} catch (e) {
					this.error = true;
				}
			},
			countDownChanged (dismissCountDown) {
				this.dismissCountDown = dismissCountDown;
			},
			showAlert (message) {
				this.alertMessage = message;
				this.dismissCountDown = this.dismissSecs;
			}
	},
	mounted() {
		this.getPurchases();
	},
	sockets: {
		connect() {
			this.isConnected = true;
		},
		disconnect() {
			this.isConnected = false;
		},
		CREATE(data) {
			this.purchases.unshift(JSON.parse(data));
		},
		DELETE(id) {
			this.purchases.splice(getIndex(this.purchases, id), 1);
		},
		UPDATE(data) {
			const { message, id } = data;
			this.purchases[getIndex(this.purchases, id)].message = message
		}
	},
	components: {
		ListItem,
		Sidebar
	}
}
</script>

<style scoped>


</style>