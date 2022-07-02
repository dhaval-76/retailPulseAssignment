const byteConversion = (bytes, decimals = 2) => {
  // eslint-disable-next-line curly
  if (bytes === 0) return '0 B';

  const kiloByte = 1000;
  const decimal = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(kiloByte));

  return `${parseFloat((bytes / kiloByte ** i).toFixed(decimal))} ${sizes[i]}`;
};

export default byteConversion;
