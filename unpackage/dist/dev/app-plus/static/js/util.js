export default {
	checkMobile(phones){
	    let phone = /^[1][3,4,5,7,8,9][0-9]{9}$/;
	    if (!phone.test(phones)) {
			return false;
	    } else {
			return true;
	    }
	}
} 