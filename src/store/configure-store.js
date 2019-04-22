import devStore from './configure-store.dev';
import prodStore from './configure-store.prod';

const isProd = (process.env.NODE_ENV === 'production');

export default (isProd ? prodStore : devStore);
