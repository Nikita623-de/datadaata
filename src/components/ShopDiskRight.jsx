import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import DiskItem from './DiskItem';

const ShopDiskRight = observer(() => {
  const { disk } = useContext(Context);
  return (
    <>
      <div className="auto-shop__catalog">
        {disk.disks.map((dis) => (
          <DiskItem key={dis.id} disk={dis} />
        ))}
      </div>
    </>
  );
});

export default ShopDiskRight;
