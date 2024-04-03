/* eslint-disable no-unused-vars */
import CompareIcon from '@mui/icons-material/Compare';
import HomeIcon from '@mui/icons-material/Home';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import HandshakeIcon from '@mui/icons-material/Handshake';
import * as React from 'react';
import LinkItem from './LinkItem';
import { useState, useEffect } from 'react';

const MenuItem = ({ open }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <LinkItem
        itemPath={'/'}
        itemName={'Home'}
        itemIcon={<HomeIcon />}
        // isActive={location.pathname === '/'}
        open={open}
      />
      <LinkItem
        itemPath={'/blood-centers'}
        itemName={'Blood Centers'}
        itemIcon={<ThumbsUpDownIcon />}
        // isActive={location.pathname === '/send-tokens'}
        open={open}
      />
      <LinkItem
        itemPath={'/donate'}
        itemName={'Donate'}
        itemIcon={<CompareIcon />}
        // isActive={location.pathname === '/my-transfers'}
        open={open}
      />
      <LinkItem
        itemPath={'/find-donor'}
        itemName={'Find Donor'}
        itemIcon={<AccountBalanceWalletRoundedIcon />}
        // isActive={location.pathname === '/list-wallets'}
        open={open}
      />
       <LinkItem
        itemPath={'/history'}
        itemName={'History'}
        itemIcon={<AccountBalanceWalletRoundedIcon />}
        // isActive={location.pathname === '/list-wallets'}
        open={open}
      />
     
   
    </>
  );
};

export default MenuItem;
