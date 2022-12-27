import { useState } from 'react';
import Wizard from '../wizard/Wizard';
import ShovelShearTestFractureStep from './ShovelShearTestFractureStep';
import WeatherTestStep from '../all-tests/WeatherTestStep';
import SnowConditionTestStep from '../all-tests/SnowConditionTestStep';
import TitleTestStep from '../all-tests/TitleTestStep';
import LocationStep from '../all-tests/LocationStep';
import ImageStep from '../all-tests/ImageStep';

export default function ShovelShearTestWizard(props) {
    const [testData, setTestData] = useState({
        type: '',
        tapResult: '',
        tapNumber: null,
        fractureType: '',
        weather: '',
        snowCondition: '',
        title: '',
        location: null,
        images: '',
    });

    const updateByKey = (key) => (value) => {
        setTestData((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <Wizard {...props} testData={testData}>
            <ShovelShearTestFractureStep
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
            <ImageStep
                images={testData.images}
                setImages={updateByKey('images')}
            />
        </Wizard>
    );
}
