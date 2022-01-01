/*
 * @Author: zhangxm
 * @Date: 2021-12-23 13:41:34
 * @LastEditors: zhangxm
 * @LastEditTime: 2021-12-31 15:56:20
 * @Description: 测试
 * @FilePath: /sgs-wxapp-sgxh/subPackages/summary/index/index.js
 */

let app = getApp();

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		currentId: 1,
		sys: app.globalData.systemInfo,
		leftClass: '',
		rightClass: '',
		contentClass: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {},
	/**
	 * @description 打开
	 * @author YoKa_zhangxm
	 * @date 2021-12-31
	 */
	toggle() {
		let _this = this;
		if (_this.data.leftClass) {
			setTimeout(() => {
				_this.setData({
					leftClass: ''
				});
			}, 250);

			_this.setData({
				rightClass: ''
			});

			setTimeout(() => {
				_this.setData({
					contentClass: ''
				});
			}, 600);
		} else {
			_this.setData({
				leftClass: 'open'
			});

			setTimeout(() => {
				_this.setData({
					rightClass: 'open'
				});
			}, 250);

			setTimeout(() => {
				_this.setData({
					contentClass: 'open'
				});
			}, 350);
		}
	}
});
