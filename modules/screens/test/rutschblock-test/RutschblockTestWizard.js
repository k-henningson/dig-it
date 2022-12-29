import { useState } from 'react';
import Wizard from '../wizard/Wizard';
import RutschblockTestFractureStep from './RutschblockTestFractureStep';
import RutschblockTestTapsStep from './RutschblockTestTapsStep';
import WeatherTestStep from '../all-tests/WeatherTestStep';
import SnowConditionTestStep from '../all-tests/SnowConditionTestStep';
import TitleTestStep from '../all-tests/TitleTestStep';
import LocationStep from '../all-tests/LocationStep';
import ImageStep from '../all-tests/ImageStep';
import NotesStep from '../all-tests/NotesStep';

export default function RutschblockTestWizard(props) {
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
        notes: '',
    });

    const updateByKey = (key) => (value) => {
        setTestData((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <Wizard {...props} testData={testData}>
            <RutschblockTestTapsStep
                canNext={testData.tapResult !== ''}
                tapResult={testData.tapResult}
                setTapResult={updateByKey('tapResult')}
            />
            <RutschblockTestFractureStep
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
            <NotesStep notes={testData.notes} setNotes={updateByKey('notes')} />
        </Wizard>
    );
}
