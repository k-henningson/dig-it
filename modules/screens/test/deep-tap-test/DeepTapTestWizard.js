import { useState } from 'react';
import Wizard from '../wizard/Wizard';
import DeepTapTestTapsStep from './DeepTapTestTapsStep';
import DeepTapTestTapNumberStep from './DeepTapTestTapNumberStep';
import DeepTapTestFractureStep from './DeepTapTestFractureStep';
import WeatherTestStep from '../all-tests/WeatherTestStep';
import SnowConditionTestStep from '../all-tests/SnowConditionTestStep';

export default function DeepTapTestWizard(props) {
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
        testData.tapResult === 'DTN' || testData.tapResult === 'DTV';

    return (
        <Wizard {...props}>
            <DeepTapTestTapsStep
                canNext={testData.tapResult !== ''}
                tapResult={testData.tapResult}
                setTapResult={updateByKey('tapResult')}
            />
            {shouldSkipTapNumberStep ? null : (
                <DeepTapTestTapNumberStep
                    tapResult={testData.tapResult}
                    canNext={testData.tapNumber !== null}
                    tapNumber={testData.tapNumber}
                    setTapNumber={updateByKey('tapNumber')}
                />
            )}
            <DeepTapTestFractureStep
                canNext={testData.fractureType !== ''}
                fracture={testData.fractureType}
                setFracture={updateByKey('fractureType')}
            />
            <WeatherTestStep
                canNext={testData.weather !== ''}
                weather={testData.weather}
                setWeather={updateByKey('weather')}
            />
            <SnowConditionTestStep
                canNext={testData.snowCondition !== ''}
                snowCondition={testData.snowCondition}
                setSnowCondition={updateByKey('snowCondition')}
            />
        </Wizard>
    );
}
