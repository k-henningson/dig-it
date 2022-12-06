import CompressionTestWizard from '../compression-test/CompressionTestWizard';

export default function WizardRouter({ testId, ...props }) {
    const testToRender = () => {
        switch (testId) {
            case 'COMPRESSION':
                return <CompressionTestWizard {...props} />;
            default:
                break;
        }
    };
    return testToRender();
}
