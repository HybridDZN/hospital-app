import { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, CLOUDFLARE_ACCOUNT_ID } from '$env/static/private';
import { S3 } from '@aws-sdk/client-s3';
export default new S3({
	region: 'auto',
	endpoint: `https://${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
	credentials: {
		accessKeyId: `${S3_ACCESS_KEY_ID}`,
		secretAccessKey: `${S3_SECRET_ACCESS_KEY}`
	}
});
