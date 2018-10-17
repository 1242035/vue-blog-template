import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

import { alert } from './alert.module';
import { account } from './account.module';
import { post } from './post.module';
import { paging } from './paging.module';
import { env } from './env.module';
import { upload } from './upload.module';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		env,
		alert,
		account,
		post,
		paging,
		upload
	}
});