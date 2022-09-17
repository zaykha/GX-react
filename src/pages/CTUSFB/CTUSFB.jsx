import React from 'react';
import { DarkBg, NotiModal } from './CTUSFBelements';
import { HeaderUniversal } from '../../Components/Herocomponents/herocomponents';

const CTUSFB = () => {
  return (
    <DarkBg>
    <NotiModal>
        <HeaderUniversal>
            Thank You!
        </HeaderUniversal>
        <p>
            We highly appreciate your input and will get back to you within 5 business days.
        </p>
    </NotiModal>
</DarkBg>
  )
}

export default CTUSFB