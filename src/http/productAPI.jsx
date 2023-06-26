import { $host } from './index';

export const createWidth = async (width) => {
  const { data } = await $host.post('api/width', width);
  return data;
};

export const createThorn = async (thorn) => {
  const { data } = await $host.post('api/thorn', thorn);
  return data;
};

export const createSeasonality = async (seasonality) => {
  const { data } = await $host.post('api/seasonality', seasonality);
  return data;
};

export const fetchWidths = async () => {
  const { data } = await $host.get('api/width');
  return data;
};

export const fetchThorns = async () => {
  const { data } = await $host.get('api/thorn');
  return data;
};

export const fetchSeasonalitys = async () => {
  const { data } = await $host.get('api/seasonality');
  return data;
};

export const fetchVilets = async () => {
  const { data } = await $host.get('api/vilet');
  return data;
};

export const createVilet = async (vilet) => {
  const { data } = await $host.post('api/vilet', vilet);
  return data;
};

export const fetchDiums = async () => {
  const { data } = await $host.get('api/dium');
  return data;
};

export const createDium = async (dium) => {
  const { data } = await $host.post('api/dium', dium);
  return data;
};

export const createKrepQuan = async (krepQuan) => {
  const { data } = await $host.post('api/krep_quan', krepQuan);
  return data;
};

export const fetchKrepQuans = async () => {
  const { data } = await $host.get('api/krep_quan');
  return data;
};

export const createType = async (type) => {
  const { data } = await $host.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createWidthDisk = async (widthDisk) => {
  const { data } = await $host.post('api/width_disk', widthDisk);
  return data;
};

export const fetchWidthDisks = async () => {
  const { data } = await $host.get('api/width_disk');
  return data;
};

export const createBrandDisk = async (brandDisk) => {
  const { data } = await $host.post('api/brand_disk', brandDisk);
  return data;
};

export const fetchBrandDisks = async () => {
  const { data } = await $host.get('api/brand_disk');
  return data;
};

export const createDiametrDisk = async (diametrDisk) => {
  const { data } = await $host.post('api/diametr_disk', diametrDisk);
  return data;
};

export const fetchDiametrDisks = async () => {
  const { data } = await $host.get('api/diametr_disk');
  return data;
};

export const createDiametrDiskKrep = async (diametrDiskKrep) => {
  const { data } = await $host.post('api/diametr_disk_krep', diametrDiskKrep);
  return data;
};

export const fetchDiametrDiskKreps = async () => {
  const { data } = await $host.get('api/diametr_disk_krep');
  return data;
};

export const createHeight = async (height) => {
  const { data } = await $host.post('api/height', height);
  return data;
};

export const fetchHeights = async () => {
  const { data } = await $host.get('api/height');
  return data;
};

export const createIndex = async (index) => {
  const { data } = await $host.post('api/index', index);
  return data;
};

export const fetchIndexs = async () => {
  const { data } = await $host.get('api/index');
  return data;
};

export const createDiametr = async (diametr) => {
  const { data } = await $host.post('api/diametr', diametr);
  return data;
};

export const fetchDiametrs = async () => {
  const { data } = await $host.get('api/diametr');
  return data;
};

export const createSpeed = async (speed) => {
  const { data } = await $host.post('api/speed', speed);
  return data;
};

export const fetchSpeeds = async () => {
  const { data } = await $host.get('api/speed');
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $host.post('api/brand', brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const createProduct = async (product) => {
  const { data } = await $host.post('api/product', product);
  return data;
};

export const createDisk = async (disk) => {
  const { data } = await $host.post('api/disk', disk);
  return data;
};

export const productsDelete = async (
  widthId,
  brandId,
  heightId,
  diametrId,
  speedId,
  indexId,
  thornId,
  seasonalityId,
  page,
  limit = 5000,
) => {
  const { data } = await $host.get('api/product', {
    params: {
      widthId,
      brandId,
      heightId,
      diametrId,
      speedId,
      indexId,
      thornId,
      seasonalityId,
      page,
      limit,
    },
  });
  return data;
};
export const disksDelete = async (
  viletId,
  diumId,
  krepQuanId,
  typeId,
  widthDiskId,
  brandDiskId,
  diametrDiskId,
  diametrDiskKrepId,
  page,
  limit = 5000,
) => {
  const { data } = await $host.get('api/disk', {
    params: {
      viletId,
      diumId,
      krepQuanId,
      typeId,
      widthDiskId,
      brandDiskId,
      diametrDiskId,
      diametrDiskKrepId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchProducts = async (
  widthId,
  brandId,
  heightId,
  diametrId,
  speedId,
  indexId,
  thornId,
  seasonalityId,
  page,
  limit = 6,
) => {
  const { data } = await $host.get('api/product', {
    params: {
      widthId,
      brandId,
      heightId,
      diametrId,
      speedId,
      indexId,
      thornId,
      seasonalityId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchDisks = async (
  viletId,
  diumId,
  krepQuanId,
  typeId,
  widthDiskId,
  brandDiskId,
  diametrDiskId,
  diametrDiskKrepId,
  page,
  limit = 6,
) => {
  const { data } = await $host.get('api/disk', {
    params: {
      viletId,
      diumId,
      krepQuanId,
      typeId,
      widthDiskId,
      brandDiskId,
      diametrDiskId,
      diametrDiskKrepId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneProduct = async (id) => {
  const { data } = await $host.get('api/product/' + id);
  return data;
};

export const fetchOneDisk = async (id) => {
  const { data } = await $host.get('api/disk/' + id);
  return data;
};

export const deleteWidth = async (id) => {
  const { data } = await $host.delete('api/width/' + id);
  return data;
};

export const deleteThorn = async (id) => {
  const { data } = await $host.delete('api/thorn/' + id);
  return data;
};

export const deleteSeasonality = async (id) => {
  const { data } = await $host.delete('api/seasonality/' + id);
  return data;
};

export const deleteVilet = async (id) => {
  const { data } = await $host.delete('api/vilet/' + id);
  return data;
};

export const deleteDium = async (id) => {
  const { data } = await $host.delete('api/dium/' + id);
  return data;
};

export const deleteKrepQuan = async (id) => {
  const { data } = await $host.delete('api/krep_quan/' + id);
  return data;
};

export const deleteType = async (id) => {
  const { data } = await $host.delete('api/type/' + id);
  return data;
};

export const deleteWidthDisk = async (id) => {
  const { data } = await $host.delete('api/width_disk/' + id);
  return data;
};

export const deleteBrandDisk = async (id) => {
  const { data } = await $host.delete('api/brand_disk/' + id);
  return data;
};

export const deleteDiametrDisk = async (id) => {
  const { data } = await $host.delete('api/diametr_disk/' + id);
  return data;
};

export const deleteDiametrDiskKrep = async (id) => {
  const { data } = await $host.delete('api/diametr_disk_krep/' + id);
  return data;
};

export const deleteHeight = async (id) => {
  const { data } = await $host.delete('api/height/' + id);
  return data;
};

export const deleteDiametr = async (id) => {
  const { data } = await $host.delete('api/diametr/' + id);
  return data;
};

export const deleteSpeed = async (id) => {
  const { data } = await $host.delete('api/speed/' + id);
  return data;
};

export const deleteIndex = async (id) => {
  const { data } = await $host.delete('api/index/' + id);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await $host.delete('api/product/' + id);
  return data.rows;
};

export const deleteDisk = async (id) => {
  const { data } = await $host.delete('api/disk/' + id);
  return data.rows;
};

export const deleteBrand = async (id) => {
  const { data } = await $host.delete('api/brand/' + id);
  return data;
};
