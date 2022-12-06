import CompressionTestWizard from '../compression-test/CompressionTestWizard';
import DeepTapTestWizard from '../deep-tap-test/DeepTapTestWizard';
import { TEST_NAMES } from '../../../../commons/constants/test-constants';

export default function WizardRouter({ testId, ...props }) {
    const testToRender = () => {
        switch (testId) {
            case TEST_NAMES.COMPRESSION:
                return <CompressionTestWizard {...props} />;
            case TEST_NAMES.DEEP_TAP:
                return <DeepTapTestWizard {...props} />;
            default:
                break;
        }
    };
    return testToRender();
}
