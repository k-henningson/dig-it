import { TEST_NAMES } from '../../../../commons/constants/test-constants';
import CompressionTestWizard from '../compression-test/CompressionTestWizard';
import DeepTapTestWizard from '../deep-tap-test/DeepTapTestWizard';
import ExtendedColumnTestWizard from '../extended-column-test/ExtendedColumnTestWizard';
import ShovelShearTestWizard from '../shovel-shear-test/ShovelShearTestWizard';

export default function WizardRouter({ testId, ...props }) {
    const testToRender = () => {
        switch (testId) {
            case TEST_NAMES.COMPRESSION:
                return <CompressionTestWizard {...props} />;
            case TEST_NAMES.DEEP_TAP:
                return <DeepTapTestWizard {...props} />;
            case TEST_NAMES.EXTENDED_COLUMN:
                return <ExtendedColumnTestWizard {...props} />;
            case TEST_NAMES.SHOVEL_SHEAR:
                return <ShovelShearTestWizard {...props} />;
            default:
                break;
        }
    };
    return testToRender();
}
