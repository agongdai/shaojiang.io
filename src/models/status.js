const set = (field = '') => ({
  loading: false,
  progressing: false,
  success: false,
  failed: false,
  [field]: true,
});

export const loading = () => set('loading');

export const progressing = () => set('progressing');

export const success = () => set('success');

export const failed = () => set('failed');

export const init = () => set();
