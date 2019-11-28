import http from '@/network/req'

// 获取随机图片信息
export function getDetailData(cate){
	return http({
		url:'https://xcxys.17yunyin.com/ebapi/zhihui/saoma',
		data:{
			cate,
		}
	})
}
