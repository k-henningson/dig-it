import { TEST_NAMES } from '../../../../commons/constants/tests';
import CompressionTestWizard from '../compression-test/CompressionTestWizard';
import DeepTapTestWizard from '../deep-tap-test/DeepTapTestWizard';
import ExtendedColumnTestWizard from '../extended-column-test/ExtendedColumnTestWizard';
import HandShearTestWizard from '../hand-shear-test/HandShearTestWizard';
import ShovelShearTestWizard from '../shovel-shear-test/ShovelShearTestWizard';
import RutschblockTestWizard from '../rutschblock-test/RutschblockTestWizard';

export default function WizardRouter(props) {
    const testToRender = () => {
        switch (props.test.id) {
            case TEST_NAMES.COMPRESSION:
                return <CompressionTestWizard {...props} />;
            case TEST_NAMES.DEEP_TAP:
                return <DeepTapTestWizard {...props} />;
            case TEST_NAMES.EXTENDED_COLUMN:
                return <ExtendedColumnTestWizard {...props} />;
            case TEST_NAMES.SHOVEL_SHEAR:
                return <ShovelShearTestWizard {...props} />;
            case TEST_NAMES.HAND_SHEAR:
                return <HandShearTestWizard {...props} />;
            case TEST_NAMES.RUTSCHBLOCK:
                return <RutschblockTestWizard {...props} />;
            default:
                break;
        }
    };
    return testToRender();
}
