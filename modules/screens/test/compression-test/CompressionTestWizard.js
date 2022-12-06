import { useState } from 'react';
import Wizard from '../wizard/Wizard';
import CompressionTestFracture from './CompressionTestFracture';
import CompressionTestTapNumber from './CompressionTestTapNumber';
import CompressionTestTaps from './CompressionTestTaps';
import WeatherTestStep from '../all-tests/WeatherTestStep';

export default function CompressionTestWizard(props) {
    const [testData, setTestData] = useState({
        tapResult: '',
        tapNumber: null,
        fractureType: '',
        weather: '',
        snowCondition: '',
    });

    const updateByKey = (key) => (value) => {
        setTestData((prev) => ({ ...prev, [key]: value }));
    };

    const shouldSkipTapNumberStep =
        testData.tapResult === 'CTN' || testData.tapResult === 'CTV';

    return (
        <Wizard {...props}>
            <CompressionTestTaps
                canNext={testData.tapResult !== ''}
                tapResult={testData.tapResult}
                setTapResult={updateByKey('tapResult')}
            />
            {shouldSkipTapNumberStep ? null : (
                <CompressionTestTapNumber
                    tapResult={testData.tapResult}
                    canNext={testData.tapNumber !== null}
                    tapNumber={testData.tapNumber}
                    setTapNumber={updateByKey('tapNumber')}
                />
            )}
            <CompressionTestFracture />
            <WeatherTestStep
                canNext={testData.weather !== ''}
                weather={testData.weather}
                setWeather={updateByKey('weather')}
            />
        </Wizard>
    );
}
