import { useState } from 'react';
import Wizard from '../wizard/Wizard';
import CompressionTestFractureStep from './CompressionTestFractureStep';
import CompressionTestTapNumberStep from './CompressionTestTapNumberStep';
import CompressionTestTapsStep from './CompressionTestTapsStep';
import WeatherTestStep from '../all-tests/WeatherTestStep';
import SnowConditionTestStep from '../all-tests/SnowConditionTestStep';
import TitleTestStep from '../all-tests/TitleTestStep';
import LocationStep from '../all-tests/LocationStep';

export default function CompressionTestWizard(props) {
    const [testData, setTestData] = useState({
        tapResult: '',
        tapNumber: null,
        fractureType: '',
        weather: '',
        snowCondition: '',
        title: '',
        location: null,
    });

    const updateByKey = (key) => (value) => {
        setTestData((prev) => ({ ...prev, [key]: value }));
    };

    const shouldSkipTapNumberStep =
        testData.tapResult === 'CTN' || testData.tapResult === 'CTV';

    return (
        <Wizard {...props} testData={testData}>
            <CompressionTestTapsStep
                canNext={testData.tapResult !== ''}
                tapResult={testData.tapResult}
                setTapResult={updateByKey('tapResult')}
            />
            {shouldSkipTapNumberStep ? null : (
                <CompressionTestTapNumberStep
                    tapResult={testData.tapResult}
                    canNext={testData.tapNumber !== null}
                    tapNumber={testData.tapNumber}
                    setTapNumber={updateByKey('tapNumber')}
                />
            )}
            <CompressionTestFractureStep
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
            <TitleTestStep
                title={testData.title}
                setTitle={updateByKey('title')}
            />
            <LocationStep
                location={testData.location}
                setLocation={updateByKey('location')}
            />
        </Wizard>
    );
}
