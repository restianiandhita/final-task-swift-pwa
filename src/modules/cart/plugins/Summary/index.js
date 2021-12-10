import Core from '@plugin_summary/core';
import DesktopView from '@plugin_summary/components/DesktopSummary';
import MobileView from '@plugin_summary/components/BottomSummary';

const DefaultSummary = (props) => {
    console.log('jalan ga?')
    return <Core
        DesktopView={DesktopView}
        MobileView={MobileView}
        {...props}
    />
};

export default DefaultSummary;
