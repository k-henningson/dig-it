import CompressionTestWizard from '../compression-test/CompressionTestWizard';
import { TEST_NAMES } from '../../../../commons/constants/test-constants';

export default function WizardRouter({ testId, ...props }) {
    const testToRender = () => {
        switch (testId) {
            case TEST_NAMES.COMPRESSION:
                return <CompressionTestWizard {...props} />;
            default:
                break;
        }
    };
    return testToRender();
}
